import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    title: 'Artisan Latte Art',
    caption: 'Every cup is crafted with precision. Himalayan shade-grown Arabica extracted fresh daily. ☕✨',
    likes: '142',
    comments: '18',
    category: 'Coffee',
  },
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj8YXdAzpC2Ra10WpY_ctWF_IOU9EZ_tjGtEh0v2cDAsLQnAVIE0T-pU7yzhZRxlIYhsPOzqBkuAb78zrJOY6pOqwZQ5IARmXfNuTL8My1p6g75dq8m0TeBRdiEDx7-FoJQVSewUp6UDdakCYF_PWC1B8mN0fMgY5F4YKts-D1ffNr2pLtbcs1dcrgweKASvu9Lgx-yzPe7abmUW0bG4ZD6yTl2CUfbdh4FJRMSauiuUS7T2j8uhI_',
    title: 'The Adda Sanctuary',
    caption: 'Warm wood, lush green plants, and endless conversations. The spot where great minds gather. 🌿🤍',
    likes: '238',
    comments: '29',
    category: 'Vibes',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=800&q=80',
    title: 'Himalayan Mo:Mo & Laphing',
    caption: 'Craving something spicy with your iced brew? Our authentic Tibetan Laphing & juicy Mo:Mo hit the spot! 🔥🥟',
    likes: '195',
    comments: '34',
    category: 'Khaja',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
    title: 'Espresso Alchemy',
    caption: 'Rich crema, velvet texture, and chocolatey undertones. Poured by passionate local baristas. ☕',
    likes: '174',
    comments: '12',
    category: 'Barista',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    title: 'Golden Croissants & Pastries',
    caption: 'Crisp, flaky, and baked to golden perfection. Best paired with a warm Cappuccino or Flat White. 🥐',
    likes: '210',
    comments: '21',
    category: 'Bakery',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    title: 'Work & Study Adda',
    caption: 'Quiet corners, fast fiber WiFi, and artisan caffeine fuel for developers, writers, and creators. 💻☕',
    likes: '189',
    comments: '16',
    category: 'Community',
  },
];

export default function InstagramFeed() {
  return (
    <section className="py-16 sm:py-20 bg-brand-cream border-t border-neutral-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Profile Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-200/80 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left: Avatar + Profile info */}
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              {/* Profile Avatar with Instagram Gradient Ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 shadow-md">
                <div className="p-0.5 bg-white rounded-full">
                  <img
                    src="/coffee-adda-instagram-avatar.jpg"
                    alt="Coffee Adda Official Instagram Profile"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails
                      e.currentTarget.src = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=300&q=80";
                    }}
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-xs border-2 border-white">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <h3 className="font-serif text-2xl font-bold text-brand-forest">COFFEADDA</h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-forest/10 text-brand-forest border border-brand-forest/20">
                    Official Page
                  </span>
                </div>
                <p className="text-sm font-semibold text-pink-600 mt-0.5">@coffee_adda9</p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-md">
                  &ldquo;The Spot where great mind gathers&rdquo; • Artisan coffee, Tibetan laphing &amp; cozy community vibes in Budhanilkantha.
                </p>
              </div>
            </div>

            {/* Right: CTA Follow Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href="https://www.instagram.com/coffee_adda9/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 w-full sm:w-auto rounded-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 hover:from-purple-700 hover:via-pink-600 hover:to-amber-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow @coffee_adda9</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>

          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500/20" />
            <span>Community &amp; Moments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-brand-forest tracking-tight">
            Follow Our Story On Instagram
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2">
            Catch daily cafe highlights, secret menu drops, and the friendly faces of Coffee Adda.
          </p>
        </div>

        {/* Instagram Visual Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/coffee_adda9/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-square rounded-2xl overflow-hidden shadow-sm bg-neutral-100 border border-neutral-200 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Category Pill */}
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-white">
                <div className="flex justify-end">
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <Instagram className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold line-clamp-1">{post.title}</p>
                  <p className="text-[11px] text-white/80 line-clamp-2 mt-0.5 leading-snug">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-3 mt-2 text-[11px] text-white/90 font-medium">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3 text-pink-400 fill-pink-400" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3 text-white/80" />
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Tagline */}
        <div className="text-center mt-8">
          <p className="text-xs sm:text-sm text-neutral-500">
            Tag us in your photos &amp; reels with <span className="font-semibold text-brand-forest">#CoffeeAdda</span> or <span className="font-semibold text-brand-forest">#CoffeeAdda9</span> to be featured on our feed!
          </p>
        </div>

      </div>
    </section>
  );
}
