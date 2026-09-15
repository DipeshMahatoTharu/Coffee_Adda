import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import ImageStreamHero from './components/ImageStreamHero';
import WhyUs from './components/WhyUs';
import FavoritesSection from './components/FavoritesSection';
import Menu from './components/Menu';
import SpecialOffer from './components/SpecialOffer';
import About from './components/About';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

export default function CoffeeAdda() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash === '#menu' ? 'menu' : 'home';
  });

  const navigateTo = (page, anchor) => {
    if (page === 'menu') {
      setCurrentPage('menu');
      window.location.hash = '#menu';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      if (anchor) {
        window.location.hash = anchor;
        setTimeout(() => {
          const el = document.querySelector(anchor);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#menu') {
        setCurrentPage('menu');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
        if (hash && hash !== '#home') {
          setTimeout(() => {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 60);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-800 font-sans antialiased selection:bg-brand-gold selection:text-brand-dark">
      {/* Top Announcement Banner */}
      <Banner />

      {/* Sticky Header Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content View */}
      <main>
        {currentPage === 'menu' ? (
          /* Dedicated Complete Menu Page (157 Items) */
          <Menu onNavigate={navigateTo} />
        ) : (
          /* Home Page with Hero, Why Us, Favorites Fan Carousel, About, Reviews, Location */
          <>
            {/* Animated Image Stream Hero */}
            <ImageStreamHero
              title={"Your Perfect Cup,\nBrewed Fresh."}
              description="Freshly brewed coffee, delicious treats and a cosy place to enjoy every moment."
              buttonText="Visit Us"
              secondaryButtonText="Explore Menu"
              onNavigate={navigateTo}
            />

            {/* Why Coffee Lovers Choose Us */}
            <WhyUs />

            {/* Handcrafted Selections (Card Fan Carousel + View More Button) */}
            <FavoritesSection onNavigate={navigateTo} />

            {/* Café Atmosphere & Hospitality Spotlight */}
            <SpecialOffer />

            {/* About Coffee Adda */}
            <About />

            {/* Customer Reviews Vertical Infinite Scroll */}
            <Reviews />

            {/* Store Location & Hours */}
            <Location />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
