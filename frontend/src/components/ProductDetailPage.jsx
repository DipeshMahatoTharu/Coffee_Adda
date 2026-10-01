import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Phone,
  Share2,
  Check,
  Star,
  Clock,
  BookOpen,
  ChefHat,
  Coffee,
  Heart,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Flame,
  Zap,
} from 'lucide-react';
import { menuItems, menuCategories } from '../data/menuData';
import { getProductStory } from '../data/productStories';

export default function ProductDetailPage({ productId, onNavigate }) {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  // Find product in menuItems or fallback
  const product = menuItems.find((item) => item.id === productId) || menuItems[0];
  const story = getProductStory(product);

  // Check if beverage is hot to display steam/aroma animation
  const isHot =
    product?.category === 'hot-beverages' ||
    product?.category === 'tea-special' ||
    product?.details?.some((d) => d.toLowerCase().includes('hot'));

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
    <motion.div
      key={product.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-brand-cream py-8 sm:py-12"
      id="product-detail-view"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb Bar */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-between gap-4 mb-6 sm:mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.03, x: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleBackToMenu}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200/90 text-brand-forest hover:bg-brand-forest hover:text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Full Menu</span>
          </motion.button>

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
        </motion.div>

        {/* ======================================================== */}
        {/* HERO SHOWCASE CARD (Image & Quick Info with Motion) */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-neutral-200/90 mb-10 sm:mb-14 relative overflow-hidden"
        >
          {/* Subtle Ambient Background Highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left: Product Image Box with Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative aspect-4/3 sm:aspect-square w-full rounded-2xl overflow-hidden shadow-md bg-neutral-100 border border-neutral-200/80 group">
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={product.image}
                  alt={product.alt || product.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Animated Hot Steam / Aroma Float for Warm Espresso / Coffee */}
                {isHot && (
                  <motion.div
                    animate={{
                      y: [-2, -10, -2],
                      opacity: [0.35, 0.75, 0.35],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-4 right-1/2 translate-x-1/2 z-20 pointer-events-none flex gap-1.5"
                  >
                    <span className="w-1.5 h-6 bg-white/50 blur-[2px] rounded-full" />
                    <span className="w-2 h-9 bg-white/60 blur-[2px] rounded-full delay-100" />
                    <span className="w-1.5 h-5 bg-white/50 blur-[2px] rounded-full delay-200" />
                  </motion.div>
                )}

                {/* Floating Tag Badge with Spring Pop */}
                {product.tag && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.25 }}
                    className="absolute top-4 left-4"
                  >
                    <span className="bg-brand-forest/90 backdrop-blur-md text-brand-gold text-xs font-extrabold uppercase px-3 py-1 rounded-full tracking-wider border border-brand-gold/40 shadow-md">
                      {product.tag}
                    </span>
                  </motion.div>
                )}

                {/* Floating Dietary Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="absolute top-4 right-4"
                >
                  <span className="bg-white/95 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full shadow-md border border-neutral-200/80 flex items-center gap-1">
                    {product.dietary === 'veg' ? '🌱 Pure Veg' : product.dietary === 'egg' ? '🍳 Contains Egg' : '🍗 Non-Veg'}
                  </span>
                </motion.div>

                {/* Like Button with Tap Animation */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setLiked(!liked)}
                  aria-label="Save as favorite"
                  className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-neutral-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-pink-500 text-pink-500' : ''}`} />
                </motion.button>

                {/* Fresh Quality Guarantee Stamp */}
                <div className="absolute bottom-4 right-4 bg-black/65 backdrop-blur-xs text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Freshly Prepared on Order</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Product Headline, Price & Interactive Quick Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Category & Rating Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  className="flex flex-wrap items-center justify-between gap-2 mb-3"
                >
                  <span className="text-xs font-extrabold text-emerald-800 bg-brand-sage px-3 py-1 rounded-full tracking-wide">
                    {product.subCategory}
                  </span>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-500 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>4.9</span>
                    <span className="text-neutral-400 font-normal">/ 5.0 (Budhanilkantha Guest Fav)</span>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-forest tracking-tight leading-tight mb-3"
                >
                  {product.name}
                </motion.h1>

                {/* Price Display with Highlight */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="flex items-baseline gap-3 mb-5"
                >
                  <span className="text-3xl sm:text-4xl font-extrabold text-brand-forest tracking-tight">
                    Rs. {product.price}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-500 font-medium">
                    (Standard Portion • Freshly Handcrafted)
                  </span>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6"
                >
                  {product.description}
                </motion.p>

                {/* Details & Attributes Tags */}
                {product.details && product.details.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    className="mb-6"
                  >
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                      Highlights &amp; Serving Style
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.details.map((detail, dIdx) => (
                        <motion.span
                          key={dIdx}
                          whileHover={{ scale: 1.05 }}
                          className="bg-neutral-100 hover:bg-neutral-200/80 transition-colors border border-neutral-200/70 text-neutral-800 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-default"
                        >
                          {detail}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Call to Actions with Motion Hover */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.4 }}
                className="pt-6 border-t border-neutral-200/80"
              >
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  {/* Primary Visit CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleVisitUs}
                    className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-2xl bg-brand-forest hover:bg-brand-dark text-white font-bold text-sm shadow-md hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 border border-brand-gold/40 cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-brand-gold" />
                    <span>Visit Us to Taste in Budhanilkantha</span>
                  </motion.button>

                  {/* Secondary Call for Takeaway */}
                  <motion.a
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:+9779841837856"
                    className="w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 border border-neutral-300/80 cursor-pointer"
                    title="Call Coffee Adda for takeaway or preorder"
                  >
                    <Phone className="w-4 h-4 text-brand-forest" />
                    <span>Call Ahead</span>
                  </motion.a>

                  {/* Share Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                  </motion.button>
                </div>

                <p className="text-xs text-neutral-500 mt-3 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Freshly made daily from 7:00 AM – 9:00 PM • Takeaway available</span>
                </p>
              </motion.div>

            </div>

          </div>
        </motion.div>

        {/* ======================================================== */}
        {/* TWO-COLUMN IN-DEPTH DETAILS: HISTORY & HOW IT IS MADE */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 sm:mb-16">
          
          {/* LEFT: THE HISTORY & HERITAGE OF THE PRODUCT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-neutral-200/90 flex flex-col justify-between hover:border-brand-forest/30 transition-colors"
          >
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

            {/* Artisan Quote Block with Warm Glow */}
            {story.artisanQuote && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 pt-6 border-t border-neutral-200/70 bg-brand-cream/40 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-3xl"
              >
                <p className="font-serif italic text-sm sm:text-base text-brand-forest font-semibold">
                  {story.artisanQuote}
                </p>
                <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mt-2 flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Coffee Adda Culinary &amp; Barista Team</span>
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* RIGHT: HOW IT IS MADE (STEP-BY-STEP ARTISAN CRAFT WITH ANIMATIONS) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-neutral-200/90 flex flex-col justify-between hover:border-brand-forest/30 transition-colors"
          >
            <div>
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                <ChefHat className="w-3.5 h-3.5 text-emerald-700" />
                <span>Craftsmanship &amp; Method</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-brand-forest mb-4">
                How It Is Made
              </h2>

              {/* Step-by-Step Flow with Animated Reveal */}
              <div className="space-y-4">
                {story.howItIsMade.map((stepItem, idx) => (
                  <motion.div
                    key={stepItem.step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.1 + idx * 0.12 }}
                    className="flex items-start gap-3.5 p-2.5 rounded-2xl hover:bg-brand-sage/20 transition-all duration-300 group cursor-default"
                  >
                    {/* Animated Step Number Badge */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="w-8 h-8 rounded-xl bg-brand-forest text-brand-gold flex items-center justify-center font-bold text-xs shrink-0 shadow-xs mt-0.5 group-hover:bg-brand-gold group-hover:text-brand-forest transition-colors"
                    >
                      {stepItem.step}
                    </motion.div>

                    <div>
                      <h3 className="font-bold text-brand-forest text-sm sm:text-base group-hover:text-brand-gold transition-colors">
                        {stepItem.title}
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mt-0.5">
                        {stepItem.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tasting Notes Chips with Staggered Entrance */}
            {story.tastingNotes && story.tastingNotes.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 pt-5 border-t border-neutral-200/70"
              >
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Flavor Profile &amp; Tasting Notes</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {story.tastingNotes.map((note, nIdx) => (
                    <motion.span
                      key={nIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.15 + nIdx * 0.08 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1 rounded-full bg-brand-forest/5 hover:bg-brand-forest hover:text-white text-brand-forest border border-brand-forest/15 text-xs font-bold transition-all cursor-default shadow-2xs"
                    >
                      {note}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

        </div>

        {/* ======================================================== */}
        {/* RECOMMENDED PAIRINGS & RELATED ITEMS */}
        {/* ======================================================== */}
        {relatedItems.length > 0 && (
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6"
            >
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
                className="text-xs sm:text-sm font-bold text-brand-forest hover:text-brand-dark flex items-center gap-1 self-start sm:self-auto cursor-pointer group"
              >
                <span>Explore all {categoryLabel}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedItems.map((relItem, rIdx) => (
                <motion.div
                  key={relItem.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: rIdx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => handleSelectRelated(relItem.id)}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-brand-forest/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden bg-neutral-100">
                      <img
                        src={relItem.image}
                        alt={relItem.alt || relItem.name}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
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
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM VISIT INVITATION BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="bg-brand-forest rounded-3xl p-8 sm:p-10 text-white shadow-xl text-center relative overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-brand-gold/20 blur-3xl pointer-events-none"
          />
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleVisitUs}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-brand-gold hover:bg-brand-gold/90 text-brand-forest font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Get Directions to Coffee Adda
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBackToMenu}
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/20 cursor-pointer"
              >
                Browse Other Menu Items
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
