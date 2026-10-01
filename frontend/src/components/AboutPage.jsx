import React from 'react';
import { motion } from 'framer-motion';
import {
  Coffee,
  Heart,
  Leaf,
  Users,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Wifi,
  Smile,
  ShieldCheck,
} from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  const handleAction = (e, target) => {
    e.preventDefault();
    if (onNavigate) {
      if (target === 'menu') {
        onNavigate('menu');
      } else if (target === 'home') {
        onNavigate('home');
      } else if (target === 'why-us') {
        onNavigate('why-us');
      } else {
        onNavigate('home', target);
      }
    } else {
      window.location.hash = target.startsWith('#') ? target : `#${target}`;
    }
  };

  const pillars = [
    {
      icon: Leaf,
      title: 'Himalayan High-Altitude Beans',
      desc: '100% organic, shade-grown Arabica harvested by local farming families in the hills of Nepal. Each batch is micro-roasted to perfection.',
    },
    {
      icon: Coffee,
      title: 'Artisanal Extraction',
      desc: 'Every single espresso shot is precisely weighed, ground to order, and pulled on calibrated machinery for optimal crema and aromatics.',
    },
    {
      icon: Users,
      title: 'The Timeless "Adda" Spirit',
      desc: 'Adda is the Nepali cultural tradition of unhurried conversation, debate, laughter, and community bonding over a steaming cup.',
    },
    {
      icon: Heart,
      title: 'Himalayan Hospitality',
      desc: 'Whether you need a quiet corner to write code, celebrate with friends, or grab your morning brew, our staff treats you like family.',
    },
  ];

  const highlights = [
    'Pet-Friendly Outdoor Garden Patio',
    'High-Speed Fiber Internet & Work Outlets',
    'House-Baked Croissants & Daily Pastries',
    'Tibetan Laphing & Authentic Nepali Khaja',
    'Zero-Preservative Fresh Local Ingredients',
    'Quiet Working Environment in Budhanilkantha',
  ];

  return (
    <div className="py-12 sm:py-16 bg-brand-cream min-h-screen" id="about-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
            Our Story &amp; Heritage
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-forest tracking-tight leading-[1.15]">
            More Than Just Coffee.<br />
            <span className="text-brand-gold italic font-normal">A Place to Belong.</span>
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-brand-warmbrown font-medium mt-3">
            &quot;The Spot where great mind gathers&quot;
          </p>
          <p className="text-neutral-600 mt-3 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Nestled in the serene foothills of Budhanilkantha, Coffee Adda was born out of a simple passion: to celebrate authentic Himalayan coffee while providing a sanctuary where our community can gather, create, and unwind.
          </p>
        </div>

        {/* Section 1: The Meaning of Adda (Story & Large Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 sm:mb-32">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-100">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj8YXdAzpC2Ra10WpY_ctWF_IOU9EZ_tjGtEh0v2cDAsLQnAVIE0T-pU7yzhZRxlIYhsPOzqBkuAb78zrJOY6pOqwZQ5IARmXfNuTL8My1p6g75dq8m0TeBRdiEDx7-FoJQVSewUp6UDdakCYF_PWC1B8mN0fMgY5F4YKts-D1ffNr2pLtbcs1dcrgweKASvu9Lgx-yzPe7abmUW0bG4ZD6yTl2CUfbdh4FJRMSauiuUS7T2j8uhI_"
                alt="Cozy wooden ambiance of Coffee Adda cafe interior with patrons laughing and enjoying coffee"
                className="w-full h-[400px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md text-white py-2 px-3.5 rounded-xl border border-white/10 text-xs flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                <span className="font-medium">Budhanilkantha Sanctuary • Kathmandu</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500">
              The Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              What Does &quot;Adda&quot; Mean to Us?
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              In Nepali tradition, an <strong>Adda</strong> is far more than a physical space—it is an informal ritual. It is the table where lifelong friendships deepen, where debates spark over steaming cups of milk tea or bold espresso, and where writers, artists, and innovators come to sit with their thoughts.
            </p>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              When we built Coffee Adda in Budhanilkantha, we wanted to build a neighbourhood haven away from the hustle and pollution of city centers. A space with open natural light, warm timber finishes, potted greenery, and the comforting aroma of fresh grinds and baked butter croissants.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-forest text-brand-gold flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-brand-gold" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-brand-forest italic">
                  &quot;You don&apos;t just visit Coffee Adda to buy coffee. You visit to pause time and feel at home.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Four Core Pillars */}
        <div className="mb-24 sm:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
              Our Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-forest">
              What Sets Us Apart
            </h2>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base">
              The commitments that guide our baristas, kitchen team, and hospitality every single morning.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-neutral-200/90 shadow-sm hover:shadow-md hover:border-brand-forest/30 transition-all duration-300 flex flex-col"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-forest text-brand-gold flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-6 h-6 text-brand-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-brand-forest mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Kitchen & Khaja Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 sm:mb-32">
          <div className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
            <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500">
              Kitchen &amp; Khaja Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              A Complete Culinary Experience
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              While specialty coffee is our heart, our kitchen satisfies every craving. We take pride in an authentic and diverse menu transcribed directly from local preferences:
            </p>
            <ul className="space-y-3 text-sm text-neutral-700">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-brand-forest text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                <span><strong>Tibetan Laphing:</strong> Chilled handmade laphing in jhol, dry spiced with Sichuan pepper, and crunchy chips.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-brand-forest text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                <span><strong>Himalayan Mo:Mo:</strong> Steamed, fried, kothey, and 25-piece party platters with homemade roasted tomato achaar.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-brand-forest text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                <span><strong>Morning Breakfast &amp; French Pastries:</strong> Flaky croissants, cheesy omelettes, and hearty toast sets.</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={(e) => handleAction(e, 'menu')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-forest hover:bg-brand-dark text-white font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
              >
                <span>View Full 150+ Item Menu</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80"
                alt="Fresh artisan butter croissants and bakery treats at Coffee Adda"
                className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* Section 4: Café Amenities List */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm max-w-4xl mx-auto mb-20">
          <div className="text-center mb-8">
            <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
              Café Amenities
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-forest">
              Built for Work, Leisure &amp; Gatherings
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-brand-cream border border-neutral-200/70 text-sm font-semibold text-neutral-800">
                <span className="w-6 h-6 rounded-full bg-brand-forest text-white flex items-center justify-center text-xs shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Open Daily: <strong>7:00 AM – 9:00 PM</strong> (No holidays)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-forest shrink-0" />
              <span>Budhanilkantha, Bagmati Province 44600</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
