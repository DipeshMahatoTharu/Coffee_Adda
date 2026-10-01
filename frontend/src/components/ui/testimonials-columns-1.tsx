import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquarePlus, CheckCircle2, User, Upload, X, Camera, Utensils } from 'lucide-react';
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
import { menuItems } from '../../data/menuData';
import { saveProductReview } from '../../data/productReviewsData';

export interface TestimonialItem {
  id: string;
  text: string;
  name: string;
  role: string;
  image?: string;
  rating?: number;
  dishName?: string;
  dishPhoto?: string;
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

              {/* Optional Dish Name Badge */}
              {item.dishName && (
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-forest/10 text-brand-forest text-[11px] font-bold mt-2">
                  <Utensils className="w-3 h-3 text-brand-gold shrink-0" />
                  <span className="truncate">Ate: {item.dishName}</span>
                </div>
              )}

              {/* Optional Dish Food Photo */}
              {item.dishPhoto && (
                <div className="mt-3 rounded-xl overflow-hidden aspect-video relative border border-neutral-200/90 bg-neutral-100 shadow-2xs">
                  <img
                    src={item.dishPhoto}
                    alt={item.dishName || 'Dish at Coffee Adda'}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-1.5 left-1.5 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-md font-medium flex items-center gap-1">
                    <Camera className="w-2.5 h-2.5 text-brand-gold" />
                    <span>Food Snap</span>
                  </span>
                </div>
              )}
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-3 pt-4 mt-4 border-t border-neutral-200/70">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-brand-gold/40 shadow-xs shrink-0"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to default profile logo if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.default-profile-logo') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
              ) : null}

              {/* Default Profile Logo (Shown when no photo is provided or on load error) */}
              <div
                className={cn(
                  "default-profile-logo w-10 h-10 rounded-full bg-brand-forest/10 border border-brand-gold/40 items-center justify-center text-brand-forest shadow-xs shrink-0",
                  item.image ? "hidden" : "flex"
                )}
                title="Profile Logo"
              >
                <User className="w-5 h-5 text-brand-forest" />
              </div>

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

  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [dishName, setDishName] = useState('');
  const [dishPhotoPreview, setDishPhotoPreview] = useState<string | null>(null);

  // Distribute items into 3 columns dynamically
  const firstColumn: TestimonialItem[] = [];
  const secondColumn: TestimonialItem[] = [];
  const thirdColumn: TestimonialItem[] = [];

  testimonials.forEach((item, index) => {
    if (index % 3 === 0) firstColumn.push(item);
    else if (index % 3 === 1) secondColumn.push(item);
    else thirdColumn.push(item);
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Please choose an image under 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDishPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Please choose an image under 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setDishPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !reviewText.trim()) return;

    // If no custom photo is added, leave image undefined so default profile logo is shown
    const newReview: TestimonialItem = {
      id: `review-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Guest',
      rating,
      text: reviewText.trim(),
      image: photoPreview || undefined,
      dishName: dishName.trim() || undefined,
      dishPhoto: dishPhotoPreview || undefined,
    };

    // Prepend to testimonials so it immediately joins the live review stream!
    setTestimonials((prev) => [newReview, ...prev]);

    // If user entered a dish name or attached food photo, also sync into product community reviews!
    if (dishName.trim()) {
      const normalized = dishName.trim().toLowerCase();
      const matched = menuItems.find((item) =>
        item.name.toLowerCase().includes(normalized) ||
        normalized.includes(item.name.toLowerCase())
      );
      const targetProductId = matched ? matched.id : 'cold-iced-mocha';
      saveProductReview(targetProductId, {
        id: `user-rev-from-general-${Date.now()}`,
        authorName: name.trim(),
        authorRole: role.trim() || 'Verified Adda Guest',
        authorPhoto: photoPreview || null,
        rating,
        date: 'Just now',
        reviewText: reviewText.trim(),
        foodPhoto: dishPhotoPreview || null,
        foodPhotoCaption: `Enjoyed ${dishName.trim()} at Coffee Adda`,
        likes: 0,
        userCreated: true,
      });
    }

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
    setDishName('');
    setRating(5);
    setReviewText('');
    setPhotoPreview(null);
    setDishPhotoPreview(null);
    setIsDialogOpen(false);

    // Show celebratory feedback
    setSuccessToast(`Thank you, ${newReview.name}! Your review${dishName ? ` & ${dishName} snap` : ''} has been added to our guest wall.`);
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

                  {/* Profile Photo (Optional) */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="author-photo-upload" className="text-xs font-bold text-brand-forest">
                        Your Profile Photo <span className="text-neutral-500 font-normal">(Optional)</span>
                      </Label>
                      {photoPreview && (
                        <button
                          type="button"
                          onClick={() => setPhotoPreview(null)}
                          className="text-[11px] text-rose-600 hover:underline flex items-center gap-1 cursor-pointer font-medium"
                        >
                          <X className="w-3 h-3" />
                          Remove Photo
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs">
                      {/* Avatar Preview or Default Profile Logo */}
                      <div className="relative w-12 h-12 rounded-full border border-brand-gold/50 flex items-center justify-center overflow-hidden shrink-0 shadow-xs bg-brand-forest/10">
                        {photoPreview ? (
                          <img
                            src={photoPreview}
                            alt="Profile preview"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-brand-forest" title="Default profile logo">
                            <User className="w-6 h-6 text-brand-forest" />
                          </div>
                        )}
                      </div>

                      {/* Upload Button & Status */}
                      <div className="flex-1 min-w-0">
                        <label
                          htmlFor="author-photo-upload"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-forest/10 hover:bg-brand-forest/15 text-brand-forest text-xs font-bold transition-colors cursor-pointer border border-brand-forest/20"
                        >
                          <Upload className="w-3.5 h-3.5 text-brand-forest" />
                          <span>{photoPreview ? 'Change Photo' : 'Upload Photo'}</span>
                        </label>
                        <input
                          id="author-photo-upload"
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="hidden"
                        />
                        <p className="text-[11px] text-neutral-500 mt-1 truncate">
                          {photoPreview
                            ? 'Custom photo attached'
                            : 'If no photo is added, default profile logo will be displayed'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dish or Drink You Ate (Optional) */}
                  <div className="space-y-1.5 text-left">
                    <Label htmlFor="dish-name" className="text-xs font-bold text-brand-forest flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Dish or Drink You Ate/Had <span className="text-neutral-500 font-normal">(Optional)</span></span>
                    </Label>
                    <Input
                      id="dish-name"
                      placeholder="e.g. Iced Mocha, Cappuccino, Chicken Momo, French Fries"
                      value={dishName}
                      onChange={(e) => setDishName(e.target.value)}
                      className="rounded-xl border-neutral-300 focus-visible:ring-brand-forest"
                    />
                    {/* Quick suggestion pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Iced Mocha', 'Cappuccino', 'Doppio', 'Steam Veg Momo', 'French Fries'].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDishName(d)}
                          className="px-2 py-0.5 rounded-lg text-[10px] font-semibold bg-brand-forest/5 hover:bg-brand-forest hover:text-white text-brand-forest transition-colors border border-brand-forest/15 cursor-pointer"
                        >
                          + {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Photo of What You Ate / Food Moment (Optional) */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="dish-photo-upload" className="text-xs font-bold text-brand-forest flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-brand-forest" />
                        <span>Photo of What You Ate <span className="text-neutral-500 font-normal">(Optional)</span></span>
                      </Label>
                      {dishPhotoPreview && (
                        <button
                          type="button"
                          onClick={() => setDishPhotoPreview(null)}
                          className="text-[11px] text-rose-600 hover:underline flex items-center gap-1 cursor-pointer font-medium"
                        >
                          <X className="w-3 h-3" />
                          Remove Photo
                        </button>
                      )}
                    </div>

                    {dishPhotoPreview ? (
                      <div className="relative rounded-2xl overflow-hidden aspect-video bg-neutral-100 border border-neutral-200/90 shadow-2xs">
                        <img
                          src={dishPhotoPreview}
                          alt="Dish food moment preview"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-md font-medium">
                          Food Photo attached (Joins Dish Gallery)
                        </div>
                      </div>
                    ) : (
                      <label
                        htmlFor="dish-photo-upload"
                        className="flex items-center justify-center gap-2 p-3 rounded-2xl border-2 border-dashed border-neutral-300 hover:border-brand-forest bg-white hover:bg-brand-sage/10 transition-colors cursor-pointer text-center"
                      >
                        <Camera className="w-4 h-4 text-brand-forest" />
                        <span className="text-xs font-bold text-brand-forest">Upload Photo of What You Ate</span>
                        <input
                          id="dish-photo-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleDishPhotoChange}
                          className="hidden"
                        />
                      </label>
                    )}
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
