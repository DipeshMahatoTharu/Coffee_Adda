import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  Star,
  Upload,
  User,
  Heart,
  CheckCircle2,
  X,
  MessageSquarePlus,
  Sparkles,
  Maximize2,
  ThumbsUp,
  Image as ImageIcon,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Filter,
  Plus,
  Layers,
  Trash2
} from 'lucide-react';
import {
  getProductReviews,
  saveProductReview
} from '../data/productReviewsData';

/**
 * Resizes an image file to max dimensions and converts to JPEG Data URL
 * to ensure fast local storage and lightning-fast rendering.
 */
function compressImage(file, maxDimension = 1000, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxDimension) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          }
        } else {
          if (height > maxDimension) {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = reject;
      img.src = readerEvent.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function ProductCommunitySection({ product }) {
  const [reviews, setReviews] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'photos'
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Lightbox & Slider state
  const [lightboxReview, setLightboxReview] = useState(null);
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [touchStartX, setTouchStartX] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Form state
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [foodPhotosPreview, setFoodPhotosPreview] = useState([]);
  const [foodPhotoCaption, setFoodPhotoCaption] = useState('');
  const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load reviews on mount or when product changes
  useEffect(() => {
    if (product?.id) {
      const list = getProductReviews(product.id, product.category);
      setReviews(list);
    }
  }, [product?.id, product?.category]);

  // Toast auto-dismiss
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(''), 4500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Extract all guest reviews that contain photos for the gallery
  const galleryReviews = useMemo(() => {
    return reviews
      .filter((r) => (r.foodPhotos && r.foodPhotos.length > 0) || r.foodPhoto)
      .map((r) => {
        const photos = r.foodPhotos && r.foodPhotos.length > 0 ? r.foodPhotos : (r.foodPhoto ? [r.foodPhoto] : []);
        return {
          ...r,
          foodPhotos: photos,
          foodPhoto: photos[0],
          foodPhotoCaption: r.foodPhotoCaption || `Enjoying ${product?.name || 'Coffee Adda'}`
        };
      });
  }, [reviews, product?.name]);

  // Total count of all photos uploaded across all guest snaps
  const totalPhotosCount = useMemo(() => {
    return galleryReviews.reduce((acc, r) => acc + (r.foodPhotos?.length || 1), 0);
  }, [galleryReviews]);

  // Filtered reviews for feed
  const filteredReviews = useMemo(() => {
    if (activeFilter === 'photos') {
      return reviews.filter((r) => (r.foodPhotos && r.foodPhotos.length > 0) || r.foodPhoto);
    }
    return reviews;
  }, [reviews, activeFilter]);

  // Average rating
  const avgRating = useMemo(() => {
    if (reviews.length === 0) return 5.0;
    const sum = reviews.reduce((acc, curr) => acc + (curr.rating || 5), 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  // Open Lightbox for a specific review & photo index
  const openLightbox = (review, photoIndex = 0) => {
    setLightboxReview(review);
    setLightboxPhotoIndex(photoIndex);
    setSlideDirection(1);
  };

  const closeLightbox = () => {
    setLightboxReview(null);
    setLightboxPhotoIndex(0);
  };

  // Photos of the currently opened review in lightbox
  const currentPhotos = useMemo(() => {
    if (!lightboxReview) return [];
    if (lightboxReview.foodPhotos && lightboxReview.foodPhotos.length > 0) {
      return lightboxReview.foodPhotos;
    }
    if (lightboxReview.foodPhoto) {
      return [lightboxReview.foodPhoto];
    }
    return [];
  }, [lightboxReview]);

  // Next photo in the current review, or next review if at the end
  const handleNextPhoto = (e) => {
    if (e) e.stopPropagation();
    if (currentPhotos.length > 1) {
      setSlideDirection(1);
      setLightboxPhotoIndex((prev) => (prev + 1) % currentPhotos.length);
    } else if (galleryReviews.length > 1) {
      handleNextReview();
    }
  };

  // Previous photo in the current review, or previous review if at the start
  const handlePrevPhoto = (e) => {
    if (e) e.stopPropagation();
    if (currentPhotos.length > 1) {
      setSlideDirection(-1);
      setLightboxPhotoIndex((prev) => (prev - 1 + currentPhotos.length) % currentPhotos.length);
    } else if (galleryReviews.length > 1) {
      handlePrevReview();
    }
  };

  // Next Review in Gallery
  const handleNextReview = (e) => {
    if (e) e.stopPropagation();
    if (galleryReviews.length <= 1) return;
    const currIdx = galleryReviews.findIndex((r) => r.id === lightboxReview?.id);
    const nextIdx = (currIdx + 1) % galleryReviews.length;
    setSlideDirection(1);
    setLightboxReview(galleryReviews[nextIdx]);
    setLightboxPhotoIndex(0);
  };

  // Previous Review in Gallery
  const handlePrevReview = (e) => {
    if (e) e.stopPropagation();
    if (galleryReviews.length <= 1) return;
    const currIdx = galleryReviews.findIndex((r) => r.id === lightboxReview?.id);
    const prevIdx = (currIdx - 1 + galleryReviews.length) % galleryReviews.length;
    setSlideDirection(-1);
    setLightboxReview(galleryReviews[prevIdx]);
    setLightboxPhotoIndex(0);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxReview) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        if (currentPhotos.length > 1) {
          setSlideDirection(1);
          setLightboxPhotoIndex((prev) => (prev + 1) % currentPhotos.length);
        } else if (galleryReviews.length > 1) {
          handleNextReview();
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentPhotos.length > 1) {
          setSlideDirection(-1);
          setLightboxPhotoIndex((prev) => (prev - 1 + currentPhotos.length) % currentPhotos.length);
        } else if (galleryReviews.length > 1) {
          handlePrevReview();
        }
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxReview, currentPhotos.length, galleryReviews.length]);

  // Handle multiple food photos file selection
  const handleFoodPhotosChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    try {
      const remainingSlots = Math.max(0, 6 - foodPhotosPreview.length);
      const selectedFiles = files.slice(0, remainingSlots);
      const compressedList = await Promise.all(
        selectedFiles.map((file) => compressImage(file, 1200, 0.85))
      );
      setFoodPhotosPreview((prev) => [...prev, ...compressedList]);
    } catch (err) {
      console.error('Failed to process food images:', err);
    }
  };

  const handleRemoveFoodPhoto = (index) => {
    setFoodPhotosPreview((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle optional profile photo selection
  const handleProfilePhotoChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await compressImage(file, 400, 0.85);
      setProfilePhotoPreview(compressed);
    } catch (err) {
      console.error('Failed to process profile image:', err);
    }
  };

  // Handle Review submission
  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    setIsSubmitting(true);

    const newReview = {
      id: `user-rev-${Date.now()}`,
      authorName: authorName.trim(),
      authorRole: authorRole.trim() || 'Verified Adda Guest',
      authorPhoto: profilePhotoPreview || null, // null means default profile logo renders!
      rating: rating,
      date: 'Just now',
      reviewText: reviewText.trim(),
      foodPhotos: foodPhotosPreview,
      foodPhoto: foodPhotosPreview.length > 0 ? foodPhotosPreview[0] : null,
      foodPhotoCaption: foodPhotoCaption.trim() || `Tasting ${product.name}`,
      likes: 0,
      userCreated: true,
    };

    saveProductReview(product.id, newReview);

    // Refresh review list
    const updated = getProductReviews(product.id, product.category);
    setReviews(updated);

    // Reset form
    setAuthorName('');
    setAuthorRole('');
    setRating(5);
    setReviewText('');
    setFoodPhotosPreview([]);
    setFoodPhotoCaption('');
    setProfilePhotoPreview(null);
    setIsSubmitting(false);
    setIsModalOpen(false);

    setToastMessage('🎉 Thank you! Your food photos and review are now live in the community gallery.');
  };

  return (
    <section className="mb-14">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 right-6 z-50 bg-brand-forest text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-brand-gold/40 flex items-center gap-3 max-w-md"
          >
            <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
            <span className="text-xs sm:text-sm font-medium leading-snug">{toastMessage}</span>
            <button
              onClick={() => setToastMessage('')}
              className="text-white/70 hover:text-white ml-auto"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-neutral-200/90 relative overflow-hidden">
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-forest/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 relative z-10 border-b border-neutral-200/80 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-forest/70 bg-brand-sage/60 px-3 py-1 rounded-full">
                Community Foodie Moments
              </span>
              <span className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{avgRating}</span>
                <span className="text-neutral-400 font-normal">({reviews.length} reviews)</span>
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-forest tracking-tight">
              Guest Snaps &amp; Community Reviews
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              Real photos and genuine feedback from patrons enjoying <span className="font-bold text-neutral-800">{product.name}</span> at Coffee Adda in Budhanilkantha.
            </p>
          </div>

          {/* Action Button: Share Your Food Photo & Review */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-brand-forest hover:bg-brand-dark text-white font-bold px-5 py-3 rounded-2xl text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-300 border border-brand-gold/40 flex items-center gap-2 cursor-pointer"
            >
              <Camera className="w-4 h-4 text-brand-gold" />
              <span>Ate This? Upload Photo &amp; Review</span>
            </motion.button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 1. GUEST FOOD PHOTO GALLERY ("Photos by Patrons") */}
        {/* ======================================================== */}
        <div className="mb-10 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-forest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>Patron Food Gallery ({galleryReviews.length} {galleryReviews.length === 1 ? 'Snap' : 'Snaps'} • {totalPhotosCount} Photos)</span>
            </h3>

            <span className="text-[11px] text-neutral-400 font-medium hidden sm:inline">
              Click any photo to slide &amp; view full size
            </span>
          </div>

          {galleryReviews.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {galleryReviews.map((rev, idx) => {
                const photos = rev.foodPhotos || [rev.foodPhoto];
                const mainPhoto = photos[0];
                return (
                  <motion.div
                    key={rev.id || idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    onClick={() => openLightbox(rev, 0)}
                    className="relative group rounded-2xl overflow-hidden aspect-square bg-neutral-100 border border-neutral-200/90 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={mainPhoto}
                      alt={rev.foodPhotoCaption || `Food photo of ${product.name}`}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                    {/* Multi-photo indicator badge */}
                    {photos.length > 1 && (
                      <div className="absolute top-2.5 left-2.5 z-10 bg-black/75 backdrop-blur-xs text-brand-gold text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 border border-brand-gold/30 shadow-xs">
                        <Layers className="w-3 h-3" />
                        <span>{photos.length} Photos</span>
                      </div>
                    )}

                    {/* Expand icon on hover */}
                    <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>

                    {/* Bottom details */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <div className="flex items-center gap-1 text-amber-300 text-[10px] font-bold mb-0.5">
                        <Star className="w-3 h-3 fill-amber-300" />
                        <span>{rev.rating || 5}.0</span>
                      </div>
                      <p className="text-[11px] font-bold line-clamp-1 leading-tight text-white drop-shadow-xs">
                        {rev.authorName}
                      </p>
                      <p className="text-[10px] text-white/70 line-clamp-1">
                        {rev.foodPhotoCaption || `Enjoying ${product.name}`}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              {/* Upload CTA Card inside gallery grid */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setIsModalOpen(true)}
                className="rounded-2xl border-2 border-dashed border-brand-forest/25 hover:border-brand-forest bg-brand-cream/40 hover:bg-brand-sage/20 transition-all duration-300 aspect-square flex flex-col items-center justify-center p-3 text-center cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-full bg-brand-forest/10 group-hover:bg-brand-forest text-brand-forest group-hover:text-white flex items-center justify-center transition-colors mb-2">
                  <Camera className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-brand-forest leading-tight">
                  Add Your Photos
                </span>
                <span className="text-[10px] text-neutral-500 mt-0.5">
                  Share multiple Adda snaps
                </span>
              </motion.div>
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-brand-cream/30 border border-neutral-200/80 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-forest/10 text-brand-forest flex items-center justify-center mx-auto mb-3">
                <Camera className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-brand-forest text-sm sm:text-base">
                No guest photos uploaded yet!
              </h4>
              <p className="text-neutral-500 text-xs mt-1 mb-4 max-w-md mx-auto">
                Be the very first patron to upload photos enjoying {product.name} at Coffee Adda.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-brand-forest text-white text-xs font-bold hover:bg-brand-dark transition-all shadow-sm cursor-pointer"
              >
                Upload First Photos
              </button>
            </div>
          )}
        </div>

        {/* ======================================================== */}
        {/* 2. REVIEWS FEED & FILTERS */}
        {/* ======================================================== */}
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-t border-neutral-200/80 pt-6">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-forest">
              What Guests Say About This Dish
            </h3>

            {/* Filter Toggle */}
            <div className="flex items-center gap-1.5 bg-neutral-100 p-1 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-white text-brand-forest shadow-xs font-bold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                All Reviews ({reviews.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('photos')}
                className={`px-3 py-1 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                  activeFilter === 'photos'
                    ? 'bg-white text-brand-forest shadow-xs font-bold'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Camera className="w-3 h-3" />
                <span>With Photos ({galleryReviews.length})</span>
              </button>
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredReviews.map((rev) => {
              const photos = rev.foodPhotos && rev.foodPhotos.length > 0 ? rev.foodPhotos : (rev.foodPhoto ? [rev.foodPhoto] : []);
              return (
                <div
                  key={rev.id}
                  className="p-5 rounded-2xl bg-[#FAF8F5] border border-neutral-200/80 hover:border-brand-forest/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Review Header: User Profile Avatar / Logo */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-11 h-11 rounded-full border border-brand-gold/40 flex items-center justify-center overflow-hidden shrink-0 shadow-xs bg-brand-forest/10">
                          {rev.authorPhoto ? (
                            <img
                              src={rev.authorPhoto}
                              alt={rev.authorName}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div
                              className="w-full h-full flex flex-col items-center justify-center bg-brand-forest text-brand-gold font-bold text-xs"
                              title={`${rev.authorName} (Default Profile Logo)`}
                            >
                              <User className="w-5 h-5 text-brand-gold" />
                            </div>
                          )}
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-brand-forest text-sm leading-tight">
                              {rev.authorName}
                            </h4>
                            <span className="inline-flex items-center text-[10px] text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded-full font-medium" title="Verified Customer">
                              <ShieldCheck className="w-2.5 h-2.5 mr-0.5" />
                              Guest
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-500 font-medium">
                            {rev.authorRole || 'Budhanilkantha Patron'} • {rev.date}
                          </p>
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex items-center gap-0.5 text-brand-gold shrink-0">
                        {[...Array(5)].map((_, sIdx) => (
                          <Star
                            key={sIdx}
                            className={`w-3.5 h-3.5 ${
                              sIdx < (rev.rating || 5)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-neutral-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review Text */}
                    <p className="text-neutral-700 text-xs sm:text-sm leading-relaxed mb-3">
                      “{rev.reviewText}”
                    </p>
                  </div>

                  {/* Review Food Photos Attachment (Supports Multiple Photos & Slide) */}
                  {photos.length > 0 && (
                    <div className="mt-2 mb-3">
                      {photos.length === 1 ? (
                        <div
                          onClick={() => openLightbox(rev, 0)}
                          className="rounded-xl overflow-hidden border border-neutral-200/90 relative group cursor-pointer h-36 bg-neutral-100"
                        >
                          <img
                            src={photos[0]}
                            alt={rev.foodPhotoCaption || 'Food photo'}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors" />
                          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[11px] font-semibold drop-shadow-xs">
                            <span className="flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-full">
                              <Camera className="w-3 h-3 text-brand-gold" />
                              <span>Food Photo</span>
                            </span>
                            <span className="text-[10px] bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full">
                              Tap to expand
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-1.5">
                          <div
                            onClick={() => openLightbox(rev, 0)}
                            className="rounded-xl overflow-hidden border border-neutral-200/90 relative group cursor-pointer h-40 bg-neutral-100"
                          >
                            <img
                              src={photos[0]}
                              alt={rev.foodPhotoCaption || 'Food photo'}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute top-2 left-2 bg-black/75 backdrop-blur-xs text-brand-gold text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-brand-gold/30">
                              <Layers className="w-3 h-3" />
                              <span>{photos.length} Photos • Click to slide</span>
                            </div>
                            <div className="absolute bottom-2 right-2 text-[10px] bg-black/60 text-white backdrop-blur-xs px-2 py-0.5 rounded-full font-medium">
                              Tap to slide &amp; view all
                            </div>
                          </div>

                          {/* Miniature Thumbnail Row */}
                          <div className="flex items-center gap-1.5">
                            {photos.map((photo, pIdx) => (
                              <button
                                key={pIdx}
                                type="button"
                                onClick={() => openLightbox(rev, pIdx)}
                                className="relative h-12 flex-1 rounded-lg overflow-hidden border border-neutral-200/80 hover:border-brand-gold hover:opacity-100 opacity-80 transition-all cursor-pointer"
                              >
                                <img src={photo} alt="" className="w-full h-full object-cover" />
                                <span className="absolute bottom-0.5 right-1 text-[9px] bg-black/60 text-white font-bold px-1 rounded">
                                  {pIdx + 1}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Review Footer: Helpful Reaction */}
                  <div className="pt-2.5 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-500">
                    <span className="flex items-center gap-1 text-emerald-800 font-medium">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>Dined at Coffee Adda</span>
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.currentTarget.classList.add('text-brand-forest', 'font-bold');
                      }}
                      className="hover:text-brand-forest transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>Helpful ({rev.likes || 1})</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* 3. LIGHTBOX MODAL FOR EXPANDED FOOD PHOTO WITH SLIDER */}
      {/* ======================================================== */}
      <AnimatePresence>
        {lightboxReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-neutral-900 border border-white/15 rounded-3xl overflow-hidden max-w-4xl w-full text-white shadow-2xl relative flex flex-col md:flex-row max-h-[92vh]"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/70 hover:bg-black/95 text-white/80 hover:text-white flex items-center justify-center cursor-pointer transition-colors border border-white/15"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area with Next / Prev Slider */}
              <div
                className="md:w-3/5 bg-black flex flex-col items-center justify-center relative min-h-[320px] sm:min-h-[460px] overflow-hidden select-none group/slider"
                onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                onTouchEnd={(e) => {
                  if (touchStartX === null) return;
                  const delta = e.changedTouches[0].clientX - touchStartX;
                  if (delta > 50) handlePrevPhoto();
                  else if (delta < -50) handleNextPhoto();
                  setTouchStartX(null);
                }}
              >
                {/* Photo Counter Pill */}
                <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-gold flex items-center gap-1.5 border border-brand-gold/30 shadow-md">
                  <Camera className="w-3.5 h-3.5" />
                  <span>
                    Photo {lightboxPhotoIndex + 1} of {currentPhotos.length}
                  </span>
                  {currentPhotos.length > 1 && (
                    <span className="text-[10px] text-white/70 font-normal hidden sm:inline">
                      • Click arrows or slide
                    </span>
                  )}
                </div>

                {/* Left Arrow (Prev Photo) */}
                {(currentPhotos.length > 1 || galleryReviews.length > 1) && (
                  <button
                    type="button"
                    onClick={handlePrevPhoto}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black/95 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-xl border border-white/20 active:scale-95"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {/* Right Arrow (Next Photo) */}
                {(currentPhotos.length > 1 || galleryReviews.length > 1) && (
                  <button
                    type="button"
                    onClick={handleNextPhoto}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer shadow-xl border border-white/20 active:scale-95"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}

                {/* Main Photo with Slide Transition */}
                <div className="w-full h-full flex items-center justify-center p-3 sm:p-5">
                  <AnimatePresence mode="wait" custom={slideDirection}>
                    <motion.img
                      key={`${lightboxReview.id}-${lightboxPhotoIndex}`}
                      custom={slideDirection}
                      variants={{
                        enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
                        center: { x: 0, opacity: 1 },
                        exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      src={currentPhotos[lightboxPhotoIndex] || currentPhotos[0]}
                      alt={`${lightboxReview.authorName} photo ${lightboxPhotoIndex + 1}`}
                      className="w-full h-full max-h-[66vh] object-contain"
                    />
                  </AnimatePresence>
                </div>

                {/* Bottom Slide Indicators (Dots & Thumbnail Strip) */}
                {currentPhotos.length > 1 && (
                  <div className="absolute bottom-3 left-0 right-0 z-20 flex flex-col items-center gap-1.5 px-4 pointer-events-auto">
                    {/* Clickable Dots */}
                    <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                      {currentPhotos.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={() => {
                            setSlideDirection(dotIdx > lightboxPhotoIndex ? 1 : -1);
                            setLightboxPhotoIndex(dotIdx);
                          }}
                          className={`h-2 rounded-full transition-all cursor-pointer ${
                            dotIdx === lightboxPhotoIndex
                              ? 'w-6 bg-brand-gold'
                              : 'w-2 bg-white/40 hover:bg-white/80'
                          }`}
                          aria-label={`Slide to photo ${dotIdx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Mini Thumbnail Row */}
                    <div className="flex items-center gap-1.5 p-1 bg-black/75 backdrop-blur-md rounded-xl border border-white/15 max-w-full overflow-x-auto">
                      {currentPhotos.map((photo, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() => {
                            setSlideDirection(pIdx > lightboxPhotoIndex ? 1 : -1);
                            setLightboxPhotoIndex(pIdx);
                          }}
                          className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                            pIdx === lightboxPhotoIndex
                              ? 'border-brand-gold scale-105 shadow-md'
                              : 'border-transparent opacity-60 hover:opacity-100'
                          }`}
                          title={`Slide to photo ${pIdx + 1}`}
                        >
                          <img src={photo} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Info Sidebar */}
              <div className="md:w-2/5 p-6 flex flex-col justify-between bg-neutral-900 overflow-y-auto">
                <div>
                  {/* Dish Badge */}
                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-brand-gold bg-brand-forest/60 px-2.5 py-1 rounded-full border border-brand-gold/30">
                    {product.name}
                  </span>

                  {/* Guest Info */}
                  <div className="flex items-center gap-3 mt-4 mb-4">
                    <div className="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center overflow-hidden shrink-0 bg-brand-forest/30">
                      {lightboxReview.authorPhoto ? (
                        <img
                          src={lightboxReview.authorPhoto}
                          alt={lightboxReview.authorName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-5 h-5 text-brand-gold" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">
                        {lightboxReview.authorName}
                      </h4>
                      <p className="text-[11px] text-white/60">
                        {lightboxReview.date || 'Coffee Adda Guest'}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${
                          s < (lightboxReview.rating || 5)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-neutral-600'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-white/80 ml-1">
                      {lightboxReview.rating || 5}.0
                    </span>
                  </div>

                  {/* Caption */}
                  {lightboxReview.foodPhotoCaption && (
                    <p className="text-xs font-semibold text-brand-gold mb-2 italic">
                      “{lightboxReview.foodPhotoCaption}”
                    </p>
                  )}

                  {/* Review Text */}
                  {lightboxReview.reviewText && (
                    <p className="text-xs text-white/80 leading-relaxed">
                      {lightboxReview.reviewText}
                    </p>
                  )}
                </div>

                <div>
                  {/* Next / Prev Review Navigation in Sidebar */}
                  {galleryReviews.length > 1 && (
                    <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={handlePrevReview}
                        className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white/90 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                        <span>Prev Snap</span>
                      </button>
                      <span className="text-[11px] text-white/50 font-medium">
                        {galleryReviews.findIndex((r) => r.id === lightboxReview.id) + 1} of {galleryReviews.length} Snaps
                      </span>
                      <button
                        type="button"
                        onClick={handleNextReview}
                        className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white/90 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>Next Snap</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}

                  <div className="pt-3 border-t border-white/10 mt-3 text-[11px] text-white/50 flex items-center justify-between">
                    <span>📍 Coffee Adda, Budhanilkantha</span>
                    <span>Verified Patron Snap</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* 4. MODAL: UPLOAD MULTIPLE FOOD PHOTOS & SUBMIT REVIEW */}
      {/* ======================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              className="bg-brand-cream border border-brand-gold/30 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative my-8"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-200/80 hover:bg-neutral-300 text-neutral-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-4">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-forest/80 bg-brand-sage/60 px-2.5 py-0.5 rounded-full">
                  Adda Guest Story
                </span>
                <h3 className="font-serif text-2xl font-extrabold text-brand-forest mt-1.5">
                  Share Your Experience
                </h3>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Upload photos enjoying <span className="font-bold text-neutral-800">{product.name}</span>. Add multiple photos so others can slide through them!
                </p>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                
                {/* 1. Interactive Star Rating */}
                <div>
                  <label className="block text-xs font-bold text-brand-forest mb-1.5">
                    Your Rating <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-neutral-300 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= (hoverRating || rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-neutral-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-neutral-700 ml-2">
                      {rating === 5 ? 'Exceptional! 🌟' : rating === 4 ? 'Very Good! ✨' : `${rating} Stars`}
                    </span>
                  </div>
                </div>

                {/* 2. Upload Multiple Food Photos */}
                <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-brand-forest flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-brand-forest" />
                      <span>Photos of You Eating or Enjoying This Item</span>
                    </label>
                    {foodPhotosPreview.length > 0 && (
                      <span className="text-[11px] font-bold text-neutral-500">
                        {foodPhotosPreview.length} / 6 photos
                      </span>
                    )}
                  </div>

                  {foodPhotosPreview.length > 0 ? (
                    <div>
                      {/* Grid of uploaded photo thumbnails */}
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        {foodPhotosPreview.map((photo, pIdx) => (
                          <div key={pIdx} className="relative rounded-xl overflow-hidden aspect-square bg-neutral-100 border border-neutral-200/80 group">
                            <img src={photo} alt={`Snap preview ${pIdx + 1}`} className="w-full h-full object-cover" />
                            {pIdx === 0 && (
                              <span className="absolute bottom-1 left-1 bg-brand-forest text-brand-gold text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow-xs">
                                Cover
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => handleRemoveFoodPhoto(pIdx)}
                              className="absolute top-1 right-1 w-5 h-5 rounded-full bg-black/75 hover:bg-rose-600 text-white flex items-center justify-center transition-colors cursor-pointer"
                              title="Remove photo"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}

                        {/* Add more button */}
                        {foodPhotosPreview.length < 6 && (
                          <label className="border-2 border-dashed border-neutral-300 hover:border-brand-forest rounded-xl aspect-square flex flex-col items-center justify-center text-center cursor-pointer bg-neutral-50 hover:bg-brand-sage/10 transition-colors">
                            <Plus className="w-5 h-5 text-brand-forest/70" />
                            <span className="text-[10px] font-bold text-brand-forest mt-0.5">Add More</span>
                            <input
                              type="file"
                              multiple
                              accept="image/*"
                              onChange={handleFoodPhotosChange}
                              className="hidden"
                            />
                          </label>
                        )}
                      </div>
                      <p className="text-[10px] text-neutral-500 mb-2">
                        💡 Patrons can slide through your photos in the community gallery!
                      </p>
                    </div>
                  ) : (
                    <label className="border-2 border-dashed border-neutral-300 hover:border-brand-forest rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer bg-neutral-50/50 hover:bg-brand-sage/10 transition-colors">
                      <Upload className="w-6 h-6 text-brand-forest/60 mb-1" />
                      <span className="text-xs font-bold text-brand-forest">
                        Click or tap to upload food snaps (select multiple)
                      </span>
                      <span className="text-[10px] text-neutral-500 mt-0.5">
                        JPG, PNG, WEBP from your phone camera or gallery • Up to 6 photos
                      </span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFoodPhotosChange}
                        className="hidden"
                      />
                    </label>
                  )}

                  {/* Food Photo Caption */}
                  {foodPhotosPreview.length > 0 && (
                    <input
                      type="text"
                      placeholder="Photo caption (e.g. Tasting cappuccino in the sunny courtyard!)"
                      value={foodPhotoCaption}
                      onChange={(e) => setFoodPhotoCaption(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-1 focus:ring-brand-forest mt-1"
                    />
                  )}
                </div>

                {/* 3. Review Text */}
                <div>
                  <label className="block text-xs font-bold text-brand-forest mb-1.5">
                    Your Review <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell other patrons how it tasted, portion size, flavor, or coffee aroma..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    required
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-forest resize-none"
                  />
                </div>

                {/* 4. Guest Details & OPTIONAL Profile Photo with Fallback Logo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-brand-forest mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Suman Shrestha"
                      value={authorName}
                      onChange={(e) => setAuthorName(e.target.value)}
                      required
                      className="w-full text-xs px-3 py-2 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-1 focus:ring-brand-forest"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-forest mb-1">
                      Your Role or Tag
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Regular Guest, Coffee Lover"
                      value={authorRole}
                      onChange={(e) => setAuthorRole(e.target.value)}
                      className="w-full text-xs px-3 py-2 rounded-xl border border-neutral-300 bg-white focus:outline-none focus:ring-1 focus:ring-brand-forest"
                    />
                  </div>
                </div>

                {/* 5. Profile Photo (Optional - with Default Profile Logo fallback!) */}
                <div className="p-3 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-brand-forest">
                      Your Profile Photo <span className="text-neutral-400 font-normal">(Optional)</span>
                    </label>
                    {profilePhotoPreview && (
                      <button
                        type="button"
                        onClick={() => setProfilePhotoPreview(null)}
                        className="text-[10px] text-rose-600 hover:underline flex items-center gap-0.5 font-medium cursor-pointer"
                      >
                        <X className="w-2.5 h-2.5" />
                        Remove Photo
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Live Avatar Preview or Profile Logo */}
                    <div className="w-11 h-11 rounded-full border border-brand-gold/50 flex items-center justify-center overflow-hidden shrink-0 bg-brand-forest/10 shadow-2xs">
                      {profilePhotoPreview ? (
                        <img
                          src={profilePhotoPreview}
                          alt="Profile Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        // Explicit fallback profile logo when no photo is provided
                        <div
                          className="w-full h-full flex flex-col items-center justify-center bg-brand-forest text-brand-gold font-bold text-xs"
                          title="Default Profile Logo"
                        >
                          <User className="w-5 h-5 text-brand-gold" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-brand-forest/10 hover:bg-brand-forest/15 text-brand-forest text-xs font-bold transition-colors cursor-pointer border border-brand-forest/20">
                        <Upload className="w-3 h-3" />
                        <span>{profilePhotoPreview ? 'Change Photo' : 'Upload Profile Photo'}</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleProfilePhotoChange}
                          className="hidden"
                        />
                      </label>
                      <p className="text-[10px] text-neutral-500 mt-1 leading-tight">
                        {profilePhotoPreview
                          ? 'Custom photo selected.'
                          : 'Optional: If not added, your profile logo will automatically be used.'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-neutral-600 hover:text-neutral-900 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-brand-forest hover:bg-brand-dark text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer border border-brand-gold/40"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                    <span>{isSubmitting ? 'Posting...' : 'Post Food Moment & Review'}</span>
                  </motion.button>
                </div>

              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
