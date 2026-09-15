import React from 'react';
import { MapPin, Check, ArrowRight } from 'lucide-react';

export default function About() {
  const highlights = [
    "Direct-Trade Mountain Beans",
    "Pet-Friendly Garden Patio",
    "High-Speed Fiber Wi-Fi & Outlets",
    "House-Baked Daily Pastries"
  ];

  return (
    <section className="py-16 sm:py-24 bg-brand-cream relative" data-purpose="about-story" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Cafe Atmosphere Photo */}
          <div className="lg:col-span-6 relative">
            {/* Offset Gold Accent Border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold/40 rounded-3xl pointer-events-none hidden sm:block"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <img
                alt="Cozy interior ambiance of Coffee Adda cafe with wooden tables and warm lighting"
                className="w-full h-[420px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj8YXdAzpC2Ra10WpY_ctWF_IOU9EZ_tjGtEh0v2cDAsLQnAVIE0T-pU7yzhZRxlIYhsPOzqBkuAb78zrJOY6pOqwZQ5IARmXfNuTL8My1p6g75dq8m0TeBRdiEDx7-FoJQVSewUp6UDdakCYF_PWC1B8mN0fMgY5F4YKts-D1ffNr2pLtbcs1dcrgweKASvu9Lgx-yzPe7abmUW0bG4ZD6yTl2CUfbdh4FJRMSauiuUS7T2j8uhI_"
              />
              {/* Cafe interior feature tag */}
              <div className="absolute bottom-4 left-4 bg-brand-dark/85 backdrop-blur-md text-white py-2 px-3.5 rounded-xl border border-white/10 text-xs flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                <span>Budhanilkantha Main Sanctuary</span>
              </div>
            </div>
          </div>

          {/* Right Column: Storytelling */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-forest bg-brand-sage px-3.5 py-1 rounded-full border border-brand-forest/15">
                Our Journey
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-forest leading-tight">
              More Than Just Coffee. <br />
              <span className="text-neutral-500 font-normal italic">A Place to Belong.</span>
            </h2>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              Nestled in the tranquil neighbourhood of Budhanilkantha, <strong>Coffee Adda</strong> was founded on a simple premise: great coffee builds genuine community. &quot;Adda&quot; is the timeless tradition of coming together to laugh, debate, daydream, and reconnect.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              Every batch of coffee we extract tells the story of dedicated Himalayan growers, calibrated roast curves, and passionate baristas who treat every pour as an art piece. Whether you&apos;re catching up with old friends, finishing your novel, or stopping by for your morning brew, our doors are open.
            </p>

            {/* Key Amenities Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2.5 text-sm font-semibold text-brand-forest">
                  <span className="w-5 h-5 rounded-full bg-brand-sage flex items-center justify-center text-xs text-brand-forest shrink-0">
                    <Check className="w-3 h-3 text-brand-forest stroke-[2.5]" />
                  </span>
                  {highlight}
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                className="inline-flex items-center gap-2 text-brand-forest font-bold hover:text-brand-gold transition-colors text-sm uppercase tracking-wider underline underline-offset-8 decoration-brand-gold group"
                href="#location"
              >
                <span>Visit our café in Budhanilkantha</span>
                <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
