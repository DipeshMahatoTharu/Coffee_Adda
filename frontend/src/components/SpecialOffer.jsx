import React from 'react';
import { AnimatedBanner } from './ui/animated-banner';

export default function SpecialOffer({ onNavigate }) {
  return (
    <section className="py-12 sm:py-16 bg-brand-forest text-white relative overflow-hidden" data-purpose="promotional-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedBanner
          badge="BUDHANILKANTHA SANCTUARY"
          title="Make Your Day Better With Coffee"
          subtitle="Enjoy our single-origin mountain roast paired with artisanal fresh croissants and pastries. Experience peaceful ambiance and warm Himalayan hospitality right here in Budhanilkantha."
          ctaLabel="Explore Menu"
          href="#menu"
          secondaryCtaLabel="Reserve a Table"
          secondaryHref="#location"
          posterSrc="/hero-poster.jpg"
          videoSrc="/hero-video.mp4"
          onNavigate={onNavigate}
        />
      </div>
    </section>
  );
}
