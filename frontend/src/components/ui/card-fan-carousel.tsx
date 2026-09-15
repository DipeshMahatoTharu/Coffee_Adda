import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight, Sparkles, MapPin } from 'lucide-react';
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

export const COFFEE_ADDA_PRODUCTS: CoffeeProduct[] = [
  {
    id: 'prod-cappuccino',
    name: 'Cappuccino',
    category: 'Espresso Bar',
    filterCategory: 'hot',
    badge: 'Popular',
    price: 180,
    description: 'Rich, balanced double espresso topped with equal parts velvety steamed milk and airy foam with signature free-pour latte art.',
    tags: ['🥛 Whole / Oat Milk', '🔥 Hot (8oz)'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMjTB-ditOYgxnlYcLY6V54j2iwNiXT1m2XqIew3Bkse2f-SZYiDFV-55N0Et_85yx-V4H22ZM_cPsw8ly8xP-9k3h7gD4LBH6sdAZPstftH2YNWoQcEz3o8r_jyvunOGXrq99_KEHJGzpwC47b1j3IQtTlsJgr7beMTWxLmM8tGpzlK6jzSf7MhyxwYluZO13U_z_-G_A9O1I7ZbGUEbPi1iDi2OYysiTSYK92b117sjC-bO6nXih',
    alt: 'Artisanal cappuccino with delicate swan latte art in emerald ceramic cup',
    linkUrl: '/#location',
  },
  {
    id: 'prod-latte',
    name: 'Caffè Latte',
    category: 'Silky Smooth',
    filterCategory: 'hot',
    badge: 'Barista Pick',
    price: 180,
    description: 'Gentle espresso combined with generous silky textured micro-foam milk in a sage ceramic cup. Mellow, sweet, and comforting.',
    tags: ['🥛 Customizable', '🔥 Hot (10oz)'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-HydCGjJv_Tr3FhQJ-oXJCh5HT86JQnendHcw2JskFuZGYpXrv_flzBcfbWlH6zpOiIQ8GVrdVtOfZowkSqUtb-XUnOoJs_TRYLs54sZq5lvQ5FexFPcfP15FlUVcc39910_k9wJR6g54EsWJ7u_QaRy1XQxnW1TTBCi8zLh9-K6C1Tbrewg0vkMYqxL8vjmDGvlTQWE3g-docRIf5-duA2vbweeJYjTo-Q8e_Lky7XCmqM_lIrVG',
    alt: 'Velvety caffe latte poured with rosetta microfoam in sage ceramic cup',
    linkUrl: '/#location',
  },
  {
    id: 'prod-icedcoffee',
    name: 'Signature Iced Coffee',
    category: 'Chilled',
    filterCategory: 'cold',
    badge: 'Summer Fav',
    price: 340,
    description: 'Slow-drip 14-hour cold brew layered over condensed milk swirl, served tall on crystal ice with whole roasted coffee bean garnish.',
    tags: ['🧊 Extra Chilled', '⚡ High Caffeine'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNjPKlqKtESQ0TETpEvAJ6w_PSCQk9WgAA1Jgc4uHzJoZ09hVO10rICprzoG_ZB8gMYCO23wsuw-CQV0X0VvgsdhD3Y5eCXnqJGkFbUj2EZ4nLeyMkKTkPZnm92CqElBheeuEToElHeY9b_110tlgan7d383KkzKtSMQTFxQbL1heAHP0ZZ0M4-u3hl2cdUpx7-OUCjgjAi3OT0QSz4-fRL6cH04idkadg3soDM8gnkUMfW_UD4cSA',
    alt: 'Tall glass of signature iced coffee with espresso cream swirling over crystal ice',
    linkUrl: '/#location',
  },
  {
    id: 'prod-croissant',
    name: 'Artisan Butter Croissant',
    category: 'Pastry',
    filterCategory: 'bakery',
    badge: 'Fresh Baked',
    price: 220,
    description: 'Flaky, multi-layered golden French pastry baked fresh daily at 6:30 AM with creamy alpine butter.',
    tags: ['🥐 Hand-rolled', '✨ Warm Served'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    alt: 'Freshly baked golden artisan butter croissants with flaky layered crust',
    linkUrl: '/#location',
  },
  {
    id: 'prod-coldbrew',
    name: 'Cascara Sparkling Cold Brew',
    category: 'Refresher',
    filterCategory: 'cold',
    badge: 'Specialty',
    price: 330,
    description: 'Infused with organic coffee cherry peel, tonic water, and a twist of local fresh lime over crystal ice.',
    tags: ['🍋 Citrus Zest', '🧊 Light Fizz'],
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    alt: 'Refreshing sparkling cold brew coffee with fresh citrus slice in chilled glass',
    linkUrl: '/#location',
  },
  {
    id: 'prod-babka',
    name: 'Chocolate Babka Brioche',
    category: 'House Special',
    filterCategory: 'bakery',
    badge: 'Sweet Treat',
    price: 260,
    description: 'Braided sweet yeast bread swirled with 70% dark Himalayan cocoa and fragrant Ceylon cinnamon syrup.',
    tags: ['🍫 Dark Chocolate', '🍯 Honey Glaze'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    alt: 'Braided chocolate babka brioche swirled with rich dark Himalayan cocoa',
    linkUrl: '/#location',
  },
];

interface BaseCardPosition {
  rot: number;
  scale: number;
  x: number;
  y: number;
  zIndex: number;
}

/**
 * Dynamic calculation of balanced fan positions based on card count & viewport width.
 * Exactly 6 products in All Favorites are arranged in a balanced six-card fan.
 * Filtered categories (2 cards) are balanced dynamically without empty slots.
 */
function getDynamicFanPositions(count: number, isMobile: boolean, isTablet: boolean): BaseCardPosition[] {
  if (count === 2) {
    if (isMobile) {
      return [
        { rot: -3, scale: 0.95, x: -70, y: 0, zIndex: 2 },
        { rot: 3, scale: 0.95, x: 70, y: 0, zIndex: 2 },
      ];
    }
    return [
      { rot: -3.5, scale: 1.0, x: -160, y: 0, zIndex: 2 },
      { rot: 3.5, scale: 1.0, x: 160, y: 0, zIndex: 2 },
    ];
  }

  if (count === 4) {
    if (isMobile) {
      return [
        { rot: -10, scale: 0.82, x: -110, y: 16, zIndex: 1 },
        { rot: -3, scale: 0.94, x: -36, y: 4, zIndex: 2 },
        { rot: 3, scale: 0.94, x: 36, y: 4, zIndex: 2 },
        { rot: 10, scale: 0.82, x: 110, y: 16, zIndex: 1 },
      ];
    }
    return [
      { rot: -12, scale: 0.88, x: -240, y: 22, zIndex: 1 },
      { rot: -4, scale: 0.98, x: -80, y: 5, zIndex: 2 },
      { rot: 4, scale: 0.98, x: 80, y: 5, zIndex: 2 },
      { rot: 12, scale: 0.88, x: 240, y: 22, zIndex: 1 },
    ];
  }

  // 6-Card Balanced Fan Layout
  if (isMobile) {
    return [
      { rot: -15, scale: 0.76, x: -130, y: 28, zIndex: 1 },
      { rot: -9, scale: 0.84, x: -78, y: 14, zIndex: 2 },
      { rot: -3, scale: 0.93, x: -26, y: 4, zIndex: 3 },
      { rot: 3, scale: 0.93, x: 26, y: 4, zIndex: 3 },
      { rot: 9, scale: 0.84, x: 78, y: 14, zIndex: 2 },
      { rot: 15, scale: 0.76, x: 130, y: 28, zIndex: 1 },
    ];
  }

  if (isTablet) {
    return [
      { rot: -17, scale: 0.78, x: -250, y: 34, zIndex: 1 },
      { rot: -10.5, scale: 0.86, x: -150, y: 18, zIndex: 2 },
      { rot: -4, scale: 0.94, x: -50, y: 5, zIndex: 3 },
      { rot: 4, scale: 0.94, x: 50, y: 5, zIndex: 3 },
      { rot: 10.5, scale: 0.86, x: 150, y: 18, zIndex: 2 },
      { rot: 17, scale: 0.78, x: 250, y: 34, zIndex: 1 },
    ];
  }

  // Desktop Balanced Six-Card Fan
  return [
    { rot: -18, scale: 0.80, x: -350, y: 38, zIndex: 1 },
    { rot: -11, scale: 0.88, x: -210, y: 20, zIndex: 2 },
    { rot: -4.5, scale: 0.96, x: -70, y: 6, zIndex: 3 },
    { rot: 4.5, scale: 0.96, x: 70, y: 6, zIndex: 3 },
    { rot: 11, scale: 0.88, x: 210, y: 20, zIndex: 2 },
    { rot: 18, scale: 0.80, x: 350, y: 38, zIndex: 1 },
  ];
}

export interface CardFanCarouselProps {
  items?: CoffeeProduct[];
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
  showCategoryFilters?: boolean;
  className?: string;
}

export default function CardFanCarousel({
  items = COFFEE_ADDA_PRODUCTS,
  activeCategory: externalCategory,
  onCategoryChange,
  showCategoryFilters = true,
  className,
}: CardFanCarouselProps) {
  const [internalCategory, setInternalCategory] = useState<string>('all');
  const activeCategory = externalCategory !== undefined ? externalCategory : internalCategory;

  const handleSelectCategory = (cat: string) => {
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

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasMounted = useRef<boolean>(false);

  const categoryOptions = [
    { id: 'all', label: 'All Favorites' },
    { id: 'hot', label: 'Hot Brews' },
    { id: 'cold', label: 'Cold Specials' },
    { id: 'bakery', label: 'Artisan Bakery' },
  ];

  // GSAP fan layout engine
  const applyFanLayout = useCallback((animate = true) => {
    if (!containerRef.current) return;
    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

    const count = filteredProducts.length;
    if (count === 0) return;

    const basePositions = getDynamicFanPositions(count, isMobile, isTablet);

    filteredProducts.forEach((_, i) => {
      const el = cardRefs.current[i];
      if (!el) return;

      const base = basePositions[i] || { rot: 0, scale: 1, x: 0, y: 0, zIndex: 1 };

      let targetX = base.x;
      let targetY = base.y;
      let targetRot = base.rot;
      let targetScale = base.scale;
      let targetZ = base.zIndex;

      // Interactive hover behavior
      if (hoveredIdx !== null) {
        if (i === hoveredIdx) {
          // Hovered card lifts and scales up 6%
          targetY = base.y - (isMobile ? 18 : 32);
          targetScale = base.scale * 1.06;
          targetRot = base.rot * 0.35; // straightens up
          targetZ = 45; // topmost
        } else if (i < hoveredIdx) {
          // Cards to the left move slightly outward
          targetX = base.x - (isMobile ? 14 : 35);
          targetRot = base.rot - 2;
          targetY = base.y + 4;
        } else if (i > hoveredIdx) {
          // Cards to the right move slightly outward
          targetX = base.x + (isMobile ? 14 : 35);
          targetRot = base.rot + 2;
          targetY = base.y + 4;
        }
      }

      if (animate) {
        gsap.to(el, {
          x: targetX,
          y: targetY,
          rotation: targetRot,
          scale: targetScale,
          zIndex: targetZ,
          duration: hoveredIdx !== null ? 0.35 : 0.65,
          ease: hoveredIdx !== null ? 'power2.out' : 'elastic.out(1, 0.85)',
          overwrite: 'auto',
        });
      } else {
        gsap.set(el, {
          x: targetX,
          y: targetY,
          rotation: targetRot,
          scale: targetScale,
          zIndex: targetZ,
        });
      }
    });
  }, [filteredProducts, hoveredIdx]);

  // Handle initial mount and category switches
  useEffect(() => {
    setHoveredIdx(null);

    const validEls = cardRefs.current.slice(0, filteredProducts.length).filter(Boolean);

    if (validEls.length > 0) {
      gsap.fromTo(
        validEls,
        {
          y: 70,
          opacity: 0,
          scale: 0.85,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          duration: 0.75,
          ease: 'elastic.out(1, 0.75)',
          onComplete: () => {
            applyFanLayout(false);
          },
        }
      );
    }

    const onResize = () => applyFanLayout(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [filteredProducts, activeCategory]);

  // Re-apply fan layout on hover state changes
  useEffect(() => {
    applyFanLayout(true);
  }, [hoveredIdx, applyFanLayout]);

  // Only show pagination when items > 7 as specified
  const showPagination = filteredProducts.length > 7;

  return (
    <div
      className={cn("w-full relative select-none", className)}
      data-purpose="card-fan-carousel"
    >
      {/* Category Filters */}
      {showCategoryFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
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

      {/* Balanced Fan Carousel Stage */}
      <div
        ref={containerRef}
        className="relative h-[510px] sm:h-[550px] md:h-[590px] w-full flex items-center justify-center overflow-hidden py-4"
      >
        {/* Soft Background Warm Glow */}
        <div className="absolute w-[32rem] h-[32rem] rounded-full bg-brand-gold/8 blur-3xl pointer-events-none -top-10" />

        {/* Dynamic Fanned Cards Container */}
        <div className="relative w-full max-w-5xl h-[440px] sm:h-[480px] md:h-[500px] flex items-center justify-center">
          {filteredProducts.map((product, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={product.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={cn(
                  "absolute top-0 w-[260px] sm:w-[290px] md:w-[315px] h-[410px] sm:h-[450px] md:h-[475px]",
                  "rounded-3xl overflow-hidden shadow-xl border bg-[#FAF8F5] cursor-pointer transition-shadow duration-300 flex flex-col justify-between",
                  isHovered
                    ? "border-brand-gold shadow-2xl ring-2 ring-brand-gold/50"
                    : "border-neutral-200/90 hover:border-brand-forest/30 shadow-lg"
                )}
                style={{
                  transformOrigin: '50% 120%',
                  willChange: 'transform, opacity',
                }}
              >
                {/* Upper Image Section */}
                <div className="relative h-[210px] sm:h-[240px] md:h-[255px] w-full overflow-hidden bg-brand-forest/5 shrink-0">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                  {/* Upper-Left Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-forest/90 backdrop-blur-md text-brand-gold text-[10px] sm:text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider border border-brand-gold/30 shadow-sm">
                      {product.badge}
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
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-forest truncate">
                        {product.name}
                      </h3>
                      <span className="text-[10px] sm:text-xs font-semibold text-emerald-800 bg-brand-sage px-2 py-0.5 rounded-full shrink-0">
                        {product.category}
                      </span>
                    </div>

                    <p className="text-neutral-600 text-xs sm:text-[13px] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Feature Tags & Visit Us CTA */}
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

                    <a
                      href={product.linkUrl}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-forest hover:bg-brand-dark text-white text-xs font-bold shadow-xs hover:shadow-glow-gold transition-all duration-200 border border-brand-gold/30 shrink-0"
                    >
                      <span>Visit Us</span>
                      <MapPin className="w-3 h-3 text-brand-gold" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Pagination Arrows (rendered only if cards.length > 7 as per spec) */}
        {showPagination && (
          <>
            <button
              aria-label="Previous card"
              type="button"
              className="absolute left-4 z-40 w-11 h-11 rounded-full bg-white/95 border border-brand-forest/20 text-brand-forest shadow-md flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              aria-label="Next card"
              type="button"
              className="absolute right-4 z-40 w-11 h-11 rounded-full bg-white/95 border border-brand-forest/20 text-brand-forest shadow-md flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Helpful Patrons Note */}
      <div className="text-center mt-3">
        <p className="text-xs text-neutral-500">
          Hover over any card to inspect tasting notes and details. Available fresh daily at our Budhanilkantha counter.
        </p>
      </div>
    </div>
  );
}
