import React from 'react';
import { MapPin, Clock, Coffee, Check, Star, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-16 sm:py-24 bg-white relative" data-purpose="store-location" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
            Come Say Hello
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-forest">
            Visit Coffee Adda
          </h2>
          <p className="text-neutral-600 mt-2 text-sm sm:text-base">
            Conveniently located along Budhanilkantha with easy parking and comfortable seating.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Details Card */}
          <div className="lg:col-span-5 bg-brand-cream rounded-3xl p-8 sm:p-10 border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              {/* Cafe Tag & Rating Info */}
              <div className="pb-6 border-b border-neutral-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-bold text-brand-forest">Coffee Adda</h3>
                  <span className="text-xs font-bold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                    Open Daily
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mt-1">Cafe • Rs 1 - 500 per person</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-neutral-800">4.8</span>
                  <span className="text-xs text-neutral-500">(36 Google reviews)</span>
                </div>
              </div>

              {/* Address & Coordinates */}
              <div className="space-y-4 text-sm text-neutral-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-forest mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-brand-forest font-semibold">Address</strong>
                    <span>Q9F5+8XJ, Budhanilkantha, Bagmati Province 44600, Nepal</span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-forest mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-brand-forest font-semibold">Opening Hours</strong>
                    <span className="text-neutral-600">Monday - Sunday: 7:00 AM - 9:00 PM</span>
                    <span className="block text-xs text-emerald-700 mt-0.5 font-medium">
                      No holiday closures
                    </span>
                  </div>
                </div>

                {/* Phone Inquiries */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-forest mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-brand-forest font-semibold">Phone Inquiries</strong>
                    <a href="tel:+9779763531091" className="text-neutral-700 hover:text-brand-forest font-semibold hover:underline transition-colors">
                      +977 9763531091
                    </a>
                  </div>
                </div>

                {/* Service Badges */}
                <div className="flex items-start gap-3">
                  <Coffee className="w-5 h-5 text-brand-forest mt-0.5 shrink-0" />
                  <div>
                    <strong className="block text-brand-forest font-semibold">Service Options</strong>
                    <div className="flex gap-2 mt-1 flex-wrap">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-brand-sage text-brand-forest rounded inline-flex items-center gap-1">
                        <Check className="w-3 h-3 text-brand-forest" />
                        <span>Takeaway</span>
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 bg-brand-sage text-brand-forest rounded inline-flex items-center gap-1">
                        <Check className="w-3 h-3 text-brand-forest" />
                        <span>Outdoor Seating</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="pt-8">
              <a
                className="w-full py-4 px-6 rounded-2xl bg-brand-forest hover:bg-brand-dark text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow-md hover:shadow-glow-gold transition-all duration-300 cursor-pointer"
                href="https://maps.app.goo.gl/zE65oj8ArApymBxL7"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right: Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-neutral-200 relative min-h-[380px] bg-neutral-100">
            <iframe
              allowFullScreen=""
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.6865239103623!2d85.35730877625515!3d27.773326176144883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1d0b87082ab9%3A0xedeaf24e0dcd66d7!2sCoffee%20Adda!5e0!3m2!1sen!2snp!4v1710000000000!5m2!1sen!2snp"
              title="Coffee Adda Budhanilkantha Map Location"
            ></iframe>
            {/* Map Overlay Floating Tag */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-neutral-200 text-xs font-semibold text-brand-forest flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-ping"></span>
              <span>Coffee Adda • Budhanilkantha</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
