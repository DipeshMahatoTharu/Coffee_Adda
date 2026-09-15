import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * ScrollExpansionHero
 * A pure React + Tailwind CSS + Framer Motion component.
 * As the user scrolls down, the central coffee visual smoothly expands,
 * background elements subtly shift, and normal scrolling continues naturally.
 */
export default function ScrollExpansionHero({
  mediaSrc = "https://lh3.googleusercontent.com/aida-public/AB6AXuCANQZGcvU6ec0yA6q51Vw-NflTbj7VdC71FAJVAdygbVvagUp4CWyoWcgw5d9lc0Ow9pArV8aN1kJK-poJn0W1eo6y5537JYFIfci5IO1PyR3fntQ5i0ZNEtnNGfvkG-Q69cRlOuCN5tZC9CtWf85WMI_Nmnipu1bDIMXRSFP2dAMMc-qT04xU0XiPILwV7b4TTUR9yuzd3AkIoRYqgUvjHmHYAcdVpCoWnPDgPZHVCgLOl6zveRjC",
  title = "Your Perfect Cup,\nBrewed Fresh.",
  description = "Freshly brewed coffee, delicious treats and a cosy place to enjoy every moment.",
  buttonText = "Order Now",
  secondaryButtonText = "Explore Menu",
  badgeText = "Coffee Adda • Budhanilkantha",
  priceText = "Rs. 280",
  roastText = "Signature Roast",
  itemText = "Coffee Adda"
}) {
  const containerRef = useRef(null);

  // Track scroll progress throughout the hero section track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Media expansion transforms
  const mediaScale = useTransform(scrollYProgress, [0, 0.85], [0.72, 1]);
  const mediaWidth = useTransform(
    scrollYProgress,
    [0, 0.85],
    ["min(360px, 86vw)", "min(1150px, 94vw)"]
  );
  const mediaHeight = useTransform(
    scrollYProgress,
    [0, 0.85],
    ["380px", "560px"]
  );
  const mediaRadius = useTransform(scrollYProgress, [0, 0.85], ["2rem", "1.5rem"]);
  const imageZoom = useTransform(scrollYProgress, [0, 0.85], [1.18, 1.02]);

  // Subtle background glow and backdrop transformations
  const auraScale = useTransform(scrollYProgress, [0, 0.85], [0.85, 1.35]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.5, 0.85], [0.45, 0.7, 0.35]);
  const backdropDim = useTransform(scrollYProgress, [0, 0.85], [0, 0.35]);

  // Decorative floating badges movement
  const reviewBadgeY = useTransform(scrollYProgress, [0, 0.85], [0, -32]);
  const reviewBadgeX = useTransform(scrollYProgress, [0, 0.85], [0, 24]);
  const beanBadgeY = useTransform(scrollYProgress, [0, 0.85], [0, 28]);
  const beanBadgeX = useTransform(scrollYProgress, [0, 0.85], [0, -22]);

  // Bottom scroll cue fade-out
  const scrollPromptOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scrollPromptY = useTransform(scrollYProgress, [0, 0.2], [0, 15]);

  // Text container subtle elevation
  const contentY = useTransform(scrollYProgress, [0, 0.85], [0, -15]);

  return (
    <section
      ref={containerRef}
      className="relative h-[190vh] bg-brand-cream text-neutral-800"
      id="home"
    >
      {/* Sticky Viewport Area */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        {/* Background decorative blurry orbs */}
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-brand-sage/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-amber-100/50 rounded-full blur-3xl pointer-events-none" />

        {/* Dynamic Dark Backdrop Overlay on Expansion */}
        <motion.div
          className="absolute inset-0 bg-brand-dark pointer-events-none z-0"
          style={{ opacity: backdropDim }}
        />

        {/* Top Header / Title & Badge Area */}
        <motion.div
          style={{ y: contentY }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-3 pt-2"
        >
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-brand-gold/40 shadow-xs">
            <span className="text-sm">✨</span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-forest uppercase">
              {badgeText}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-forest tracking-tight leading-[1.15] whitespace-pre-line">
            {title.includes('\n') ? (
              <>
                <span>{title.split('\n')[0]}</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-forest via-emerald-800 to-brand-gold">
                  {title.split('\n')[1]}
                </span>
              </>
            ) : (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-forest via-emerald-800 to-brand-gold">
                {title}
              </span>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Center: Scroll Expansion Media Visual */}
        <div className="relative z-10 flex-1 flex items-center justify-center my-auto">
          {/* Animated Gold Sunburst Aura */}
          <motion.div
            className="absolute rounded-full border-2 border-dashed border-brand-gold/40 pointer-events-none animate-spin"
            style={{
              width: "28rem",
              height: "28rem",
              scale: auraScale,
              animationDuration: "70s"
            }}
          />
          <motion.div
            className="absolute rounded-full bg-gradient-to-tr from-brand-gold/30 via-emerald-700/20 to-transparent blur-3xl pointer-events-none"
            style={{
              width: "30rem",
              height: "30rem",
              scale: auraScale,
              opacity: auraOpacity
            }}
          />

          {/* Centered Expanding Card */}
          <motion.div
            style={{
              scale: mediaScale,
              width: mediaWidth,
              height: mediaHeight,
              borderRadius: mediaRadius
            }}
            className="relative overflow-hidden shadow-2xl border-4 border-white bg-white flex items-center justify-center group"
          >
            {/* CSS Steam Particles */}
            <div className="steam-particle steam-1" />
            <div className="steam-particle steam-2" />
            <div className="steam-particle steam-3" />

            {/* Coffee Image with Zoom Effect */}
            <motion.img
              src={mediaSrc}
              alt="Artisan Hot Coffee at Coffee Adda"
              style={{ scale: imageZoom }}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />

            {/* Subtle Gradient Overlay on the Image for Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

            {/* Bottom Overlay Badge on Image */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-brand-forest/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/20 text-white flex items-center justify-between shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-brand-gold">
                    {roastText}
                  </h4>
                  <p className="text-xs sm:text-base font-bold">{itemText}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold bg-brand-gold text-brand-dark px-3 py-1 rounded-lg shadow-xs">
                  {priceText}
                </span>
              </div>
            </div>

            {/* Top-Right Review Badge (Drifting outward on scroll) */}
            <motion.div
              style={{ x: reviewBadgeX, y: reviewBadgeY }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-brand-gold/30 max-w-[200px] hidden sm:block"
            >
              <div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
                ★★★★★
              </div>
              <p className="text-xs font-bold text-brand-forest leading-snug">
                &quot;Best Cappuccino in town!&quot;
              </p>
              <p className="text-[10px] text-neutral-400 mt-0.5 font-medium">
                — Local Coffee Guide
              </p>
            </motion.div>

            {/* Bottom-Left Coffee Origin Badge (Drifting outward on scroll) */}
            <motion.div
              style={{ x: beanBadgeX, y: beanBadgeY }}
              className="absolute bottom-20 left-4 sm:bottom-24 sm:left-6 bg-brand-forest/95 backdrop-blur-md text-brand-cream p-2.5 sm:p-3 rounded-2xl shadow-xl border border-brand-gold/40 flex items-center gap-2 hidden sm:flex"
            >
              <span className="text-xl">🌱</span>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-brand-gold font-bold">
                  Direct Origin
                </p>
                <p className="text-xs font-semibold">Bagmati Mountain Beans</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Actions & CTAs */}
        <div className="relative z-10 max-w-xl mx-auto w-full text-center space-y-3 pb-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#menu"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-brand-forest text-white font-bold text-sm shadow-glow-forest hover:bg-brand-dark hover:shadow-glow-gold hover:-translate-y-0.5 transition-all duration-300 border border-brand-gold/60 flex items-center justify-center gap-2 group"
            >
              <span>{buttonText}</span>
              <span className="text-brand-gold group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-brand-forest font-bold text-sm border-2 border-brand-forest/20 hover:border-brand-forest hover:bg-brand-sage/50 transition-all duration-300 flex items-center justify-center"
            >
              {secondaryButtonText}
            </a>
          </div>

          {/* Subtle Scroll Cue */}
          <motion.div
            style={{ opacity: scrollPromptOpacity, y: scrollPromptY }}
            className="flex items-center justify-center gap-2 text-xs font-semibold text-neutral-500 tracking-wider uppercase pt-1"
          >
            <span>Scroll to expand</span>
            <span className="animate-bounce text-brand-forest font-bold">↓</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
