import React from 'react';
import { Coffee, Phone } from 'lucide-react';

export default function Banner() {
  return (
    <aside
      className="bg-brand-dark text-brand-sage/95 text-xs sm:text-sm py-2 px-4 border-b border-white/10 relative z-50"
      data-purpose="announcement-banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 mx-auto sm:mx-0 overflow-hidden text-center sm:text-left">
          <Coffee className="w-4 h-4 text-brand-gold shrink-0" />
          <span className="font-medium tracking-wide">
            Welcoming you daily <strong className="text-white font-semibold">7:00 AM - 9:00 PM</strong> • Budhanilkantha, Bagmati Province •{' '}
            <span className="hidden md:inline">Fresh Batches Roasted Daily</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center space-x-4 text-xs font-semibold tracking-wider uppercase text-brand-gold">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Barista Bar Open Now
          </span>
          <a className="hover:text-white transition-colors inline-flex items-center gap-1" href="tel:+977014370000">
            <Phone className="w-3 h-3" />
            <span>01-437-XXXX</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
