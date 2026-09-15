import { menuItems as defaultMenuItems, reviewsData as defaultReviews } from '../data/menuData';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

/**
 * Fetch menu items from Django backend, with fallback to local static data
 */
export async function fetchMenu() {
  try {
    const response = await fetch(`${API_BASE_URL}/menu/`);
    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }
    const data = await response.json();
    return { data, isLive: true };
  } catch (error) {
    console.warn('Django API not reachable, falling back to local menu items:', error.message);
    return { data: defaultMenuItems, isLive: false };
  }
}

/**
 * Fetch customer reviews from Django backend
 */
export async function fetchReviews() {
  try {
    const response = await fetch(`${API_BASE_URL}/reviews/`);
    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }
    const data = await response.json();
    return { data, isLive: true };
  } catch (error) {
    console.warn('Django API not reachable, falling back to local reviews:', error.message);
    return { data: defaultReviews, isLive: false };
  }
}
