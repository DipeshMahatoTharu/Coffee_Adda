import React, { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import ImageStreamHero from './components/ImageStreamHero';
import WhyUs from './components/WhyUs';
import FavoritesSection from './components/FavoritesSection';
import Menu from './components/Menu';
import SpecialOffer from './components/SpecialOffer';
import About from './components/About';
import AboutPage from './components/AboutPage';
import ReviewsPage from './components/ReviewsPage';
import LocationPage from './components/LocationPage';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

export default function CoffeeAdda() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#menu') return 'menu';
    if (hash === '#why-us') return 'why-us';
    if (hash === '#about') return 'about';
    if (hash === '#reviews') return 'reviews';
    if (hash === '#location') return 'location';
    return 'home';
  });

  const navigateTo = (page, anchor) => {
    if (page === 'menu') {
      setCurrentPage('menu');
      window.location.hash = '#menu';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'why-us') {
      setCurrentPage('why-us');
      window.location.hash = '#why-us';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      setCurrentPage('about');
      window.location.hash = '#about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'reviews') {
      setCurrentPage('reviews');
      window.location.hash = '#reviews';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'location') {
      setCurrentPage('location');
      window.location.hash = '#location';
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
      } else if (hash === '#why-us') {
        setCurrentPage('why-us');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#reviews') {
        setCurrentPage('reviews');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#location') {
        setCurrentPage('location');
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
        ) : currentPage === 'why-us' ? (
          /* Dedicated Why Us Page */
          <WhyUs onNavigate={navigateTo} isDedicatedPage={true} />
        ) : currentPage === 'about' ? (
          /* Dedicated About Us Page with Story, Philosophy & Amenities */
          <AboutPage onNavigate={navigateTo} />
        ) : currentPage === 'reviews' ? (
          /* Dedicated Reviews Page */
          <ReviewsPage onNavigate={navigateTo} />
        ) : currentPage === 'location' ? (
          /* Dedicated Location Page */
          <LocationPage onNavigate={navigateTo} />
        ) : (
          /* Home Page with Hero, Favorites Fan Carousel, Special Offer, About, Reviews, Location */
          <>
            {/* Animated Image Stream Hero */}
            <ImageStreamHero
              title={"Your Perfect Cup,\nBrewed Fresh."}
              description="Freshly brewed coffee, delicious treats and a cosy place to enjoy every moment."
              buttonText="Visit Us"
              secondaryButtonText="Explore Menu"
              onNavigate={navigateTo}
            />

            {/* Handcrafted Selections (Card Fan Carousel + View More Button) */}
            <FavoritesSection onNavigate={navigateTo} />

            {/* Café Atmosphere & Hospitality Spotlight */}
            <SpecialOffer onNavigate={navigateTo} />

            {/* About Coffee Adda (Homepage Summary with Read More button to dedicated About page) */}
            <About onNavigate={navigateTo} />

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
