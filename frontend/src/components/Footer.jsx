import React from 'react';

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (e, page, anchor) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, anchor);
    } else {
      if (page === 'menu') {
        window.location.hash = '#menu';
      } else if (page === 'why-us') {
        window.location.hash = '#why-us';
      } else if (page === 'about') {
        window.location.hash = '#about';
      } else if (page === 'reviews') {
        window.location.hash = '#reviews';
      } else if (page === 'location') {
        window.location.hash = '#location';
      } else if (anchor) {
        window.location.hash = anchor;
      } else {
        window.location.hash = '#home';
      }
    }
  };

  return (
    <footer
      className="bg-brand-forest text-brand-cream border-t border-brand-gold/20 pt-16 pb-12 relative overflow-hidden"
      data-purpose="site-footer"
    >
      {/* Subtle gold accent background orb */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-brand-gold to-white shadow-glow-gold">
                <img
                  alt="Coffee Adda Circular Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                  src="/logo.png"
                />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-white">Coffee Adda</span>
                <span className="block text-[11px] tracking-widest uppercase text-brand-gold font-semibold">
                  Artisan Coffee &amp; Warm Moments
                </span>
              </div>
            </div>

            <p className="text-brand-sage/80 text-sm leading-relaxed max-w-sm">
              Handcrafted coffees, warm local hospitality, and delicious fresh bites. Visit us in Budhanilkantha for your daily caffeine ritual.
            </p>

            <div className="flex items-center space-x-3 text-brand-gold">
              <a
                aria-label="Follow Coffee Adda on Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center transition-all duration-300"
                href="#"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a
                aria-label="Follow Coffee Adda on Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center transition-all duration-300"
                href="#"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                </svg>
              </a>
              <a
                aria-label="Follow Coffee Adda on TikTok"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center transition-all duration-300"
                href="#"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.86 1.43-.05 2.69-1.04 3.05-2.41.13-.58.18-1.18.18-1.77V.02z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-brand-sage/80">
              <li><a className="hover:text-white transition-colors cursor-pointer" href="#home" onClick={(e) => handleNav(e, 'home')}>Home</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer" href="#about" onClick={(e) => handleNav(e, 'about')}>Our Story</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer" href="#menu" onClick={(e) => handleNav(e, 'menu')}>Complete Menu</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer" href="#why-us" onClick={(e) => handleNav(e, 'why-us')}>Why Coffee Adda</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer" href="#reviews" onClick={(e) => handleNav(e, 'reviews')}>Guest Reviews</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer" href="#location" onClick={(e) => handleNav(e, 'location')}>Get Directions</a></li>
            </ul>
          </div>

          {/* Col 3: Menu Highlights with Exact NPR Prices */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold">Menu Highlights</h4>
            <ul className="space-y-2.5 text-sm text-brand-sage/80">
              <li><span className="text-white font-medium">Cappuccino / Double</span> — Rs. 180</li>
              <li><span className="text-white font-medium">Café Latte</span> — Rs. 180</li>
              <li><span className="text-white font-medium">Iced Latte &amp; Frappes</span> — from Rs. 200</li>
              <li><span className="text-white font-medium">Tibetan Laphing (Jhol/Dry)</span> — from Rs. 65</li>
              <li><span className="text-white font-medium">Mo:Mo Platter (25 pcs)</span> — from Rs. 600</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-gold">Cafe Info</h4>
            <div className="space-y-3 text-sm text-brand-sage/80">
              <p>
                <strong className="text-white block font-medium">Location:</strong>
                Q9F5+8XJ, Budhanilkantha, Bagmati Province 44600
              </p>
              <p>
                <strong className="text-white block font-medium">Hours:</strong>
                Sun – Sat: 7:00 AM – 9:00 PM
              </p>
              <p>
                <strong className="text-white block font-medium">Contact:</strong>
                +977 980-0000000 • Budhanilkantha
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-brand-sage/60 gap-4">
          <p>© {currentYear} Coffee Adda. All rights reserved. &quot;The Spot where great mind gathers&quot; • Budhanilkantha, Kathmandu.</p>
          <div className="flex space-x-6">
            <a className="hover:text-brand-gold transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-brand-gold transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-brand-gold transition-colors" href="#">Café Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
