/**
 * Product-Level Community Reviews & Guest Food Moments Dataset
 * Allows patrons of Coffee Adda (Budhanilkantha) to review specific dishes
 * and upload photos of themselves eating or enjoying the item.
 */

export const SEED_PRODUCT_REVIEWS = {
  'cold-iced-mocha': [
    {
      id: 'seed-mocha-1',
      authorName: 'Aarav Sharma',
      authorRole: 'Coffee Enthusiast • Budhanilkantha',
      authorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      date: '2 days ago',
      reviewText: 'The Iced Mocha here is hands-down the best in the valley! Thick chocolate drizzle, ice chilled to perfection, and strong high-altitude espresso that doesn’t get washed out by the milk.',
      foodPhoto: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
      foodPhotos: [
        'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
      ],
      foodPhotoCaption: 'Enjoying my ice cold mocha on the garden terrace ✨',
      likes: 12,
    },
    {
      id: 'seed-mocha-2',
      authorName: 'Sunita Maharjan',
      authorRole: 'Remote Designer',
      authorPhoto: null, // Profile photo optional -> shows profile logo!
      rating: 5,
      date: '5 days ago',
      reviewText: 'Worked on my laptop for 3 hours and had this paired with a warm croissant. Rich cocoa taste and very smooth finish. Will be back!',
      foodPhoto: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
      foodPhotos: [
        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
      ],
      foodPhotoCaption: 'Perfect fuel for a morning remote work session at Adda',
      likes: 8,
    },
    {
      id: 'seed-mocha-3',
      authorName: 'Bikash Thapa',
      authorRole: 'Local Patron',
      authorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      date: '1 week ago',
      reviewText: 'Balanced sweetness, not sugary like other places. You actually taste the single origin espresso beans.',
      foodPhoto: null,
      foodPhotos: [],
      likes: 4,
    },
  ],

  'hot-cappuccino': [
    {
      id: 'seed-cap-1',
      authorName: 'Priya Gurung',
      authorRole: 'Barista & Coffee Lover',
      authorPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      date: 'Yesterday',
      reviewText: 'Silky micro-foam with beautiful swan latte art. The Nuwakot Arabica beans give it such a warm nutty hazelnut aroma.',
      foodPhoto: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
      foodPhotos: [
        'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80'
      ],
      foodPhotoCaption: 'Latte art on point today at Coffee Adda! ☕🦢',
      likes: 15,
    },
    {
      id: 'seed-cap-2',
      authorName: 'Suman KC',
      authorRole: 'Weekend Traveler',
      authorPhoto: null, // Profile photo optional -> shows profile logo!
      rating: 5,
      date: '3 days ago',
      reviewText: 'Stopped by on our way back from Shivapuri National Park hike. Hot, comforting, and the foam held all the way to the last sip.',
      foodPhoto: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      foodPhotos: [
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80'
      ],
      foodPhotoCaption: 'Post-hike cappuccino in the sunny courtyard',
      likes: 7,
    },
  ],

  'hot-doppio': [
    {
      id: 'seed-dop-1',
      authorName: 'Rohan Shrestha',
      authorRole: 'Espresso Purist',
      authorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      date: '3 days ago',
      reviewText: 'Tiger-stripe crema was thick and fragrant. Extracted just right without any harsh sourness. True 20g double shot craftsmanship.',
      foodPhoto: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      foodPhotoCaption: 'Golden tiger-stripe crema on this Doppio shot 🔥',
      likes: 9,
    },
    {
      id: 'seed-dop-2',
      authorName: 'Nisha Rai',
      authorRole: 'Adda Regular',
      authorPhoto: null, // Profile photo optional -> shows profile logo!
      rating: 5,
      date: '1 week ago',
      reviewText: 'My everyday morning go-to before starting clinic hours. Bold, intense and leaves a sweet dark chocolate finish.',
      foodPhoto: null,
      likes: 5,
    },
  ],

  'momo-steam-veg': [
    {
      id: 'seed-momo-1',
      authorName: 'Kiran Adhikari',
      authorRole: 'Foodie Explorer',
      authorPhoto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      date: 'Yesterday',
      reviewText: 'Paper-thin translucent wrappers and piping hot vegetable filling. The sesame-tomato achar has the perfect hint of timur and roasted coriander!',
      foodPhoto: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      foodPhotoCaption: 'Steaming hot momo basket with fire yellow achar 🥟🔥',
      likes: 18,
    },
    {
      id: 'seed-momo-2',
      authorName: 'Manish Shrestha',
      authorRole: 'College Student',
      authorPhoto: null,
      rating: 5,
      date: '4 days ago',
      reviewText: 'Huge portion size for Rs. 150. Juicy filling and the chutney was refillable. 10/10!',
      foodPhoto: null,
      likes: 6,
    }
  ],

  'snack-french-fries': [
    {
      id: 'seed-fries-1',
      authorName: 'Deepa Silwal',
      authorRole: 'Snack Enthusiast',
      authorPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      date: '2 days ago',
      reviewText: 'Extra crispy on the outside, fluffy inside! Lightly seasoned and served hot with spicy house dip.',
      foodPhoto: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
      foodPhotoCaption: 'Golden crunch french fries with garlic chili sauce 🍟',
      likes: 11,
    }
  ],

  'bar-beer-budweiser': [
    {
      id: 'seed-beer-1',
      authorName: 'Sanjay Basnet',
      authorRole: 'Evening Guest',
      authorPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      date: '3 days ago',
      reviewText: 'Served ice chilled with cold frosted glassware. Perfect after sunset on the open balcony with some spicy peanut sadheko.',
      foodPhoto: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
      foodPhotoCaption: 'Chilling out with cold beers on the balcony 🍻',
      likes: 14,
    }
  ]
};

// Generic category seed reviews so every single item has authentic community engagement
export const CATEGORY_DEFAULT_REVIEWS = {
  'coffee-hot': [
    {
      id: 'cat-coffee-1',
      authorName: 'Anil Ghimire',
      authorRole: 'Coffee Adda Regular',
      authorPhoto: null, // Profile photo optional -> shows profile logo!
      rating: 5,
      date: '3 days ago',
      reviewText: 'Authentic high-altitude Nepali coffee extracted with precision. Warm, aromatic and served with genuine smiles from the baristas.',
      foodPhoto: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      foodPhotoCaption: 'Fresh brew at our favorite corner table ☕',
      likes: 6,
    }
  ],
  'cold-beverages': [
    {
      id: 'cat-cold-1',
      authorName: 'Sabina KC',
      authorRole: 'Summer Drink Lover',
      authorPhoto: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      date: '4 days ago',
      reviewText: 'So refreshing and properly chilled. The balance of flavor and coolness hits right on warm Kathmandu afternoons.',
      foodPhoto: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
      foodPhotoCaption: 'Cooling down with this iced delight 🧊',
      likes: 5,
    }
  ],
  'tea-special': [
    {
      id: 'cat-tea-1',
      authorName: 'Kabita Poudel',
      authorRole: 'Chiya Enthusiast',
      authorPhoto: null,
      rating: 5,
      date: '5 days ago',
      reviewText: 'Aromatic whole mountain spices boiled to perfection. Gives you that true nostalgic feeling of slow evenings.',
      foodPhoto: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
      foodPhotoCaption: 'Warm spiced chiya in the mountain breeze 🫖',
      likes: 9,
    }
  ],
  'snacks-sides': [
    {
      id: 'cat-snack-1',
      authorName: 'Prabhat Rijal',
      authorRole: 'Food Explorer',
      authorPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
      rating: 5,
      date: 'Just recently',
      reviewText: 'Fresh, crunchy, and packed with authentic Nepali spices. Goes so well with either cold drinks or a hot beverage.',
      foodPhoto: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
      foodPhotoCaption: 'Can’t stop munching on this! 😋',
      likes: 8,
    }
  ],
  default: [
    {
      id: 'cat-def-1',
      authorName: 'Adda Patron',
      authorRole: 'Verified Guest',
      authorPhoto: null, // Profile photo optional -> shows profile logo!
      rating: 5,
      date: 'Recently',
      reviewText: 'Freshly prepared right after ordering. Great taste, generous portion, and served in the cozy ambiance of Budhanilkantha.',
      foodPhoto: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
      foodPhotoCaption: 'Great food, great vibes at Coffee Adda ✨',
      likes: 7,
    }
  ]
};

const STORAGE_PREFIX = 'coffee_adda_dish_reviews_v1_';

/**
 * Get all reviews (combining localStorage user uploads + seed reviews)
 */
export function getProductReviews(productId, category) {
  let localReviews = [];
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem(`${STORAGE_PREFIX}${productId}`);
      if (stored) {
        localReviews = JSON.parse(stored);
      }
    }
  } catch (e) {
    console.warn('Could not read reviews from localStorage:', e);
  }

  const specificSeed = SEED_PRODUCT_REVIEWS[productId] || [];
  const categorySeed = CATEGORY_DEFAULT_REVIEWS[category] || CATEGORY_DEFAULT_REVIEWS.default;
  const seedList = specificSeed.length > 0 ? specificSeed : categorySeed;

  // Local reviews go first (most recent), then seed reviews
  const combined = [...localReviews, ...seedList];
  return combined.map((r) => ({
    ...r,
    foodPhotos: r.foodPhotos && r.foodPhotos.length > 0 ? r.foodPhotos : (r.foodPhoto ? [r.foodPhoto] : [])
  }));
}

/**
 * Save a new user review with optional food photo and optional profile photo to localStorage
 */
export function saveProductReview(productId, review) {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = localStorage.getItem(`${STORAGE_PREFIX}${productId}`);
      const list = stored ? JSON.parse(stored) : [];
      list.unshift(review);
      localStorage.setItem(`${STORAGE_PREFIX}${productId}`, JSON.stringify(list));
      return list;
    }
  } catch (e) {
    console.error('Error saving review to localStorage:', e);
  }
  return [review];
}
