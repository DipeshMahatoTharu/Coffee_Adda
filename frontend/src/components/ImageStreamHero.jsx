import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Star, Leaf, ArrowRight, Clock } from 'lucide-react';
import heroVideo from '../assets/video hero seciton.mp4';
import { TextAnimate } from './ui/text-animate';

/**
 * Full Cinematic Video Hero Section
 * - Video runs as the background of the hero section where the text is
 * - Sound is completely removed/muted
 * - Rolling columns removed
 * - Text, headline, buttons, and trust badges are cleanly overlaid on top of the video
 */
export default function ImageStreamHero({
  title = "Your Perfect Cup,\nBrewed Fresh.",
  description = "Freshly brewed coffee, delicious treats and a cosy place to enjoy every moment.",
  buttonText = "Visit Us",
  secondaryButtonText = "Explore Menu",
  onNavigate
}) {
  const videoRef = useRef(null);

  // Guarantee the video is strictly muted with zero sound and autoplays
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.volume = 0;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-neutral-950 text-white"
      id="home"
      data-purpose="cinematic-video-hero"
    >

      {/* ============================================================ */}
      {/* 1. BACKGROUND VIDEO (Brighter, Muted, AutoPlaying, Loop)     */}
      {/* ============================================================ */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-[1.01] brightness-[1.12] contrast-[1.02]"
          poster="/hero-poster.jpg"
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Soft, gentle vignette so the video is visibly brighter and warm */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-black/30 to-neutral-950/45" />
      </div>

      {/* ============================================================ */}
      {/* 2. HERO CONTENT OVERLAID (Softer, Muted Warm Typography)     */}
      {/* ============================================================ */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24 space-y-7">
        
        {/* Brand Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium tracking-widest text-amber-200/90 uppercase"
        >
          <Coffee className="w-4 h-4 text-brand-gold" />
          <span>Coffee Adda • Budhanilkantha</span>
        </motion.div>

        {/* Main Headline - Authentic mountain coffee and cafe kitchen */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-200 tracking-tight leading-[1.12] drop-shadow-md"
        >
          Artisan Coffee &amp;<br />
          <span className="text-amber-200/90 font-normal italic">
            Warm Adda Moments.
          </span>
        </motion.h1>

        {/* Supporting Description - Concrete local cafe copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed min-h-[3.5rem] sm:min-h-[2.5rem]"
        >
          <TextAnimate effect="typewriter" duration={2.4} delay={0.2} className="inline">
            Single-origin Nepali Arabica, handmade Himalayan khaja, fresh bakery treats, and a peaceful garden terrace in Budhanilkantha.
          </TextAnimate>
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
        >
          <a
            href="#location"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('location');
              }
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-forest hover:bg-brand-dark text-neutral-100 font-bold text-sm sm:text-base shadow-lg hover:shadow-glow-gold hover:-translate-y-0.5 transition-all duration-300 border border-brand-gold/50 flex items-center justify-center gap-2 group cursor-pointer"
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
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-neutral-300 font-bold text-sm sm:text-base border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md hover:-translate-y-0.5"
          >
            {secondaryButtonText}
          </a>
        </motion.div>

        {/* Authentic Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-5 border-t border-white/10 grid grid-cols-2 gap-3.5 max-w-md mx-auto"
        >
          <button
            type="button"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('reviews');
              }
            }}
            className="flex items-center justify-center sm:justify-start gap-3 bg-black/40 hover:bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-sm hover:border-brand-gold/40 transition-all cursor-pointer text-left group"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/20">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            </div>
            <div className="text-left">
              <p className="font-bold text-xs sm:text-sm text-neutral-200 leading-tight">4.8 Rating</p>
              <p className="text-[11px] text-neutral-400 group-hover:text-amber-200 transition-colors">Guest reviews &rarr;</p>
            </div>
          </button>

          <div className="flex items-center justify-center sm:justify-start gap-3 bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-sm text-left">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/20">
              <Leaf className="w-4 h-4 text-emerald-300" />
            </div>
            <div className="text-left">
              <p className="font-bold text-xs sm:text-sm text-neutral-200 leading-tight">100% Arabica</p>
              <p className="text-[11px] text-neutral-400">Mountain roast</p>
            </div>
          </div>
        </motion.div>

        {/* Live Hours Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-normal text-neutral-400 pt-1"
        >
          <Clock className="w-4 h-4 text-brand-gold/80" />
          <span>Open Daily: 7:00 AM - 9:00 PM • Budhanilkantha</span>
        </motion.div>
      </div>

    </section>
  );
}
