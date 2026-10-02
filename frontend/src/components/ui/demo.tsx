"use client";

import { useState } from "react";
import { AnimatedBanner } from "@/components/ui/animated-banner";

export default function Default() {
  // Fresh morning bake & roast countdown target (e.g. 4 hours from now)
  const [deadline] = useState(
    () => new Date(Date.now() + (4 * 3600 + 32 * 60 + 15) * 1000),
  );

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-brand-cream p-4 sm:p-8">
      <div className="w-full max-w-5xl">
        <AnimatedBanner
          badge="BUDHANILKANTHA SANCTUARY"
          title="Make Your Day Better With Coffee"
          subtitle="Enjoy our single-origin mountain roast paired with artisanal fresh croissants and pastries. Experience peaceful ambiance and warm Himalayan hospitality right here in Budhanilkantha."
          ctaLabel="Explore Menu"
          href="#menu"
          secondaryCtaLabel="Reserve a Table"
          secondaryHref="#location"
          deadline={deadline}
          imageSrc="/coffee-banner.jpg"
          imageAlt="Fresh artisanal coffee at Coffee Adda"
        />
      </div>
    </div>
  );
}

export { Default as AnimatedBannerDemo };
