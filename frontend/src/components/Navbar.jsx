import React, { useState } from 'react';

export default function Navbar({ currentPage = 'home', onNavigate, isAdmin = false }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNav = (e, page, anchor) => {
    e.preventDefault();
    closeMobileMenu();
    if (onNavigate) {
      onNavigate(page, anchor);
    } else {
      if (page === 'menu') {
        window.location.hash = '#menu';
      } else if (page === 'why-us') {
        window.location.hash = '#why-us';
      } else if (page === 'about') {
        window.location.hash = '#about';
      } else if (page === 'reviews') {
        window.location.hash = '#reviews';
      } else if (page === 'location') {
        window.location.hash = '#location';
      } else if (anchor) {
        window.location.hash = anchor;
      } else {
        window.location.hash = '#home';
      }
    }
  };

  const activeLinkClass = isAdmin
    ? "text-red-400 font-bold hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-500"
    : "text-brand-forest font-bold hover:text-brand-gold transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-forest";
  const normalLinkClass = isAdmin
    ? "hover:text-white transition-colors py-1 text-red-100/80"
    : "hover:text-brand-forest transition-colors py-1 text-neutral-700";

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md transition-all duration-300 ${
        isAdmin
          ? 'bg-[#2b0808]/95 border-b border-red-800/70 shadow-lg text-white'
          : 'bg-brand-cream/95 border-b border-emerald-950/10'
      }`}
      data-purpose="site-header"
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo & Brand Name */}
          <a
            aria-label="Coffee Adda Home"
            className="flex items-center gap-3 group cursor-pointer"
            href="#home"
            onClick={(e) => handleNav(e, 'home')}
          >
            <div
              className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300 ${
                isAdmin
                  ? 'bg-gradient-to-tr from-amber-400 to-red-600'
                  : 'bg-gradient-to-tr from-brand-gold to-brand-forest'
              }`}
            >
              <img
                alt="Coffee Adda Circular Crest Logo"
                className="w-full h-full object-cover rounded-full bg-white"
                src="/logo.png"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`block font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                    isAdmin
                      ? 'text-white group-hover:text-red-300'
                      : 'text-brand-forest group-hover:text-brand-gold'
                  }`}
                >
                  Coffee Adda
                </span>
                {isAdmin && (
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-red-600 text-white shadow-sm border border-red-400">
                    ADMIN
                  </span>
                )}
              </div>
              <span
                className={`block text-[10px] tracking-widest uppercase font-semibold ${
                  isAdmin ? 'text-red-300/80' : 'text-neutral-500'
                }`}
              >
                {isAdmin ? 'Budhanilkantha • Staff Portal' : 'Budhanilkantha • Artisanal'}
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[15px] font-semibold">
            <a
              className={currentPage === 'home' ? activeLinkClass : normalLinkClass}
              href="#home"
              onClick={(e) => handleNav(e, 'home')}
            >
              Home
            </a>
            <a
              className={currentPage === 'about' ? activeLinkClass : normalLinkClass}
              href="#about"
              onClick={(e) => handleNav(e, 'about')}
            >
              About
            </a>
            <a
              className={currentPage === 'menu' || currentPage === 'product-detail' ? activeLinkClass : normalLinkClass}
              href="#menu"
              onClick={(e) => handleNav(e, 'menu')}
            >
              Menu
            </a>
            <a
              className={currentPage === 'why-us' ? activeLinkClass : normalLinkClass}
              href="#why-us"
              onClick={(e) => handleNav(e, 'why-us')}
            >
              Why Us
            </a>
            <a
              className={currentPage === 'reviews' ? activeLinkClass : normalLinkClass}
              href="#reviews"
              onClick={(e) => handleNav(e, 'reviews')}
            >
              Reviews
            </a>
            <a
              className={currentPage === 'location' ? activeLinkClass : normalLinkClass}
              href="#location"
              onClick={(e) => handleNav(e, 'location')}
            >
              Location
            </a>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center space-x-4">
            {/* Action Button: Exit Admin or Visit Us */}
            {isAdmin ? (
              <a
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-red-700 hover:bg-red-800 shadow-md hover:shadow-red-900/50 hover:-translate-y-0.5 transition-all duration-300 border border-red-500/50 cursor-pointer"
                href="#home"
                onClick={(e) => handleNav(e, 'home')}
              >
                <span>Exit Admin</span>
                <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </a>
            ) : (
              <a
                className="hidden sm:inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-brand-forest hover:bg-brand-dark shadow-md hover:shadow-glow-gold hover:-translate-y-0.5 transition-all duration-300 border border-brand-gold/40 cursor-pointer"
                href="#location"
                onClick={(e) => handleNav(e, 'location')}
              >
                <span>Visit Us</span>
                <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            )}

            {/* Mobile Hamburger Menu Button */}
            <button
              aria-label="Toggle navigation menu"
              className={`lg:hidden p-2 rounded-lg focus:outline-none transition-colors ${
                isAdmin ? 'text-red-200 hover:bg-red-900' : 'text-brand-forest hover:bg-brand-sage'
              }`}
              onClick={toggleMobileMenu}
              type="button"
            >
              {isMobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M4 6h16M4 12h16m-7 6h7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden border-t py-4 space-y-3 pb-6 animate-fadeIn ${
              isAdmin
                ? 'border-red-800 bg-[#2b0808] text-white'
                : 'border-neutral-200 bg-white'
            }`}
            id="mobile-nav-panel"
          >
            <a
              className={`block px-3 py-2 text-base font-semibold rounded-md ${
                currentPage === 'home'
                  ? (isAdmin ? 'bg-red-700 text-white' : 'bg-brand-forest text-white')
                  : (isAdmin ? 'text-red-200 hover:bg-red-900/60' : 'text-neutral-700 hover:bg-brand-sage')
              }`}
              href="#home"
              onClick={(e) => handleNav(e, 'home')}
            >
              Home
            </a>
            <a
              className={`block px-3 py-2 text-base font-semibold rounded-md ${
                currentPage === 'about'
                  ? (isAdmin ? 'bg-red-700 text-white' : 'bg-brand-forest text-white')
                  : (isAdmin ? 'text-red-200 hover:bg-red-900/60' : 'text-neutral-700 hover:bg-brand-sage')
              }`}
              href="#about"
              onClick={(e) => handleNav(e, 'about')}
            >
              About Us
            </a>
            <a
              className={`block px-3 py-2 text-base font-semibold rounded-md ${
                currentPage === 'menu' || currentPage === 'product-detail'
                  ? (isAdmin ? 'bg-red-700 text-white' : 'bg-brand-forest text-white')
                  : (isAdmin ? 'text-red-200 hover:bg-red-900/60' : 'text-neutral-700 hover:bg-brand-sage')
              }`}
              href="#menu"
              onClick={(e) => handleNav(e, 'menu')}
            >
              Our Complete Menu
            </a>
            <a
              className={`block px-3 py-2 text-base font-semibold rounded-md ${
                currentPage === 'why-us'
                  ? (isAdmin ? 'bg-red-700 text-white' : 'bg-brand-forest text-white')
                  : (isAdmin ? 'text-red-200 hover:bg-red-900/60' : 'text-neutral-700 hover:bg-brand-sage')
              }`}
              href="#why-us"
              onClick={(e) => handleNav(e, 'why-us')}
            >
              Why Coffee Adda
            </a>
            <a
              className={`block px-3 py-2 text-base font-semibold rounded-md ${
                currentPage === 'reviews'
                  ? (isAdmin ? 'bg-red-700 text-white' : 'bg-brand-forest text-white')
                  : (isAdmin ? 'text-red-200 hover:bg-red-900/60' : 'text-neutral-700 hover:bg-brand-sage')
              }`}
              href="#reviews"
              onClick={(e) => handleNav(e, 'reviews')}
            >
              Guest Reviews
            </a>
            <a
              className={`block px-3 py-2 text-base font-semibold rounded-md ${
                currentPage === 'location'
                  ? (isAdmin ? 'bg-red-700 text-white' : 'bg-brand-forest text-white')
                  : (isAdmin ? 'text-red-200 hover:bg-red-900/60' : 'text-neutral-700 hover:bg-brand-sage')
              }`}
              href="#location"
              onClick={(e) => handleNav(e, 'location')}
            >
              Find Location
            </a>
            <div className="pt-2 px-3">
              <a
                className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold shadow-md ${
                  isAdmin
                    ? 'bg-red-700 text-white hover:bg-red-800'
                    : 'bg-brand-forest text-white'
                }`}
                href={isAdmin ? "#home" : "#location"}
                onClick={(e) => handleNav(e, isAdmin ? 'home' : 'location')}
              >
                <span>{isAdmin ? "Exit Staff Admin" : "Visit Our Café"}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
