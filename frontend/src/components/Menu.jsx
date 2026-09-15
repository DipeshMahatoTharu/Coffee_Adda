import React, { useState, useMemo } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import { Search, MapPin, Coffee, X, ArrowLeft, Utensils } from 'lucide-react';

export default function Menu({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all' | 'veg' | 'egg' | 'non-veg'

  // Filter menu items based on category, search query, and dietary selection
  const filteredMenuItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      const matchesSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDietary =
        dietaryFilter === 'all' ||
        (dietaryFilter === 'veg' && item.dietary === 'veg') ||
        (dietaryFilter === 'egg' && item.dietary === 'egg') ||
        (dietaryFilter === 'non-veg' && item.dietary === 'non-veg');

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  const handleBackToHome = (e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.hash = '#home';
    }
  };

  const handleVisitUs = (e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate('home', '#location');rp
    } else {
      window.location.hash = '#location';
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-brand-cream min-h-screen" id="menu-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Divider & Slogan */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-forest text-brand-cream shadow-sm mb-3">
            <Coffee className="w-4 h-4 text-brand-gold" />
            <span className="text-xs font-bold tracking-wider uppercase">
              Coffee Adda • Authentic Café Menu
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-brand-forest tracking-tight">
            Explore Our Complete Menu
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-brand-warmbrown font-medium mt-2">
            &quot;The Spot where great mind gathers&quot;
          </p>
          <p className="text-neutral-600 mt-2 text-xs sm:text-sm max-w-xl mx-auto">
            From our freshly pulled espresso bar and iced blends to savory momo platters, laphing, pasta, breakfast eggs, and traditional Nepali khaja.
          </p>
        </div>

        {/* Controls Bar: Category Tabs, Search Bar & Dietary Filters */}
        <div className="space-y-6 mb-12">
          {/* Category Navigation Pills */}
          <div
            aria-label="Menu Category Tabs"
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5"
            role="tablist"
          >
            {menuCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-forest text-white shadow-md border border-brand-gold/40 scale-105'
                      : 'bg-white text-neutral-700 hover:bg-brand-sage hover:text-brand-forest border border-neutral-200/90 shadow-xs'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search and Dietary Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-neutral-200/90 shadow-sm">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search dishes (e.g. laphing, momo, latte)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded-xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-forest/40 focus:bg-white text-neutral-800 transition-all placeholder:text-neutral-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dietary Toggles & Count */}
            <div className="flex items-center justify-between w-full sm:w-auto gap-3">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setDietaryFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    dietaryFilter === 'all'
                      ? 'bg-brand-forest text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setDietaryFilter('veg')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 ${
                    dietaryFilter === 'veg'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                  }`}
                >
                  <span>🌱</span>
                  <span>Veg</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDietaryFilter('egg')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 ${
                    dietaryFilter === 'egg'
                      ? 'bg-amber-600 text-white'
                      : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
                  }`}
                >
                  <span>🍳</span>
                  <span>Egg</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDietaryFilter('non-veg')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 ${
                    dietaryFilter === 'non-veg'
                      ? 'bg-rose-800 text-white'
                      : 'bg-rose-50 text-rose-900 hover:bg-rose-100'
                  }`}
                >
                  <span>🍗</span>
                  <span>Non-Veg</span>
                </button>
              </div>

              <span className="text-xs font-semibold text-neutral-500 shrink-0">
                {filteredMenuItems.length} item{filteredMenuItems.length === 1 ? '' : 's'}
              </span>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredMenuItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="menu-grid">
            {filteredMenuItems.map((item) => (
              <article
                key={item.id}
                className="card-lift bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-md hover:shadow-xl hover:border-brand-forest/30 transition-all duration-300 flex flex-col justify-between group"
                data-category={item.category}
              >
                <div>
                  {/* Image Header with Badge & Price in NPR */}
                  <div className="relative h-52 sm:h-56 overflow-hidden bg-neutral-100">
                    <img
                      alt={item.alt || item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.image}
                      loading="lazy"
                    />
                    {/* Subtle Dark Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Tag / Badge */}
                    {item.tag && (
                      <span className="absolute top-3 left-3 bg-brand-forest/90 backdrop-blur-md text-brand-gold text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider border border-brand-gold/30 shadow-sm">
                        {item.tag}
                      </span>
                    )}

                    {/* Price in NPR from Physical Menu */}
                    <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-brand-forest text-sm font-extrabold px-3 py-1 rounded-xl shadow-md border border-neutral-200/70">
                      Rs. {item.price}
                    </span>

                    {/* Dietary Icon */}
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-xs px-2 py-0.5 rounded-md shadow-xs font-semibold">
                      {item.dietary === 'veg' ? '🌱 Veg' : item.dietary === 'egg' ? '🍳 Egg' : '🍗 Non-Veg'}
                    </span>
                  </div>

                  {/* Card Information */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-forest group-hover:text-brand-gold transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-[10px] sm:text-xs font-semibold text-emerald-800 bg-brand-sage px-2 py-0.5 rounded-full shrink-0">
                        {item.subCategory}
                      </span>
                    </div>

                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Details & Tags */}
                    {item.details && item.details.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 text-[11px] text-neutral-500 font-medium">
                        {item.details.map((detail, dIdx) => (
                          <span key={dIdx} className="bg-neutral-100 px-2 py-0.5 rounded">
                            {detail}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Informational CTA */}
                <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                  <a
                    href="#location"
                    onClick={handleVisitUs}
                    className="w-full py-2.5 px-4 rounded-xl bg-brand-forest hover:bg-brand-dark text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm border border-brand-gold/30 group/btn cursor-pointer"
                  >
                    <span>Visit Us to Taste</span>
                    <MapPin className="w-3.5 h-3.5 text-brand-gold group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200/90 shadow-sm max-w-xl mx-auto p-8">
            <Utensils className="w-12 h-12 mx-auto text-neutral-300 mb-3" />
            <h4 className="font-serif text-xl font-bold text-neutral-800">No items match your filters</h4>
            <p className="text-neutral-500 text-sm mt-1 mb-5">
              Try adjusting your search query or selecting &quot;All Items&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              type="button"
              className="px-6 py-2.5 rounded-full bg-brand-forest text-white text-xs font-bold hover:bg-brand-dark transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Back to Home Button at bottom */}
        <div className="text-center mt-16 pt-8 border-t border-brand-forest/10">
          <button
            onClick={handleBackToHome}
            type="button"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-brand-forest font-bold text-sm border-2 border-brand-forest/20 hover:border-brand-forest hover:bg-brand-sage/40 transition-all shadow-xs cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Homepage</span>
          </button>
        </div>

      </div>
    </div>
  );
}
