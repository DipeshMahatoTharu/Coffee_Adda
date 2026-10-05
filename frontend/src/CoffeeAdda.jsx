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
import InstagramFeed from './components/InstagramFeed';
import Location from './components/Location';
import Footer from './components/Footer';
import ProductDetailPage from './components/ProductDetailPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsConditionsPage from './components/TermsConditionsPage';
import AdminPage from './components/AdminPage';
import { initMenuWithSupabase } from './data/menuData';

export default function CoffeeAdda() {
  // Sync menu items from Supabase cloud database on mount
  useEffect(() => {
    initMenuWithSupabase();
  }, []);

  const [selectedProductId, setSelectedProductId] = useState(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#product/')) return hash.replace('#product/', '');
    if (hash.startsWith('#item/')) return hash.replace('#item/', '');
    return 'hot-cappuccino';
  });

  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#product/') || hash.startsWith('#item/')) return 'product-detail';
    if (hash === '#menu') return 'menu';
    if (hash === '#why-us') return 'why-us';
    if (hash === '#about') return 'about';
    if (hash === '#reviews') return 'reviews';
    if (hash === '#location') return 'location';
    if (hash === '#privacy') return 'privacy';
    if (hash === '#terms') return 'terms';
    if (hash === '#admin') return 'admin';
    return 'home';
  });

  const navigateTo = (page, anchor) => {
    if (page === 'product-detail') {
      const pId = anchor || selectedProductId || 'hot-cappuccino';
      setSelectedProductId(pId);
      setCurrentPage('product-detail');
      window.location.hash = `#product/${pId}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'menu') {
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
    } else if (page === 'privacy') {
      setCurrentPage('privacy');
      window.location.hash = '#privacy';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'terms') {
      setCurrentPage('terms');
      window.location.hash = '#terms';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'admin') {
      setCurrentPage('admin');
      window.location.hash = '#admin';
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
      if (hash.startsWith('#product/')) {
        const pId = hash.replace('#product/', '');
        setSelectedProductId(pId);
        setCurrentPage('product-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#item/')) {
        const pId = hash.replace('#item/', '');
        setSelectedProductId(pId);
        setCurrentPage('product-detail');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#menu') {
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
      } else if (hash === '#privacy') {
        setCurrentPage('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#terms') {
        setCurrentPage('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#admin') {
        setCurrentPage('admin');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#community-section') {
        // In-page anchor on product detail page - do not leave product-detail
        const el = document.getElementById('community-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        return;
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

  const isAdmin = currentPage === 'admin';

  return (
    <div className={`min-h-screen ${isAdmin ? 'bg-[#150404] text-neutral-100 selection:bg-red-700 selection:text-white' : 'bg-brand-cream text-neutral-800 selection:bg-brand-gold selection:text-brand-dark'} font-sans antialiased overflow-x-hidden w-full max-w-full`}>
      {/* Top Announcement Banner */}
      <Banner isAdmin={isAdmin} />

      {/* Sticky Header Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} isAdmin={isAdmin} />

      {/* Main Content View */}
      <main>
        {currentPage === 'product-detail' ? (
          /* Dedicated Product Detail Page showing history & how it is made */
          <ProductDetailPage productId={selectedProductId} onNavigate={navigateTo} />
        ) : currentPage === 'menu' ? (
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
        ) : currentPage === 'privacy' ? (
          /* Dedicated Privacy Policy Page */
          <PrivacyPolicyPage onNavigate={navigateTo} />
        ) : currentPage === 'terms' ? (
          /* Dedicated Terms & Conditions Page */
          <TermsConditionsPage onNavigate={navigateTo} />
        ) : currentPage === 'admin' ? (
          /* Dedicated Staff Admin Management Page */
          <AdminPage onNavigate={navigateTo} />
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

            {/* Instagram Community Feed (@coffee_adda9) */}
            <InstagramFeed />

            {/* Store Location & Hours */}
            <Location />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} isAdmin={isAdmin} />
    </div>
  );
}
