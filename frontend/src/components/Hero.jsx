import React from 'react';
import { Coffee, Star, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-8 pb-16 lg:py-24 overflow-hidden" data-purpose="hero-banner" id="home">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-sage/60 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sage border border-brand-gold/50 shadow-sm">
              <Coffee className="w-4 h-4 text-brand-gold" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-forest uppercase">
                Artisan Coffee &amp; Bakery • Budhanilkantha
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-forest leading-[1.15] tracking-tight">
              Your Perfect Cup, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-forest via-emerald-800 to-brand-gold">
                Brewed Fresh.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Freshly brewed single-origin coffee, melt-in-the-mouth treats, and a cosy neighbourhood sanctuary crafted for genuine conversations and relaxed moments.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-forest text-white font-bold text-base shadow-glow-forest hover:bg-brand-dark hover:shadow-glow-gold hover:-translate-y-0.5 transition-all duration-300 border border-brand-gold/60 flex items-center justify-center gap-2 group"
                href="#location"
              >
                <span>Visit Us</span>
                <span className="text-brand-gold group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-brand-forest font-bold text-base border-2 border-brand-forest/20 hover:border-brand-forest hover:bg-brand-sage/50 transition-all duration-300 flex items-center justify-center"
                href="#menu"
              >
                Explore Menu
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 border-t border-neutral-200/80 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 font-bold">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <p className="font-bold text-base text-neutral-900 leading-tight">4.8 Rating</p>
                  <p className="text-xs text-neutral-500">From 36+ verified reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-brand-forest font-bold">
                  <Leaf className="w-4 h-4 text-brand-forest" />
                </div>
                <div>
                  <p className="font-bold text-base text-neutral-900 leading-tight">100% Arabica</p>
                  <p className="text-xs text-neutral-500">Locally roasted beans</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Dynamic Visual Centerpiece */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Outer Gold Sunburst Aura matching Coffee Adda Logo rays */}
            <div
              className="absolute w-[22rem] h-[22rem] sm:w-[28rem] sm:h-[28rem] rounded-full border-2 border-dashed border-brand-gold/40 animate-spin"
              style={{ animationDuration: '60s' }}
            ></div>
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-brand-gold/20 via-emerald-700/10 to-transparent blur-2xl animate-glow"></div>

            {/* Steaming Coffee Hero Centerpiece */}
            <div className="relative z-10 w-full max-w-md animate-float">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                {/* Realistic CSS Steam Overlay Particles */}
                <div className="steam-particle steam-1"></div>
                <div className="steam-particle steam-2"></div>
                <div className="steam-particle steam-3"></div>

                <img
                  alt="Steaming Hot Cappuccino with Swan Latte Art on Wooden Table"
                  className="w-full h-[400px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCANQZGcvU6ec0yA6q51Vw-NflTbj7VdC71FAJVAdygbVvagUp4CWyoWcgw5d9lc0Ow9pArV8aN1kJK-poJn0W1eo6y5537JYFIfci5IO1PyR3fntQ5i0ZNEtnNGfvkG-Q69cRlOuCN5tZC9CtWf85WMI_Nmnipu1bDIMXRSFP2dAMMc-qT04xU0XiPILwV7b4TTUR9yuzd3AkIoRYqgUvjHmHYAcdVpCoWnPDgPZHVCgLOl6zveRjC"
                />

                {/* Bottom overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-forest/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 text-white flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-gold">Signature Roast</h4>
                      <p className="text-sm font-bold">Artisan Cappuccino</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold bg-brand-gold text-brand-dark px-3 py-1 rounded-lg">Rs. 280</span>
                </div>
              </div>

              {/* Floating Review Badge Widget */}
              <div
                className="absolute -top-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-brand-gold/30 max-w-[210px] hidden sm:block animate-bounce"
                style={{ animationDuration: '4s' }}
              >
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold text-brand-forest leading-snug">&quot;Best Cappuccino in town!&quot;</p>
                <p className="text-[10px] text-neutral-400 mt-1 font-medium">- Local Coffee Guide</p>
              </div>

              {/* Floating Coffee Bean Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-brand-forest text-brand-cream p-3 rounded-2xl shadow-xl border border-brand-gold/40 flex items-center gap-2.5">
                <Leaf className="w-5 h-5 text-brand-gold" />
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-brand-gold font-bold">Direct Origin</p>
                  <p className="text-xs font-semibold">Bagmati Mountain Beans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
