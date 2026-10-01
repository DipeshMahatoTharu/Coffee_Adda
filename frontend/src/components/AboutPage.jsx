import React from 'react';
import { motion } from 'framer-motion';
import { VerticalCutReveal } from '@/components/ui/vertical-cut-reveal';
import {
  Coffee,
  Heart,
  Leaf,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Instagram,
  ExternalLink,
} from 'lucide-react';

// Animation variants for smooth scroll triggers
const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const cardPop = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 45 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

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
    <div className="py-12 sm:py-16 bg-brand-cream min-h-screen relative overflow-hidden" id="about-page">
      {/* Decorative ambient background glows */}
      <motion.div
        animate={{ y: [0, -15, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-[-5%] w-96 h-96 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-40 right-[-5%] w-96 h-96 bg-brand-forest/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-bold tracking-widest uppercase mb-4"
          >
            <Coffee className="w-3.5 h-3.5 text-brand-gold" />
            <span>Our Story &amp; Heritage</span>
          </motion.div>

          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.02}
            staggerFrom="first"
            transition={{
              type: 'spring',
              stiffness: 190,
              damping: 22,
            }}
            containerClassName="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-forest tracking-tight leading-[1.15] justify-center"
          >
            More Than Just Coffee.
          </VerticalCutReveal>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <span className="block font-serif text-3xl sm:text-5xl lg:text-6xl text-brand-gold italic font-normal tracking-tight mt-1">
              A Place to Belong.
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-serif italic text-base sm:text-lg text-brand-warmbrown font-medium mt-3"
          >
            &quot;The Spot where great mind gathers&quot;
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-neutral-600 mt-3 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            Nestled in the serene foothills of Budhanilkantha, Coffee Adda was born out of a simple passion: to celebrate authentic Himalayan coffee while providing a sanctuary where our community can gather, create, and unwind.
          </motion.p>
        </div>

        {/* Section 1: The Meaning of Adda (Story & Large Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 sm:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={slideInLeft}
            className="lg:col-span-6 relative group"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-100 relative">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj8YXdAzpC2Ra10WpY_ctWF_IOU9EZ_tjGtEh0v2cDAsLQnAVIE0T-pU7yzhZRxlIYhsPOzqBkuAb78zrJOY6pOqwZQ5IARmXfNuTL8My1p6g75dq8m0TeBRdiEDx7-FoJQVSewUp6UDdakCYF_PWC1B8mN0fMgY5F4YKts-D1ffNr2pLtbcs1dcrgweKASvu9Lgx-yzPe7abmUW0bG4ZD6yTl2CUfbdh4FJRMSauiuUS7T2j8uhI_"
                alt="Cozy wooden ambiance of Coffee Adda cafe interior with patrons laughing and enjoying coffee"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md text-white py-2 px-3.5 rounded-xl border border-white/10 text-xs flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-gold animate-bounce" />
                <span className="font-medium">Budhanilkantha Sanctuary • Kathmandu</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={slideInRight}
            className="lg:col-span-6 space-y-6 text-left"
          >
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

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="pt-2"
            >
              <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-forest text-brand-gold flex items-center justify-center shrink-0 shadow-2xs">
                  <Coffee className="w-5 h-5 text-brand-gold" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-brand-forest italic">
                  &quot;You don&apos;t just visit Coffee Adda to buy coffee. You visit to pause time and feel at home.&quot;
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Section 2: Four Core Pillars */}
        <div className="mb-24 sm:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
              Our Values
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-forest">
              What Sets Us Apart
            </h2>
            <p className="text-neutral-600 mt-2 text-sm sm:text-base">
              The commitments that guide our baristas, kitchen team, and hospitality every single morning.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  variants={cardPop}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white p-7 rounded-3xl border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-brand-forest/40 transition-all duration-300 flex flex-col group cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -12, 12, 0] }}
                    transition={{ duration: 0.4 }}
                    className="w-12 h-12 rounded-2xl bg-brand-forest text-brand-gold flex items-center justify-center mb-5 shadow-xs group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6 transition-colors" />
                  </motion.div>
                  <h3 className="font-serif text-lg font-bold text-brand-forest mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Section 3: Kitchen & Khaja Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-24 sm:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={slideInLeft}
            className="lg:col-span-6 space-y-6 text-left order-2 lg:order-1"
          >
            <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500">
              Kitchen &amp; Khaja Heritage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              A Complete Culinary Experience
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              While specialty coffee is our heart, our kitchen satisfies every craving. We take pride in an authentic and diverse menu transcribed directly from local preferences:
            </p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 text-sm text-neutral-700"
            >
              {[
                {
                  title: 'Tibetan Laphing:',
                  desc: 'Chilled handmade laphing in jhol, dry spiced with Sichuan pepper, and crunchy chips.',
                },
                {
                  title: 'Himalayan Mo:Mo:',
                  desc: 'Steamed, fried, kothey, and 25-piece party platters with homemade roasted tomato achaar.',
                },
                {
                  title: 'Morning Breakfast & French Pastries:',
                  desc: 'Flaky croissants, cheesy omelettes, and hearty toast sets.',
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-2.5 transition-transform"
                >
                  <span className="w-5 h-5 rounded-full bg-brand-forest text-white flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-2xs">
                    ✓
                  </span>
                  <span><strong>{item.title}</strong> {item.desc}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={(e) => handleAction(e, 'menu')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-forest hover:bg-brand-dark text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg cursor-pointer group"
              >
                <span>View Full 150+ Item Menu</span>
                <ArrowRight className="w-4 h-4 text-brand-gold transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={slideInRight}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-100">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1000&q=80"
                alt="Fresh artisan butter croissants and bakery treats at Coffee Adda"
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Section 4: Café Amenities List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeInUp}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm max-w-4xl mx-auto mb-20"
        >
          <div className="text-center mb-8">
            <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
              Café Amenities
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-forest">
              Built for Work, Leisure &amp; Gatherings
            </h3>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-brand-cream/80 hover:bg-white border border-neutral-200/70 hover:border-brand-forest/40 text-sm font-semibold text-neutral-800 transition-colors shadow-2xs"
              >
                <span className="w-6 h-6 rounded-full bg-brand-forest text-white flex items-center justify-center text-xs shrink-0">
                  ✓
                </span>
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>

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
        </motion.div>

        {/* Section 5: Instagram Community Connection */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeInUp}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 rounded-3xl p-8 sm:p-10 border border-neutral-700 shadow-xl max-w-4xl mx-auto mb-16 text-white overflow-hidden relative"
        >
          {/* Animated Ambient Glow */}
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -right-10 -bottom-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl pointer-events-none"
          />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 shadow-md shrink-0"
              >
                <img
                  src="/coffee-adda-instagram-avatar.jpg"
                  alt="Coffee Adda Instagram"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/90"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=300&q=80';
                  }}
                />
              </motion.div>
              <div>
                <span className="text-xs uppercase tracking-wider text-pink-400 font-semibold">Join Our Community</span>
                <h4 className="font-serif text-2xl font-bold text-white">@coffee_adda9</h4>
                <p className="text-xs sm:text-sm text-neutral-300 mt-0.5">
                  Follow us for daily brews, behind-the-scenes moments, and community updates in Budhanilkantha.
                </p>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/coffee_adda9/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 hover:opacity-95 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
