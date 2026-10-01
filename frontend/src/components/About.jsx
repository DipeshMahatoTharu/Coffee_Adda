import React from 'react';
import { MapPin, Check, ArrowRight } from 'lucide-react';

export default function About({ onNavigate }) {
  const highlights = [
    "Direct-Trade Mountain Beans",
    "Pet-Friendly Garden Patio",
    "High-Speed Fiber Wi-Fi & Outlets",
    "House-Baked Daily Pastries"
  ];

  const handleAboutNavigation = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('about');
    } else {
      window.location.hash = '#about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLocationNavigation = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('location');
    } else {
      window.location.hash = '#location';
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-brand-cream relative" data-purpose="about-story" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Cafe Atmosphere Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 bg-neutral-100">
              <img
                alt="Cozy interior ambiance of Coffee Adda cafe with wooden tables and warm lighting"
                className="w-full h-[380px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj8YXdAzpC2Ra10WpY_ctWF_IOU9EZ_tjGtEh0v2cDAsLQnAVIE0T-pU7yzhZRxlIYhsPOzqBkuAb78zrJOY6pOqwZQ5IARmXfNuTL8My1p6g75dq8m0TeBRdiEDx7-FoJQVSewUp6UDdakCYF_PWC1B8mN0fMgY5F4YKts-D1ffNr2pLtbcs1dcrgweKASvu9Lgx-yzPe7abmUW0bG4ZD6yTl2CUfbdh4FJRMSauiuUS7T2j8uhI_"
              />
              {/* Cafe interior feature tag */}
              <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md text-white py-2 px-3.5 rounded-xl border border-white/10 text-xs flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                <span className="font-medium">Budhanilkantha Main Sanctuary</span>
              </div>
            </div>
          </div>

          {/* Right Column: Storytelling */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
                Our Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight tracking-tight">
                More Than Just Coffee. <br />
                <span className="text-neutral-500 font-normal italic">A Place to Belong.</span>
              </h2>
            </div>

            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              Nestled in the tranquil neighbourhood of Budhanilkantha, <strong>Coffee Adda</strong> was founded on a simple premise: great coffee builds genuine community. &quot;Adda&quot; is the timeless tradition of coming together to laugh, debate, daydream, and reconnect.
            </p>
            <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
              Every batch of coffee we extract tells the story of dedicated Himalayan growers, calibrated roast curves, and passionate baristas who treat every pour as an art piece. Whether you&apos;re catching up with old friends, finishing your novel, or stopping by for your morning brew, our doors are open.
            </p>

            {/* Key Amenities Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2.5 text-sm font-medium text-neutral-800">
                  <span className="w-5 h-5 rounded-full bg-brand-forest text-white flex items-center justify-center text-xs shrink-0">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons: Navigate to Why Us & Location */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                onClick={handleAboutNavigation}
                href="#about"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-neutral-900 bg-neutral-900 text-white font-semibold text-xs sm:text-sm rounded-lg hover:bg-brand-forest hover:border-brand-forest transition-all duration-300 shadow-xs hover:shadow-md group cursor-pointer"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all duration-300" />
              </a>

              <a
                onClick={handleLocationNavigation}
                href="#location"
                className="inline-flex items-center gap-2.5 px-6 py-3 border border-neutral-300 text-neutral-800 font-semibold text-xs sm:text-sm rounded-lg hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300 shadow-xs group cursor-pointer"
              >
                <span>Visit Our Café</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
