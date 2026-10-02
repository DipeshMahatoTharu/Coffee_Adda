import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, MapPin, Coffee, Star, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface CoffeeProduct {
  id: string;
  name: string;
  category: string;
  filterCategory: 'hot' | 'cold' | 'bakery';
  description: string;
  price: number;
  badge: string;
  image: string;
  alt: string;
  tags?: string[];
  linkUrl: string;
}

/**
 * Authentic Coffee Adda Signature Favorites Dataset
 * All items, pricing (NPR), images, and descriptions curated directly
 * from the official physical menu transcribed in menuData.js.
 */
export const COFFEE_ADDA_PRODUCTS: CoffeeProduct[] = [
  // ==========================================
  // 1. HOT BREWS (Coffee Bar & Special Teas)
  // ==========================================
  {
    id: 'hot-cappuccino',
    name: 'Cappuccino / Double',
    category: 'Espresso Bar',
    filterCategory: 'hot',
    badge: 'Popular',
    price: 180,
    description: 'Rich, balanced espresso crowned with equal parts textured milk and velvety airy foam with rosetta art.',
    tags: ['Dense Froth', 'Hot (8oz)'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMjTB-ditOYgxnlYcLY6V54j2iwNiXT1m2XqIew3Bkse2f-SZYiDFV-55N0Et_85yx-V4H22ZM_cPsw8ly8xP-9k3h7gD4LBH6sdAZPstftH2YNWoQcEz3o8r_jyvunOGXrq99_KEHJGzpwC47b1j3IQtTlsJgr7beMTWxLmM8tGpzlK6jzSf7MhyxwYluZO13U_z_-G_A9O1I7ZbGUEbPi1iDi2OYysiTSYK92b117sjC-bO6nXih',
    alt: 'Artisanal cappuccino with delicate swan latte art in emerald ceramic cup',
    linkUrl: '#menu',
  },
  {
    id: 'hot-caffe-latte',
    name: 'Café Latte',
    category: 'Milky & Smooth',
    filterCategory: 'hot',
    badge: 'Barista Pick',
    price: 180,
    description: 'Gentle espresso harmonized with generous silky micro-foam in our signature sage ceramic mug.',
    tags: ['Silky Micro-foam', 'Hot (10oz)'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-HydCGjJv_Tr3FhQJ-oXJCh5HT86JQnendHcw2JskFuZGYpXrv_flzBcfbWlH6zpOiIQ8GVrdVtOfZowkSqUtb-XUnOoJs_TRYLs54sZq5lvQ5FexFPcfP15FlUVcc39910_k9wJR6g54EsWJ7u_QaRy1XQxnW1TTBCi8zLh9-K6C1Tbrewg0vkMYqxL8vjmDGvlTQWE3g-docRIf5-duA2vbweeJYjTo-Q8e_Lky7XCmqM_lIrVG',
    alt: 'Velvety caffe latte poured with rosetta microfoam in sage ceramic cup',
    linkUrl: '#menu',
  },
  {
    id: 'hot-cafe-mocha',
    name: 'Café Mocha',
    category: 'Chocolate Espresso',
    filterCategory: 'hot',
    badge: 'Indulgent',
    price: 210,
    description: 'Double espresso blended with molten dark chocolate, steamed milk, and light cocoa dusting.',
    tags: ['Dark Chocolate', 'Hot (8oz)'],
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80',
    alt: 'Hot cafe mocha with chocolate drizzle',
    linkUrl: '#menu',
  },
  {
    id: 'hot-caramel-macchiato',
    name: 'Caramel Macchiato',
    category: 'Layered Caramel',
    filterCategory: 'hot',
    badge: 'Sweet Fav',
    price: 270,
    description: 'Freshly steamed milk marked with vanilla syrup, rich espresso, and buttery golden caramel drizzle.',
    tags: ['Buttery Caramel', 'Hot (10oz)'],
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80',
    alt: 'Caramel macchiato with criss-cross caramel drizzle',
    linkUrl: '#menu',
  },
  {
    id: 'hot-honey-latte',
    name: 'Honey Latte',
    category: 'Naturally Sweet',
    filterCategory: 'hot',
    badge: 'House Special',
    price: 220,
    description: 'Smooth espresso and steamed milk sweetened with natural wild Himalayan blossom honey.',
    tags: ['Pure Honey', 'Hot (10oz)'],
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    alt: 'Warm honey latte in ceramic cup',
    linkUrl: '#menu',
  },
  {
    id: 'hot-mocha-madness',
    name: 'Mocha Madness',
    category: 'Signature Dessert',
    filterCategory: 'hot',
    badge: 'Chef Special',
    price: 350,
    description: 'Decadent specialty creation loaded with rich fudge, espresso, steamed cream, and dark cocoa shavings.',
    tags: ['Fudge Loaded', 'Signature Dessert'],
    image: 'https://images.unsplash.com/photo-1579888944880-d98341245702?auto=format&fit=crop&w=600&q=80',
    alt: 'Mocha madness with whipped cream and chocolate swirls',
    linkUrl: '#menu',
  },

  // ==========================================
  // 2. COLD SPECIALS (Iced Coffee, Frappes & Refreshers)
  // ==========================================
  {
    id: 'cold-signature-iced',
    name: 'Signature Iced Coffee',
    category: 'Chilled Coffee',
    filterCategory: 'cold',
    badge: 'Summer Fav',
    price: 340,
    description: 'Slow-drip 14-hour cold brew layered over condensed milk swirl, served tall on crystal ice with whole roasted beans.',
    tags: ['Extra Chilled', 'High Caffeine'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNjPKlqKtESQ0TETpEvAJ6w_PSCQk9WgAA1Jgc4uHzJoZ09hVO10rICprzoG_ZB8gMYCO23wsuw-CQV0X0VvgsdhD3Y5eCXnqJGkFbUj2EZ4nLeyMkKTkPZnm92CqElBheeuEToElHeY9b_110tlgan7d383KkzKtSMQTFxQbL1heAHP0ZZ0M4-u3hl2cdUpx7-OUCjgjAi3OT0QSz4-fRL6cH04idkadg3soDM8gnkUMfW_UD4cSA',
    alt: 'Signature iced coffee layered over ice',
    linkUrl: '#menu',
  },
  {
    id: 'cold-iced-caramel-macchiato',
    name: 'Iced Caramel Macchiato',
    category: 'Layered Chill',
    filterCategory: 'cold',
    badge: 'Bestseller',
    price: 310,
    description: 'Chilled vanilla milk marked with espresso shot and generous golden buttery caramel drizzle.',
    tags: ['Salted Caramel', 'High Energy'],
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80',
    alt: 'Iced caramel macchiato with caramel swirl',
    linkUrl: '#menu',
  },
  {
    id: 'cold-hazelnut-frappe',
    name: 'Hazelnut Frappe',
    category: 'Blended Frappe',
    filterCategory: 'cold',
    badge: 'Signature',
    price: 260,
    description: 'Rich roasted hazelnut syrup blended with espresso, whole milk, crushed ice, and topped with mountain whipped cream.',
    tags: ['Roasted Hazelnut', 'Whipped Cream'],
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    alt: 'Hazelnut frappe with whipped cream',
    linkUrl: '#menu',
  },
  {
    id: 'cold-blended-oreo',
    name: 'Blended Oreo Shake',
    category: 'Thick Shake',
    filterCategory: 'cold',
    badge: 'Crowd Fav',
    price: 220,
    description: 'Creamy vanilla ice cream blended with crushed chocolate Oreo cookies, layered with rich chocolate fudge.',
    tags: ['Crunchy Cookies', 'Chocolate Fudge'],
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80',
    alt: 'Blended oreo shake with whipped cream and cookies',
    linkUrl: '#menu',
  },
  {
    id: 'cold-mint-lemonade',
    name: 'Mint Lemonade',
    category: 'Refresher',
    filterCategory: 'cold',
    badge: 'Refreshing',
    price: 160,
    description: 'Freshly squeezed sun-ripened lemons muddled with crisp garden mint leaves, Himalayan pink salt, and chilled soda.',
    tags: ['Fresh Lime', 'Garden Mint'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
    alt: 'Mint lemonade in tall chilled glass',
    linkUrl: '#menu',
  },
  {
    id: 'cold-cascara-sparkling',
    name: 'Cascara Sparkling Cold Brew',
    category: 'Single Origin',
    filterCategory: 'cold',
    badge: 'Specialty',
    price: 330,
    description: 'Organic sun-dried coffee cherry cascara steeped cold, finished with effervescent tonic and lime peel twist.',
    tags: ['Coffee Cherry', 'Sparkling Fizz'],
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    alt: 'Refreshing sparkling cold brew with citrus',
    linkUrl: '#menu',
  },

  // ==========================================
  // 3. ARTISAN BAKERY & BREAKFAST SPECIALS
  // ==========================================
  {
    id: 'bakery-butter-croissant',
    name: 'Artisan Butter Croissant',
    category: 'Fresh Pastry',
    filterCategory: 'bakery',
    badge: 'Fresh Baked',
    price: 220,
    description: 'Flaky, 36-layered golden French pastry baked fresh every morning at 6:30 AM with creamy alpine butter.',
    tags: ['Hand-rolled', 'Warm Served'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    alt: 'Fresh golden artisan butter croissant',
    linkUrl: '#menu',
  },
  {
    id: 'bf-special-platter',
    name: 'Special Breakfast Platter',
    category: 'Grand Feast',
    filterCategory: 'bakery',
    badge: 'Chef Choice',
    price: 650,
    description: 'The ultimate morning feast: toasted bread, eggs any style, chicken sausages, crispy garlic potatoes, butter, jam & fruit bowl.',
    tags: ['Farm Eggs', 'Sausage & Potato'],
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80',
    alt: 'Full breakfast platter with eggs, sausages, toast and potatoes',
    linkUrl: '#menu',
  },
  {
    id: 'bf-french-toast',
    name: 'French Toast',
    category: 'Sweet Breakfast',
    filterCategory: 'bakery',
    badge: 'Morning Sweet',
    price: 150,
    description: 'Thick sliced bread dipped in a vanilla-cinnamon egg custard and griddled to golden caramel perfection.',
    tags: ['Custard Dipped', 'Cinnamon & Honey'],
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80',
    alt: 'Golden French toast with berries and honey',
    linkUrl: '#menu',
  },
  {
    id: 'bakery-chocolate-babka',
    name: 'Chocolate Babka Brioche',
    category: 'House Special',
    filterCategory: 'bakery',
    badge: 'Sweet Treat',
    price: 260,
    description: 'Braided sweet yeast bread swirled with 70% dark Himalayan cocoa and fragrant Ceylon cinnamon syrup.',
    tags: ['Dark Chocolate', 'Honey Glaze'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    alt: 'Chocolate babka brioche swirled with cocoa',
    linkUrl: '#menu',
  },
  {
    id: 'burger-chicken',
    name: 'Chicken Burger',
    category: 'Gourmet Burger',
    filterCategory: 'bakery',
    badge: 'Bestseller',
    price: 290,
    description: 'Juicy seasoned chicken patty grilled to perfection, melted cheddar cheese, crisp lettuce, tomato & house sauce.',
    tags: ['Juicy Patty', 'Cheddar Melt'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    alt: 'Gourmet chicken burger with lettuce and cheddar cheese',
    linkUrl: '#menu',
  },
  {
    id: 'sandwich-veg-cheese',
    name: 'Veg Cheese Sandwich',
    category: 'Toasted Sandwich',
    filterCategory: 'bakery',
    badge: 'Cheesy',
    price: 180,
    description: 'Golden toasted artisan bread filled with fresh vegetables, house butter, and rich melted mozzarella cheese.',
    tags: ['Melted Mozzarella', 'Grilled Crisp'],
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    alt: 'Toasted vegetable cheese sandwich with melted cheese',
    linkUrl: '#menu',
  },
];

export interface CardFanCarouselProps {
  items?: CoffeeProduct[];
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
  showCategoryFilters?: boolean;
  onNavigate?: (page: string, anchor?: string) => void;
  className?: string;
}

export default function CardFanCarousel({
  items = COFFEE_ADDA_PRODUCTS,
  activeCategory: externalCategory,
  onCategoryChange,
  showCategoryFilters = true,
  onNavigate,
  className,
}: CardFanCarouselProps) {
  const [internalCategory, setInternalCategory] = useState<string>('all');
  const activeCategory = externalCategory !== undefined ? externalCategory : internalCategory;

  const handleSelectCategory = (cat: string) => {
    setActiveIndex(0);
    if (onCategoryChange) {
      onCategoryChange(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  // Filter products based on selected category
  const filteredProducts = activeCategory === 'all'
    ? items
    : items.filter(item => item.filterCategory === activeCategory);

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Drag / touch swipe tracking
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);

  const categoryOptions = [
    { id: 'all', label: 'All Favorites' },
    { id: 'hot', label: 'Hot Brews' },
    { id: 'cold', label: 'Cold Specials' },
    { id: 'bakery', label: 'Artisan Bakery' },
  ];

  const total = filteredProducts.length;

  // Safe cyclic index increment / decrement
  const handlePrev = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation (Left / Right arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch & Mouse Drag handlers for smooth physical swiping
  const handleStart = (clientX: number, clientY: number) => {
    touchStartX.current = clientX;
    touchStartY.current = clientY;
    isDragging.current = true;
  };

  const handleEnd = (clientX: number, clientY: number) => {
    if (!isDragging.current || touchStartX.current === null) return;
    const deltaX = clientX - touchStartX.current;
    const deltaY = clientY - (touchStartY.current ?? clientY);

    // If predominantly horizontal swipe with threshold of 35px
    if (Math.abs(deltaX) > 35 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
    isDragging.current = false;
  };

  // GSAP 3D Interactive Fanned Carousel Engine
  const applyFanLayout = useCallback((animate = true) => {
    if (!containerRef.current || total === 0) return;
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

    filteredProducts.forEach((_, i) => {
      const el = cardRefs.current[i];
      if (!el) return;

      // Circular relative offset from active center card
      let diff = i - activeIndex;
      while (diff > total / 2) diff -= total;
      while (diff < -total / 2) diff += total;

      const isCenter = diff === 0;
      const isHovered = hoveredIdx === i;

      let targetX = 0;
      let targetY = 0;
      let targetRot = 0;
      let targetScale = 1;
      let targetZ = 10;
      let targetOpacity = 1;
      let pointerEvents: 'auto' | 'none' = 'auto';

      if (diff === 0) {
        // Center Active Card - Upright, elevated, prominent at Y = 0 (no ceiling breach)
        targetX = 0;
        targetY = isMobile ? 0 : 0;
        targetRot = 0;
        targetScale = isMobile ? 1.0 : 1.04;
        targetZ = 35;
        targetOpacity = 1;
        pointerEvents = 'auto';

        if (isHovered) {
          targetY -= isMobile ? 6 : 8;
          targetScale = isMobile ? 1.02 : 1.06;
          targetZ = 45;
        }
      } else if (diff === 1) {
        // Immediate Right Card (slopes gracefully downward)
        targetX = isMobile ? 80 : isTablet ? 170 : 220;
        targetY = isMobile ? 12 : 16;
        targetRot = isMobile ? 5 : 7.5;
        targetScale = isMobile ? 0.88 : 0.91;
        targetZ = 24;
        targetOpacity = isMobile ? 0.80 : 0.92;
        pointerEvents = 'auto';

        if (isHovered) {
          targetY -= 6;
          targetScale *= 1.02;
          targetRot *= 0.7;
          targetZ = 30;
        }
      } else if (diff === -1) {
        // Immediate Left Card (slopes gracefully downward)
        targetX = isMobile ? -80 : isTablet ? -170 : -220;
        targetY = isMobile ? 12 : 16;
        targetRot = isMobile ? -5 : -7.5;
        targetScale = isMobile ? 0.88 : 0.91;
        targetZ = 24;
        targetOpacity = isMobile ? 0.80 : 0.92;
        pointerEvents = 'auto';

        if (isHovered) {
          targetY -= 6;
          targetScale *= 1.02;
          targetRot *= 0.7;
          targetZ = 30;
        }
      } else if (diff === 2) {
        // Outer Right Card (subtle on tablet, hidden on phone to avoid clutter)
        targetX = isMobile ? 150 : isTablet ? 300 : 390;
        targetY = isMobile ? 24 : 32;
        targetRot = isMobile ? 10 : 15;
        targetScale = isMobile ? 0.72 : 0.78;
        targetZ = 14;
        targetOpacity = isMobile ? 0 : 0.65;
        pointerEvents = isMobile ? 'none' : 'auto';

        if (isHovered) {
          targetY -= 4;
          targetZ = 20;
        }
      } else if (diff === -2) {
        // Outer Left Card (subtle on tablet, hidden on phone to avoid clutter)
        targetX = isMobile ? -150 : isTablet ? -300 : -390;
        targetY = isMobile ? 24 : 32;
        targetRot = isMobile ? -10 : -15;
        targetScale = isMobile ? 0.72 : 0.78;
        targetZ = 14;
        targetOpacity = isMobile ? 0 : 0.65;
        pointerEvents = isMobile ? 'none' : 'auto';

        if (isHovered) {
          targetY -= 4;
          targetZ = 20;
        }
      } else {
        // Hidden cards outside visible deck
        const dir = Math.sign(diff);
        targetX = dir * (isMobile ? 240 : 520);
        targetY = 45;
        targetRot = dir * 18;
        targetScale = 0.6;
        targetZ = 1;
        targetOpacity = 0;
        pointerEvents = 'none';
      }

      el.style.pointerEvents = pointerEvents;

      if (animate) {
        gsap.to(el, {
          x: targetX,
          y: targetY,
          rotation: targetRot,
          scale: targetScale,
          zIndex: targetZ,
          opacity: targetOpacity,
          duration: isHovered ? 0.3 : 0.55,
          ease: isHovered ? 'power2.out' : 'power3.out',
          overwrite: 'auto',
        });
      } else {
        gsap.set(el, {
          x: targetX,
          y: targetY,
          rotation: targetRot,
          scale: targetScale,
          zIndex: targetZ,
          opacity: targetOpacity,
        });
      }
    });
  }, [filteredProducts, activeIndex, hoveredIdx, total]);

  // Re-run layout on activeIndex or category switch
  useEffect(() => {
    applyFanLayout(true);
  }, [activeIndex, activeCategory, applyFanLayout]);

  // Window resize handler
  useEffect(() => {
    const onResize = () => applyFanLayout(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [applyFanLayout]);

  // Re-apply on hover state
  useEffect(() => {
    applyFanLayout(true);
  }, [hoveredIdx, applyFanLayout]);

  const activeProduct = filteredProducts[activeIndex] || filteredProducts[0];

  return (
    <div
      className={cn("w-full relative select-none", className)}
      data-purpose="card-fan-carousel"
    >
      {/* Category Filter Pills */}
      {showCategoryFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14 relative z-20">
          {categoryOptions.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                type="button"
                className={cn(
                  "px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer shadow-xs",
                  isActive
                    ? "bg-brand-forest text-white shadow-md scale-105 border border-brand-gold/40"
                    : "bg-white text-neutral-600 hover:bg-brand-sage hover:text-brand-forest border border-neutral-200/80"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Main Interactive Carousel Stage with Left/Right Arrows */}
      <div
        ref={containerRef}
        onTouchStart={(e) => handleStart(e.touches[0].clientX, e.touches[0].clientY)}
        onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX, e.changedTouches[0].clientY)}
        onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
        onMouseUp={(e) => handleEnd(e.clientX, e.clientY)}
        className="relative min-h-[520px] sm:min-h-[560px] md:min-h-[590px] w-full flex items-center justify-center overflow-visible py-6 sm:py-8 cursor-grab active:cursor-grabbing"
      >
        {/* Soft Background Warm Glow */}
        <div className="absolute w-[32rem] h-[32rem] rounded-full bg-brand-gold/8 blur-3xl pointer-events-none -top-10" />

        {/* Navigation Buttons: One on Left (<--), One on Right (-->) */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous card"
          className="absolute left-1.5 sm:left-4 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-brand-forest text-brand-forest hover:text-white shadow-xl hover:shadow-glow-gold border border-brand-forest/20 hover:border-brand-gold transition-all duration-300 flex items-center justify-center cursor-pointer group active:scale-95"
          title="Previous item"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next card"
          className="absolute right-1.5 sm:right-4 md:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-brand-forest text-brand-forest hover:text-white shadow-xl hover:shadow-glow-gold border border-brand-forest/20 hover:border-brand-gold transition-all duration-300 flex items-center justify-center cursor-pointer group active:scale-95"
          title="Next item"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Dynamic Fanned Cards Container */}
        <div className="relative w-full max-w-5xl h-[435px] sm:h-[480px] md:h-[510px] flex items-center justify-center">
          {filteredProducts.map((product, idx) => {
            let diff = idx - activeIndex;
            while (diff > total / 2) diff -= total;
            while (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={product.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                onClick={() => {
                  if (!isCenter) {
                    setActiveIndex(idx);
                  }
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={cn(
                  "absolute top-2 sm:top-5 w-[245px] xs:w-[265px] sm:w-[290px] md:w-[315px] h-[395px] sm:h-[450px] md:h-[475px]",
                  "rounded-3xl overflow-hidden shadow-xl border bg-[#FAF8F5] cursor-pointer transition-shadow duration-300 flex flex-col justify-between select-none",
                  isCenter
                    ? "border-brand-gold shadow-2xl ring-2 ring-brand-gold/60"
                    : isHovered
                    ? "border-brand-forest/50 shadow-xl"
                    : "border-neutral-200/90 shadow-lg"
                )}
                style={{
                  transformOrigin: '50% 75%',
                  willChange: 'transform, opacity',
                }}
              >
                {/* Upper Image Section */}
                <div className="relative h-[200px] sm:h-[240px] md:h-[255px] w-full overflow-hidden bg-brand-forest/5 shrink-0">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 pointer-events-none"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                  {/* Upper-Left Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-forest/90 backdrop-blur-md text-brand-gold text-[10px] sm:text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider border border-brand-gold/30 shadow-sm flex items-center gap-1">
                      <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
                      <span>{product.badge}</span>
                    </span>
                  </div>

                  {/* Upper-Right Price in Nepalese Rupees */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-brand-forest text-xs sm:text-sm font-extrabold px-3 py-1 rounded-xl shadow-md border border-neutral-200/60">
                    Rs. {product.price}
                  </div>
                </div>

                {/* Lower Information Area */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#FAF8F5]">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5 min-h-[28px]">
                      <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-brand-forest leading-snug line-clamp-1">
                        {product.name}
                      </h3>
                      <span className="text-[10px] sm:text-xs font-semibold text-emerald-800 bg-brand-sage px-2 py-0.5 rounded-full shrink-0 mt-0.5">
                        {product.category}
                      </span>
                    </div>

                    <p className="text-neutral-600 text-xs sm:text-[13px] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Feature Tags & Action Button */}
                  <div className="pt-2 border-t border-neutral-200/70 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {product.tags && product.tags.slice(0, 2).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-white/90 border border-neutral-200/60 px-2 py-0.5 rounded text-[10px] text-neutral-600 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onNavigate) {
                          onNavigate('product-detail', product.id);
                        } else {
                          window.location.hash = `#product/${product.id}`;
                        }
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-forest hover:bg-brand-dark text-white text-xs font-bold shadow-xs hover:shadow-glow-gold transition-all duration-200 border border-brand-gold/30 shrink-0 cursor-pointer"
                    >
                      <span>View Detail</span>
                      <ArrowRight className="w-3 h-3 text-brand-gold" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Carousel Pagination Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {filteredProducts.map((prod, pIdx) => {
          const isCurrent = activeIndex === pIdx;
          return (
            <button
              key={prod.id}
              type="button"
              onClick={() => setActiveIndex(pIdx)}
              aria-label={`Go to ${prod.name}`}
              className={cn(
                "transition-all duration-300 rounded-full cursor-pointer",
                isCurrent
                  ? "w-8 h-2.5 bg-brand-forest shadow-xs"
                  : "w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400"
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
