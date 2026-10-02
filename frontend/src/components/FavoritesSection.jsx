import React, { useState, useEffect } from 'react';
import CardFanCarousel from './ui/card-fan-carousel';
import { ArrowRight } from 'lucide-react';
import { getStoredMenuItems, subscribeToMenuUpdates } from '../data/menuData';

export default function FavoritesSection({ onNavigate }) {
  const [favoriteCategory, setFavoriteCategory] = useState('all');
  const [itemsCount, setItemsCount] = useState(() => getStoredMenuItems().length);

  useEffect(() => {
    return subscribeToMenuUpdates((items) => {
      setItemsCount(items.length);
    });
  }, []);

  const handleViewMore = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('menu');
    } else {
      window.location.hash = '#menu';
    }
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-brand-cream/70" data-purpose="featured-favorites" id="favorites">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
            Handcrafted Selections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-forest tracking-tight">
            Our Favorites
          </h2>
          <p className="text-neutral-600 mt-3 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Sample the most loved pours and signatures made daily at Coffee Adda. Available for takeaway and quick pickup.
          </p>
        </div>

        {/* Card Fan Carousel */}
        <div className="mb-4">
          <CardFanCarousel
            activeCategory={favoriteCategory}
            onCategoryChange={setFavoriteCategory}
            showCategoryFilters={true}
            onNavigate={onNavigate}
          />
        </div>

        {/* View More CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href="#menu"
            onClick={handleViewMore}
            className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-brand-forest text-white font-bold text-sm sm:text-base shadow-lg hover:bg-brand-dark hover:shadow-glow-gold hover:-translate-y-1 transition-all duration-300 border border-brand-gold/50 group cursor-pointer"
          >
            <span>View More</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold group-hover:translate-x-1.5 transition-transform" />
          </a>
          <p className="text-neutral-500 text-xs mt-2.5 font-medium">
            Explore our complete {itemsCount}+ item menu with breakfast, laphing, pasta, teas &amp; bar specials
          </p>
        </div>
      </div>
    </section>
  );
}
