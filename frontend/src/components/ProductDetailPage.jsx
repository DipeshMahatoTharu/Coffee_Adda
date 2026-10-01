import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  MapPin,
  Phone,
  Share2,
  Check,
  Star,
  Clock,
  Sparkles,
  BookOpen,
  ChefHat,
  Coffee,
  Heart,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Flame,
} from 'lucide-react';
import { menuItems, menuCategories } from '../data/menuData';
import { getProductStory } from '../data/productStories';

export default function ProductDetailPage({ productId, onNavigate }) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  // Find product in menuItems or fallback
  const product = menuItems.find((item) => item.id === productId) || menuItems[0];
  const story = getProductStory(product);

  // Find category label
  const categoryObj = menuCategories.find((cat) => cat.id === product?.category);
  const categoryLabel = categoryObj ? categoryObj.label : product?.subCategory || 'Menu';

  // Find related / complementary items
  const relatedItems = menuItems
    .filter((item) => item.id !== product?.id && (item.category === product?.category || item.tag === 'Popular'))
    .slice(0, 3);

  // Scroll to top on mount or productId change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.name} - Coffee Adda`,
          text: `Check out ${product.name} at Coffee Adda Budhanilkantha!`,
          url: url,
        });
      } catch (err) {
        // User cancelled or share failed, fallback to copy
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleBackToMenu = () => {
    if (onNavigate) {
      onNavigate('menu');
    } else {
      window.location.hash = '#menu';
    }
  };

  const handleVisitUs = () => {
    if (onNavigate) {
      onNavigate('location');
    } else {
      window.location.hash = '#location';
    }
  };

  const handleSelectRelated = (relatedId) => {
    if (onNavigate) {
      onNavigate('product-detail', relatedId);
    } else {
      window.location.hash = `#product/${relatedId}`;
    }
  };

  if (!product) {
    return (
      <div className="py-24 text-center bg-brand-cream min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif font-bold text-brand-forest mb-4">Product Not Found</h2>
        <button
          onClick={handleBackToMenu}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-forest text-white font-bold text-sm shadow-md hover:bg-brand-dark transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Menu</span>
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream py-8 sm:py-12" id="product-detail-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8">
          <button
            onClick={handleBackToMenu}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200/90 text-brand-forest hover:bg-brand-forest hover:text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Full Menu</span>
          </button>

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
            <span
              onClick={() => onNavigate ? onNavigate('home') : window.location.hash = '#home'}
              className="hover:text-brand-forest cursor-pointer transition-colors"
            >
              Home
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span
              onClick={handleBackToMenu}
              className="hover:text-brand-forest cursor-pointer transition-colors"
            >
              Menu
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-700 font-semibold">{categoryLabel}</span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 hidden sm:inline" />
            <span className="text-brand-forest font-bold hidden sm:inline truncate max-w-[180px]">
              {product.name}
            </span>
          </nav>
        </div>

        {/* ======================================================== */}
        {/* HERO SHOWCASE CARD (Image & Quick Info) */}
        {/* ======================================================== */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-neutral-200/90 mb-10 sm:mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Product Image Box */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 sm:aspect-square w-full rounded-2xl overflow-hidden shadow-md bg-neutral-100 border border-neutral-200/80 group">
                <img
                  src={product.image}
                  alt={product.alt || product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Tag Badge */}
                {product.tag && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-forest/90 backdrop-blur-md text-brand-gold text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider border border-brand-gold/30 shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-brand-gold fill-brand-gold" />
                      <span>{product.tag}</span>
                    </span>
                  </div>
                )}

                {/* Floating Dietary Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full shadow-md border border-neutral-200/80 flex items-center gap-1">
                    {product.dietary === 'veg' ? '🌱 Pure Veg' : product.dietary === 'egg' ? '🍳 Contains Egg' : '🍗 Non-Veg'}
                  </span>
                </div>

                {/* Like Button */}
                <button
                  type="button"
                  onClick={() => setLiked(!liked)}
                  aria-label="Save as favorite"
                  className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-neutral-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-pink-500 text-pink-500' : ''}`} />
                </button>

                {/* Fresh Quality Guarantee Stamp */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Freshly Prepared on Order</span>
                </div>
              </div>
            </div>

            {/* Right: Product Headline, Price & Quick Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Category & Rating */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-extrabold text-emerald-800 bg-brand-sage px-3 py-1 rounded-full tracking-wide">
                    {product.subCategory}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>4.9</span>
                    <span className="text-neutral-400 font-normal">/ 5.0</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-forest tracking-tight leading-tight mb-3">
                  {product.name}
                </h1>

                {/* Price Display */}
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-brand-forest">
                    Rs. {product.price}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-500 font-medium">
                    (Standard Portion • Dine-In &amp; Takeaway)
                  </span>
                </div>

                {/* Description */}
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Details & Attributes Tags */}
                {product.details && product.details.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                      Highlights &amp; Serving Style
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.details.map((detail, dIdx) => (
                        <span
                          key={dIdx}
                          className="bg-neutral-100 hover:bg-neutral-200/80 transition-colors border border-neutral-200/70 text-neutral-800 px-3 py-1.5 rounded-xl text-xs font-semibold"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Call to Actions */}
              <div className="pt-6 border-t border-neutral-200/80">
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  {/* Primary Visit CTA */}
                  <button
                    onClick={handleVisitUs}
                    className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-2xl bg-brand-forest hover:bg-brand-dark text-white font-bold text-sm shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 border border-brand-gold/40 cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-brand-gold" />
                    <span>Visit Us to Taste in Budhanilkantha</span>
                  </button>

                  {/* Secondary Call for Takeaway */}
                  <a
                    href="tel:+9779841837856"
                    className="w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 border border-neutral-300/80 cursor-pointer"
                    title="Call Coffee Adda for takeaway or preorder"
                  >
                    <Phone className="w-4 h-4 text-brand-forest" />
                    <span>Call Ahead</span>
                  </a>

                  {/* Share Button */}
                  <button
                    onClick={handleShare}
                    aria-label="Share this dish"
                    className="w-full sm:w-auto py-3.5 px-4 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-700 font-bold text-sm border border-neutral-200 shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700 text-xs font-bold">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4" />
                        <span className="sm:hidden text-xs">Share</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-xs text-neutral-500 mt-3 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Freshly made daily from 7:00 AM – 9:00 PM • Takeaway available</span>
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* TWO-COLUMN IN-DEPTH DETAILS: HISTORY & HOW IT IS MADE */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16">
          
          {/* LEFT: THE HISTORY & HERITAGE OF THE PRODUCT */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-neutral-200/90 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
                <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                <span>Heritage &amp; Origins</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-forest mb-4">
                The Story Behind {product.name}
              </h2>

              <div className="prose prose-neutral text-neutral-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>{story.history}</p>
              </div>
            </div>

            {/* Artisan Quote Block */}
            {story.artisanQuote && (
              <div className="mt-6 pt-6 border-t border-neutral-200/70 bg-brand-cream/40 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-3xl">
                <p className="font-serif italic text-sm sm:text-base text-brand-forest font-semibold">
                  {story.artisanQuote}
                </p>
                <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mt-2">
                  — Coffee Adda Culinary &amp; Barista Team
                </p>
              </div>
            )}
          </div>

          {/* RIGHT: HOW IT IS MADE (STEP-BY-STEP ARTISAN CRAFT) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-neutral-200/90 flex flex-col justify-between">
            <div>
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                <ChefHat className="w-3.5 h-3.5 text-emerald-700" />
                <span>Craftsmanship &amp; Method</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-forest mb-4">
                How It Is Made
              </h2>

              {/* Step-by-Step Flow */}
              <div className="space-y-4">
                {story.howItIsMade.map((stepItem) => (
                  <div key={stepItem.step} className="flex items-start gap-3.5 group">
                    {/* Step Number Circle */}
                    <div className="w-8 h-8 rounded-xl bg-brand-forest text-brand-gold flex items-center justify-center font-bold text-xs shrink-0 shadow-xs mt-0.5 group-hover:scale-110 transition-transform">
                      {stepItem.step}
                    </div>

                    <div>
                      <h3 className="font-bold text-brand-forest text-sm sm:text-base">
                        {stepItem.title}
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mt-0.5">
                        {stepItem.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasting Notes Chips */}
            {story.tastingNotes && story.tastingNotes.length > 0 && (
              <div className="mt-6 pt-5 border-t border-neutral-200/70">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Flavor Profile &amp; Tasting Notes</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {story.tastingNotes.map((note, nIdx) => (
                    <span
                      key={nIdx}
                      className="px-3 py-1 rounded-full bg-brand-forest/5 text-brand-forest border border-brand-forest/15 text-xs font-bold"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* ======================================================== */}
        {/* RECOMMENDED PAIRINGS & RELATED ITEMS */}
        {/* ======================================================== */}
        {relatedItems.length > 0 && (
          <div className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-neutral-400">
                  Perfect Pairings
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-forest mt-1">
                  You Might Also Enjoy
                </h3>
              </div>
              <button
                onClick={handleBackToMenu}
                className="text-xs sm:text-sm font-bold text-brand-forest hover:text-brand-dark flex items-center gap-1 self-start sm:self-auto cursor-pointer"
              >
                <span>Explore all {categoryLabel}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedItems.map((relItem) => (
                <div
                  key={relItem.id}
                  onClick={() => handleSelectRelated(relItem.id)}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-brand-forest/30 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden bg-neutral-100">
                      <img
                        src={relItem.image}
                        alt={relItem.alt || relItem.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-md text-brand-forest text-xs font-extrabold px-2.5 py-0.5 rounded-lg shadow-xs">
                        Rs. {relItem.price}
                      </span>
                      {relItem.tag && (
                        <span className="absolute top-2.5 left-2.5 bg-brand-forest/90 text-brand-gold text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                          {relItem.tag}
                        </span>
                      )}
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h4 className="font-serif text-base sm:text-lg font-bold text-brand-forest group-hover:text-brand-gold transition-colors line-clamp-1">
                          {relItem.name}
                        </h4>
                        <span className="text-[10px] font-semibold text-emerald-800 bg-brand-sage px-2 py-0.5 rounded-full shrink-0">
                          {relItem.subCategory}
                        </span>
                      </div>
                      <p className="text-neutral-600 text-xs line-clamp-2 leading-relaxed">
                        {relItem.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0 sm:p-5 sm:pt-0">
                    <button
                      type="button"
                      className="w-full py-2 px-3 rounded-xl bg-neutral-100 group-hover:bg-brand-forest group-hover:text-white text-brand-forest font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View Detail &amp; History</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM VISIT INVITATION BANNER */}
        <div className="bg-brand-forest rounded-3xl p-8 sm:p-10 text-white shadow-xl text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-brand-gold/10 blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-gold">
              The Spot Where Great Minds Gather
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-extrabold mt-2 mb-3">
              Ready to taste this in person?
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mb-6 leading-relaxed">
              Visit our serene cafe in Budhanilkantha for freshly pulled espresso, authentic Himalayan khaja, fast fiber WiFi, and warm mountain air.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleVisitUs}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-brand-gold hover:bg-brand-gold/90 text-brand-forest font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Get Directions to Coffee Adda
              </button>
              <button
                onClick={handleBackToMenu}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/20 cursor-pointer"
              >
                Browse Other Menu Items
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
