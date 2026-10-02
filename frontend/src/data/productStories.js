/**
 * Authentic Culinary & Barista Storytelling Dataset for Coffee Adda
 * Budhanilkantha, Kathmandu, Nepal
 * Slogan: "The Spot where great mind gathers"
 * 
 * Provides in-depth origin histories, cultural heritage, and step-by-step
 * artisan preparation techniques for the Coffee Adda menu.
 */

export const SPECIFIC_PRODUCT_STORIES = {
  // ==========================================
  // COFFEE BAR
  // ==========================================
  'hot-espresso': {
    history: `Espresso was invented in Milan, Italy at the turn of the 20th century by Luigi Bezzera, who sought a method to extract pure coffee in seconds using high steam pressure. At Coffee Adda in Budhanilkantha, our espresso honors that Italian foundation while celebrating Nepal's terroir. We use 100% shade-grown Arabica beans cultivated in the high-altitude hills of Nuwakot and Palpa. The cooler mountain temperatures cause the coffee cherries to mature slowly, producing dense beans packed with complex floral aromatics, gentle citrus acidity, and rich dark chocolate undertones.`,
    howItIsMade: [
      {
        step: 1,
        title: 'Bean Selection & Micro-Lot Roasting',
        detail: 'Himalayan shade-grown Arabica beans are medium-dark roasted to develop natural sugars and deep cocoa notes while preserving pleasant acidity.',
      },
      {
        step: 2,
        title: 'Precision Dosing & Grinding',
        detail: 'Exactly 18 grams of freshly ground coffee is measured using a calibrated on-demand burr grinder to ensure uniform microscopic particle distribution.',
      },
      {
        step: 3,
        title: 'Leveling & 30-lb Tamping',
        detail: 'The coffee bed is distributed with a needle WDT tool to eliminate channeling, then leveled and firmly compressed with calibrated 30 lbs of pressure.',
      },
      {
        step: 4,
        title: '9-Bar Golden Crema Extraction',
        detail: 'Extracted at 93°C (200°F) under 9 bars of pressure for 26 to 28 seconds, yielding a thick, hazelnut-hued crema and intense aromatic body.',
      },
    ],
    tastingNotes: ['Dark Cocoa', 'Roasted Hazelnut', 'Bergamot Citrus', 'Velvety Crema'],
    artisanQuote: '“A great espresso is the purest truth in coffee - it hides nothing and reveals everything.”',
  },

  'hot-doppio': {
    history: `The Doppio - Italian for "double" - is the purest, boldest expression of pure espresso craftsmanship. Originating in Rome and Milan as the drink of choice for connoisseurs seeking double the concentration, body, and intensity of a standard single shot, a true Doppio requires recalibrating grind size, flow rate, and portafilter geometry. At Coffee Adda in Budhanilkantha, our baristas craft the Doppio using 20 grams of shade-grown Himalayan Arabica beans grown in Nuwakot, delivering a luscious double-layer tiger-stripe crema, profound dark chocolate notes, and an invigorating caffeine punch for the great minds gathering at our Adda.`,
    howItIsMade: [
      {
        step: 1,
        title: 'Double-Basket Dosing (20 Grams)',
        detail: 'We dose 20 grams of freshly ground high-altitude Nepali Arabica into a precision bottomless double portafilter basket.',
      },
      {
        step: 2,
        title: 'WDT Needle Distribution & Leveling',
        detail: 'The grounds are declumped using ultra-fine acupuncture needles to prevent water micro-channeling across the wider surface.',
      },
      {
        step: 3,
        title: 'Precision 30-lb Hydro-Tamp',
        detail: 'Evenly compressed with a calibrated tamper to ensure perfectly uniform puck resistance across the 58mm basket.',
      },
      {
        step: 4,
        title: '9-Bar Synchronized Twin Extraction',
        detail: 'Extracted at 93.5°C under 9 bars of hydraulic pressure for 28 seconds, yielding 60ml of rich, syrupy espresso with thick golden crema.',
      },
    ],
    tastingNotes: ['Intense Dark Chocolate', 'Roasted Walnuts', 'Brown Sugar Crema', 'Bold Mountain Body'],
    artisanQuote: '“Double the intensity, double the craft. The Doppio is the heartbeat of our morning coffee ritual.”',
  },

  'hot-cappuccino': {
    history: `The cappuccino gets its name from the brown habits worn by the Capuchin friars in 17th-century Vienna and Italy. Historically crafted as "Kapuziner" - coffee with cream and sugar - it evolved into the modern Italian classic of equal thirds espresso, steamed milk, and dense foam. At Coffee Adda, our baristas elevate the cappuccino into an artistic ritual: local fresh dairy is texturized to a glossy micro-foam and poured over fresh Himalayan espresso, finished with handcrafted rosetta or swan latte art.`,
    howItIsMade: [
      {
        step: 1,
        title: 'Pulling the Double Ristretto Base',
        detail: 'We pull a concentrated double ristretto shot from Nepali Arabica beans into a pre-warmed ceramic cup.',
      },
      {
        step: 2,
        title: 'Chilled Whole Milk Aeration',
        detail: 'Cold local dairy milk is placed in a stainless pitcher and aerated with a high-pressure steam wand to introduce fine air bubbles.',
      },
      {
        step: 3,
        title: 'Micro-Foam Texturization',
        detail: 'The milk is swirled into a vortex, bringing the temperature to 62°C - 65°C to caramelize natural lactose into glossy, velvet microfoam.',
      },
      {
        step: 4,
        title: 'Free-Pour Artisan Latte Art',
        detail: 'The barista pours steadily through the crema center before wiggling the pitcher to crown the cup with a signature rosetta or tulip design.',
      },
    ],
    tastingNotes: ['Sweet Milk Cream', 'Warm Caramel', 'Toasted Almond', 'Balanced Arabica'],
    artisanQuote: '“Equal parts science and heart - served at the ideal temperature to savor the natural sweetness.”',
  },

  'hot-caffe-latte': {
    history: `Caffè Latte - literally "coffee milk" in Italian - has long been the ultimate comfort beverage of morning breakfast tables across Europe. When introduced to Kathmandu's growing specialty coffee culture, it became the beloved companion of writers, students, and thinkers who linger over long conversations. Coffee Adda's recipe emphasizes gentle extraction and delicate micro-foam, making it smoothly drinkable from the first sip to the last drop.`,
    howItIsMade: [
      {
        step: 1,
        title: 'Gentle Espresso Shot',
        detail: 'A smooth shot of single-origin Nepali Arabica is extracted into our signature ceramic sage mug.',
      },
      {
        step: 2,
        title: 'Silky Milk Steaming',
        detail: 'Fresh milk is gently steamed with minimal aeration to achieve a fluid, liquid silk consistency rather than dense froth.',
      },
      {
        step: 3,
        title: 'Harmonious Integration',
        detail: 'The warm milk is married with the espresso base, folding the rich coffee oil seamlessly into the dairy.',
      },
      {
        step: 4,
        title: 'Rosetta Finish',
        detail: 'A whisper of fine foam is drawn across the surface in a delicate barista leaf motif.',
      },
    ],
    tastingNotes: ['Silky Butter', 'Mild Vanilla', 'Gentle Roasted Coffee', 'Sweet Cream'],
    artisanQuote: '“Gentle on the palate, warming for the soul. The centerpiece of every leisurely Adda session.”',
  },

  'hot-caramel-macchiato': {
    history: `Macchiato means "stained" or "marked" in Italian. The Caramel Macchiato became a global cafe sensation by reversing the standard barista sequence: instead of pouring milk into coffee, rich espresso is poured directly through freshly aerated vanilla milk, "marking" the velvety foam before being crowned with artisanal golden caramel sauce.`,
    howItIsMade: [
      {
        step: 1,
        title: 'Vanilla Infusion',
        detail: 'Pure Madagascar vanilla syrup is stirred into the base of a clear preheated glass or ceramic mug.',
      },
      {
        step: 2,
        title: 'Steamed Milk Layering',
        detail: 'Freshly steamed whole milk with a light layer of foam is poured over the vanilla base.',
      },
      {
        step: 3,
        title: 'Marking with Dark Espresso',
        detail: 'A freshly pulled shot of dark roast Arabica espresso is poured directly into the center, creating distinct horizontal flavor strata.',
      },
      {
        step: 4,
        title: 'Criss-Cross Caramel Drizzle',
        detail: 'Finished with a signature cross-hatch pattern of buttery, golden caramel syrup that slowly melts down into the foam.',
      },
    ],
    tastingNotes: ['Buttery Toffee', 'Rich Caramel', 'Sweet Vanilla', 'Bold Espresso Contrast'],
    artisanQuote: '“A multi-layered journey from sweet buttery foam to rich, dark roasted coffee.”',
  },

  // ==========================================
  // LAPHING SPECIAL
  // ==========================================
  'laphing-dry': {
    history: `Laphing is a celebrated spicy cold mung bean / wheat noodle dish originating from the Tibetan highlands and culinary traditions of Qinghai and Sichuan (where it is known as Liangfen). In Nepal, Laphing found its spiritual home in the vibrant alleyways of Boudha and Swayambhu, before captivating the entire Kathmandu Valley. At Coffee Adda in Budhanilkantha, our Laphing is prepared fresh daily with authentic Himalayan spices, garlic water, dark soy vinegar, and our signature slow-simmered roasted chili oil.`,
    howItIsMade: [
      {
        step: 1,
        title: 'Starch Gluten Washing & Settling',
        detail: 'Wheat flour dough is hand-washed in mountain water to separate the gluten proteins from the pure starch liquid, which rests for 12 hours.',
      },
      {
        step: 2,
        title: 'Steaming the Translucent Sheets',
        detail: 'The settled starch batter is spooned onto wide round oiled metal trays and steamed over boiling water until it forms a jelly-like, silky yellow sheet.',
      },
      {
        step: 3,
        title: 'Rolling with Spiced Gluten Fillings',
        detail: 'The cold, bouncy sheet is layered with seasoned, spongy steamed gluten (tianmian), fresh coriander, and chopped garlic.',
      },
      {
        step: 4,
        title: 'Dressing with Fiery Chili Oil',
        detail: 'Rolled tightly, sliced into bite-sized cylinders, and bathed in black vinegar, roasted Sichuan peppercorn chili oil, garlic water, and toasted sesame.',
      },
    ],
    tastingNotes: ['Spicy Sichuan Chili', 'Zesty Black Vinegar', 'Garlic Crunch', 'Silky Bouncy Texture'],
    artisanQuote: '“Bouncy, tangy, and unapologetically fiery - the ultimate comfort snack of the Kathmandu valley.”',
  },

  'laphing-soup': {
    history: `Soup Laphing is the refreshing broth version of the Himalayan cold noodle. Served in a chilled bath of savory soy broth, infused with roasted chili oil, crushed garlic, and aged vinegar, it is renowned for its invigorating kick that instantly awakens the senses after a long walk through Budhanilkantha.`,
    howItIsMade: [
      {
        step: 1,
        title: 'Handmade Cold Starch Ribbons',
        detail: 'Freshly steamed starch sheets are rolled and sliced into wide, flat noodles with exceptional chew and tensile bounce.',
      },
      {
        step: 2,
        title: 'Crafting the Savory Chilled Broth',
        detail: 'A delicate broth is prepared using black vinegar, mountain salt, soy sauce, and infused garlic-water tincture.',
      },
      {
        step: 3,
        title: 'Spongy Gluten & Coriander',
        detail: 'Steamed gluten chunks are added to soak up the zesty broth like flavor sponges.',
      },
      {
        step: 4,
        title: 'House Chili Oil Float',
        detail: 'Generously topped with our homemade roasted chili flake oil and toasted sesame seeds for fragrant crunch.',
      },
    ],
    tastingNotes: ['Cool Broth', 'Fiery Red Chili', 'Tangy Vinegar Punch', 'Aromatic Sesame'],
    artisanQuote: '“Slurping cold noodles in a spicy, sour broth is an addictive Kathmandu ritual.”',
  },

  // ==========================================
  // MOMO & HIMALAYAN PLATTERS
  // ==========================================
  'momo-buff-steam': {
    history: `Mo:Mo is universally cherished as Nepal's unofficial national dish. Brought to the Kathmandu Valley centuries ago by Newar merchants traversing the historic trans-Himalayan trade routes between Lhasa and Kathmandu, it evolved with native Nepali spices and vibrant tomato-sesame achaars. At Coffee Adda, every Mo:Mo is hand-pleated to order, retaining all its juicy interior warmth inside a paper-thin, steamed wrapper.`,
    howItIsMade: [
      {
        step: 1,
        title: 'Fresh Minced Filling Seasoning',
        detail: 'Lean cuts are finely minced and seasoned with fresh spring onions, minced ginger, garlic, cilantro, and our secret ground garam masala blend.',
      },
      {
        step: 2,
        title: 'Hand-Rolled Dough Discs',
        detail: 'Wheat flour dough is kneaded to silkiness, rested, and rolled paper-thin with edges thinner than the center.',
      },
      {
        step: 3,
        title: 'Traditional 18-Pleat Pinch Fold',
        detail: 'Our kitchen cooks hand-pleat each dumpling with 16 to 18 intricate folds, sealing in all natural juices airtight.',
      },
      {
        step: 4,
        title: 'High-Steam Cook & Roasted Tomato Achaar',
        detail: 'Steamed inside traditional multi-tier metal steamers for 10 minutes and served piping hot with flame-roasted tomato-sesame-timur chutney.',
      },
    ],
    tastingNotes: ['Juicy Spiced Mince', 'Roasted Sesame Achaar', 'Timur Peppercorn Tingle', 'Tender Dough'],
    artisanQuote: '“Every fold is rolled by hand. The real secret is the flame-roasted tomato achaar.”',
  },

  'momo-chicken-steam': {
    history: `Chicken Mo:Mo represents the lighter, fragrant side of Nepali dumpling heritage. Infused with fresh ginger juice, spring onions, and Himalayan coriander, it pairs perfectly with both chilled cold brew and spicy tomato chutney.`,
    howItIsMade: [
      {
        step: 1,
        title: 'Lean Farm-Fresh Poultry Mince',
        detail: 'Tender chicken is freshly minced with butter, onion relish, ginger-garlic paste, and aromatic ground cumin.',
      },
      {
        step: 2,
        title: 'Thin Wrapper Pinching',
        detail: 'Stretched thin by hand to ensure a delicate, melt-in-mouth texture after steaming.',
      },
      {
        step: 3,
        title: 'Bamboo & Steam Infusion',
        detail: 'Cooked at gentle steam pressure to keep the interior succulent and tender.',
      },
      {
        step: 4,
        title: 'Double Chutney Accompaniment',
        detail: 'Served with our spicy roasted red chili dip and a nutty yellow sesame chutney.',
      },
    ],
    tastingNotes: ['Juicy & Tender', 'Fresh Ginger Aromatic', 'Nutty Sesame Dip', 'Golden Steamed Wrapper'],
    artisanQuote: '“Delicate, juicy, and comforting - the quintessential companion to an afternoon coffee.”',
  },

  // ==========================================
  // BREAKFAST & BRUNCH
  // ==========================================
  'bf-american': {
    history: `The American Breakfast became an international classic during the diner boom of the mid-20th century. At Coffee Adda, we tailor this hearty breakfast for hikers, morning joggers heading to Shivapuri National Park, and locals starting their day in Budhanilkantha with high-protein energy and freshly brewed coffee.`,
    howItIsMade: [
      {
        step: 1,
        title: 'Eggs Cooked to Order',
        detail: 'Farm-fresh local eggs cooked your style: sunny side up, over-easy, or soft scrambled with salted butter.',
      },
      {
        step: 2,
        title: 'Artisan Bread Toasting',
        detail: 'Thick slices of bakery bread are toasted golden on the griddle and brushed with pure butter.',
      },
      {
        step: 3,
        title: 'Crispy Sausage & Hash Browns',
        detail: 'Seared savory sausages and golden, hand-shredded potato hash browns crisped to perfection.',
      },
      {
        step: 4,
        title: 'Plating & Condiments',
        detail: 'Garnished with grilled herb tomatoes, baked beans, and accompanied by fruit preserves.',
      },
    ],
    tastingNotes: ['Crispy Hash Browns', 'Buttery Toast', 'Savory Sausage', 'Rich Egg Yolk'],
    artisanQuote: '“Fuel for mountain trail adventures or a long creative morning at your favorite Adda table.”',
  },

  // ==========================================
  // BURGERS & SANDWICHES
  // ==========================================
  'burger-crispy-chicken': {
    history: `The crispy fried chicken burger revolutionized casual dining by focusing on textural contrast: an intensely crunchy seasoned crust giving way to juicy tender meat within. Our kitchen marinates the poultry in spiced buttermilk before double-dredging in seasoned flour.`,
    howItIsMade: [
      {
        step: 1,
        title: '24-Hour Spiced Buttermilk Marinade',
        detail: 'Fresh chicken fillet is soaked overnight in buttermilk infused with garlic, paprika, and white pepper for tenderization.',
      },
      {
        step: 2,
        title: 'Double-Dredged Seasoned Crust',
        detail: 'Dusted in a secret 11-spice flour blend, dipped, and dredged again to create jagged, extra-crispy exterior ridges.',
      },
      {
        step: 3,
        title: 'Flash Golden Frying',
        detail: 'Fried in clean oil at 175°C until deep golden brown while keeping the inside succulent.',
      },
      {
        step: 4,
        title: 'Brioche Assembly & House Sauce',
        detail: 'Stacked on a toasted butter brioche bun with crisp iceberg lettuce, sliced tomatoes, and house smoked garlic mayo.',
      },
    ],
    tastingNotes: ['Crunchy Golden Crust', 'Succulent Chicken', 'Smoky Garlic Mayo', 'Toasted Brioche Bun'],
    artisanQuote: '“Loud crunch, tender bite, and savory satisfaction in every single mouthful.”',
  },

  // ==========================================
  // PASTA & CORN DOGS
  // ==========================================
  'corndog-cheese': {
    history: `Originating as a midway fair treat in America before being reimagined by Seoul street vendors with sugar crusts and cheese pulls, the cheese corn dog has taken global youth culture by storm. Coffee Adda brings this crispy sensation to Budhanilkantha with authentic high-stretch mozzarella and crunchy panko batter.`,
    howItIsMade: [
      {
        step: 1,
        title: 'Thick Mozzarella Skewering',
        detail: 'High-protein whole-milk mozzarella cheese blocks are skewered securely onto bamboo skewers.',
      },
      {
        step: 2,
        title: 'Sweet Yeast Batter Coating',
        detail: 'Dipped into a sticky, sweet yeast corn batter that adheres evenly around the cheese core.',
      },
      {
        step: 3,
        title: 'Crispy Panko Encrusting',
        detail: 'Rolled generously in Japanese panko breadcrumbs for maximum shattered-glass crunch.',
      },
      {
        step: 4,
        title: 'Golden Flash Fry & Drizzle',
        detail: 'Deep fried until bubbling gold, lightly dusted with sugar, and zigzagged with honey mustard and spicy ketchup.',
      },
    ],
    tastingNotes: ['Epic Cheese Pull', 'Sweet & Savory Crunch', 'Panko Flakiness', 'Zesty Mustard Drizzle'],
    artisanQuote: '“Golden, piping hot, and made for that irresistible cheese-pull photo.”',
  },
};

/**
 * Universal Story & Recipe Generator
 * Ensures that EVERY single one of the 157 menu items has an authentic,
 * category-grounded history and step-by-step preparation story.
 */
export function getProductStory(item) {
  if (!item) return null;

  // Check if a dedicated handcrafted story exists
  if (SPECIFIC_PRODUCT_STORIES[item.id]) {
    return SPECIFIC_PRODUCT_STORIES[item.id];
  }

  // Derive contextual category-based authentic storytelling
  const cat = item.category || '';
  const sub = item.subCategory || '';
  const name = item.name || '';
  const price = item.price || 0;

  if (cat.includes('hot') || cat.includes('beverage') || sub.includes('Coffee') || sub.includes('Espresso')) {
    return {
      history: `${name} is a hallmark of Coffee Adda's specialty beverage lineup in Budhanilkantha. Inspired by world-renowned barista traditions, our recipe is crafted using 100% shade-grown Arabica beans harvested from the pristine high hills of Nepal. The altitude and cool Himalayan breezes contribute to a naturally sweet cup with bright, balanced clarity. At Coffee Adda, this beverage serves as the fuel for lively conversations, study sessions, and creative brainstorms.`,
      howItIsMade: [
        {
          step: 1,
          title: 'Himalayan Bean Selection',
          detail: 'Directly sourced high-altitude Arabica beans from local Nepali plantations, roasted in small batches to preserve delicate aroma.',
        },
        {
          step: 2,
          title: 'Calibrated Grind & Dose',
          detail: 'Ground fresh per order with precision micron measurement to extract balanced solubles and avoid bitterness.',
        },
        {
          step: 3,
          title: 'Temperature-Controlled Extraction',
          detail: 'Brewed with filtered mountain water at exact thermodynamic consistency for optimal flavor development.',
        },
        {
          step: 4,
          title: 'Artisan Finishing',
          detail: 'Served fresh at the ideal drinking temperature in our signature cafe tableware with barista attention to detail.',
        },
      ],
      tastingNotes: ['Shade-Grown Arabica', 'Balanced Roast', 'Smooth Body', 'Aromatic Finish'],
      artisanQuote: `“Crafted fresh per order so you taste the true character of Himalayan coffee.”`,
    };
  }

  if (cat.includes('tea') || sub.includes('Tea') || name.toLowerCase().includes('tea') || name.toLowerCase().includes('chiya')) {
    return {
      history: `Tea culture is woven into the daily rhythm of life in Nepal. From morning chiya gatherings to evening relaxing sips, ${name} captures the warm hospitality of Nepali homes. At Coffee Adda, we source organic whole-leaf teas from the rolling mist-covered gardens of Ilam and eastern hills of Nepal, blending traditional preparation with refined cafe craftsmanship.`,
      howItIsMade: [
        {
          step: 1,
          title: 'Orthodox Leaf & Herb Sourcing',
          detail: 'Hand-picked young tea leaves selected for clarity, rich tannin balance, and delicate floral bouquet.',
        },
        {
          step: 2,
          title: 'Aromatic Spice Infusion',
          detail: 'Crushed green cardamom, cinnamon bark, cloves, and ginger are gently simmered to release essential oils.',
        },
        {
          step: 3,
          title: 'Steeping & Temperature Control',
          detail: 'Steeped at precise water temperature to extract delicate antioxidants without astringency.',
        },
        {
          step: 4,
          title: 'Strain & Presentation',
          detail: 'Poured steaming hot into preheated glassware or traditional clay cups to preserve comforting aromas.',
        },
      ],
      tastingNotes: ['Himalayan Herbs', 'Warm Spices', 'Sweet Earthy Notes', 'Soothing Floral'],
      artisanQuote: `“Nothing brings people together like a steaming cup of handcrafted tea.”`,
    };
  }

  if (cat.includes('laphing') || name.toLowerCase().includes('laphing')) {
    return {
      history: `Originating in the cool highlands of Tibet and refined across the monasteries and alleys of Kathmandu, Laphing is the ultimate Himalayan street-food icon. ${name} represents our dedication to authentic flavors: freshly prepared translucent starch sheets, fiery roasted chili flakes, pungent garlic water, and aged vinegar that deliver an explosive sensory punch.`,
      howItIsMade: [
        {
          step: 1,
          title: 'Mung Bean & Wheat Starch Washing',
          detail: 'High-grade flour is washed and rested for hours to yield silky, translucent starch and chewy protein gluten.',
        },
        {
          step: 2,
          title: 'Even Tray Steaming',
          detail: 'Steamed in thin layers over rolling boiling water until the sheets become glassy, tender, and elastic.',
        },
        {
          step: 3,
          title: 'Chilling & Rolling',
          detail: 'Chilled rapidly to lock in the signature bouncy chew before being rolled or sliced into ribbons.',
        },
        {
          step: 4,
          title: 'Seasoning with Roasted Chili Dressing',
          detail: 'Tossed with aged soy vinegar, Sichuan peppercorns, crushed mountain garlic, and our fragrant chili oil.',
        },
      ],
      tastingNotes: ['Fiery Red Chili', 'Tangy Vinegar Kick', 'Bouncy Texture', 'Garlic Crunch'],
      artisanQuote: `“Addictive, bouncy, and spicy - a Kathmandu valley obsession made fresh daily.”`,
    };
  }

  if (cat.includes('momo') || name.toLowerCase().includes('momo')) {
    return {
      history: `Steeped in centuries of Himalayan tradition, Mo:Mo is Kathmandu's ultimate communal feast. Originating as a trade staple between Nepal and Tibet, it has blossomed into countless beloved styles: steamed, pan-fried kothey, spicy jhol, and fiery chilli toss. At Coffee Adda, ${name} is folded freshly with tender spiced fillings and served alongside our signature fire-roasted sesame and tomato achaar.`,
      howItIsMade: [
        {
          step: 1,
          title: 'Handmade Spiced Filling',
          detail: 'Fresh ingredients are finely chopped and blended with ginger, garlic, chopped scallions, and traditional Nepali spices.',
        },
        {
          step: 2,
          title: 'Paper-Thin Dough Rolling',
          detail: 'Flour dough is hand-flattened into supple, translucent circles designed to trap juices while steaming.',
        },
        {
          step: 3,
          title: 'Artisan Pleating',
          detail: 'Punched and pleated with traditional folds that seal the savory interior completely.',
        },
        {
          step: 4,
          title: 'Steaming & Chutney Pairing',
          detail: 'Steamed to order in stainless multi-tier pots and paired with roasted sesame-tomato chutney.',
        },
      ],
      tastingNotes: ['Juicy Spiced Center', 'Tender Dough Wrapper', 'Roasted Tomato Achaar', 'Timur Aroma'],
      artisanQuote: `“Handcrafted with care - every bite bursts with authentic Himalayan flavor.”`,
    };
  }

  if (cat.includes('breakfast') || sub.includes('Egg') || name.toLowerCase().includes('pancake')) {
    return {
      history: `Breakfast at Coffee Adda is designed to start your morning with wholesome nutrition and warmth. Whether you're heading for a hike up the Budhanilkantha trails or relaxing on a quiet weekend morning, ${name} is prepared fresh using farm-sourced eggs, bakery bread, and seasonal local produce.`,
      howItIsMade: [
        {
          step: 1,
          title: 'Farm-Fresh Sourcing',
          detail: 'Free-range local eggs and fresh morning bakery ingredients prepared to order.',
        },
        {
          step: 2,
          title: 'Skillet & Griddle Cooking',
          detail: 'Seared on calibrated griddles with pure butter to achieve golden caramelization and tender interiors.',
        },
        {
          step: 3,
          title: 'Herb & Spice Seasoning',
          detail: 'Lightly seasoned with sea salt, cracked black pepper, and fresh garden herbs.',
        },
        {
          step: 4,
          title: 'Plating & Warm Presentation',
          detail: 'Arranged thoughtfully with crisp accompaniments and served hot right from the pan.',
        },
      ],
      tastingNotes: ['Buttery Warmth', 'Fluffy Texture', 'Fresh Farm Flavor', 'Morning Comfort'],
      artisanQuote: `“The best mornings start with wholesome food and unhurried conversations.”`,
    };
  }

  if (cat.includes('burger') || cat.includes('sandwich') || name.toLowerCase().includes('burger')) {
    return {
      history: `Our burgers and sandwiches celebrate the fusion of Western comfort food with rich Himalayan seasoning. ${name} is layered with freshly grilled or fried patties, crisp garden greens, and house-made sauces sandwiched between toasted artisan buns.`,
      howItIsMade: [
        {
          step: 1,
          title: 'Patty Seasoning & Prep',
          detail: 'Crafted with premium proteins or garden vegetables, seasoned with house herbs and spices.',
        },
        {
          step: 2,
          title: 'Bun Toasting with Butter',
          detail: 'Soft bakery buns or bread slices toasted golden on the flat-top grill with melted butter.',
        },
        {
          step: 3,
          title: 'Sauce & Veggie Layering',
          detail: 'Layered with crisp lettuce, ripe tomatoes, caramelized onions, and signature house dressing.',
        },
        {
          step: 4,
          title: 'Assembly & Searing',
          detail: 'Stacked generously, held with wooden skewers, and served piping hot with golden fries or chips.',
        },
      ],
      tastingNotes: ['Juicy & Hearty', 'Toasted Butter Bun', 'Zesty House Sauce', 'Crispy Crunch'],
      artisanQuote: `“Stacked high, packed with flavor, and satisfying to the very last bite.”`,
    };
  }

  if (cat.includes('pasta') || name.toLowerCase().includes('pasta') || name.toLowerCase().includes('alfredo')) {
    return {
      history: `Pasta has become a beloved staple in Kathmandu's cafe culture. ${name} is tossed to order in rich, velvety sauces made from scratch with garlic, real cheese, fresh cream, and fragrant Italian herbs, tailored to Nepali tastebuds.`,
      howItIsMade: [
        {
          step: 1,
          title: 'Al Dente Pasta Boiling',
          detail: 'Durum wheat pasta cooked in well-salted rolling water until firm to the bite.',
        },
        {
          step: 2,
          title: 'Scratch Sauce Reduction',
          detail: 'Garlic and butter gently sautéed before simmering with fresh cream, cheeses, or herb-rich tomato passata.',
        },
        {
          step: 3,
          title: 'Emulsification & Toss',
          detail: 'Tossed vigorously with pasta water so the sauce glazes and clings to every single noodle.',
        },
        {
          step: 4,
          title: 'Herbs & Cheese Garnish',
          detail: 'Finished with cracked black pepper, oregano, parsley, and freshly shaved cheese.',
        },
      ],
      tastingNotes: ['Velvety Sauce', 'Al Dente Bite', 'Roasted Garlic', 'Aromatic Herbs'],
      artisanQuote: `“Freshly tossed from the pan for ultimate creamy indulgence.”`,
    };
  }

  // Default Fallback Story for snacks, sides, bar, etc.
  return {
    history: `${name} is prepared with passion at Coffee Adda in Budhanilkantha. Every dish on our menu reflects our commitment to fresh ingredients, authentic flavors, and welcoming hospitality that makes our cafe “The Spot where great mind gathers”.`,
    howItIsMade: [
      {
        step: 1,
        title: 'Ingredient Sourcing',
        detail: 'Selected daily from trusted local Kathmandu suppliers to guarantee peak freshness.',
      },
      {
        step: 2,
        title: 'Chef Preparation & Seasoning',
        detail: 'Hand-seasoned with balanced spices and house aromatics developed by our culinary team.',
      },
      {
        step: 3,
        title: 'Cooked Fresh to Order',
        detail: 'Prepared hot per order to ensure optimal texture, flavor, and steaming temperature.',
      },
      {
        step: 4,
        title: 'Artisan Table Presentation',
        detail: 'Garnished with fresh herbs and served in cafe tableware alongside matching dips.',
      },
    ],
    tastingNotes: ['Fresh Ingredients', 'Balanced Spices', 'Cooked to Order', 'Authentic Flavor'],
    artisanQuote: `“Made fresh every single day with care, passion, and pride.”`,
  };
}
