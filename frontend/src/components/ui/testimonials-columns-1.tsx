import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquarePlus, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from './dialog';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';

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

const DEFAULT_AVATARS = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&h=200&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
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

export default function TestimonialsColumnsSection({
  className,
  hideHeader = false,
}: {
  className?: string;
  hideHeader?: boolean;
}) {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(COFFEE_ADDA_TESTIMONIALS);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [reviewText, setReviewText] = useState('');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Distribute items into 3 columns dynamically
  const firstColumn: TestimonialItem[] = [];
  const secondColumn: TestimonialItem[] = [];
  const thirdColumn: TestimonialItem[] = [];

  testimonials.forEach((item, index) => {
    if (index % 3 === 0) firstColumn.push(item);
    else if (index % 3 === 1) secondColumn.push(item);
    else thirdColumn.push(item);
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !reviewText.trim()) return;

    // Pick an avatar image
    const randomAvatar = DEFAULT_AVATARS[Math.floor(Math.random() * DEFAULT_AVATARS.length)];

    const newReview: TestimonialItem = {
      id: `review-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Guest',
      rating,
      text: reviewText.trim(),
      image: randomAvatar,
    };

    // Prepend to testimonials so it immediately joins the live review stream!
    setTestimonials((prev) => [newReview, ...prev]);

    // Optional background sync with Django backend API if reachable
    fetch(`${import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'}/reviews/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        author: name.trim(),
        role: role.trim() || 'Guest',
        rating,
        quote: reviewText.trim(),
        avatar_bg: 'bg-brand-sage text-brand-forest',
      }),
    }).catch(() => {
      // Ignore network errors in standalone mode
    });

    // Reset form and close dialog
    setName('');
    setRole('');
    setRating(5);
    setReviewText('');
    setIsDialogOpen(false);

    // Show celebratory feedback
    setSuccessToast(`Thank you, ${newReview.name}! Your review has been added to our guest wall.`);
    setTimeout(() => {
      setSuccessToast(null);
    }, 6000);
  };

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
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            <span className="block text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-2">
              Customer Stories
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-forest tracking-tight">
              What Our Guests Say
            </h2>
            <p className="text-neutral-600 mt-3 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              From the first sip to the last bite, our guests make Coffee Adda special. Here&apos;s what they have to say.
            </p>
          </motion.div>
        )}

        {/* Animated Three-Column Infinite Vertical Scrolling Carousel */}
        <div className="relative flex justify-center gap-6 max-h-[680px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
          {/* Column 1 (Visible on all screens) */}
          <TestimonialsColumn testimonials={firstColumn} duration={16} />

          {/* Column 2 (Visible on tablet & desktop) */}
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:flex"
            duration={20}
          />

          {/* Column 3 (Visible on desktop) */}
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:flex"
            duration={18}
          />
        </div>

        {/* BELOW OF REVIEW: Add Review Callout & Dialog Trigger */}
        <div className="mt-12 text-center flex flex-col items-center justify-center gap-3">
          {successToast && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold shadow-sm mb-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successToast}</span>
            </motion.div>
          )}

          <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-neutral-200/90 shadow-md max-w-xl w-full mx-auto">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-forest">
              Enjoyed your visit to Coffee Adda?
            </h3>
            <p className="text-neutral-600 text-xs sm:text-sm mt-1 mb-5">
              Your feedback helps us brew better coffee and make our Budhanilkantha space even warmer.
            </p>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-brand-forest hover:bg-brand-dark text-white font-bold px-8 py-3.5 rounded-full text-sm shadow-md hover:shadow-glow-gold hover:-translate-y-0.5 transition-all duration-300 border border-brand-gold/40 inline-flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquarePlus className="w-4 h-4 text-brand-gold" />
                  <span>Add a Review</span>
                </Button>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[480px] bg-brand-cream border-brand-gold/30 p-6 sm:p-7 rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl font-bold text-brand-forest">
                    Share Your Experience
                  </DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm text-neutral-600">
                    We&apos;d love to hear your thoughts on our coffee, treats, or café ambiance.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmitReview} className="space-y-4 pt-2">
                  {/* Name Input */}
                  <div className="space-y-1.5 text-left">
                    <Label htmlFor="author-name" className="text-xs font-bold text-brand-forest">
                      Your Name <span className="text-rose-500">*</span>
                    </Label>
                    <Input
                      id="author-name"
                      placeholder="e.g. Aarav Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="rounded-xl border-neutral-300 focus-visible:ring-brand-forest"
                    />
                  </div>

                  {/* Role / Tag Input */}
                  <div className="space-y-1.5 text-left">
                    <Label htmlFor="author-role" className="text-xs font-bold text-brand-forest">
                      Your Role or Tag
                    </Label>
                    <Input
                      id="author-role"
                      placeholder="e.g. Regular Guest, Remote Professional, Coffee Lover"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="rounded-xl border-neutral-300 focus-visible:ring-brand-forest"
                    />
                  </div>

                  {/* Star Rating Picker */}
                  <div className="space-y-1.5 text-left">
                    <Label className="text-xs font-bold text-brand-forest">
                      Rating
                    </Label>
                    <div className="flex items-center gap-1 pt-1">
                      {[1, 2, 3, 4, 5].map((starValue) => {
                        const isFilled = (hoverRating ?? rating) >= starValue;
                        return (
                          <button
                            key={starValue}
                            type="button"
                            onClick={() => setRating(starValue)}
                            onMouseEnter={() => setHoverRating(starValue)}
                            onMouseLeave={() => setHoverRating(null)}
                            className="p-1 rounded-md transition-transform hover:scale-110 focus:outline-none cursor-pointer"
                            aria-label={`Rate ${starValue} stars`}
                          >
                            <Star
                              className={cn(
                                "w-6 h-6 transition-colors",
                                isFilled
                                  ? "fill-brand-gold text-brand-gold"
                                  : "text-neutral-300"
                              )}
                            />
                          </button>
                        );
                      })}
                      <span className="text-xs font-bold text-brand-forest ml-2">
                        {rating} / 5 Stars
                      </span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="space-y-1.5 text-left">
                    <Label htmlFor="review-text" className="text-xs font-bold text-brand-forest">
                      Your Review <span className="text-rose-500">*</span>
                    </Label>
                    <Textarea
                      id="review-text"
                      placeholder="Tell us what you liked about the coffee, taste, or atmosphere..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      required
                      className="min-h-[100px] rounded-xl border-neutral-300 focus-visible:ring-brand-forest"
                    />
                  </div>

                  {/* Footer Actions */}
                  <DialogFooter className="pt-3 gap-2">
                    <DialogClose asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="rounded-xl border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      type="submit"
                      disabled={!name.trim() || !reviewText.trim()}
                      className="rounded-xl bg-brand-forest hover:bg-brand-dark text-white font-bold"
                    >
                      Publish Review
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
}
