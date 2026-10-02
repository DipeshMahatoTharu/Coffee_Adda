import React from 'react';
import { Coffee, Phone, ShieldCheck } from 'lucide-react';

export default function Banner({ isAdmin = false }) {
  if (isAdmin) {
    return (
      <aside
        className="bg-[#240808] text-red-100 text-xs sm:text-sm py-2 px-4 border-b border-red-800/80 relative z-50 transition-colors duration-300"
        data-purpose="announcement-banner-admin"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 mx-auto sm:mx-0 overflow-hidden text-center sm:text-left">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shrink-0"></span>
            <span className="font-bold tracking-wider uppercase text-[11px] sm:text-xs text-red-200">
              Staff Administration Mode • <span className="text-white font-extrabold">Restricted Area</span> •{' '}
              <span className="hidden md:inline text-red-300/80">Authorized Staff Personnel Only</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-4 text-xs font-semibold tracking-wider uppercase text-red-300">
            <span className="inline-flex items-center gap-1.5 bg-red-900/60 border border-red-700/80 px-2.5 py-0.5 rounded-full text-red-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Security Active
            </span>
            <span className="text-red-300 font-mono text-[11px]">PORTAL: #admin</span>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className="bg-brand-dark text-brand-sage/95 text-xs sm:text-sm py-2 px-4 border-b border-white/10 relative z-50 transition-colors duration-300"
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
          <a className="hover:text-white transition-colors inline-flex items-center gap-1" href="tel:+9779763531091">
            <Phone className="w-3 h-3" />
            <span>+977 9763531091</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

