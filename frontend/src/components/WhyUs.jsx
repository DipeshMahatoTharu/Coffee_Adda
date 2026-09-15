import React from 'react';
import { Coffee, Leaf, HeartHandshake, Wifi } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: Coffee,
      title: "Freshly Brewed",
      desc: "Every cup is ground to order and pulled on calibrated espresso machinery to lock in maximum aroma and velvety crema."
    },
    {
      icon: Leaf,
      title: "Quality Beans",
      desc: "Carefully selected high-altitude 100% Arabica beans roasted in small micro-batches for balanced acidity and cocoa notes."
    },
    {
      icon: HeartHandshake,
      title: "Made With Care",
      desc: "Handcrafted with patience by baristas trained in the intricate nuances of milk texturing, latte art, and manual brewing."
    },
    {
      icon: Wifi,
      title: "Cosy Experience",
      desc: "A serene, plant-filled neighbourhood haven with warm wooden accents, ambient music, power plugs, and fast Wi-Fi."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-brand-sage/50 border-y border-emerald-900/5" data-purpose="features" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-brand-forest bg-white px-3.5 py-1.5 rounded-full border border-brand-forest/10 mb-3">
            The Coffee Adda Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-forest">
            Why Coffee Lovers Choose Us
          </h2>
          <p className="text-neutral-600 mt-3 text-sm sm:text-base">
            From precise grind profiles to a warm, welcoming vibe, here is why our community considers us their second home.
          </p>
        </div>

        {/* Features 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="card-lift bg-white p-7 rounded-2xl border border-emerald-950/5 shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-brand-forest text-brand-gold flex items-center justify-center mb-5 shadow-sm">
                <item.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold text-brand-forest mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
