import React from 'react';
import { FileCheck, ArrowLeft, Coffee, DollarSign, Wifi, Users, Scale, MapPin } from 'lucide-react';

export default function TermsConditionsPage({ onNavigate }) {
  const handleBack = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.hash = '#home';
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream text-neutral-800 font-sans antialiased py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-brand-forest/10 pb-6">
          <a
            href="#home"
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-forest hover:text-brand-gold transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </a>
          <span className="text-xs text-neutral-500 font-medium">
            Effective Date: January 1, 2025 • Coffee Adda
          </span>
        </div>

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-bold uppercase tracking-wider">
            <FileCheck className="w-4 h-4 text-brand-forest" />
            <span>Café Regulations &amp; Terms</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-brand-forest tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Welcome to Coffee Adda. By visiting our café at Budhanilkantha or accessing our website and digital services, you agree to comply with and be bound by the following terms and conditions.
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-forest/10 shadow-sm space-y-8 text-neutral-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-brand-forest flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-brand-gold" />
              1. Menu Pricing &amp; Orders
            </h2>
            <p className="text-sm sm:text-base">
              All prices displayed on this website and on our in-house printed menus are stated in Nepalese Rupees (NPR). While we make every effort to ensure accurate pricing and item availability online, prices and seasonal specials are subject to change without prior notice.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-neutral-600">
              <li>Orders placed in-person or via table QR codes are finalized upon confirmation by our baristas and kitchen staff.</li>
              <li>Dietary notes (Veg, Egg, Non-Veg) and spice level customizations should be specified at the counter or during order placement.</li>
              <li>Takeaway packaging is provided in biodegradable containers to preserve freshness and minimize environmental footprint.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-neutral-100 pt-6">
            <h2 className="text-xl font-serif font-bold text-brand-forest flex items-center gap-2">
              <Wifi className="w-5 h-5 text-brand-gold" />
              2. Work-Friendly Space &amp; Wi-Fi Etiquette
            </h2>
            <p className="text-sm sm:text-base">
              Coffee Adda is proudly designed as &quot;The Spot Where Great Minds Gather,&quot; equipped with reliable high-speed internet and accessible power stations across indoor and garden terrace seating.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-neutral-600">
              <li>Complimentary Wi-Fi is provided for patrons enjoying our coffee and culinary offerings.</li>
              <li>We kindly request patrons taking video or voice calls to use headphones and maintain an indoor conversational volume to preserve the calm ambiance.</li>
              <li>During peak afternoon and weekend hours, we request single laptop guests to share communal tables when seating is limited.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-neutral-100 pt-6">
            <h2 className="text-xl font-serif font-bold text-brand-forest flex items-center gap-2">
              <Users className="w-5 h-5 text-brand-gold" />
              3. Guest Reviews &amp; Community Gallery
            </h2>
            <p className="text-sm sm:text-base">
              We welcome authentic feedback and photos from genuine patrons:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-neutral-600">
              <li>Reviews and photos submitted must reflect real dining experiences at Coffee Adda.</li>
              <li>Content containing abusive, offensive, defamatory, or promotional advertising material will be removed immediately.</li>
              <li>By submitting photos through our Community Adda feature, you grant us permission to showcase your photograph on our website gallery.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-neutral-100 pt-6">
            <h2 className="text-xl font-serif font-bold text-brand-forest flex items-center gap-2">
              <Coffee className="w-5 h-5 text-brand-gold" />
              4. Intellectual Property
            </h2>
            <p className="text-sm sm:text-base">
              All branding elements, logo designs, custom drink descriptions, artisan story narratives, and graphic assets displayed on this website are the intellectual property of Coffee Adda. Unauthorized duplication, re-publication, or commercial reuse without written permission is prohibited.
            </p>
          </section>

          <section className="space-y-3 border-t border-neutral-100 pt-6">
            <h2 className="text-xl font-serif font-bold text-brand-forest flex items-center gap-2">
              <Scale className="w-5 h-5 text-brand-gold" />
              5. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-sm sm:text-base">
              These terms and conditions are governed by and construed in accordance with the laws of Nepal. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Kathmandu, Nepal.
            </p>
          </section>

          <section className="space-y-4 border-t border-neutral-100 pt-6">
            <h2 className="text-xl font-serif font-bold text-brand-forest">
              6. Location &amp; Contact Information
            </h2>
            <div className="bg-brand-cream/60 rounded-2xl p-5 space-y-2 border border-brand-forest/10 text-sm">
              <p className="font-bold text-brand-forest">Coffee Adda</p>
              <p className="flex items-center gap-2 text-neutral-600">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Q9F5+8XJ, Budhanilkantha, Bagmati Province 44600, Nepal</span>
              </p>
              <p className="text-neutral-600">
                Opening Hours: Sun - Sat, 7:00 AM - 9:00 PM NPT
              </p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
