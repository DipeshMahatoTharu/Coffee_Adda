import React from 'react';
import { ShieldCheck, ArrowLeft, Lock, Eye, FileText, Mail, MapPin } from 'lucide-react';

export default function PrivacyPolicyPage({ onNavigate }) {
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

        {/* Header Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-forest/10 border border-brand-forest/20 text-brand-forest text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-brand-forest" />
            <span>Official Policy</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-brand-forest tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Coffee Adda (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the café website located at Budhanilkantha, Bagmati Province, Nepal. This Privacy Policy outlines our standards for collecting, using, and safeguarding guest information when you visit our website or interact with our digital guest services.
          </p>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-brand-forest/10 shadow-sm space-y-8 text-neutral-700 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-brand-forest flex items-center gap-2">
              <Eye className="w-5 h-5 text-brand-gold" />
              1. Information We Collect
            </h2>
            <p className="text-sm sm:text-base">
              We collect information that you voluntarily provide to us when reserving a table, submitting guest reviews and community photos, contacting our staff, or subscribing to café news:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-neutral-600">
              <li><strong>Contact Information:</strong> Name, phone number, and email address submitted during table reservations or customer inquiries.</li>
              <li><strong>Guest Feedback &amp; Photos:</strong> Review text, star ratings, and beverage or food photos voluntarily uploaded to our Community Adda section.</li>
              <li><strong>Technical Data:</strong> Standard browser type, device details, and anonymous page usage data collected solely to ensure smooth website performance across mobile and desktop devices.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-neutral-100 pt-6">
            <h2 className="text-xl font-serif font-bold text-brand-forest flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-gold" />
              2. How We Use Your Information
            </h2>
            <p className="text-sm sm:text-base">
              Coffee Adda uses collected guest data strictly for genuine hospitality purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-neutral-600">
              <li>Confirming table reservations and responding directly to catering or event inquiries.</li>
              <li>Displaying verified community reviews and customer food photography on our interactive menu and community wall.</li>
              <li>Improving our coffee brewing consistency, kitchen menu items, and seating comfort based on direct guest feedback.</li>
              <li>Preventing spam and ensuring authentic guest interactions across our digital channels.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-neutral-100 pt-6">
            <h2 className="text-xl font-serif font-bold text-brand-forest flex items-center gap-2">
              <Lock className="w-5 h-5 text-brand-gold" />
              3. Data Protection and Nepal Privacy Compliance
            </h2>
            <p className="text-sm sm:text-base">
              We respect your right to privacy under the Individual Privacy Act, 2075 (2018) of Nepal. We do not sell, rent, trade, or monetize guest personal data to third parties or marketing networks. Information is retained only as long as necessary to fulfill guest services or comply with applicable legal obligations.
            </p>
          </section>

          <section className="space-y-3 border-t border-neutral-100 pt-6">
            <h2 className="text-xl font-serif font-bold text-brand-forest">
              4. Community Photo Submissions &amp; Rights
            </h2>
            <p className="text-sm sm:text-base">
              When you submit food and beverage photos to our Community Adda gallery, you grant Coffee Adda a non-exclusive license to display the photo on our website. You may request the modification or removal of any photo or review submitted under your name at any time by contacting us directly.
            </p>
          </section>

          <section className="space-y-3 border-t border-neutral-100 pt-6">
            <h2 className="text-xl font-serif font-bold text-brand-forest">
              5. Cookies and Third-Party Services
            </h2>
            <p className="text-sm sm:text-base">
              Our website uses minimal local storage to remember your dietary filters (Veg/Non-Veg) and recently viewed menu items. We integrate standard Google Maps embed frames to provide directions to our Budhanilkantha location. Third-party services operate under their respective independent privacy terms.
            </p>
          </section>

          <section className="space-y-4 border-t border-neutral-100 pt-6">
            <h2 className="text-xl font-serif font-bold text-brand-forest flex items-center gap-2">
              <Mail className="w-5 h-5 text-brand-gold" />
              6. Contact Our Team
            </h2>
            <p className="text-sm sm:text-base">
              If you have any questions regarding this Privacy Policy or wish to request data updates, please reach out to us:
            </p>
            <div className="bg-brand-cream/60 rounded-2xl p-5 space-y-2 border border-brand-forest/10 text-sm">
              <p className="font-bold text-brand-forest">Coffee Adda (The Spot Where Great Minds Gather)</p>
              <p className="flex items-center gap-2 text-neutral-600">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Q9F5+8XJ, Budhanilkantha, Bagmati Province 44600, Nepal</span>
              </p>
              <p className="text-neutral-600">
                Operating Hours: Sunday - Saturday, 7:00 AM - 9:00 PM NPT
              </p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
