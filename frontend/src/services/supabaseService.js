import { supabase, isSupabaseConfigured } from '../lib/supabase';

export { isSupabaseConfigured };

/**
 * Fetch all menu items from Supabase cloud database
 */
export async function fetchSupabaseMenuItems() {
  if (!isSupabaseConfigured || !supabase) {
    return { data: null, error: 'Supabase not configured' };
  }

  try {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      return { data: null, error: error.message };
    }

    if (Array.isArray(data) && data.length > 0) {
      // Normalize column names (sub_category -> subCategory)
      const normalized = data.map((item) => ({
        ...item,
        subCategory: item.sub_category || item.subCategory || '',
        details: Array.isArray(item.details)
          ? item.details
          : typeof item.details === 'string'
          ? item.details.split(',').map((s) => s.trim())
          : [],
      }));
      return { data: normalized, error: null };
    }

    return { data: [], error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
}

/**
 * Upsert (create or update) a menu item in Supabase cloud database
 */
export async function upsertSupabaseMenuItem(item) {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Supabase not configured' };
  }

  try {
    const payload = {
      id: String(item.id),
      name: item.name || '',
      category: item.category || 'hot-beverages',
      sub_category: item.subCategory || item.sub_category || '',
      price: Number(item.price) || 0,
      tag: item.tag || '',
      dietary: item.dietary || 'veg',
      description: item.description || '',
      details: Array.isArray(item.details) ? item.details : [],
      image: item.image || '',
      alt: item.alt || item.name || '',
    };

    const { data, error } = await supabase
      .from('menu_items')
      .upsert(payload, { onConflict: 'id' })
      .select();

    if (error) {
      console.warn('Supabase upsert warning:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.warn('Supabase upsert error:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Delete a menu item from Supabase cloud database
 */
export async function deleteSupabaseMenuItem(id) {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, error: 'Supabase not configured' };
  }

  try {
    const { error } = await supabase
      .from('menu_items')
      .delete()
      .eq('id', String(id));

    if (error) {
      console.warn('Supabase delete warning:', error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.warn('Supabase delete error:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Listen for real-time changes to menu_items table in Supabase
 */
export function subscribeToSupabaseMenuChanges(callback) {
  if (!isSupabaseConfigured || !supabase || typeof callback !== 'function') {
    return () => {};
  }

  try {
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'menu_items',
        },
        async () => {
          const { data } = await fetchSupabaseMenuItems();
          if (Array.isArray(data) && data.length > 0) {
            callback(data);
          }
        }
      )
      .subscribe();

    return () => {
      try {
        supabase.removeChannel(channel);
      } catch (_) {}
    };
  } catch (err) {
    console.warn('Supabase realtime subscription notice:', err);
    return () => {};
  }
}

/**
 * Fetch approved customer reviews from Supabase
 */
export async function fetchSupabaseReviews() {
  if (!isSupabaseConfigured || !supabase) {
    return { data: null, error: 'Supabase not configured' };
  }

  try {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('is_approved', true)
      .order('created_at', { ascending: false });

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: data || [], error: null };
  } catch (err) {
    return { data: null, error: err.message };
  }
}
