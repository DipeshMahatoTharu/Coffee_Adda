import React, { useState, useMemo, useEffect } from 'react';
import { menuCategories, menuItems, getFallbackImage } from '../data/menuData';
import SearchWithCategory from './ui/search-with-category';
import {
  Search,
  MapPin,
  Coffee,
  X,
  Utensils,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowRight,
} from 'lucide-react';

const ITEMS_PER_PAGE = 12;

export default function Menu({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all' | 'veg' | 'egg' | 'non-veg'
  const [currentPage, setCurrentPage] = useState(1);

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

  // Reset page when category, search query, or dietary filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, dietaryFilter]);

  // Total number of pages
  const totalPages = Math.max(1, Math.ceil(filteredMenuItems.length / ITEMS_PER_PAGE));

  // Current slice of menu items for this page
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredMenuItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredMenuItems, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
    const gridEl = document.getElementById('menu-grid-top');
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Generate pagination page list with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  const handleVisitUs = (e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate('location');
    } else {
      window.location.hash = '#location';
    }
  };

  const handleViewDetails = (item) => {
    if (onNavigate) {
      onNavigate('product-detail', item.id);
    } else {
      window.location.hash = `#product/${item.id}`;
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-brand-cream min-h-screen" id="menu-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Divider & Slogan */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
            <Coffee className="w-4 h-4 text-brand-forest" />
            <span>Coffee Adda • Authentic Café Menu</span>
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
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 max-w-5xl mx-auto bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-neutral-200/90 shadow-sm">
            {/* Search With Category Dropdown & Input */}
            <div className="w-full lg:flex-1">
              <SearchWithCategory
                categories={menuCategories.map((c) => ({
                  id: c.id,
                  label: `${c.icon} ${c.label}`,
                }))}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                placeholder="Search coffee, laphing, momo, breakfast..."
                label=""
              />
            </div>

            {/* Dietary Toggles & Count */}
            <div className="flex items-center justify-between w-full lg:w-auto gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-neutral-200/80">
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
        <div id="menu-grid-top" className="scroll-mt-28" />
        {filteredMenuItems.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="menu-grid">
              {paginatedItems.map((item) => (
                <article
                  key={item.id}
                  className="card-lift bg-white rounded-3xl overflow-hidden border border-neutral-200/90 shadow-md hover:shadow-xl hover:border-brand-forest/30 transition-all duration-300 flex flex-col justify-between group"
                  data-category={item.category}
                >
                  <div>
                    {/* Image Header with Badge & Price in NPR */}
                    <div
                      onClick={() => handleViewDetails(item)}
                      className="relative h-52 sm:h-56 overflow-hidden bg-neutral-100 cursor-pointer"
                      title={`Click to view details of ${item.name}`}
                    >
                      <img
                        alt={item.alt || item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={item.image}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = getFallbackImage(item.category);
                        }}
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
                        <h3
                          onClick={() => handleViewDetails(item)}
                          className="font-serif text-lg sm:text-xl font-bold text-brand-forest group-hover:text-brand-gold transition-colors cursor-pointer"
                        >
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

                  {/* View Details Action Button */}
                  <div className="p-5 pt-0 sm:p-6 sm:pt-0">
                    <button
                      type="button"
                      onClick={() => handleViewDetails(item)}
                      className="w-full py-2.5 px-4 rounded-xl bg-brand-forest hover:bg-brand-dark text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm border border-brand-gold/30 group/btn cursor-pointer"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls 1, 2, 3 ... */}
            {totalPages > 1 && (
              <div className="mt-12 pt-8 border-t border-brand-forest/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Items status */}
                <p className="text-xs sm:text-sm text-neutral-600 font-medium order-2 sm:order-1">
                  Showing{' '}
                  <span className="font-bold text-neutral-900">
                    {(currentPage - 1) * ITEMS_PER_PAGE + 1}
                  </span>{' '}
                  to{' '}
                  <span className="font-bold text-neutral-900">
                    {Math.min(currentPage * ITEMS_PER_PAGE, filteredMenuItems.length)}
                  </span>{' '}
                  of{' '}
                  <span className="font-bold text-neutral-900">
                    {filteredMenuItems.length}
                  </span>{' '}
                  dishes
                </p>

                {/* Numbered Pagination Buttons */}
                <div className="flex items-center gap-1.5 sm:gap-2 order-1 sm:order-2 flex-wrap justify-center">
                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                    className={`inline-flex items-center gap-1 px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      currentPage === 1
                        ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed border border-neutral-200 opacity-60'
                        : 'bg-white text-neutral-800 hover:bg-brand-sage hover:text-brand-forest border border-neutral-200/90 shadow-xs cursor-pointer'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Prev</span>
                  </button>

                  {/* Page Numbers */}
                  {getPageNumbers().map((pageNum, idx) => {
                    if (pageNum === '...') {
                      return (
                        <span
                          key={`ellipsis-${idx}`}
                          className="px-2 py-1 text-neutral-400 font-bold text-sm select-none"
                        >
                          …
                        </span>
                      );
                    }

                    const isActive = currentPage === pageNum;
                    return (
                      <button
                        key={`page-${pageNum}`}
                        type="button"
                        onClick={() => handlePageChange(pageNum)}
                        className={`min-w-9 h-9 sm:min-w-10 sm:h-10 px-2 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center justify-center ${
                          isActive
                            ? 'bg-brand-forest text-white shadow-md border border-brand-gold/40 scale-105'
                            : 'bg-white text-neutral-700 hover:bg-brand-sage hover:text-brand-forest border border-neutral-200/90 shadow-xs'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                    className={`inline-flex items-center gap-1 px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      currentPage === totalPages
                        ? 'bg-neutral-100 text-neutral-400 cursor-not-allowed border border-neutral-200 opacity-60'
                        : 'bg-white text-neutral-800 hover:bg-brand-sage hover:text-brand-forest border border-neutral-200/90 shadow-xs cursor-pointer'
                    }`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
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

      </div>
    </div>
  );
}
