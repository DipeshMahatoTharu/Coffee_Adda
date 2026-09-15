import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface TestimonialItem {
  id: string;
  text: string;
  name: string;
  role: string;
  image: string;
  rating?: number;
}

export const COFFEE_ADDA_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'review-1',
    text: 'The cappuccino was perfectly balanced, and the atmosphere made it such a relaxing place to spend the afternoon. Definitely one of my favorite coffee spots.',
    name: 'Aarav Sharma',
    role: 'Coffee Enthusiast',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
  {
    id: 'review-2',
    text: 'Coffee Adda has such a warm atmosphere. I tried their signature iced coffee and the butter croissant, and both were absolutely delicious.',
    name: 'Anisha Thapa',
    role: 'Regular Guest',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
  {
    id: 'review-3',
    text: 'The espresso is rich, smooth, and clearly made with care. The staff are friendly and the service is excellent.',
    name: 'Rohan Shrestha',
    role: 'Local Customer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
  {
    id: 'review-4',
    text: "A beautiful place for coffee and conversation. Their latte is one of the best I've had, and the presentation is amazing.",
    name: 'Priya Gurung',
    role: 'Coffee Lover',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
  {
    id: 'review-5',
    text: 'I love coming here to work. The coffee is consistently good, the environment is comfortable, and the team is always welcoming.',
    name: 'Suman Karki',
    role: 'Remote Professional',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
  {
    id: 'review-6',
    text: 'The pastries are fresh, the coffee is excellent, and everything feels thoughtfully prepared. Coffee Adda has become my go-to café.',
    name: 'Nisha Rai',
    role: 'Regular Guest',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
  {
    id: 'review-7',
    text: 'Their cold brew is fantastic. Smooth, refreshing, and not overly bitter. The café itself has a really welcoming vibe.',
    name: 'Bibek Adhikari',
    role: 'Cold Brew Fan',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
  {
    id: 'review-8',
    text: 'The combination of great coffee, fresh bakery items, and a peaceful atmosphere makes Coffee Adda a wonderful place to visit.',
    name: 'Sanjay Basnet',
    role: 'Coffee Enthusiast',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
  {
    id: 'review-9',
    text: 'From the friendly service to the quality of the drinks, every visit has been a great experience. I always recommend Coffee Adda to my friends.',
    name: 'Maya Tamang',
    role: 'Happy Guest',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
];

interface TestimonialsColumnProps {
  testimonials: TestimonialItem[];
  duration?: number;
  className?: string;
}

export function TestimonialsColumn(props: TestimonialsColumnProps) {
  return (
    <div className={cn("flex flex-col gap-6", props.className)}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6"
      >
        {[...props.testimonials, ...props.testimonials].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="w-full max-w-[320px] rounded-[24px] bg-[#FAF8F5] p-6 shadow-md border border-neutral-200/80 hover:border-brand-forest/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Subtle Gold Stars */}
              <div className="flex items-center gap-1 text-brand-gold mb-3">
                {[...Array(item.rating || 5)].map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className="w-3.5 h-3.5 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              {/* Testimonial Quote */}
              <p className="font-sans text-sm sm:text-[14px] leading-relaxed text-neutral-700 italic">
                “{item.text}”
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-3 pt-4 mt-4 border-t border-neutral-200/70">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover border border-brand-gold/40 shadow-xs shrink-0"
                loading="lazy"
              />
              <div className="truncate">
                <h4 className="font-serif text-sm font-bold text-brand-forest truncate">
                  {item.name}
                </h4>
                <p className="text-xs text-neutral-500 truncate">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsColumnsSection({ className }: { className?: string }) {
  const firstColumn = COFFEE_ADDA_TESTIMONIALS.slice(0, 3);
  const secondColumn = COFFEE_ADDA_TESTIMONIALS.slice(3, 6);
  const thirdColumn = COFFEE_ADDA_TESTIMONIALS.slice(6, 9);

  return (
    <section
      className={cn("py-20 sm:py-28 relative overflow-hidden bg-brand-sage/35 border-t border-emerald-950/5", className)}
      data-purpose="testimonials"
      id="reviews"
    >
      {/* Soft Ambient Background Aura */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[42rem] h-[20rem] bg-brand-sage/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-18"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-brand-forest bg-white px-3.5 py-1 rounded-full mb-3 border border-brand-forest/15 shadow-xs">
            CUSTOMER STORIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-forest tracking-tight">
            What Our Guests Say
          </h2>
          <p className="text-neutral-600 mt-3 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            From the first sip to the last bite, our guests make Coffee Adda special. Here&apos;s what they have to say.
          </p>
        </motion.div>

        {/* Animated Three-Column Infinite Vertical Scrolling Carousel */}
        <div className="relative flex justify-center gap-6 max-h-[740px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          {/* Column 1 (Visible on all screens) */}
          <TestimonialsColumn testimonials={firstColumn} duration={15} />

          {/* Column 2 (Visible on tablet & desktop) */}
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:flex"
            duration={19}
          />

          {/* Column 3 (Visible on desktop) */}
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:flex"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
