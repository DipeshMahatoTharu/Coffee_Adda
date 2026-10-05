import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read environment variables from .env or frontend/.env
function loadEnv() {
  const envPaths = [
    path.resolve(__dirname, '../.env'),
    path.resolve(__dirname, '../../.env'),
  ];

  for (const envPath of envPaths) {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      content.split('\n').forEach((line) => {
        const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
        if (match) {
          const key = match[1];
          let value = match[2] || '';
          if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
          if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
          process.env[key] = value.trim();
        }
      });
    }
  }
}

loadEnv();

const SUPABASE_URL =
  process.env.VITE_SUPABASE_URL || 'https://ovuidldhzajdtfrcveng.supabase.co';
const SUPABASE_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  process.env.VITE_SUPABASE_ANON_KEY ||
  'sb_publishable_6efGinpGFxtYY7SE2OgeZw_dg0_jxgo';

async function syncMenu() {
  console.log('Connecting to Supabase Cloud Database at:', SUPABASE_URL);

  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  const { data, error } = await supabase
    .from('menu_items')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error('Failed to fetch menu items from Supabase:', error.message);
    process.exit(1);
  }

  if (!Array.isArray(data) || data.length === 0) {
    console.error('No items returned from Supabase table menu_items.');
    process.exit(1);
  }

  console.log(`Fetched ${data.length} live items from Supabase.`);

  const menuDataPath = path.resolve(__dirname, '../src/data/menuData.js');
  if (!fs.existsSync(menuDataPath)) {
    console.error('Could not find menuData.js at:', menuDataPath);
    process.exit(1);
  }

  const fileContent = fs.readFileSync(menuDataPath, 'utf8');

  // Format each item cleanly as JavaScript object
  const formattedItems = data.map((item) => {
    const detailsArr = Array.isArray(item.details)
      ? item.details
      : typeof item.details === 'string'
      ? item.details.split(',').map((s) => s.trim())
      : [];

    return {
      id: item.id,
      name: item.name || '',
      category: item.category || 'hot-beverages',
      subCategory: item.sub_category || item.subCategory || '',
      price: Number(item.price) || 0,
      tag: item.tag || '',
      dietary: item.dietary || 'veg',
      description: item.description || '',
      details: detailsArr,
      image: item.image || '',
      alt: item.alt || item.name || '',
    };
  });

  const formattedItemsCode = `export const menuItems = ${JSON.stringify(formattedItems, null, 2)};\n`;

  // Replace existing export const menuItems = [ ... ];
  const startMarker = 'export const menuItems = [';
  const endMarker = 'export const reviewsData = [';

  const startIndex = fileContent.indexOf(startMarker);
  const endIndex = fileContent.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    console.error('Could not locate menuItems array boundaries in menuData.js');
    process.exit(1);
  }

  const updatedFileContent =
    fileContent.slice(0, startIndex) +
    formattedItemsCode +
    '\n' +
    fileContent.slice(endIndex);

  fs.writeFileSync(menuDataPath, updatedFileContent, 'utf8');
  console.log(`Successfully synced ${data.length} items into ${menuDataPath}!`);
}

syncMenu().catch((err) => {
  console.error('Sync failed:', err);
  process.exit(1);
});
