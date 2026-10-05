/**
 * Authentic Coffee Adda Menu Dataset
 * Slogan: "The Spot where great mind gathers" • Budhanilkantha
 * Transcribed with 100% accuracy from all official physical menu sheets.
 */

import { fetchSupabaseMenuItems, subscribeToSupabaseMenuChanges } from '../services/supabaseService';

export const menuCategories = [
  { id: 'all', label: 'All Items' },
  { id: 'hot-beverages', label: 'Coffee Bar' },
  { id: 'tea-special', label: 'Tea Special' },
  { id: 'cold-beverages', label: 'Cold Coffee' },
  { id: 'shakes-lassi', label: 'Shakes, Frappes & Lassi' },
  { id: 'breakfast', label: 'Breakfast & Eggs' },
  { id: 'burgers-sandwiches', label: 'Burgers & Sandwiches' },
  { id: 'momo-platters', label: 'Mo:Mo & Platters' },
  { id: 'pasta-corndogs', label: 'Pasta & Corn Dogs' },
  { id: 'laphing', label: 'Laphing Special' },
  { id: 'khaja-mains', label: 'Khaja Set & Mains' },
  { id: 'snacks-sides', label: 'Snacks, Chillies & Nan' },
  { id: 'bar-lounge', label: 'Bar, Spirits & Hukka' },
];

export const menuItems = [
  {
    "id": "item-1",
    "name": "Cappuccino",
    "category": "hot",
    "subCategory": "Espresso Bar",
    "price": 280,
    "tag": "Popular",
    "dietary": "non-veg",
    "description": "Rich, balanced double espresso topped with equal parts velvety steamed milk and airy foam with signature free-pour latte art.",
    "details": [
      "🥛 Whole / Oat Milk",
      "🔥 Hot (8oz)"
    ],
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBMjTB-ditOYgxnlYcLY6V54j2iwNiXT1m2XqIew3Bkse2f-SZYiDFV-55N0Et_85yx-V4H22ZM_cPsw8ly8xP-9k3h7gD4LBH6sdAZPstftH2YNWoQcEz3o8r_jyvunOGXrq99_KEHJGzpwC47b1j3IQtTlsJgr7beMTWxLmM8tGpzlK6jzSf7MhyxwYluZO13U_z_-G_A9O1I7ZbGUEbPi1iDi2OYysiTSYK92b117sjC-bO6nXih",
    "alt": "Cappuccino"
  },
  {
    "id": "item-10",
    "name": "Americano Double Shot",
    "category": "hot-beverages",
    "subCategory": "Black Coffee",
    "price": 160,
    "tag": "Strong",
    "dietary": "non-veg",
    "description": "Intense double espresso pulled over hot water for the caffeine purist seeking deep roasted flavor.",
    "details": [
      "Double Shot",
      "Hot (10oz)"
    ],
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    "alt": "Americano Double Shot"
  },
  {
    "id": "item-100",
    "name": "Buff Khaja Set",
    "category": "khaja-mains",
    "subCategory": "Traditional Nepali",
    "price": 310,
    "tag": "Local Favorite",
    "dietary": "non-veg",
    "description": "Pan-fried spicy buff choila/curry paired with beaten rice, spiced potato pickle, crunchy bhatmas and fresh salad.",
    "details": [
      "Spiced Buff Meat",
      "Authentic Flavors"
    ],
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "alt": "Buff Khaja Set"
  },
  {
    "id": "item-101",
    "name": "Mix Khaja Set",
    "category": "khaja-mains",
    "subCategory": "Grand Thali",
    "price": 400,
    "tag": "Special Combo",
    "dietary": "non-veg",
    "description": "The complete feast featuring spiced chicken, savory buff, boiled egg, beaten rice, aloo sadheko and assorted condiments.",
    "details": [
      "Chicken + Buff + Egg",
      "Royal Feast"
    ],
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "alt": "Mix Khaja Set"
  },
  {
    "id": "item-102",
    "name": "Buff Keema Noodles",
    "category": "khaja-mains",
    "subCategory": "Keema Noodles",
    "price": 280,
    "tag": "Flavorful",
    "dietary": "non-veg",
    "description": "Steaming noodles generously smothered in rich, aromatic minced buff keema gravy cooked with garlic, ginger and herbs.",
    "details": [
      "Minced Buff Sauce",
      "Wok Noodles"
    ],
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "alt": "Buff Keema Noodles"
  },
  {
    "id": "item-103",
    "name": "Chicken Keema Noodles",
    "category": "khaja-mains",
    "subCategory": "Keema Noodles",
    "price": 250,
    "tag": "Popular",
    "dietary": "non-veg",
    "description": "Wok-tossed noodles crowned with seasoned minced chicken gravy, fresh chopped scallions and fragrant spices.",
    "details": [
      "Chicken Keema",
      "Fresh Scallions"
    ],
    "image": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
    "alt": "Chicken Keema Noodles"
  },
  {
    "id": "item-104",
    "name": "Mix Keema Noodles",
    "category": "khaja-mains",
    "subCategory": "Keema Noodles",
    "price": 350,
    "tag": "House Special",
    "dietary": "non-veg",
    "description": "Signature noodle bowl topped with combined minced chicken and savory buff keema simmered in house masala.",
    "details": [
      "Chicken & Buff",
      "Rich & Spicy"
    ],
    "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80",
    "alt": "Mix Keema Noodles"
  },
  {
    "id": "item-105",
    "name": "Chicken Thukpa",
    "category": "khaja-mains",
    "subCategory": "Himalayan Noodle Soup",
    "price": 220,
    "tag": "Warm & Comforting",
    "dietary": "non-veg",
    "description": "Steaming aromatic Himalayan soup noodles with tender chicken strips, carrots, cabbage, and rich spiced broth.",
    "details": [
      "Warm Broth",
      "Chicken Strips"
    ],
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80",
    "alt": "Chicken Thukpa"
  },
  {
    "id": "item-106",
    "name": "Buff Thukpa",
    "category": "khaja-mains",
    "subCategory": "Himalayan Noodle Soup",
    "price": 250,
    "tag": "Hearty",
    "dietary": "non-veg",
    "description": "Slow-simmered mountain broth with noodles, savory buff slices, garlic, ginger and seasonal greens.",
    "details": [
      "Buff Slices",
      "Spiced Soup"
    ],
    "image": "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80",
    "alt": "Buff Thukpa"
  },
  {
    "id": "item-107",
    "name": "Egg Thukpa",
    "category": "khaja-mains",
    "subCategory": "Himalayan Noodle Soup",
    "price": 200,
    "tag": "Vegetarian Option",
    "dietary": "veg",
    "description": "Wholesome hot noodle soup with fresh boiled eggs, garden veggies, and garlic-infused vegetable broth.",
    "details": [
      "Farm Eggs",
      "Comforting Broth"
    ],
    "image": "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=600&q=80",
    "alt": "Egg Thukpa"
  },
  {
    "id": "item-108",
    "name": "Veg Thukpa",
    "category": "khaja-mains",
    "subCategory": "Himalayan Noodle Soup",
    "price": 150,
    "tag": "Pure Veg",
    "dietary": "veg",
    "description": "Gentle and soothing Himalayan vegetable noodle soup packed with fresh cabbage, carrots, onion and cilantro.",
    "details": [
      "100% Vegetarian",
      "Garden Vegetables"
    ],
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "alt": "Veg Thukpa"
  },
  {
    "id": "item-109",
    "name": "Mix Thukpa",
    "category": "khaja-mains",
    "subCategory": "Himalayan Noodle Soup",
    "price": 300,
    "tag": "Deluxe Soup",
    "dietary": "non-veg",
    "description": "Grand bowl loaded with chicken, buff, boiled egg, vegetables and hot flavored Himalayan soup broth.",
    "details": [
      "Chicken, Buff & Egg",
      "King Size"
    ],
    "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=600&q=80",
    "alt": "Mix Thukpa"
  },
  {
    "id": "item-11",
    "name": "Café Latte",
    "category": "hot-beverages",
    "subCategory": "Milky & Smooth",
    "price": 180,
    "tag": "Barista Pick",
    "dietary": "non-veg",
    "description": "Gentle espresso harmonized with generous silky micro-foam in our signature sage ceramic mug.",
    "details": [
      "Silky Micro-foam",
      "Hot (10oz)"
    ],
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuB-HydCGjJv_Tr3FhQJ-oXJCh5HT86JQnendHcw2JskFuZGYpXrv_flzBcfbWlH6zpOiIQ8GVrdVtOfZowkSqUtb-XUnOoJs_TRYLs54sZq5lvQ5FexFPcfP15FlUVcc39910_k9wJR6g54EsWJ7u_QaRy1XQxnW1TTBCi8zLh9-K6C1Tbrewg0vkMYqxL8vjmDGvlTQWE3g-docRIf5-duA2vbweeJYjTo-Q8e_Lky7XCmqM_lIrVG",
    "alt": "Café Latte"
  },
  {
    "id": "item-110",
    "name": "Veg Fry Rice",
    "category": "khaja-mains",
    "subCategory": "Fried Rice",
    "price": 200,
    "tag": "Wok Fresh",
    "dietary": "veg",
    "description": "Fluffy basmati rice tossed in hot wok with sweet carrots, green peas, capsicum and soy seasoning.",
    "details": [
      "Basmati Rice",
      "Fresh Vegetables"
    ],
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    "alt": "Veg Fry Rice"
  },
  {
    "id": "item-111",
    "name": "Chicken Fry Rice",
    "category": "khaja-mains",
    "subCategory": "Fried Rice",
    "price": 250,
    "tag": "Popular",
    "dietary": "non-veg",
    "description": "Aromatic fried rice stir-fried with diced tender chicken, scallions, eggs, and cracked black pepper.",
    "details": [
      "Tender Chicken",
      "Wok Stirred"
    ],
    "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80",
    "alt": "Chicken Fry Rice"
  },
  {
    "id": "item-112",
    "name": "Buff Fry Rice",
    "category": "khaja-mains",
    "subCategory": "Fried Rice",
    "price": 250,
    "tag": "Spicy & Savory",
    "dietary": "non-veg",
    "description": "Smoky wok-tossed basmati rice with spiced shredded buff, soy sauce, and aromatic garlic butter.",
    "details": [
      "Spiced Buff Pieces",
      "Fragrant Rice"
    ],
    "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80",
    "alt": "Buff Fry Rice"
  },
  {
    "id": "item-113",
    "name": "Mix Fry Rice",
    "category": "khaja-mains",
    "subCategory": "Fried Rice",
    "price": 300,
    "tag": "Chef Choice",
    "dietary": "non-veg",
    "description": "Ultimate fried rice combination with chicken, buff, egg, and crunchy garden vegetables in wok glaze.",
    "details": [
      "Chicken, Buff & Egg",
      "Deluxe Basmati"
    ],
    "image": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80",
    "alt": "Mix Fry Rice"
  },
  {
    "id": "item-114",
    "name": "Mustang Aalu",
    "category": "snacks-sides",
    "subCategory": "Famous Mountain Snack",
    "price": 250,
    "tag": "Must Try",
    "dietary": "non-veg",
    "description": "Crispy fried potato wedges tossed in authentic Mustang jimbu herbs, roasted chili flakes and garlic butter.",
    "details": [
      "Crispy Wedges",
      "Authentic Jimbu Herb"
    ],
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    "alt": "Mustang Aalu"
  },
  {
    "id": "item-115",
    "name": "Sukuti Sadheko",
    "category": "snacks-sides",
    "subCategory": "Nepali Delicacy",
    "price": 350,
    "tag": "Authentic",
    "dietary": "non-veg",
    "description": "Smoky dried meat shredded and tossed with raw mustard oil, roasted garlic, green chili, onion and fresh lemon.",
    "details": [
      "Smoky Dried Meat",
      "Spicy & Pungent"
    ],
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    "alt": "Sukuti Sadheko"
  },
  {
    "id": "item-116",
    "name": "Chicken Sadheko",
    "category": "snacks-sides",
    "subCategory": "Nepali Sadheko",
    "price": 300,
    "tag": "Bestseller",
    "dietary": "non-veg",
    "description": "Seared spiced chicken marinated with fresh coriander, diced red onions, tomatoes, green chilies and lime.",
    "details": [
      "Spiced Chicken",
      "Fresh Lime & Coriander"
    ],
    "image": "https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=600&q=80",
    "alt": "Chicken Sadheko"
  },
  {
    "id": "item-117",
    "name": "Buff Sadheko",
    "category": "snacks-sides",
    "subCategory": "Nepali Sadheko",
    "price": 280,
    "tag": "Spicy",
    "dietary": "non-veg",
    "description": "Tender spiced buff cubes marinated in roasted fenugreek, garlic ginger paste, mustard oil and fresh herbs.",
    "details": [
      "Tender Buff Cubes",
      "Roasted Fenugreek"
    ],
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
    "alt": "Buff Sadheko"
  },
  {
    "id": "item-118",
    "name": "Bhatmas Sadheko",
    "category": "snacks-sides",
    "subCategory": "Crispy Snack",
    "price": 120,
    "tag": "Classic",
    "dietary": "non-veg",
    "description": "Deep roasted crunchy soybeans mixed with raw mustard oil, finely chopped onions, chilies and lemon juice.",
    "details": [
      "Roasted Soybeans",
      "High Protein Crunch"
    ],
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "alt": "Bhatmas Sadheko"
  },
  {
    "id": "item-119",
    "name": "Peanut Sadheko",
    "category": "snacks-sides",
    "subCategory": "Crispy Snack",
    "price": 130,
    "tag": "Addictive",
    "dietary": "non-veg",
    "description": "Roasted crunchy peanuts tossed with diced tomatoes, onions, cilantro, green chilies, and tangy chaat masala.",
    "details": [
      "Roasted Peanuts",
      "Tangy Chaat Masala"
    ],
    "image": "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80",
    "alt": "Peanut Sadheko"
  },
  {
    "id": "item-12",
    "name": "Cappuccino / Double",
    "category": "hot-beverages",
    "subCategory": "Espresso Bar",
    "price": 180,
    "tag": "Popular",
    "dietary": "non-veg",
    "description": "Rich, balanced espresso crowned with equal parts textured milk and velvety airy foam with rosetta art.",
    "details": [
      "Dense Froth",
      "Hot (8oz)"
    ],
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBMjTB-ditOYgxnlYcLY6V54j2iwNiXT1m2XqIew3Bkse2f-SZYiDFV-55N0Et_85yx-V4H22ZM_cPsw8ly8xP-9k3h7gD4LBH6sdAZPstftH2YNWoQcEz3o8r_jyvunOGXrq99_KEHJGzpwC47b1j3IQtTlsJgr7beMTWxLmM8tGpzlK6jzSf7MhyxwYluZO13U_z_-G_A9O1I7ZbGUEbPi1iDi2OYysiTSYK92b117sjC-bO6nXih",
    "alt": "Cappuccino / Double"
  },
  {
    "id": "item-120",
    "name": "Wai-Wai Sadheko (2 Packets)",
    "category": "snacks-sides",
    "subCategory": "Nepali Street Food",
    "price": 100,
    "tag": "Comfort Food",
    "dietary": "non-veg",
    "description": "Two packets of crunchy crushed Wai-Wai noodles tossed with onions, tomatoes, green chilies, seasoning & lime.",
    "details": [
      "2x Wai-Wai Noodles",
      "Nostalgic Taste"
    ],
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "alt": "Wai-Wai Sadheko (2 Packets)"
  },
  {
    "id": "item-121",
    "name": "Aalu Sadheko",
    "category": "snacks-sides",
    "subCategory": "Potato Salad",
    "price": 140,
    "tag": "Traditional",
    "dietary": "non-veg",
    "description": "Tender boiled potatoes spiced with roasted fenugreek oil, turmeric, green chilies, cilantro and lemon juice.",
    "details": [
      "Spiced Potatoes",
      "Roasted Fenugreek"
    ],
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    "alt": "Aalu Sadheko"
  },
  {
    "id": "item-122",
    "name": "French Fries",
    "category": "snacks-sides",
    "subCategory": "Crispy Fries",
    "price": 170,
    "tag": "Crispy",
    "dietary": "non-veg",
    "description": "Golden, crispy hand-cut potatoes fried to perfection, lightly salted and served with creamy dip.",
    "details": [
      "Golden Crispy",
      "Sea Salted"
    ],
    "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
    "alt": "French Fries"
  },
  {
    "id": "item-123",
    "name": "Peri-Peri Fries",
    "category": "snacks-sides",
    "subCategory": "Spiced Fries",
    "price": 190,
    "tag": "Spicy",
    "dietary": "non-veg",
    "description": "Hot crispy potato fries dusted generously with zesty, tangy and fiery African peri-peri spice mix.",
    "details": [
      "Peri-Peri Dust",
      "Zesty Kick"
    ],
    "image": "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80",
    "alt": "Peri-Peri Fries"
  },
  {
    "id": "item-124",
    "name": "Cheese Ball",
    "category": "snacks-sides",
    "subCategory": "Deep Fried",
    "price": 310,
    "tag": "Cheesy Delight",
    "dietary": "non-veg",
    "description": "Crispy golden breaded spheres that melt in your mouth with an oozy, savory melted cheese center.",
    "details": [
      "Molten Cheese Center",
      "Golden Crust"
    ],
    "image": "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80",
    "alt": "Cheese Ball"
  },
  {
    "id": "item-125",
    "name": "Fish Finger",
    "category": "snacks-sides",
    "subCategory": "Seafood",
    "price": 350,
    "tag": "Crispy Fish",
    "dietary": "non-veg",
    "description": "Fresh fish fillets cut into batons, herb-marinated, rolled in crunchy breadcrumbs and fried golden.",
    "details": [
      "Tender Fish Fillet",
      "Tartar Dip"
    ],
    "image": "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80",
    "alt": "Fish Finger"
  },
  {
    "id": "item-126",
    "name": "Chicken Kabab (Pahadi Best)",
    "category": "snacks-sides",
    "subCategory": "Himalayan Grill",
    "price": 350,
    "tag": "House Special",
    "dietary": "non-veg",
    "description": "Chef signature mountain-spiced succulent chicken kababs grilled over hot embers with garlic mint chutney.",
    "details": [
      "Pahadi Spices",
      "Charcoal Grilled"
    ],
    "image": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=600&q=80",
    "alt": "Chicken Kabab (Pahadi Best)"
  },
  {
    "id": "item-127",
    "name": "Veg Pakouda",
    "category": "snacks-sides",
    "subCategory": "Crispy Fritters",
    "price": 200,
    "tag": "Tea Time Fav",
    "dietary": "veg",
    "description": "Crispy chickpea-flour fritters with finely sliced onions, seasonal vegetables, green chili and cumin.",
    "details": [
      "Gram Flour Crunch",
      "Perfect With Coffee"
    ],
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "alt": "Veg Pakouda"
  },
  {
    "id": "item-128",
    "name": "Sausages (2 Pieces)",
    "category": "snacks-sides",
    "subCategory": "Quick Bite",
    "price": 120,
    "tag": "Quick Snack",
    "dietary": "non-veg",
    "description": "Two grilled savory sausages served hot with our house spicy tomato and mustard dipping sauces.",
    "details": [
      "2 Pieces Grilled",
      "Spicy Dips"
    ],
    "image": "https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=600&q=80",
    "alt": "Sausages (2 Pieces)"
  },
  {
    "id": "item-129",
    "name": "Sausage Sadheko",
    "category": "snacks-sides",
    "subCategory": "Nepali Sadheko",
    "price": 160,
    "tag": "Spicy Bite",
    "dietary": "non-veg",
    "description": "Sliced grilled sausages tossed with red onions, tomatoes, fresh cilantro, fiery green chilies and lemon.",
    "details": [
      "Sliced Sausages",
      "Pungent Mustard Dressing"
    ],
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    "alt": "Sausage Sadheko"
  },
  {
    "id": "item-13",
    "name": "Café Mocha",
    "category": "hot-beverages",
    "subCategory": "Chocolate Espresso",
    "price": 210,
    "tag": "Indulgent",
    "dietary": "non-veg",
    "description": "Double espresso blended with molten dark chocolate, steamed milk, and light cocoa dusting.",
    "details": [
      "Dark Chocolate",
      "Hot (8oz)"
    ],
    "image": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
    "alt": "Café Mocha"
  },
  {
    "id": "item-130",
    "name": "Aalu Stick",
    "category": "snacks-sides",
    "subCategory": "Crispy Potato",
    "price": 160,
    "tag": "Crunchy",
    "dietary": "non-veg",
    "description": "Seasoned potato sticks deep-fried to a golden crunch, dusted with savory mountain spice seasoning.",
    "details": [
      "Potato Sticks",
      "Spice Dusted"
    ],
    "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
    "alt": "Aalu Stick"
  },
  {
    "id": "item-131",
    "name": "Chicken Chilly",
    "category": "snacks-sides",
    "subCategory": "Indo-Chinese Chilly",
    "price": 280,
    "tag": "Spicy Favorite",
    "dietary": "non-veg",
    "description": "Wok-tossed chicken chunks stir-fried in a fiery dark soy chili sauce with bell peppers and crunchy onions.",
    "details": [
      "Boneless Chicken",
      "Wok Tossed"
    ],
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    "alt": "Chicken Chilly"
  },
  {
    "id": "item-132",
    "name": "Buff Chilly",
    "category": "snacks-sides",
    "subCategory": "Indo-Chinese Chilly",
    "price": 310,
    "tag": "Hot & Spicy",
    "dietary": "non-veg",
    "description": "Crispy seasoned buff meat stir-fried with hot green chilies, garlic, capsicum, and thick spicy gravy.",
    "details": [
      "Crispy Buff",
      "Fiery Green Chilies"
    ],
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    "alt": "Buff Chilly"
  },
  {
    "id": "item-133",
    "name": "Sausage Chilly",
    "category": "snacks-sides",
    "subCategory": "Indo-Chinese Chilly",
    "price": 250,
    "tag": "Tangy Spicy",
    "dietary": "non-veg",
    "description": "Sliced savory sausages tossed in hot wok with onions, green peppers, soy sauce and sweet chili glaze.",
    "details": [
      "Sliced Sausages",
      "Sweet & Spicy"
    ],
    "image": "https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=600&q=80",
    "alt": "Sausage Chilly"
  },
  {
    "id": "item-134",
    "name": "Chips Chilly",
    "category": "snacks-sides",
    "subCategory": "Indo-Chinese Chilly",
    "price": 230,
    "tag": "Crispy Snack",
    "dietary": "non-veg",
    "description": "Crispy potato chips tossed with garlic, ginger, chopped chilies, onions, and spicy Indo-Chinese sauce.",
    "details": [
      "Crispy Chips",
      "Spicy Garlic Glaze"
    ],
    "image": "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80",
    "alt": "Chips Chilly"
  },
  {
    "id": "item-135",
    "name": "Nan Chicken Kima",
    "category": "snacks-sides",
    "subCategory": "Stuffed Naan",
    "price": 250,
    "tag": "Stuffed Bread",
    "dietary": "non-veg",
    "description": "Oven-baked flatbread stuffed generously with spiced minced chicken, fresh herbs, and coriander butter.",
    "details": [
      "Chicken Keema Stuffed",
      "Oven Baked"
    ],
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "alt": "Nan Chicken Kima"
  },
  {
    "id": "item-136",
    "name": "Cheese Nan",
    "category": "snacks-sides",
    "subCategory": "Naan Bread",
    "price": 120,
    "tag": "Cheesy",
    "dietary": "non-veg",
    "description": "Fresh clay-oven flatbread stuffed with savory melted mozzarella cheese and brushed with melted butter.",
    "details": [
      "Mozzarella Stuffed",
      "Butter Glazed"
    ],
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    "alt": "Cheese Nan"
  },
  {
    "id": "item-137",
    "name": "Garlic Nan",
    "category": "snacks-sides",
    "subCategory": "Naan Bread",
    "price": 140,
    "tag": "Aromatic",
    "dietary": "non-veg",
    "description": "Soft tandoori flatbread studded with roasted minced garlic, fresh coriander leaves and melted butter.",
    "details": [
      "Roasted Garlic",
      "Herb Butter"
    ],
    "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    "alt": "Garlic Nan"
  },
  {
    "id": "item-138",
    "name": "Butter Nan",
    "category": "snacks-sides",
    "subCategory": "Naan Bread",
    "price": 100,
    "tag": "Classic",
    "dietary": "non-veg",
    "description": "Traditional pillowy soft clay-oven baked naan brushed with golden creamy alpine butter.",
    "details": [
      "Pure Butter",
      "Soft & Fluffy"
    ],
    "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
    "alt": "Butter Nan"
  },
  {
    "id": "item-139",
    "name": "Fruit Salad",
    "category": "snacks-sides",
    "subCategory": "Fresh Salad",
    "price": 190,
    "tag": "Fresh & Healthy",
    "dietary": "non-veg",
    "description": "Bowl of seasonal mountain fruits, freshly diced and dressed with light citrus honey glaze.",
    "details": [
      "Seasonal Fruits",
      "Natural Honey Touch"
    ],
    "image": "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=600&q=80",
    "alt": "Fruit Salad"
  },
  {
    "id": "item-14",
    "name": "Honey Latte",
    "category": "hot-beverages",
    "subCategory": "Naturally Sweet",
    "price": 220,
    "tag": "House Special",
    "dietary": "non-veg",
    "description": "Smooth espresso and steamed milk sweetened with natural wild Himalayan blossom honey.",
    "details": [
      "Pure Honey",
      "Hot (10oz)"
    ],
    "image": "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
    "alt": "Honey Latte"
  },
  {
    "id": "item-140",
    "name": "Green Salad",
    "category": "snacks-sides",
    "subCategory": "Fresh Salad",
    "price": 150,
    "tag": "Crisp",
    "dietary": "non-veg",
    "description": "Crisp farm cucumbers, ripe tomatoes, carrots, sliced red onion, and green chilies served with lemon wedges.",
    "details": [
      "Fresh Cucumbers & Tomatoes",
      "Lemon Dressing"
    ],
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "alt": "Green Salad"
  },
  {
    "id": "item-141",
    "name": "Salad Sadheko",
    "category": "snacks-sides",
    "subCategory": "Nepali Salad",
    "price": 120,
    "tag": "Spicy Salad",
    "dietary": "non-veg",
    "description": "Fresh sliced garden vegetables marinated in mustard oil, roasted fenugreek, green chili and lemon.",
    "details": [
      "Fresh Garden Veggies",
      "Sadheko Dressing"
    ],
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    "alt": "Salad Sadheko"
  },
  {
    "id": "item-142",
    "name": "Hukka (Classic Flavor)",
    "category": "bar-lounge",
    "subCategory": "Lounge Hukka",
    "price": 400,
    "tag": "Lounge Ritual",
    "dietary": "non-veg",
    "description": "Premium coal-heated hookah pipe prepared in your favorite fruity or mint herbal flavor.",
    "details": [
      "Smooth Smoke",
      "Choice of Flavor"
    ],
    "image": "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80",
    "alt": "Hukka (Classic Flavor)"
  },
  {
    "id": "item-143",
    "name": "Garnished Hukka",
    "category": "bar-lounge",
    "subCategory": "Lounge Hukka",
    "price": 450,
    "tag": "Deluxe Special",
    "dietary": "non-veg",
    "description": "Deluxe garnished hookah setup with chilled fruit base, fresh mint infusion, and dense cooling vapor.",
    "details": [
      "Fruit Ice Base",
      "Long Lasting"
    ],
    "image": "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80",
    "alt": "Garnished Hukka"
  },
  {
    "id": "item-144",
    "name": "Budweiser Beer (650ml)",
    "category": "bar-lounge",
    "subCategory": "Chilled Beer",
    "price": 600,
    "tag": "Imported Brand",
    "dietary": "non-veg",
    "description": "The King of Beers: crisp, clean American lager brewed with the finest barley malt and rice.",
    "details": [
      "650ml Bottle",
      "Ice Chilled"
    ],
    "image": "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=600&q=80",
    "alt": "Budweiser Beer (650ml)"
  },
  {
    "id": "item-145",
    "name": "Carlsberg Beer (650ml)",
    "category": "bar-lounge",
    "subCategory": "Chilled Beer",
    "price": 580,
    "tag": "Danish Pilsner",
    "dietary": "non-veg",
    "description": "Probably the best beer in the world: crisp, refreshing Danish pilsner with well-balanced bitterness.",
    "details": [
      "650ml Bottle",
      "Danish Malt"
    ],
    "image": "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80",
    "alt": "Carlsberg Beer (650ml)"
  },
  {
    "id": "item-146",
    "name": "Tuborg Classic (650ml)",
    "category": "bar-lounge",
    "subCategory": "Chilled Beer",
    "price": 550,
    "tag": "Local Favorite",
    "dietary": "non-veg",
    "description": "Crisp and bottom-fermented lager with mild bitterness and rich floral hop aroma.",
    "details": [
      "650ml Bottle",
      "Hop Aroma"
    ],
    "image": "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&w=600&q=80",
    "alt": "Tuborg Classic (650ml)"
  },
  {
    "id": "item-147",
    "name": "Gorkha Strong (650ml)",
    "category": "bar-lounge",
    "subCategory": "Chilled Beer",
    "price": 500,
    "tag": "Nepali Brew",
    "dietary": "non-veg",
    "description": "Brewed with pure Himalayan water: bold, robust malt character and smooth finish.",
    "details": [
      "650ml Bottle",
      "Himalayan Water"
    ],
    "image": "https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?auto=format&fit=crop&w=600&q=80",
    "alt": "Gorkha Strong (650ml)"
  },
  {
    "id": "item-148",
    "name": "Barahsinghe Craft Beer (650ml)",
    "category": "bar-lounge",
    "subCategory": "Chilled Beer",
    "price": 580,
    "tag": "Craft Brew",
    "dietary": "non-veg",
    "description": "Nepal premier craft pilsner brewed with imported noble hops and pure spring water.",
    "details": [
      "650ml Bottle",
      "Craft Pilsner"
    ],
    "image": "https://images.unsplash.com/photo-1567696911980-2eed69a46042?auto=format&fit=crop&w=600&q=80",
    "alt": "Barahsinghe Craft Beer (650ml)"
  },
  {
    "id": "item-149",
    "name": "Apple Cider",
    "category": "bar-lounge",
    "subCategory": "Sparkling Cider",
    "price": 250,
    "tag": "Crisp & Sweet",
    "dietary": "non-veg",
    "description": "Crisp fermented sparkling apple cider offering a refreshing fruit-forward effervescence.",
    "details": [
      "Fermented Apple",
      "Bubbly"
    ],
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "alt": "Apple Cider"
  },
  {
    "id": "item-15",
    "name": "Caramel Macchiato",
    "category": "hot-beverages",
    "subCategory": "Layered Caramel",
    "price": 270,
    "tag": "Sweet Fav",
    "dietary": "non-veg",
    "description": "Freshly steamed milk marked with vanilla syrup, rich espresso, and buttery golden caramel drizzle.",
    "details": [
      "Buttery Caramel",
      "Hot (10oz)"
    ],
    "image": "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80",
    "alt": "Caramel Macchiato"
  },
  {
    "id": "item-150",
    "name": "Margarita Cocktail",
    "category": "bar-lounge",
    "subCategory": "Cocktail",
    "price": 450,
    "tag": "Signature Cocktail",
    "dietary": "non-veg",
    "description": "Classic cocktail shaken with silver tequila, triple sec, and fresh lime juice, served with salted rim.",
    "details": [
      "Silver Tequila",
      "Salted Rim"
    ],
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    "alt": "Margarita Cocktail"
  },
  {
    "id": "item-151",
    "name": "Special Hot Punch Rum",
    "category": "bar-lounge",
    "subCategory": "Winter Warmer",
    "price": 400,
    "tag": "Winter Special",
    "dietary": "non-veg",
    "description": "Traditional warming winter punch with spiced Khukri rum, cloves, cinnamon stick, honey and citrus peel.",
    "details": [
      "Spiced Rum",
      "Hot Spiced Punch"
    ],
    "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    "alt": "Special Hot Punch Rum"
  },
  {
    "id": "item-152",
    "name": "Hot Punch Rum",
    "category": "bar-lounge",
    "subCategory": "Winter Warmer",
    "price": 320,
    "tag": "Warm Spirit",
    "dietary": "non-veg",
    "description": "Warm dark rum mixed with spiced mountain water, lemon juice, and honey warmth.",
    "details": [
      "Dark Rum",
      "Lemon & Honey"
    ],
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    "alt": "Hot Punch Rum"
  },
  {
    "id": "item-153",
    "name": "Old Durbar (Black Chimney)",
    "category": "bar-lounge",
    "subCategory": "Himalayan Whisky",
    "price": 350,
    "tag": "Peg 30ml / Rs. 600 (60ml)",
    "dietary": "non-veg",
    "description": "Smoky reserve blended malt scotch and grain spirits finished in charred oak barrels. Bottle: Rs. 4500 (Full), Rs. 2300 (Half).",
    "details": [
      "30ml: Rs. 350",
      "60ml: Rs. 600",
      "Full: Rs. 4500"
    ],
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
    "alt": "Old Durbar (Black Chimney)"
  },
  {
    "id": "item-154",
    "name": "Old Durbar (Red)",
    "category": "bar-lounge",
    "subCategory": "Himalayan Whisky",
    "price": 350,
    "tag": "Peg 30ml / Rs. 550 (60ml)",
    "dietary": "non-veg",
    "description": "Smooth blended whisky crafted with English malt and purified mountain spring water. Bottle: Rs. 3200 (Full), Rs. 1950 (Half).",
    "details": [
      "30ml: Rs. 350",
      "60ml: Rs. 550",
      "Full: Rs. 3200"
    ],
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
    "alt": "Old Durbar (Red)"
  },
  {
    "id": "item-155",
    "name": "Johnnie Walker Red Label",
    "category": "bar-lounge",
    "subCategory": "Scotch Whisky",
    "price": 450,
    "tag": "Peg 30ml / Rs. 840 (60ml)",
    "dietary": "non-veg",
    "description": "World-famous Scotch whisky blending light whiskies from Scotland east coast with dark peaty whiskies. Full Bottle: Rs. 7500.",
    "details": [
      "30ml: Rs. 450",
      "60ml: Rs. 840",
      "Full: Rs. 7500"
    ],
    "image": "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
    "alt": "Johnnie Walker Red Label"
  },
  {
    "id": "item-156",
    "name": "Khukri Rum (Rumm Khukuri)",
    "category": "bar-lounge",
    "subCategory": "Himalayan Dark Rum",
    "price": 350,
    "tag": "Peg 30ml / Rs. 520 (60ml)",
    "dietary": "non-veg",
    "description": "Grand Himalayan dark rum distilled since 1959 with rich treacle, dark honey and caramel aromas. Full Bottle: Rs. 3100.",
    "details": [
      "30ml: Rs. 350",
      "60ml: Rs. 520",
      "Full: Rs. 3100"
    ],
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    "alt": "Khukri Rum (Rumm Khukuri)"
  },
  {
    "id": "item-157",
    "name": "Old Monk Rum",
    "category": "bar-lounge",
    "subCategory": "Dark Rum",
    "price": 360,
    "tag": "Peg 30ml / Rs. 530 (60ml)",
    "dietary": "non-veg",
    "description": "Iconic vatted 7-year aged dark rum with unmistakable notes of molasses, oak wood, and sweet vanilla. Full Bottle: Rs. 3130.",
    "details": [
      "30ml: Rs. 360",
      "60ml: Rs. 530",
      "Full: Rs. 3130"
    ],
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    "alt": "Old Monk Rum"
  },
  {
    "id": "item-158",
    "name": "8848 Vodka",
    "category": "bar-lounge",
    "subCategory": "Himalayan Vodka",
    "price": 300,
    "tag": "Peg 30ml / Rs. 600 (90ml)",
    "dietary": "non-veg",
    "description": "Distilled 5 times with French grain and blended with pure glacial spring water of Mt. Everest. Full Bottle: Rs. 3500.",
    "details": [
      "30ml: Rs. 300",
      "90ml: Rs. 600",
      "Full: Rs. 3500"
    ],
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    "alt": "8848 Vodka"
  },
  {
    "id": "item-159",
    "name": "Absolut Vodka",
    "category": "bar-lounge",
    "subCategory": "Swedish Vodka",
    "price": 500,
    "tag": "Peg 30ml / Rs. 1000 (90ml)",
    "dietary": "non-veg",
    "description": "World famous Swedish winter wheat vodka distilled continuously for legendary purity. Full Bottle: Rs. 8000.",
    "details": [
      "30ml: Rs. 500",
      "90ml: Rs. 1000",
      "Full: Rs. 8000"
    ],
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    "alt": "Absolut Vodka"
  },
  {
    "id": "item-16",
    "name": "Mocha Madness",
    "category": "hot-beverages",
    "subCategory": "Signature Dessert",
    "price": 350,
    "tag": "Chef Special",
    "dietary": "non-veg",
    "description": "Decadent specialty creation loaded with rich fudge, espresso, steamed cream, and dark cocoa shavings.",
    "details": [
      "Fudge Loaded",
      "Signature Dessert"
    ],
    "image": "https://images.unsplash.com/photo-1579888944880-d98341245702?auto=format&fit=crop&w=600&q=80",
    "alt": "Mocha Madness"
  },
  {
    "id": "item-160",
    "name": "Smirnoff Vodka",
    "category": "bar-lounge",
    "subCategory": "Classic Vodka",
    "price": 300,
    "tag": "Peg 30ml / Rs. 600 (90ml)",
    "dietary": "non-veg",
    "description": "Triple-distilled and 10-times charcoal filtered for iconic smoothness and crisp dry taste. Full Bottle: Rs. 3500.",
    "details": [
      "30ml: Rs. 300",
      "90ml: Rs. 600",
      "Full: Rs. 3500"
    ],
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    "alt": "Smirnoff Vodka"
  },
  {
    "id": "item-161",
    "name": "Robertson Winery Bottle",
    "category": "bar-lounge",
    "subCategory": "Fine Wine",
    "price": 2600,
    "tag": "Full Bottle",
    "dietary": "non-veg",
    "description": "South African premium estate bottled wine boasting smooth ruby fruit notes and balanced finish.",
    "details": [
      "Full Bottle",
      "South African Vintage"
    ],
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    "alt": "Robertson Winery Bottle"
  },
  {
    "id": "item-162",
    "name": "King Hills Wine Bottle",
    "category": "bar-lounge",
    "subCategory": "Local Vintage",
    "price": 1500,
    "tag": "Full Bottle",
    "dietary": "non-veg",
    "description": "Sweet and fruit-forward mountain vintage red wine crafted locally in Nepal.",
    "details": [
      "Full Bottle",
      "Local Favorite"
    ],
    "image": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80",
    "alt": "King Hills Wine Bottle"
  },
  {
    "id": "item-163",
    "name": "J.P. Chenet Wine Bottle",
    "category": "bar-lounge",
    "subCategory": "French Wine",
    "price": 3500,
    "tag": "French Classic",
    "dietary": "non-veg",
    "description": "Authentic French wine bottled in its distinctive curved neck bottle with luscious berry bouquet.",
    "details": [
      "Full Bottle",
      "Product of France"
    ],
    "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    "alt": "J.P. Chenet Wine Bottle"
  },
  {
    "id": "item-17",
    "name": "Black Tea",
    "category": "tea-special",
    "subCategory": "Orthodox Teas",
    "price": 50,
    "tag": "Pure Mountain Leaf",
    "dietary": "non-veg",
    "description": "Crisp and golden amber liquor brewed from handpicked high-altitude orthodox tea leaves from Eastern Nepal.",
    "details": [
      "Handpicked Leaf",
      "Steaming Hot"
    ],
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    "alt": "Black Tea"
  },
  {
    "id": "item-18",
    "name": "Lemon Tea",
    "category": "tea-special",
    "subCategory": "Citrus Infusions",
    "price": 70,
    "tag": "Zesty & Fresh",
    "dietary": "non-veg",
    "description": "Fragrant black tea brightened with freshly squeezed mountain lemon juice for an invigorating citrus finish.",
    "details": [
      "Fresh Lemon Slice",
      "Uplifting Sips"
    ],
    "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
    "alt": "Lemon Tea"
  },
  {
    "id": "item-19",
    "name": "Milk Tea (Dudh Chiya)",
    "category": "tea-special",
    "subCategory": "Traditional Chiya",
    "price": 70,
    "tag": "Everyday Classic",
    "dietary": "non-veg",
    "description": "The soul of Nepali morning addas  -  rich black tea simmered gently with whole fresh milk and sugar.",
    "details": [
      "Fresh Simmered Milk",
      "Authentic Dudh Chiya"
    ],
    "image": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
    "alt": "Milk Tea (Dudh Chiya)"
  },
  {
    "id": "item-2",
    "name": "Caffè Latte",
    "category": "hot",
    "subCategory": "Silky Smooth",
    "price": 310,
    "tag": "Barista Pick",
    "dietary": "non-veg",
    "description": "Gentle espresso combined with generous silky textured micro-foam milk in a sage ceramic cup. Mellow, sweet, and comforting.",
    "details": [
      "🥛 Customizable",
      "🔥 Hot (10oz)"
    ],
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuB-HydCGjJv_Tr3FhQJ-oXJCh5HT86JQnendHcw2JskFuZGYpXrv_flzBcfbWlH6zpOiIQ8GVrdVtOfZowkSqUtb-XUnOoJs_TRYLs54sZq5lvQ5FexFPcfP15FlUVcc39910_k9wJR6g54EsWJ7u_QaRy1XQxnW1TTBCi8zLh9-K6C1Tbrewg0vkMYqxL8vjmDGvlTQWE3g-docRIf5-duA2vbweeJYjTo-Q8e_Lky7XCmqM_lIrVG",
    "alt": "Caffè Latte"
  },
  {
    "id": "item-20",
    "name": "Black Masala Tea",
    "category": "tea-special",
    "subCategory": "Ayurvedic Spices",
    "price": 100,
    "tag": "Warming Spices",
    "dietary": "non-veg",
    "description": "Brisk black tea boiled with crushed green cardamom, cinnamon quills, cloves, and fiery ginger root.",
    "details": [
      "Whole Spices",
      "Warming Decoction"
    ],
    "image": "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80",
    "alt": "Black Masala Tea"
  },
  {
    "id": "item-21",
    "name": "Milk Masala Tea",
    "category": "tea-special",
    "subCategory": "Traditional Chiya",
    "price": 120,
    "tag": "House Favorite",
    "dietary": "non-veg",
    "description": "Our house signature spiced milk tea decoction simmered with mountain cardamom, cloves, ginger, and fresh milk.",
    "details": [
      "Spiced Dairy Brew",
      "House Blend"
    ],
    "image": "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?auto=format&fit=crop&w=600&q=80",
    "alt": "Milk Masala Tea"
  },
  {
    "id": "item-22",
    "name": "Matka Tea (Clay Pot)",
    "category": "tea-special",
    "subCategory": "Clay Pot Special",
    "price": 120,
    "tag": "Rustic Clay Kulhad",
    "dietary": "non-veg",
    "description": "Aromatic spiced milk tea served in an authentic earthen terracotta clay pot (kulhad/matka) for an earthy smoky aroma.",
    "details": [
      "Terracotta Clay Cup",
      "Earthy Smoky Note"
    ],
    "image": "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=600&q=80",
    "alt": "Matka Tea (Clay Pot)"
  },
  {
    "id": "item-23",
    "name": "Chocolate Tea",
    "category": "tea-special",
    "subCategory": "Dessert Teas",
    "price": 140,
    "tag": "Choco Delight",
    "dietary": "non-veg",
    "description": "Rich fusion of robust milk tea simmered with molten Dutch dark cocoa and topped with chocolate shavings.",
    "details": [
      "Dark Dutch Cocoa",
      "Creamy Dessert Sip"
    ],
    "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80",
    "alt": "Chocolate Tea"
  },
  {
    "id": "item-24",
    "name": "Green Tea",
    "category": "tea-special",
    "subCategory": "Antioxidant Greens",
    "price": 80,
    "tag": "Wellness & Detox",
    "dietary": "non-veg",
    "description": "Steamed whole green tea leaves from Ilam mountain gardens, offering gentle vegetal sweetness and light finish.",
    "details": [
      "100% Whole Leaf",
      "Clean Detox"
    ],
    "image": "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&q=80",
    "alt": "Green Tea"
  },
  {
    "id": "item-25",
    "name": "Green Tea with Lemon",
    "category": "tea-special",
    "subCategory": "Antioxidant Greens",
    "price": 100,
    "tag": "Citrus Detox",
    "dietary": "non-veg",
    "description": "Pure Ilam green tea infused with freshly cut mountain lemon slices for an energizing antioxidant-rich cup.",
    "details": [
      "Fresh Cut Lemon",
      "Immunity Boost"
    ],
    "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    "alt": "Green Tea with Lemon"
  },
  {
    "id": "item-26",
    "name": "Hot Lemon",
    "category": "tea-special",
    "subCategory": "Warm Herbal Drinks",
    "price": 80,
    "tag": "Throat Soother",
    "dietary": "non-veg",
    "description": "Steaming cup of freshly squeezed lemon juice steeped in hot water to soothe the throat and refresh the senses.",
    "details": [
      "100% Real Citrus",
      "Steaming Hot"
    ],
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    "alt": "Hot Lemon"
  },
  {
    "id": "item-27",
    "name": "Hot Lemon with Honey",
    "category": "tea-special",
    "subCategory": "Warm Herbal Drinks",
    "price": 150,
    "tag": "Immunity Boost",
    "dietary": "non-veg",
    "description": "Golden wild forest honey stirred with fresh tart mountain lemon juice into steaming hot mountain spring water.",
    "details": [
      "Pure Wild Honey",
      "Fresh Tart Lemon"
    ],
    "image": "https://images.unsplash.com/photo-1546852199-2d8e8c4aaada?auto=format&fit=crop&w=600&q=80",
    "alt": "Hot Lemon with Honey"
  },
  {
    "id": "item-28",
    "name": "Hot Lemon with Ginger Honey",
    "category": "tea-special",
    "subCategory": "Warm Herbal Drinks",
    "price": 170,
    "tag": "Winter Classic",
    "dietary": "non-veg",
    "description": "Freshly crushed pungent ginger root simmered with natural mountain honey and fresh lemon juice. Highly recommended for cool Budhanilkantha mornings.",
    "details": [
      "🫚 Crushed Ginger",
      "Mountain Honey",
      "Tart Lemon"
    ],
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    "alt": "Hot Lemon with Ginger Honey"
  },
  {
    "id": "item-29",
    "name": "Rose Tea",
    "category": "tea-special",
    "subCategory": "Floral Infusions",
    "price": 120,
    "tag": "Calming Floral",
    "dietary": "non-veg",
    "description": "Dried fragrant organic rose petals steeped gently for a delicate floral aroma and calming subtle sweetness.",
    "details": [
      "Dried Rose Petals",
      "Calming Aromatics"
    ],
    "image": "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80",
    "alt": "Rose Tea"
  },
  {
    "id": "item-3",
    "name": "Signature Iced Coffee",
    "category": "cold",
    "subCategory": "Chilled",
    "price": 340,
    "tag": "Summer Fav",
    "dietary": "non-veg",
    "description": "Slow-drip 14-hour cold brew layered over condensed milk swirl, served tall on crystal cubes with whole roasted coffee bean garnish.",
    "details": [
      "🧊 Extra Chilled",
      "⚡ High Caffeine"
    ],
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDNjPKlqKtESQ0TETpEvAJ6w_PSCQk9WgAA1Jgc4uHzJoZ09hVO10rICprzoG_ZB8gMYCO23wsuw-CQV0X0VvgsdhD3Y5eCXnqJGkFbUj2EZ4nLeyMkKTkPZnm92CqElBheeuEToElHeY9b_110tlgan7d383KkzKtSMQTFxQbL1heAHP0ZZ0M4-u3hl2cdUpx7-OUCjgjAi3OT0QSz4-fRL6cH04idkadg3soDM8gnkUMfW_UD4cSA",
    "alt": "Signature Iced Coffee"
  },
  {
    "id": "item-30",
    "name": "Peach Tea",
    "category": "tea-special",
    "subCategory": "Fruity Infusions",
    "price": 100,
    "tag": "Fruity Delight",
    "dietary": "non-veg",
    "description": "Sweet juicy peach fruit essence infused into gentle steeped tea leaves, bursting with fruity aroma.",
    "details": [
      "Juicy Peach",
      "Refreshing Sips"
    ],
    "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
    "alt": "Peach Tea"
  },
  {
    "id": "item-31",
    "name": "Expresso on the Rock",
    "category": "cold-beverages",
    "subCategory": "Chilled Espresso",
    "price": 140,
    "tag": "Crisp",
    "dietary": "non-veg",
    "description": "Fresh double espresso pulled directly over hand-cut crystal clear ice cubes for instant cooling.",
    "details": [
      "On The Rocks",
      "Strong & Crisp"
    ],
    "image": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
    "alt": "Expresso on the Rock"
  },
  {
    "id": "item-32",
    "name": "Iced Americano",
    "category": "cold-beverages",
    "subCategory": "Chilled Black",
    "price": 170,
    "tag": "Refreshing",
    "dietary": "non-veg",
    "description": "Cold mountain spring water mixed with bold espresso and poured over mountain ice cubes.",
    "details": [
      "Cold Water Brew",
      "Zero Sugar"
    ],
    "image": "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=600&q=80",
    "alt": "Iced Americano"
  },
  {
    "id": "item-33",
    "name": "Iced Latte",
    "category": "cold-beverages",
    "subCategory": "Chilled Milk Brew",
    "price": 200,
    "tag": "All-Day Fav",
    "dietary": "non-veg",
    "description": "Fresh espresso poured gently over cold whole milk and ice, creating smooth coffee-milk layers.",
    "details": [
      "Creamy Layers",
      "Tall Glass"
    ],
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
    "alt": "Iced Latte"
  },
  {
    "id": "item-34",
    "name": "Iced Cappuccino",
    "category": "cold-beverages",
    "subCategory": "Cold Foam",
    "price": 200,
    "tag": "Frothy",
    "dietary": "non-veg",
    "description": "Chilled espresso and milk crowned with a thick velvety layer of cold aerated milk foam.",
    "details": [
      "Cold Micro-foam",
      "Crisp Chill"
    ],
    "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80",
    "alt": "Iced Cappuccino"
  },
  {
    "id": "item-35",
    "name": "Iced Mocha",
    "category": "cold-beverages",
    "subCategory": "Chocolate Chill",
    "price": 220,
    "tag": "Popular",
    "dietary": "non-veg",
    "description": "Rich dark chocolate and cold espresso combined over ice with fresh milk and chocolate swirl.",
    "details": [
      "Dark Chocolate",
      "Cold & Rich"
    ],
    "image": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
    "alt": "Iced Mocha"
  },
  {
    "id": "item-36",
    "name": "Iced Caramel Macchiato",
    "category": "cold-beverages",
    "subCategory": "Layered Chill",
    "price": 310,
    "tag": "Summer Fav",
    "dietary": "non-veg",
    "description": "Chilled vanilla milk marked with espresso shot and generous golden buttery caramel drizzle.",
    "details": [
      "Salted Caramel",
      "High Energy"
    ],
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDNjPKlqKtESQ0TETpEvAJ6w_PSCQk9WgAA1Jgc4uHzJoZ09hVO10rICprzoG_ZB8gMYCO23wsuw-CQV0X0VvgsdhD3Y5eCXnqJGkFbUj2EZ4nLeyMkKTkPZnm92CqElBheeuEToElHeY9b_110tlgan7d383KkzKtSMQTFxQbL1heAHP0ZZ0M4-u3hl2cdUpx7-OUCjgjAi3OT0QSz4-fRL6cH04idkadg3soDM8gnkUMfW_UD4cSA",
    "alt": "Iced Caramel Macchiato"
  },
  {
    "id": "item-37",
    "name": "Iced Mocha Madness",
    "category": "cold-beverages",
    "subCategory": "Signature Shake",
    "price": 360,
    "tag": "Ultimate Treat",
    "dietary": "non-veg",
    "description": "Our show-stopping iced creation with double espresso, blended chocolate fudge, whipped cream and cocoa.",
    "details": [
      "Loaded Fudge",
      "House Signature"
    ],
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    "alt": "Iced Mocha Madness"
  },
  {
    "id": "item-38",
    "name": "Classic Mojito",
    "category": "shakes-lassi",
    "subCategory": "Virgin Mojito",
    "price": 210,
    "tag": "Refreshing",
    "dietary": "non-veg",
    "description": "Fresh mountain garden mint leaves muddled with lime wedges, cane sugar syrup, and fizzy soda over ice.",
    "details": [
      "Fresh Mint",
      "Lime & Soda"
    ],
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
    "alt": "Classic Mojito"
  },
  {
    "id": "item-39",
    "name": "Fruit Crush Mojito",
    "category": "shakes-lassi",
    "subCategory": "Specialty Mojito",
    "price": 285,
    "tag": "Signature Chill",
    "dietary": "non-veg",
    "description": "Crushed seasonal fresh fruits, muddled fresh mint, citrus juice and sparkling soda poured over ice.",
    "details": [
      "Crushed Fruits",
      "Muddled Mint"
    ],
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    "alt": "Fruit Crush Mojito"
  },
  {
    "id": "item-4",
    "name": "Artisan Butter Croissant",
    "category": "bakery",
    "subCategory": "Pastry",
    "price": 220,
    "tag": "Fresh Baked",
    "dietary": "non-veg",
    "description": "Flaky, multi-layered golden French pastry baked fresh daily at 6:30 AM with creamy alpine butter.",
    "details": [
      "🥐 Hand-rolled",
      "✨ Warm Served"
    ],
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    "alt": "Artisan Butter Croissant"
  },
  {
    "id": "item-40",
    "name": "Hot Chocolate",
    "category": "shakes-lassi",
    "subCategory": "Warm Comfort",
    "price": 200,
    "tag": "Comforting",
    "dietary": "non-veg",
    "description": "Velvety melted dark cocoa simmered with fresh whole milk and a hint of vanilla warmth.",
    "details": [
      "Pure Cocoa",
      "Hot Mug"
    ],
    "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=600&q=80",
    "alt": "Hot Chocolate"
  },
  {
    "id": "item-41",
    "name": "Milk Shake (Choc / Van / Straw)",
    "category": "shakes-lassi",
    "subCategory": "Classic Shake",
    "price": 250,
    "tag": "Creamy Classic",
    "dietary": "non-veg",
    "description": "Thick, creamy milkshake blended with premium dairy ice cream in your choice of Chocolate, Vanilla, or Strawberry.",
    "details": [
      "Ice Cream Blended",
      "3 Flavor Choices"
    ],
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    "alt": "Milk Shake (Choc / Van / Straw)"
  },
  {
    "id": "item-42",
    "name": "Blended Oreo Shake",
    "category": "shakes-lassi",
    "subCategory": "Oreo Shake",
    "price": 295,
    "tag": "Top Favorite",
    "dietary": "non-veg",
    "description": "Crisp Oreo cookies crushed and blended with rich vanilla ice cream, whole milk, and dark chocolate drizzle.",
    "details": [
      "Real Oreo Cookies",
      "Chocolate Swirl"
    ],
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "alt": "Blended Oreo Shake"
  },
  {
    "id": "item-43",
    "name": "Oreo Shake",
    "category": "shakes-lassi",
    "subCategory": "Classic Shake",
    "price": 280,
    "tag": "Popular",
    "dietary": "non-veg",
    "description": "Rich creamy vanilla shake infused with crunchy chocolate Oreo cookie crumbles.",
    "details": [
      "Oreo Bits",
      "Rich Cream"
    ],
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    "alt": "Oreo Shake"
  },
  {
    "id": "item-44",
    "name": "Kitkat Shake",
    "category": "shakes-lassi",
    "subCategory": "Candy Shake",
    "price": 240,
    "tag": "Chocolate Crunch",
    "dietary": "non-veg",
    "description": "Crispy KitKat wafer bars blended with velvety ice cream and chocolate sauce.",
    "details": [
      "KitKat Bars",
      "Wafer Crunch"
    ],
    "image": "https://images.unsplash.com/photo-1579888944880-d98341245702?auto=format&fit=crop&w=600&q=80",
    "alt": "Kitkat Shake"
  },
  {
    "id": "item-45",
    "name": "Blueberry Milk Shake",
    "category": "shakes-lassi",
    "subCategory": "Berry Shake",
    "price": 280,
    "tag": "Fruity Delight",
    "dietary": "non-veg",
    "description": "Wild blueberries blended smoothly with vanilla ice cream and whole milk for a rich berry treat.",
    "details": [
      "🫐 Real Blueberries",
      "Creamy Blend"
    ],
    "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    "alt": "Blueberry Milk Shake"
  },
  {
    "id": "item-46",
    "name": "Mint Lemonade",
    "category": "shakes-lassi",
    "subCategory": "Citrus Cooler",
    "price": 190,
    "tag": "Zesty Refresher",
    "dietary": "non-veg",
    "description": "Freshly squeezed lemon juice, muddled wild mint, cane syrup, and chilled soda water.",
    "details": [
      "Fresh Lemons",
      "Garden Mint"
    ],
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    "alt": "Mint Lemonade"
  },
  {
    "id": "item-47",
    "name": "Ice Tea (Peach & Lemon)",
    "category": "shakes-lassi",
    "subCategory": "Iced Tea",
    "price": 180,
    "tag": "Cool Brew",
    "dietary": "non-veg",
    "description": "Slow-steeped Himalayan black tea served cold over ice with natural sweet peach and freshly squeezed lemon.",
    "details": [
      "Peach Essence",
      "Fresh Lemon"
    ],
    "image": "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&w=600&q=80",
    "alt": "Ice Tea (Peach & Lemon)"
  },
  {
    "id": "item-48",
    "name": "Masala Cold Drinks",
    "category": "shakes-lassi",
    "subCategory": "Spiced Soda",
    "price": 140,
    "tag": "Nepali Zing",
    "dietary": "non-veg",
    "description": "Chilled soda spiked with roasted cumin, chaat masala, rock salt, and tangy fresh lemon juice.",
    "details": [
      "Rock Salt & Cumin",
      "Lemon Zing"
    ],
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    "alt": "Masala Cold Drinks"
  },
  {
    "id": "item-49",
    "name": "Cranberry Juice",
    "category": "shakes-lassi",
    "subCategory": "Fruit Juice",
    "price": 130,
    "tag": "Tart & Sweet",
    "dietary": "non-veg",
    "description": "Crisp, chilled red cranberry juice served tall with crystal ice.",
    "details": [
      "Pure Cranberry",
      "Chilled Glass"
    ],
    "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80",
    "alt": "Cranberry Juice"
  },
  {
    "id": "item-5",
    "name": "Cascara Sparkling Cold Brew",
    "category": "cold",
    "subCategory": "Refresher",
    "price": 330,
    "tag": "Specialty",
    "dietary": "non-veg",
    "description": "Infused with organic coffee cherry peel, tonic water, and a twist of local fresh lime over crystal ice.",
    "details": [
      "🍋 Citrus Zest",
      "🧊 Light Fizz"
    ],
    "image": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
    "alt": "Cascara Sparkling Cold Brew"
  },
  {
    "id": "item-50",
    "name": "Cold Drinks (Coke / Fanta / Sprite)",
    "category": "shakes-lassi",
    "subCategory": "Soft Drink",
    "price": 100,
    "tag": "Chilled Can",
    "dietary": "non-veg",
    "description": "Your choice of chilled Coke, Fanta, or Sprite served over ice cubes with lemon slice.",
    "details": [
      "Choice of Soda",
      "Served Over Ice"
    ],
    "image": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    "alt": "Cold Drinks (Coke / Fanta / Sprite)"
  },
  {
    "id": "item-51",
    "name": "Smoothies in Crunch Strawberry",
    "category": "shakes-lassi",
    "subCategory": "Fruit Smoothie",
    "price": 260,
    "tag": "Crunchy",
    "dietary": "non-veg",
    "description": "Thick real strawberry fruit smoothie blended with crushed ice, topped with crispy crunchy pearls.",
    "details": [
      "Real Strawberries",
      "Crunchy Topping"
    ],
    "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    "alt": "Smoothies in Crunch Strawberry"
  },
  {
    "id": "item-52",
    "name": "Smoothies in Crunch Mango",
    "category": "shakes-lassi",
    "subCategory": "Fruit Smoothie",
    "price": 260,
    "tag": "Tropical",
    "dietary": "non-veg",
    "description": "Tropical ripe mango pulp blended rich and thick, finished with crunchy roasted granola crunch.",
    "details": [
      "Sweet Mango",
      "Granola Crunch"
    ],
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "alt": "Smoothies in Crunch Mango"
  },
  {
    "id": "item-53",
    "name": "Smoothies in Crunch Blueberry",
    "category": "shakes-lassi",
    "subCategory": "Fruit Smoothie",
    "price": 285,
    "tag": "Antioxidant",
    "dietary": "non-veg",
    "description": "Lush dark blueberries blended with natural mountain yogurt, honey, and a crunch topping.",
    "details": [
      "🫐 Wild Blueberry",
      "Mountain Yogurt"
    ],
    "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    "alt": "Smoothies in Crunch Blueberry"
  },
  {
    "id": "item-54",
    "name": "Smoothies in Seasonal Fruits",
    "category": "shakes-lassi",
    "subCategory": "Fruit Smoothie",
    "price": 365,
    "tag": "Chef Deluxe",
    "dietary": "non-veg",
    "description": "Loaded deluxe smoothie crafted from a vibrant medley of fresh seasonal Himalayan fruits and honey.",
    "details": [
      "Multi-fruit Blend",
      "Pure Honey"
    ],
    "image": "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=600&q=80",
    "alt": "Smoothies in Seasonal Fruits"
  },
  {
    "id": "item-55",
    "name": "Vanilla Frappe",
    "category": "shakes-lassi",
    "subCategory": "Blended Coffee",
    "price": 350,
    "tag": "Smooth & Rich",
    "dietary": "non-veg",
    "description": "Iced espresso blended with Madagascar vanilla syrup, chilled milk, and whipped cream topping.",
    "details": [
      "Espresso Blend",
      "French Vanilla"
    ],
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    "alt": "Vanilla Frappe"
  },
  {
    "id": "item-56",
    "name": "Hazelnut Frappe",
    "category": "shakes-lassi",
    "subCategory": "Blended Coffee",
    "price": 280,
    "tag": "Nutty Note",
    "dietary": "non-veg",
    "description": "Roasted hazelnut syrup blended with chilled double espresso, milk, and crushed ice.",
    "details": [
      "Roasted Hazelnut",
      "Double Espresso"
    ],
    "image": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=600&q=80",
    "alt": "Hazelnut Frappe"
  },
  {
    "id": "item-57",
    "name": "Caramel Frappe",
    "category": "shakes-lassi",
    "subCategory": "Blended Coffee",
    "price": 290,
    "tag": "Caramel Swirl",
    "dietary": "non-veg",
    "description": "Smooth coffee frappe blended with buttery caramel sauce and topped with golden caramel drizzle.",
    "details": [
      "Golden Caramel",
      "Blended Cold"
    ],
    "image": "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80",
    "alt": "Caramel Frappe"
  },
  {
    "id": "item-58",
    "name": "Oreo Frappe",
    "category": "shakes-lassi",
    "subCategory": "Blended Coffee",
    "price": 300,
    "tag": "Cookie Blend",
    "dietary": "non-veg",
    "description": "Blended iced coffee mixed with crunchy Oreo cookies and chocolate syrup drizzle.",
    "details": [
      "Crushed Oreo",
      "Coffee Infused"
    ],
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "alt": "Oreo Frappe"
  },
  {
    "id": "item-59",
    "name": "Choco Mint Frappe",
    "category": "shakes-lassi",
    "subCategory": "Blended Coffee",
    "price": 320,
    "tag": "Cooling",
    "dietary": "non-veg",
    "description": "A cooling combination of dark chocolate, refreshing garden mint, and chilled espresso.",
    "details": [
      "Dark Chocolate",
      "Cooling Mint"
    ],
    "image": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80",
    "alt": "Choco Mint Frappe"
  },
  {
    "id": "item-6",
    "name": "Chocolate Babka Brioche",
    "category": "bakery",
    "subCategory": "House Special",
    "price": 260,
    "tag": "Sweet Treat",
    "dietary": "non-veg",
    "description": "Braided sweet yeast bread swirled with 70% dark Himalayan cocoa and fragrant Ceylon cinnamon syrup.",
    "details": [
      "🍫 Dark Chocolate",
      "🍯 Honey Glaze"
    ],
    "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    "alt": "Chocolate Babka Brioche"
  },
  {
    "id": "item-60",
    "name": "Mocha Frappe",
    "category": "shakes-lassi",
    "subCategory": "Blended Coffee",
    "price": 360,
    "tag": "Decadent",
    "dietary": "non-veg",
    "description": "Ice-blended espresso and Belgian chocolate with whipped cream and cocoa shavings.",
    "details": [
      "Belgian Chocolate",
      "Double Espresso"
    ],
    "image": "https://images.unsplash.com/photo-1579888944880-d98341245702?auto=format&fit=crop&w=600&q=80",
    "alt": "Mocha Frappe"
  },
  {
    "id": "item-61",
    "name": "Plain Lassi",
    "category": "shakes-lassi",
    "subCategory": "Nepali Lassi",
    "price": 150,
    "tag": "Traditional",
    "dietary": "non-veg",
    "description": "Authentic curd churned traditional style with a pinch of roasted cumin and Himalayan salt.",
    "details": [
      "Fresh Curd",
      "Refreshing"
    ],
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "alt": "Plain Lassi"
  },
  {
    "id": "item-62",
    "name": "Sweet Lassi",
    "category": "shakes-lassi",
    "subCategory": "Nepali Lassi",
    "price": 170,
    "tag": "Popular",
    "dietary": "non-veg",
    "description": "Traditional sweet yogurt beverage churned thick and chilled with aromatic green cardamom.",
    "details": [
      "Thick Sweet Curd",
      "Green Cardamom"
    ],
    "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    "alt": "Sweet Lassi"
  },
  {
    "id": "item-63",
    "name": "Banana Lassi",
    "category": "shakes-lassi",
    "subCategory": "Nepali Lassi",
    "price": 190,
    "tag": "Energy Booster",
    "dietary": "non-veg",
    "description": "Ripe bananas blended with thick mountain yogurt and natural honey for a wholesome treat.",
    "details": [
      "Sweet Bananas",
      "Natural Honey"
    ],
    "image": "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?auto=format&fit=crop&w=600&q=80",
    "alt": "Banana Lassi"
  },
  {
    "id": "item-64",
    "name": "Vanilla Lassi",
    "category": "shakes-lassi",
    "subCategory": "Nepali Lassi",
    "price": 180,
    "tag": "Delicate",
    "dietary": "non-veg",
    "description": "Creamy churned yogurt flavored with pure vanilla extract and crushed ice.",
    "details": [
      "Vanilla Scent",
      "Creamy Texture"
    ],
    "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    "alt": "Vanilla Lassi"
  },
  {
    "id": "item-65",
    "name": "Chocolate Lassi",
    "category": "shakes-lassi",
    "subCategory": "Nepali Lassi",
    "price": 200,
    "tag": "Fusion Delight",
    "dietary": "non-veg",
    "description": "A delicious fusion of fresh mountain curd and molten chocolate fudge syrup.",
    "details": [
      "Chocolate Fudge",
      "Fresh Curd"
    ],
    "image": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    "alt": "Chocolate Lassi"
  },
  {
    "id": "item-66",
    "name": "Strawberry Lassi",
    "category": "shakes-lassi",
    "subCategory": "Nepali Lassi",
    "price": 200,
    "tag": "Berry Sweet",
    "dietary": "non-veg",
    "description": "Fresh local strawberries blended with rich mountain yogurt and served chilled.",
    "details": [
      "Strawberry Puree",
      "Churned Curd"
    ],
    "image": "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80",
    "alt": "Strawberry Lassi"
  },
  {
    "id": "item-67",
    "name": "Plain Toast (2 pcs)",
    "category": "breakfast",
    "subCategory": "Toasts & Breads",
    "price": 80,
    "tag": "Crisp & Warm",
    "dietary": "non-veg",
    "description": "Two slices of freshly browned golden toasted artisan bread served warm and crisp.",
    "details": [
      "2 Slices",
      "Warm & Crispy"
    ],
    "image": "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=600&q=80",
    "alt": "Plain Toast (2 pcs)"
  },
  {
    "id": "item-68",
    "name": "Butter Toast",
    "category": "breakfast",
    "subCategory": "Toasts & Breads",
    "price": 120,
    "tag": "Morning Classic",
    "dietary": "non-veg",
    "description": "Golden toasted artisan bread slices generously slathered with rich melting dairy butter.",
    "details": [
      "Creamy Dairy Butter",
      "2 Crisp Slices"
    ],
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    "alt": "Butter Toast"
  },
  {
    "id": "item-69",
    "name": "French Toast",
    "category": "breakfast",
    "subCategory": "Sweet Breakfast",
    "price": 150,
    "tag": "Sweet Favorite",
    "dietary": "non-veg",
    "description": "Thick sliced bread dipped in a vanilla-cinnamon egg custard and griddled to golden caramel perfection.",
    "details": [
      "Cinnamon & Honey",
      "Egg Custard Dipped"
    ],
    "image": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80",
    "alt": "French Toast"
  },
  {
    "id": "item-7",
    "name": "Espresso",
    "category": "hot-beverages",
    "subCategory": "Espresso Bar",
    "price": 110,
    "tag": "Classic",
    "dietary": "non-veg",
    "description": "Concentrated single shot pulled with golden hazelnut crema from shade-grown high-altitude Arabica beans.",
    "details": [
      "Pure Arabica",
      "Hot (1.5oz)"
    ],
    "image": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80",
    "alt": "Espresso"
  },
  {
    "id": "item-70",
    "name": "Plain Omelet",
    "category": "breakfast",
    "subCategory": "Fresh Farm Eggs",
    "price": 80,
    "tag": "High Protein",
    "dietary": "non-veg",
    "description": "Light and fluffy two-egg pan-folded omelet lightly seasoned with rock salt and ground black pepper.",
    "details": [
      "2 Farm Eggs",
      "Pan Folded Fluffy"
    ],
    "image": "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=600&q=80",
    "alt": "Plain Omelet"
  },
  {
    "id": "item-71",
    "name": "Masala Omelet",
    "category": "breakfast",
    "subCategory": "Fresh Farm Eggs",
    "price": 120,
    "tag": "Nepali Style",
    "dietary": "non-veg",
    "description": "Whipped double egg omelet loaded with finely chopped red onions, crisp green chilies, fresh coriander, and spices.",
    "details": [
      "Green Chilly & Herbs",
      "2 Farm Eggs"
    ],
    "image": "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80",
    "alt": "Masala Omelet"
  },
  {
    "id": "item-72",
    "name": "Sunny Side-Up",
    "category": "breakfast",
    "subCategory": "Fresh Farm Eggs",
    "price": 80,
    "tag": "Runny Yolk",
    "dietary": "non-veg",
    "description": "Fresh skillet-fried farm egg with tender whites and delicate runny golden yolk, sprinkled with black pepper.",
    "details": [
      "Runny Yolk",
      "Quick Protein"
    ],
    "image": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
    "alt": "Sunny Side-Up"
  },
  {
    "id": "item-73",
    "name": "Boiled Eggs",
    "category": "breakfast",
    "subCategory": "Fresh Farm Eggs",
    "price": 80,
    "tag": "Wholesome",
    "dietary": "non-veg",
    "description": "Two freshly boiled high-altitude farm eggs halved and served with Himalayan black salt and cracked pepper.",
    "details": [
      "2 Boiled Eggs",
      "Himalayan Rock Salt"
    ],
    "image": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80",
    "alt": "Boiled Eggs"
  },
  {
    "id": "item-74",
    "name": "Fried Egg",
    "category": "breakfast",
    "subCategory": "Fresh Farm Eggs",
    "price": 80,
    "tag": "Crispy Edges",
    "dietary": "non-veg",
    "description": "Sizzling pan-fried egg with crispy golden lacy edges, tender whites, and soft center.",
    "details": [
      "Crispy Lacy Edges",
      "Sizzling Skillet"
    ],
    "image": "https://images.unsplash.com/photo-1518492104633-130d0cc84637?auto=format&fit=crop&w=600&q=80",
    "alt": "Fried Egg"
  },
  {
    "id": "item-75",
    "name": "Scrambled Egg",
    "category": "breakfast",
    "subCategory": "Fresh Farm Eggs",
    "price": 100,
    "tag": "Velvety Soft",
    "dietary": "non-veg",
    "description": "Slow-cooked creamy scrambled eggs folded gently with fresh dairy butter and chives.",
    "details": [
      "Butter Folded",
      "Silky & Soft"
    ],
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    "alt": "Scrambled Egg"
  },
  {
    "id": "item-76",
    "name": "Coffee Adda Special Breakfast Platter",
    "category": "breakfast",
    "subCategory": "Grand Breakfast Combo",
    "price": 650,
    "tag": "Grand Feast",
    "dietary": "non-veg",
    "description": "The ultimate morning feast: Toasted artisan bread + choice of 2 savory sausages or bacon + 2 eggs (boiled or fried) + crispy garlic potatoes + dairy butter + sweet fruit jam + fresh seasonal fruit bowl.",
    "details": [
      "Toast + Butter/Jam",
      "2 Eggs + 2 Sausages/Bacon",
      "Crispy Garlic Potato",
      "Seasonal Fruit Bowl"
    ],
    "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80",
    "alt": "Coffee Adda Special Breakfast Platter"
  },
  {
    "id": "item-77",
    "name": "Chicken Burger",
    "category": "burgers-sandwiches",
    "subCategory": "Gourmet Burger",
    "price": 290,
    "tag": "Bestseller",
    "dietary": "non-veg",
    "description": "Juicy seasoned chicken patty grilled to perfection, melted cheddar cheese, crisp lettuce, tomato & house sauce.",
    "details": [
      "Juicy Patty",
      "Cheddar Melt"
    ],
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "alt": "Chicken Burger"
  },
  {
    "id": "item-78",
    "name": "Egg Burger",
    "category": "burgers-sandwiches",
    "subCategory": "Quick Burger",
    "price": 250,
    "tag": "Protein Rich",
    "dietary": "non-veg",
    "description": "Golden fried egg layered with caramelized onions, fresh garden greens, sliced tomatoes and tangy herb mayo.",
    "details": [
      "Farm Fresh Egg",
      "Toasted Bun"
    ],
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    "alt": "Egg Burger"
  },
  {
    "id": "item-79",
    "name": "Veg Burger",
    "category": "burgers-sandwiches",
    "subCategory": "Crispy Veg",
    "price": 150,
    "tag": "Budget Friendly",
    "dietary": "veg",
    "description": "Crispy spiced vegetable patty loaded with cucumber, tomato, fresh lettuce, and signature mayonnaise.",
    "details": [
      "Crispy Veg Patty",
      "Garden Fresh"
    ],
    "image": "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=600&q=80",
    "alt": "Veg Burger"
  },
  {
    "id": "item-8",
    "name": "Doppio",
    "category": "hot-beverages",
    "subCategory": "Espresso Bar",
    "price": 130,
    "tag": "Double Shot",
    "dietary": "non-veg",
    "description": "Bold double shot of concentrated espresso offering intense aroma and deep dark cocoa tasting notes.",
    "details": [
      "Double Shot",
      "High Caffeine"
    ],
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    "alt": "Doppio"
  },
  {
    "id": "item-80",
    "name": "Veg Cheese Sandwich",
    "category": "burgers-sandwiches",
    "subCategory": "Toasted Sandwich",
    "price": 180,
    "tag": "Cheesy",
    "dietary": "veg",
    "description": "Golden toasted artisan bread filled with fresh vegetables, house butter, and rich melted mozzarella cheese.",
    "details": [
      "Melted Mozzarella",
      "Grilled Crisp"
    ],
    "image": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    "alt": "Veg Cheese Sandwich"
  },
  {
    "id": "item-81",
    "name": "Chicken Sandwich",
    "category": "burgers-sandwiches",
    "subCategory": "Toasted Sandwich",
    "price": 210,
    "tag": "Popular",
    "dietary": "non-veg",
    "description": "Tender spiced shredded chicken tossed with savory dressing, black pepper, and crisp lettuce in toasted bread.",
    "details": [
      "Shredded Chicken",
      "Spiced Dressing"
    ],
    "image": "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=600&q=80",
    "alt": "Chicken Sandwich"
  },
  {
    "id": "item-82",
    "name": "Egg Sandwich",
    "category": "burgers-sandwiches",
    "subCategory": "Toasted Sandwich",
    "price": 200,
    "tag": "Classic",
    "dietary": "non-veg",
    "description": "Fluffy farm-fresh egg omelette seasoned with Himalayan herbs, sandwiched inside warm toasted bread slices.",
    "details": [
      "Farm Egg Omelette",
      "Warm Toasted"
    ],
    "image": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    "alt": "Egg Sandwich"
  },
  {
    "id": "item-83",
    "name": "Veg Mo:Mo Platter",
    "category": "momo-platters",
    "subCategory": "25 Pcs Feast",
    "price": 600,
    "tag": "Sharing Feast",
    "dietary": "veg",
    "description": "Grand 25 pcs tasting platter: 5 pcs Steamed + 5 pcs Fried + 5 pcs Sadheko + 5 pcs Kothey + 5 pcs Chilly Mo:Mo with spicy chutney.",
    "details": [
      "25 Pieces Total",
      "5 Styles in One"
    ],
    "image": "https://images.unsplash.com/photo-1625398407796-82650a8c135f?auto=format&fit=crop&w=600&q=80",
    "alt": "Veg Mo:Mo Platter"
  },
  {
    "id": "item-84",
    "name": "Buff Mo:Mo Platter",
    "category": "momo-platters",
    "subCategory": "25 Pcs Feast",
    "price": 640,
    "tag": "Local Favorite",
    "dietary": "non-veg",
    "description": "Authentic 25 pcs buff extravaganza: 5 Steamed + 5 Deep Fried + 5 Pungent Sadheko + 5 Pan-fried Kothey + 5 Spicy Chilly Mo:Mo.",
    "details": [
      "25 Pieces Buff",
      "Includes Sadheko & Chilly"
    ],
    "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
    "alt": "Buff Mo:Mo Platter"
  },
  {
    "id": "item-85",
    "name": "Chicken Mo:Mo Platter",
    "category": "momo-platters",
    "subCategory": "25 Pcs Feast",
    "price": 660,
    "tag": "Chef Signature",
    "dietary": "non-veg",
    "description": "The ultimate chicken lover feast: 5 Steamed + 5 Fried + 5 Tangy Sadheko + 5 Crispy Kothey + 5 Fiery Chilly Chicken Mo:Mo.",
    "details": [
      "25 Pieces Chicken",
      "Perfect for Groups"
    ],
    "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80",
    "alt": "Chicken Mo:Mo Platter"
  },
  {
    "id": "item-86",
    "name": "Current Platter",
    "category": "momo-platters",
    "subCategory": "Spicy Combo",
    "price": 420,
    "tag": "Hot & Spicy",
    "dietary": "non-veg",
    "description": "2 Packets of fiery Current Noodles wok-tossed and served with 2 Fried Eggs, 2 Savory Sausages, and fresh crisp garden salad.",
    "details": [
      "2x Current Noodles",
      "2 Eggs + 2 Sausages"
    ],
    "image": "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80",
    "alt": "Current Platter"
  },
  {
    "id": "item-87",
    "name": "Spaghetti Carbonara",
    "category": "pasta-corndogs",
    "subCategory": "Classic Italian Pasta",
    "price": 500,
    "tag": "House Premium",
    "dietary": "non-veg",
    "description": "Silky al dente spaghetti twirled in rich egg yolk cream sauce, aged parmesan cheese, cracked black peppercorns, and savory crispy bits.",
    "details": [
      "Al Dente Spaghetti",
      "Aged Parmesan & Cream"
    ],
    "image": "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=600&q=80",
    "alt": "Spaghetti Carbonara"
  },
  {
    "id": "item-88",
    "name": "Chicken Bolognese",
    "category": "pasta-corndogs",
    "subCategory": "Slow Simmered Ragù",
    "price": 420,
    "tag": "Hearty Meat Sauce",
    "dietary": "non-veg",
    "description": "Slow-cooked minced chicken simmered in rich San Marzano tomato sauce with aromatic garlic, basil, and Italian oregano over pasta.",
    "details": [
      "Minced Chicken Ragù",
      "Italian Herb Tomato"
    ],
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    "alt": "Chicken Bolognese"
  },
  {
    "id": "item-89",
    "name": "Arrabbiata",
    "category": "pasta-corndogs",
    "subCategory": "Fiery Red Sauce",
    "price": 350,
    "tag": "Spicy & Zesty",
    "dietary": "non-veg",
    "description": "Tender pasta tossed in fiery red tomato sauce infused with toasted red chilies, garlic slivers, olive oil, and fresh basil leaves.",
    "details": [
      "Spicy Red Chili",
      "Fresh Basil & Garlic"
    ],
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    "alt": "Arrabbiata"
  },
  {
    "id": "item-9",
    "name": "Americano Single Shot",
    "category": "hot-beverages",
    "subCategory": "Black Coffee",
    "price": 130,
    "tag": "Smooth",
    "dietary": "non-veg",
    "description": "Classic single shot espresso lengthened with hot mountain water for a clean, aromatic finish.",
    "details": [
      "Hot Water Dilution",
      "Hot (8oz)"
    ],
    "image": "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=600&q=80",
    "alt": "Americano Single Shot"
  },
  {
    "id": "item-90",
    "name": "Pasta Alfredo",
    "category": "pasta-corndogs",
    "subCategory": "Velvety White Sauce",
    "price": 400,
    "tag": "Rich & Creamy",
    "dietary": "non-veg",
    "description": "Decadent creamy white sauce made from fresh dairy cream, butter, and grated parmesan tossed with al dente pasta and herbs.",
    "details": [
      "Dairy Cream & Butter",
      "Grated Parmesan"
    ],
    "image": "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80",
    "alt": "Pasta Alfredo"
  },
  {
    "id": "item-91",
    "name": "Corn Dog (Classic Non-Veg / Veg)",
    "category": "pasta-corndogs",
    "subCategory": "Street Corn Dog",
    "price": 160,
    "tag": "Crispy Skewer",
    "dietary": "veg",
    "description": "Juicy sausage or spiced filling dipped in sweet golden cornmeal batter, deep-fried until crisp and drizzled with mustard and ketchup.",
    "details": [
      "Crispy Corn Crust",
      "Ketchup & Mustard Dip"
    ],
    "image": "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=600&q=80",
    "alt": "Corn Dog (Classic Non-Veg / Veg)"
  },
  {
    "id": "item-92",
    "name": "Cheese Corn Dog",
    "category": "pasta-corndogs",
    "subCategory": "Molten Mozzarella",
    "price": 180,
    "tag": "Epic Cheese Pull",
    "dietary": "non-veg",
    "description": "Thick block of creamy mozzarella cheese enclosed in crunchy sweet cornmeal batter, fried golden with epic stretchy cheese pull.",
    "details": [
      "Stretchy Mozzarella",
      "Crunchy Golden Crust"
    ],
    "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    "alt": "Cheese Corn Dog"
  },
  {
    "id": "item-93",
    "name": "Plain Laphing (Jhol / Dry)",
    "category": "laphing",
    "subCategory": "Tibetan Cold Jelly",
    "price": 65,
    "tag": "Street Classic",
    "dietary": "non-veg",
    "description": "Traditional silky cold mung bean jelly roll tossed in spicy Sichuan pepper oil, dark soy sauce, crushed garlic, and vinegar. Served in Jhol or Dry style.",
    "details": [
      "Spicy Chili Oil",
      "Jhol or Dry Option"
    ],
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "alt": "Plain Laphing (Jhol / Dry)"
  },
  {
    "id": "item-94",
    "name": "Noodles Laphing (Jhol / Dry)",
    "category": "laphing",
    "subCategory": "Stuffed Laphing",
    "price": 75,
    "tag": "Bestseller",
    "dietary": "non-veg",
    "description": "Silky yellow laphing sheets wrapped around seasoned chewy instant noodles, immersed in fiery garlic-chili vinegar sauce.",
    "details": [
      "Noodle Stuffed",
      "Fiery Garlic Broth"
    ],
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "alt": "Noodles Laphing (Jhol / Dry)"
  },
  {
    "id": "item-95",
    "name": "Chips Laphing (Jhol / Dry)",
    "category": "laphing",
    "subCategory": "Crunchy Fusion",
    "price": 80,
    "tag": "Crunchy Favorite",
    "dietary": "non-veg",
    "description": "Coffee Adda special twist: crisp spiced potato chips rolled snugly inside tender cold laphing with spicy tangy chili sauce.",
    "details": [
      "Crunchy Spiced Chips",
      "Hot & Tangy"
    ],
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "alt": "Chips Laphing (Jhol / Dry)"
  },
  {
    "id": "item-96",
    "name": "Mix Laphing (Jhol / Dry)",
    "category": "laphing",
    "subCategory": "Loaded Combination",
    "price": 85,
    "tag": "All-in-One",
    "dietary": "non-veg",
    "description": "The ultimate laphing bowl loaded with tender gluten jelly, noodles, and crunchy potato chips drenched in spicy Sichuan sauce.",
    "details": [
      "Jelly + Noodles + Chips",
      "Extra Spicy"
    ],
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "alt": "Mix Laphing (Jhol / Dry)"
  },
  {
    "id": "item-97",
    "name": "Chicken Laphing (Jhol / Dry)",
    "category": "laphing",
    "subCategory": "Savory Non-Veg",
    "price": 130,
    "tag": "Savory Special",
    "dietary": "non-veg",
    "description": "Tender spiced minced chicken tucked inside silky cold laphing sheets, dressed in chili-infused garlic vinegar and roasted sesame seeds.",
    "details": [
      "Spiced Minced Chicken",
      "Jhol or Dry Option"
    ],
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",
    "alt": "Chicken Laphing (Jhol / Dry)"
  },
  {
    "id": "item-98",
    "name": "Veg Khaja Set",
    "category": "khaja-mains",
    "subCategory": "Traditional Nepali",
    "price": 250,
    "tag": "Authentic",
    "dietary": "veg",
    "description": "Crisp beaten rice (baji), roasted soybeans (bhatmas), spicy potato curry (aloo sadheko), fresh green salad and house pickles.",
    "details": [
      "Beaten Rice",
      "Bhatmas & Aloo"
    ],
    "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80",
    "alt": "Veg Khaja Set"
  },
  {
    "id": "item-99",
    "name": "Chicken Khaja Set",
    "category": "khaja-mains",
    "subCategory": "Traditional Nepali",
    "price": 280,
    "tag": "Bestseller",
    "dietary": "non-veg",
    "description": "Nepali style spiced chicken curry served with crunchy beaten rice, roasted bhatmas, spiced aloo and tomato chutney.",
    "details": [
      "Chicken Curry",
      "Beaten Rice Platter"
    ],
    "image": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80",
    "alt": "Chicken Khaja Set"
  }
];

export const reviewsData = [
  {
    id: 1,
    rating: 5,
    quote: "Coffee Adda is easily the best cafe in the Budhanilkantha area! Their cappuccino has the silkiest micro-foam and the latte art is top tier. A tranquil oasis to read or work on your laptop.",
    author: "Aarav Sharma",
    role: "Local Guide • 18 reviews",
    initials: "AS",
    avatarBg: "bg-brand-sage text-brand-forest"
  },
  {
    id: 2,
    rating: 5,
    quote: "Such a cosy ambiance with plenty of natural greenery and warm wood tables. The iced cold brew with condensed milk on a sunny afternoon is pure heaven. Friendly baristas too!",
    author: "Pooja Thapa",
    role: "Regular Patron • Budhanilkantha",
    initials: "PT",
    avatarBg: "bg-amber-100 text-amber-900"
  },
  {
    id: 3,
    rating: 5,
    quote: "Fair prices, superb espresso consistency, and wonderful aesthetic vibes. The pastry was warm and buttery. Highly recommended if you are heading towards Shivapuri or living nearby!",
    author: "Rohan Karki",
    role: "Digital Nomad",
    initials: "RK",
    avatarBg: "bg-emerald-100 text-emerald-900"
  }
];

export const CATEGORY_FALLBACK_IMAGES = {
  'coffee-hot': 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
  'cold-beverages': 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
  'tea-special': 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
  'shakes-lassi': 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
  'bakery-breakfast': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
  'momo-special': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
  'chowmein-noodles': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
  'pasta-corndogs': 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
  'burgers-sandwiches': 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  'pizza-laphing': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
  'snacks-sides': 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
  'bar-lounge': 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=600&q=80',
  default: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
};

export const getFallbackImage = (category) => {
  return CATEGORY_FALLBACK_IMAGES[category] || CATEGORY_FALLBACK_IMAGES.default;
};

export const MENU_STORAGE_KEY = 'coffee_adda_menu_items';
export const MENU_BROADCAST_CHANNEL = 'coffee_adda_menu_channel';

export const getStoredMenuItems = () => {
  if (typeof window === 'undefined') return menuItems;
  try {
    const raw = localStorage.getItem(MENU_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Error reading stored menu items:', err);
  }
  return menuItems;
};

export const getStoredMenuItem = (id, fallback = null) => {
  const items = getStoredMenuItems();
  return items.find((item) => item.id === id) || fallback;
};

export const saveStoredMenuItems = (items) => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent('coffee_adda_menu_updated', { detail: items }));

    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const bc = new BroadcastChannel(MENU_BROADCAST_CHANNEL);
        bc.postMessage({ type: 'MENU_UPDATED', items });
        bc.close();
      } catch {
        // Fallback silently if BroadcastChannel is restricted
      }
    }
  } catch (err) {
    console.error('Error saving menu items to storage:', err);
  }
};

export const resetStoredMenuItems = () => {
  if (typeof window === 'undefined') return menuItems;
  try {
    localStorage.removeItem(MENU_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('coffee_adda_menu_updated', { detail: menuItems }));

    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const bc = new BroadcastChannel(MENU_BROADCAST_CHANNEL);
        bc.postMessage({ type: 'MENU_UPDATED', items: menuItems });
        bc.close();
      } catch {}
    }
  } catch (err) {
    console.error('Error resetting stored menu items:', err);
  }
  return menuItems;
};

/**
 * Universally subscribes to menu updates across current window,
 * other browser tabs (via storage event and BroadcastChannel), and direct dispatches.
 */
export const subscribeToMenuUpdates = (callback) => {
  if (typeof window === 'undefined') return () => {};

  const handleCustom = (e) => {
    const updated = e?.detail || getStoredMenuItems();
    callback(updated);
  };

  const handleStorage = (e) => {
    if (!e || e.key === MENU_STORAGE_KEY) {
      callback(getStoredMenuItems());
    }
  };

  let bc = null;
  if (typeof BroadcastChannel !== 'undefined') {
    try {
      bc = new BroadcastChannel(MENU_BROADCAST_CHANNEL);
      bc.onmessage = (event) => {
        if (event?.data?.type === 'MENU_UPDATED') {
          callback(event.data.items || getStoredMenuItems());
        }
      };
    } catch {
      bc = null;
    }
  }

  window.addEventListener('coffee_adda_menu_updated', handleCustom);
  window.addEventListener('storage', handleStorage);

  return () => {
    window.removeEventListener('coffee_adda_menu_updated', handleCustom);
    window.removeEventListener('storage', handleStorage);
    if (bc) {
      try {
        bc.close();
      } catch {}
    }
  };
};

/**
 * Synchronizes client-side menu data with Supabase cloud database if configured,
 * and sets up live real-time WebSocket listening.
 */
export const initMenuWithSupabase = async () => {
  if (typeof window === 'undefined') return null;
  try {
    const { data, error } = await fetchSupabaseMenuItems();
    if (!error && Array.isArray(data) && data.length > 0) {
      saveStoredMenuItems(data);
    }

    // Subscribe to live realtime database updates across all visitors
    if (typeof subscribeToSupabaseMenuChanges === 'function') {
      subscribeToSupabaseMenuChanges((freshItems) => {
        if (Array.isArray(freshItems) && freshItems.length > 0) {
          saveStoredMenuItems(freshItems);
        }
      });
    }

    return data;
  } catch (err) {
    console.warn('Supabase sync notice:', err);
  }
  return null;
};


