import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Coffee, Leaf, HeartHandshake, Wifi, Sparkles } from 'lucide-react';

export default function WhyUs({ onNavigate, isDedicatedPage = false }) {
  const handleAction = (e, target) => {
    e.preventDefault();
    if (onNavigate) {
      if (target === 'menu') {
        onNavigate('menu');
      } else if (target === 'why-us') {
        onNavigate('why-us');
      } else if (target === 'home') {
        onNavigate('home');
      } else {
        onNavigate('home', target);
      }
    } else {
      window.location.hash = target.startsWith('#') ? target : `#${target}`;
    }
  };

  const sections = [
    {
      id: 'freshly-brewed',
      category: 'ESPRESSO & BREW CRAFT',
      title: 'Freshly Brewed to Order',
      description:
        'Every cup is ground to order and pulled on calibrated espresso machinery to lock in maximum aroma and velvety crema. Experience the pure intensity and balanced notes of freshly extracted coffee.',
      buttonText: 'Explore Coffee Bar',
      target: 'menu',
      imageLeft: true,
      image:
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
      imageAlt:
        'Barista pulling fresh rich espresso on professional espresso machinery with golden crema',
      tag: 'Peak Freshness',
      icon: Coffee,
    },
    {
      id: 'quality-beans',
      category: 'COFFEE FARMING & ORIGIN',
      title: 'The Journey from Crop to Cup',
      description:
        'Grown in the ideal Himalayan mountain air, our carefully selected high-altitude 100% Arabica beans are roasted in small micro-batches for balanced acidity, silky body, and deep cocoa undertones.',
      buttonText: 'Explore Full Menu',
      target: 'menu',
      imageLeft: false,
      image:
        'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=1200&q=80',
      imageAlt:
        'Fresh ripe red coffee cherries growing on coffee tree branch in Himalayan orchard',
      tag: '100% Arabica',
      icon: Leaf,
    },
    {
      id: 'made-with-care',
      category: 'BARISTA ARTISANSHIP',
      title: 'Handcrafted With Love & Precision',
      description:
        'Handcrafted with patience by baristas trained in the intricate nuances of milk micro-texturing, free-pour latte art, and manual brewing techniques. Every pour is made with genuine care.',
      buttonText: 'Explore Bakery & Coffee',
      target: 'menu',
      imageLeft: true,
      image:
        'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80',
      imageAlt:
        'Barista pouring delicate rosetta latte art into ceramic cup at Coffee Adda',
      tag: 'Artisan Pours',
      icon: HeartHandshake,
    },
    {
      id: 'cosy-experience',
      category: 'BUDHANILKANTHA SANCTUARY',
      title: 'A Warm & Cosy Adda Experience',
      description:
        'A serene, plant-filled neighbourhood haven with warm wooden accents, ambient music, dedicated power outlets, and high-speed fiber Wi-Fi. Whether finishing work or catching up with friends, our doors are open.',
      buttonText: 'Visit Our Café',
      target: '#location',
      imageLeft: false,
      image:
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
      imageAlt:
        'Warm and welcoming Coffee Adda cafe ambiance with bakery display and cosy seating',
      tag: 'Serene Space',
      icon: Wifi,
    },
  ];

  return (
    <section
      className={`py-16 sm:py-24 bg-white border-y border-neutral-200/80 relative overflow-hidden ${
        isDedicatedPage ? 'min-h-screen' : ''
      }`}
      data-purpose="why-choose-us"
      id="why-us"
    >
      {/* Background Soft Atmospheric Ambient Glows */}
      <div className="absolute top-20 -left-24 w-96 h-96 bg-brand-sage/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-24 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
            The Coffee Adda Standard
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Why Coffee Lovers Choose Us
          </h1>
          <p className="text-neutral-600 mt-3 text-sm sm:text-base leading-relaxed">
            From the Himalayan soil to your fresh morning brew, every step is designed to bring you the finest coffee experience in Budhanilkantha.
          </p>
        </div>

        {/* Alternating Split Rows (Zigzag Editorial Showcase) */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {sections.map((item) => {
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <motion.div
                  className={`lg:col-span-6 ${
                    item.imageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  initial={{ opacity: 0, x: item.imageLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-neutral-200/80 bg-neutral-100">
                    <div className="aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Content Column */}
                <motion.div
                  className={`lg:col-span-6 ${
                    item.imageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  initial={{ opacity: 0, x: item.imageLeft ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                >
                  <div className="max-w-xl mx-auto lg:mx-0 text-left space-y-4">
                    {/* Small Uppercase Tracking Category Header */}
                    <span className="block text-xs sm:text-sm font-semibold tracking-widest text-neutral-500 uppercase">
                      {item.category}
                    </span>

                    {/* Prominent Bold Headline */}
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                      {item.title}
                    </h2>

                    {/* Body Paragraph */}
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Outlined Action Button Matching Screenshot Style */}
                    <div className="pt-2">
                      <a
                        href={item.target.startsWith('#') ? item.target : `#${item.target}`}
                        onClick={(e) => handleAction(e, item.target)}
                        className="inline-flex items-center gap-2.5 px-6 py-3 border border-neutral-900 text-neutral-900 font-semibold text-xs sm:text-sm rounded-lg hover:bg-brand-forest hover:text-white hover:border-brand-forest transition-all duration-300 shadow-xs hover:shadow-md group cursor-pointer"
                      >
                        <span>{item.buttonText}</span>
                        <ArrowRight className="w-4 h-4 text-neutral-900 group-hover:text-brand-gold group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
