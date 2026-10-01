"use client";

import React, { useRef } from 'react';
import { TimelineContent } from './ui/timeline-animation';
import { VerticalCutReveal } from './ui/vertical-cut-reveal';
import { ArrowRight, Coffee, Star, MapPin, Heart, Clock } from 'lucide-react';

export default function About({ onNavigate }) {
  const heroRef = useRef(null);

  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.18,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(8px)",
      y: -16,
      opacity: 0,
    },
  };

  const scaleVariants = {
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
    hidden: {
      filter: "blur(8px)",
      scale: 0.96,
      opacity: 0,
    },
  };

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
    <section
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream/80 relative overflow-hidden"
      ref={heroRef}
      id="about"
      data-purpose="about-section-animated"
    >
      {/* Ambient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[48rem] h-[22rem] bg-brand-gold/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative">
          {/* Header with Tagline & Quick Social/Direction Links */}
          <div className="flex justify-between items-center mb-6 w-full sm:w-[90%] absolute lg:top-4 md:top-2 sm:top-0 -top-2 z-10 px-2">
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-brand-gold" />
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-xs sm:text-sm font-bold tracking-widest text-brand-forest uppercase"
              >
                WHO WE ARE • BUDHANILKANTHA
              </TimelineContent>
            </div>

            {/* Quick Action Badges */}
            <div className="flex items-center gap-2">
              <TimelineContent
                as="a"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-7 h-7 sm:w-8 sm:h-8 border border-neutral-300/80 bg-white/90 hover:bg-brand-forest hover:text-white rounded-lg flex items-center justify-center transition-colors cursor-pointer text-neutral-700 shadow-xs"
              >
                <span className="text-xs font-bold">fb</span>
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="https://www.instagram.com/coffee_adda9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Coffee Adda on Instagram @coffee_adda9"
                className="w-7 h-7 sm:w-8 sm:h-8 border border-neutral-300/80 bg-white/90 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-600 hover:text-white rounded-lg flex items-center justify-center transition-all cursor-pointer text-neutral-700 shadow-xs"
              >
                <span className="text-xs font-bold">ig</span>
              </TimelineContent>
              <TimelineContent
                as="button"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={revealVariants}
                onClick={handleLocationNavigation}
                aria-label="View Map Location"
                className="w-7 h-7 sm:w-8 sm:h-8 border border-brand-gold/50 bg-brand-forest text-brand-gold hover:bg-brand-dark rounded-lg flex items-center justify-center transition-colors cursor-pointer shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5" />
              </TimelineContent>
            </div>
          </div>

          {/* Artistic SVG Cutout Banner with Real Coffee Adda Atmosphere Photo */}
          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group pt-7 sm:pt-6"
          >
            <svg
              className="w-full drop-shadow-md rounded-2xl"
              width={"100%"}
              height={"100%"}
              viewBox="0 0 100 40"
            >
              <defs>
                <clipPath
                  id="clip-inverted-coffee"
                  clipPathUnits={"objectBoundingBox"}
                >
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted-coffee)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                xlinkHref="https://lh3.googleusercontent.com/aida-public/AB6AXuDj8YXdAzpC2Ra10WpY_ctWF_IOU9EZ_tjGtEh0v2cDAsLQnAVIE0T-pU7yzhZRxlIYhsPOzqBkuAb78zrJOY6pOqwZQ5IARmXfNuTL8My1p6g75dq8m0TeBRdiEDx7-FoJQVSewUp6UDdakCYF_PWC1B8mN0fMgY5F4YKts-D1ffNr2pLtbcs1dcrgweKASvu9Lgx-yzPe7abmUW0bG4ZD6yTl2CUfbdh4FJRMSauiuUS7T2j8uhI_"
              />
            </svg>
          </TimelineContent>

          {/* Authentic Coffee Adda Stats Bar */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-4 text-sm border-b border-neutral-200/80 mb-8">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 sm:text-sm text-xs font-medium text-neutral-700">
                <span className="text-brand-forest font-bold">100%</span>
                <span>Mountain Arabica</span>
                <span className="text-neutral-300">|</span>
              </div>
              <div className="flex items-center gap-2 sm:text-sm text-xs font-medium text-neutral-700">
                <span className="text-brand-forest font-bold">150+</span>
                <span>Menu Favorites</span>
                <span className="text-neutral-300">|</span>
              </div>
              <div className="flex items-center gap-2 sm:text-sm text-xs font-medium text-neutral-700">
                <span className="text-amber-500 font-bold flex items-center gap-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  4.8
                </span>
                <span>Guest Rating</span>
              </div>
            </TimelineContent>

            <div className="lg:absolute right-0 bottom-12 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4 mt-2 lg:mt-0">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex lg:text-3xl sm:text-2xl text-xl items-center gap-2 font-serif font-bold text-brand-forest"
              >
                <span>50k+</span>
                <span className="text-xs uppercase font-sans tracking-widest text-neutral-500">Cups Poured</span>
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 text-xs text-neutral-600"
              >
                <Clock className="w-3.5 h-3.5 text-brand-gold" />
                <span>Open Daily: 7 AM – 9 PM</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Main Content Grid: Story on Left, Brand Card on Right */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            {/* Cinematic Headline with VerticalCutReveal */}
            <h2 className="sm:text-3xl md:text-4xl lg:text-5xl text-2xl font-serif font-extrabold text-brand-forest mb-6 tracking-tight leading-[1.18]">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.08}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 26,
                  delay: 0.2,
                }}
              >
                More Than Just Coffee. A Place to Belong.
              </VerticalCutReveal>
            </h2>

            {/* Two Narrative Paragraphs with Timeline Animation */}
            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-6 text-neutral-700 text-sm sm:text-base leading-relaxed"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="bg-white/80 p-5 rounded-2xl border border-neutral-200/80 shadow-xs"
              >
                <div className="flex items-center gap-2 text-brand-forest font-serif font-bold mb-2">
                  <Coffee className="w-4 h-4 text-brand-gold" />
                  <span>The "Adda" Tradition</span>
                </div>
                <p className="leading-relaxed">
                  Nestled in tranquil Budhanilkantha, <strong>Coffee Adda</strong> was founded on a simple premise: great coffee builds genuine community. &quot;Adda&quot; is the timeless tradition of coming together to laugh, debate, daydream, and reconnect.
                </p>
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="bg-white/80 p-5 rounded-2xl border border-neutral-200/80 shadow-xs"
              >
                <div className="flex items-center gap-2 text-brand-forest font-serif font-bold mb-2">
                  <Coffee className="w-4 h-4 text-brand-gold" />
                  <span>Handcrafted Quality</span>
                </div>
                <p className="leading-relaxed">
                  Every batch of coffee we extract tells the story of high-altitude Himalayan growers, calibrated roast curves, and passionate baristas who treat every single pour as an artisanal creation.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          {/* Right Column: Brand Badge & Action Trigger */}
          <div className="md:col-span-1">
            <div className="bg-white/90 p-6 sm:p-7 rounded-3xl border border-neutral-200/90 shadow-md text-left md:text-right space-y-4">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-brand-forest text-2xl font-serif font-black tracking-tight"
              >
                COFFEE ADDA
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-neutral-500 text-xs font-semibold uppercase tracking-wider"
              >
                Artisanal Café &amp; Kitchen • Budhanilkantha
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="pt-2 border-t border-neutral-200/70"
              >
                <p className="text-neutral-700 text-xs sm:text-sm font-medium leading-relaxed">
                  &quot;The Spot where great minds gather.&quot; Discover our garden patio, fiber Wi-Fi, and 150+ menu selections.
                </p>
              </TimelineContent>

              {/* Read More / Explore Story CTA */}
              <TimelineContent
                as="div"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="pt-2 flex flex-col sm:flex-row md:flex-col gap-2.5"
              >
                <button
                  type="button"
                  onClick={handleAboutNavigation}
                  className="bg-brand-forest hover:bg-brand-dark shadow-md hover:shadow-glow-gold border border-brand-gold/40 flex items-center justify-center gap-2 hover:gap-3 transition-all duration-300 text-white px-5 py-3 rounded-full cursor-pointer font-bold text-xs sm:text-sm group"
                >
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={handleLocationNavigation}
                  className="bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300/80 px-4 py-2.5 rounded-full text-xs font-bold transition-all text-center cursor-pointer shadow-xs"
                >
                  Visit Our Café
                </button>
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
