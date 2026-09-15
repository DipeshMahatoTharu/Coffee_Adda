import React from 'react';
import ScrollExpansionHero from '../components/ui/ScrollExpansionHero';
import WhyUs from '../components/WhyUs';
import Menu from '../components/Menu';
import SpecialOffer from '../components/SpecialOffer';
import About from '../components/About';
import Reviews from '../components/Reviews';
import Location from '../components/Location';

export default function Home() {
  return (
    <main>
      {/* Premium Scroll-Expanding Hero Section */}
      <ScrollExpansionHero
        mediaSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCANQZGcvU6ec0yA6q51Vw-NflTbj7VdC71FAJVAdygbVvagUp4CWyoWcgw5d9lc0Ow9pArV8aN1kJK-poJn0W1eo6y5537JYFIfci5IO1PyR3fntQ5i0ZNEtnNGfvkG-Q69cRlOuCN5tZC9CtWf85WMI_Nmnipu1bDIMXRSFP2dAMMc-qT04xU0XiPILwV7b4TTUR9yuzd3AkIoRYqgUvjHmHYAcdVpCoWnPDgPZHVCgLOl6zveRjC"
        title={"Your Perfect Cup,\nBrewed Fresh."}
        description="Freshly brewed coffee, delicious treats and a cosy place to enjoy every moment."
        buttonText="Visit Us"
        secondaryButtonText="Explore Menu"
      />

      {/* Coffee Adda Standards & Features */}
      <WhyUs />

      {/* Handcrafted Favorites Menu */}
      <Menu />

      {/* Limited Time Promotion */}
      <SpecialOffer />

      {/* Cafe Story & Budhanilkantha Atmosphere */}
      <About />

      {/* Verified Guest Reviews */}
      <Reviews />

      {/* Cafe Location & Interactive Map */}
      <Location />
    </main>
  );
}
