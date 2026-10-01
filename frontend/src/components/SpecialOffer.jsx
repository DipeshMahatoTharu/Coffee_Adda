import React from 'react';

export default function SpecialOffer({ onNavigate }) {
  const handleMenuClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('menu');
    } else {
      window.location.hash = '#menu';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-brand-forest text-white relative overflow-hidden" data-purpose="promotional-banner">
      {/* Decorative subtle gold rays matching brand logo crest */}
      <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full border border-brand-gold/20 pointer-events-none"></div>
      <div className="absolute -right-8 -bottom-8 w-64 h-64 rounded-full border border-brand-gold/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-emerald-950 via-brand-forest to-emerald-900 p-8 sm:p-12 lg:p-16 rounded-3xl border border-brand-gold/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left space-y-3">
            <span className="block text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-gold mb-2">
              Budhanilkantha Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-cream">
              Make Your Day Better With Coffee
            </h2>
            <p className="text-brand-sage/90 text-sm sm:text-base leading-relaxed">
              Enjoy our single-origin mountain roast paired with artisanal fresh croissants and pastries.
              Experience peaceful ambiance and warm Himalayan hospitality right here in Budhanilkantha.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              onClick={handleMenuClick}
              className="px-8 py-4 rounded-full bg-brand-gold hover:bg-brand-goldhover text-brand-dark font-extrabold text-sm sm:text-base shadow-lg hover:shadow-glow-gold hover:scale-105 transition-all duration-300 text-center cursor-pointer"
              href="#menu"
            >
              Explore Menu
            </a>
            <a
              className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all text-center"
              href="tel:+977014370000"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
