import React from 'react';
import { Star, MessageSquarePlus, Coffee, Heart, CheckCircle2 } from 'lucide-react';
import TestimonialsColumnsSection from './ui/testimonials-columns-1';

export default function ReviewsPage({ onNavigate }) {
  const handleAction = (e, target) => {
    e.preventDefault();
    if (onNavigate) {
      if (target === 'menu') {
        onNavigate('menu');
      } else if (target === 'home') {
        onNavigate('home');
      } else if (target === 'location') {
        onNavigate('location');
      } else {
        onNavigate('home', target);
      }
    } else {
      window.location.hash = target.startsWith('#') ? target : `#${target}`;
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-brand-cream min-h-screen" id="reviews-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
            Community Voices • Budhanilkantha
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-forest tracking-tight leading-[1.15]">
            What Our Guests Say
          </h1>
          <p className="text-neutral-600 mt-3 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Real stories, ratings, and shared moments from regular patrons, coffee enthusiasts, remote creators, and travellers visiting Coffee Adda.
          </p>
        </div>

        {/* Ratings Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-sm text-center">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="font-serif text-2xl font-bold text-neutral-900">4.8 / 5.0</p>
            <p className="text-xs text-neutral-500 mt-0.5">36+ Verified Google Reviews</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-sm text-center">
            <div className="w-8 h-8 mx-auto rounded-full bg-emerald-100 text-brand-forest flex items-center justify-center mb-1">
              <Coffee className="w-4 h-4" />
            </div>
            <p className="font-serif text-2xl font-bold text-neutral-900">100% Arabica</p>
            <p className="text-xs text-neutral-500 mt-0.5">Freshly Roasted High-Altitude Beans</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-neutral-200/90 shadow-sm text-center">
            <div className="w-8 h-8 mx-auto rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mb-1">
              <Heart className="w-4 h-4" />
            </div>
            <p className="font-serif text-2xl font-bold text-neutral-900">Neighbourhood Fav</p>
            <p className="text-xs text-neutral-500 mt-0.5">Budhanilkantha Gathering Sanctuary</p>
          </div>
        </div>

        {/* Full Testimonials Columns Marquee + Add Review Modal */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 border border-neutral-200/90 shadow-sm mb-16">
          <TestimonialsColumnsSection className="bg-transparent border-0 py-8 sm:py-12" />
        </div>

      </div>
    </div>
  );
}
