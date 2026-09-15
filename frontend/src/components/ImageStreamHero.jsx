import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Star, Leaf, ArrowRight, Clock } from 'lucide-react';
import { menuItems } from '../data/menuData';

/**
 * ImageStreamHero Component
 * Pure React + Vite + Tailwind CSS + Framer Motion.
 * Displays real Coffee Adda menu photography streams on the flanks from menuData.js,
 * with real dish names, prices in NPR, and categories.
 * Center content cleanly branded with "Coffee Adda • Budhanilkantha".
 */

// Helper to grab real items from menuData
const findItem = (id) => menuItems.find((item) => item.id === id);

const HERO_STREAM_COL_1 = [
  findItem('hot-cappuccino'),
  findItem('platter-momo-chicken'),
  findItem('tea-matka'),
  findItem('laph-chips'),
  findItem('snack-mustang-aalu'),
].filter(Boolean);

const HERO_STREAM_COL_2 = [
  findItem('hot-caffe-latte'),
  findItem('cold-iced-caramel-macchiato'),
  findItem('burger-chicken'),
  findItem('pasta-carbonara'),
  findItem('alt-fruit-crush-mojito'),
].filter(Boolean);

function StreamColumn({ items, duration = 32, reverse = false }) {
  const list = [...items, ...items];

  return (
    <div className="relative overflow-hidden h-[640px] sm:h-[720px] w-full">
      <motion.div
        className="flex flex-col gap-6"
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"]
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {list.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="group relative rounded-2xl overflow-hidden shadow-md border border-brand-forest/10 bg-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-brand-forest/5">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Real NPR Price Badge */}
              <span className="absolute bottom-2.5 right-2.5 bg-white/95 backdrop-blur-md text-brand-forest text-xs font-extrabold px-2.5 py-0.5 rounded-lg shadow-sm border border-neutral-200/80">
                Rs. {item.price}
              </span>
              {/* Tag / Badge */}
              {item.tag && (
                <span className="absolute top-2.5 left-2.5 bg-brand-forest/90 backdrop-blur-md text-brand-gold text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border border-brand-gold/30 shadow-xs">
                  {item.tag}
                </span>
              )}
            </div>
            <div className="p-3.5 bg-white">
              <div className="flex items-center justify-between gap-1 mb-0.5">
                <h4 className="font-serif text-sm font-bold text-brand-forest truncate">
                  {item.name}
                </h4>
                <span className="text-[10px] text-emerald-800 bg-brand-sage px-1.5 py-0.5 rounded font-semibold shrink-0">
                  {item.subCategory}
                </span>
              </div>
              <p className="text-[11px] text-neutral-600 line-clamp-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function ImageStreamHero({
  description = "Freshly brewed coffee, delicious treats and a cosy place to enjoy every moment.",
  buttonText = "Visit Us",
  secondaryButtonText = "Explore Menu",
  onNavigate
}) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-cream py-10 lg:py-16"
      id="home"
      data-purpose="image-stream-hero"
    >
      {/* Background Soft Atmospheric Ambient Glows */}
      <div className="absolute top-10 -left-20 w-96 h-96 bg-brand-sage/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[28rem] h-[28rem] bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Main 3-Column Layout: Left Stream | Clean Center Content (NO white box) | Right Stream */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
        
        {/* Left Column Stream (Visible on md and up) */}
        <div className="hidden md:block w-64 lg:w-72 shrink-0 pointer-events-none">
          <StreamColumn items={HERO_STREAM_COL_1} duration={36} reverse={false} />
        </div>

        {/* Center Hero Content — Clean typography with solid brand forest green */}
        <div className="relative z-10 flex-1 max-w-2xl mx-auto text-center space-y-6 py-4">
          {/* Clean Brand Badge: Coffee Adda • Budhanilkantha */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sage/80 border border-brand-forest/15 shadow-xs">
            <Coffee className="w-4 h-4 text-brand-forest" />
            <span className="text-xs sm:text-sm font-bold tracking-wider text-brand-forest uppercase">
              Coffee Adda • Budhanilkantha
            </span>
          </div>

          {/* Main Headline — Solid Dark Green Brand Color */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-forest tracking-tight leading-[1.15]">
            Your Perfect Cup,<br />
            Brewed Fresh.
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg text-neutral-700 max-w-xl mx-auto font-normal leading-relaxed">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#location"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('home', '#location');
                }
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-forest text-white font-bold text-sm sm:text-base shadow-md hover:bg-brand-dark hover:shadow-glow-gold hover:-translate-y-0.5 transition-all duration-300 border border-brand-gold/60 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#menu"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate('menu');
                }
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-brand-forest font-bold text-sm sm:text-base border-2 border-brand-forest/20 hover:border-brand-forest hover:bg-brand-sage/50 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-xs"
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-5 border-t border-brand-forest/10 grid grid-cols-2 gap-3 max-w-md mx-auto">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-brand-forest/10 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <div className="text-left">
                <p className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">4.8 Rating</p>
                <p className="text-[10px] text-neutral-500">36+ reviews</p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2.5 bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-brand-forest/10 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-brand-forest flex items-center justify-center shrink-0">
                <Leaf className="w-4 h-4 text-brand-forest" />
              </div>
              <div className="text-left">
                <p className="font-bold text-xs sm:text-sm text-neutral-900 leading-tight">100% Arabica</p>
                <p className="text-[10px] text-neutral-500">Mountain roast</p>
              </div>
            </div>
          </div>

          {/* Live Hours Cue */}
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 pt-1">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>Open Daily: 7:00 AM – 9:00 PM • Budhanilkantha</span>
          </div>
        </div>

        {/* Right Column Stream (Visible on md and up) */}
        <div className="hidden md:block w-64 lg:w-72 shrink-0 pointer-events-none">
          <StreamColumn items={HERO_STREAM_COL_2} duration={30} reverse={true} />
        </div>

        {/* On Mobile: single smooth stream beneath */}
        <div className="block md:hidden w-full overflow-hidden pointer-events-none pt-2">
          <div className="h-64 overflow-hidden">
            <StreamColumn items={HERO_STREAM_COL_1} duration={26} reverse={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
