import React from 'react';
import {
  MapPin,
  Clock,
  Coffee,
  Check,
  Star,
  Navigation,
  Car,
  Phone,
} from 'lucide-react';

export default function LocationPage({ onNavigate }) {
  const handleAction = (e, target) => {
    e.preventDefault();
    if (onNavigate) {
      if (target === 'menu') {
        onNavigate('menu');
      } else if (target === 'home') {
        onNavigate('home');
      } else if (target === 'about') {
        onNavigate('about');
      } else {
        onNavigate('home', target);
      }
    } else {
      window.location.hash = target.startsWith('#') ? target : `#${target}`;
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-brand-cream min-h-screen" id="location-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
            Come Say Hello • Budhanilkantha
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-forest tracking-tight leading-[1.15]">
            Visit Coffee Adda
          </h1>
          <p className="text-neutral-600 mt-3 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Conveniently located along Budhanilkantha with easy parking, lush outdoor seating, fast Wi-Fi, and warm Himalayan hospitality.
          </p>
        </div>

        {/* Two-Column Map & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left: Store Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Cafe Tag & Rating Info */}
              <div className="pb-6 border-b border-neutral-200">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-2xl font-bold text-brand-forest">Coffee Adda</h2>
                  <span className="text-xs font-bold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                    Open Daily
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">Specialty Café • Rs 1 - 500 per person</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-neutral-800">4.8</span>
                  <span className="text-xs text-neutral-500">(36 Verified Google reviews)</span>
                </div>
              </div>

              {/* Address & Coordinates */}
              <div className="space-y-4 text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-forest mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-brand-forest font-semibold">Exact Address</strong>
                    <span>Q9F5+8XJ, Budhanilkantha, Bagmati Province 44600, Nepal</span>
                    <span className="block text-xs text-neutral-500 mt-0.5">Near Budhanilkantha Main Road</span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-forest mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-brand-forest font-semibold">Opening Hours</strong>
                    <span className="text-neutral-600">Monday - Sunday: 7:00 AM - 9:00 PM</span>
                    <span className="block text-xs text-emerald-700 mt-0.5 font-medium">
                      Open 7 days a week • No holiday closures
                    </span>
                  </div>
                </div>

                {/* Contact & Reservations */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-forest mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-brand-forest font-semibold">Phone Inquiries &amp; Orders</strong>
                    <a href="tel:+9779763531091" className="text-brand-forest hover:text-brand-gold hover:underline font-semibold">
                      +977 9763531091
                    </a>
                  </div>
                </div>

                {/* Service Badges */}
                <div className="flex items-start gap-3">
                  <Coffee className="w-5 h-5 text-brand-forest mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-brand-forest font-semibold">Available Services</strong>
                    <div className="flex gap-2 mt-1.5 flex-wrap">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-brand-sage text-brand-forest rounded inline-flex items-center gap-1">
                        <Check className="w-3 h-3 text-brand-forest" />
                        <span>Takeaway</span>
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-brand-sage text-brand-forest rounded inline-flex items-center gap-1">
                        <Check className="w-3 h-3 text-brand-forest" />
                        <span>Outdoor Seating</span>
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-brand-sage text-brand-forest rounded inline-flex items-center gap-1">
                        <Check className="w-3 h-3 text-brand-forest" />
                        <span>High-Speed Wi-Fi</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action Button */}
            <div className="pt-8">
              <a
                className="w-full py-4 px-6 rounded-2xl bg-brand-forest hover:bg-brand-dark text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md hover:shadow-glow-gold transition-all duration-300 cursor-pointer"
                href="https://maps.app.goo.gl/zE65oj8ArApymBxL7"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Navigation className="w-4 h-4 text-brand-gold" />
                <span>Open in Google Maps Navigation</span>
              </a>
            </div>
          </div>

          {/* Right: Exact Interactive Google Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-neutral-200 relative min-h-[420px] bg-neutral-100">
            <iframe
              allowFullScreen=""
              className="w-full h-full min-h-[440px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.6865239103623!2d85.35730877625515!3d27.773326176144883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1d0b87082ab9%3A0xedeaf24e0dcd66d7!2sCoffee%20Adda!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp"
              title="Coffee Adda Budhanilkantha Exact Google Maps Pin"
            ></iframe>
            {/* Map Overlay Floating Tag */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-neutral-200 text-xs font-semibold text-brand-forest flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-ping"></span>
              <span>Coffee Adda • Budhanilkantha</span>
            </div>
          </div>
        </div>

        {/* Getting Here & Parking Tips */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-3xl border border-neutral-200 shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-sage text-brand-forest flex items-center justify-center shrink-0">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-neutral-900 text-base mb-1">Easy Parking</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Ample two-wheeler and four-wheeler parking spaces available right in front of the café entrance along the road.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
