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
  Filter
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
  const [lightboxPhoto, setLightboxPhoto] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Form state
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [foodPhotoPreview, setFoodPhotoPreview] = useState(null);
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

  // Extract all guest food photos for the gallery
  const galleryPhotos = useMemo(() => {
    return reviews
      .filter((r) => r.foodPhoto)
      .map((r) => ({
        id: r.id,
        photo: r.foodPhoto,
        caption: r.foodPhotoCaption || `Enjoying ${product.name}`,
        authorName: r.authorName,
        authorPhoto: r.authorPhoto,
        rating: r.rating,
        date: r.date,
        reviewText: r.reviewText,
      }));
  }, [reviews, product.name]);

  // Filtered reviews
  const filteredReviews = useMemo(() => {
    if (activeFilter === 'photos') {
      return reviews.filter((r) => r.foodPhoto);
    }
    return reviews;
  }, [reviews, activeFilter]);

  // Average rating
  const avgRating = useMemo(() => {
    if (reviews.length === 0) return 5.0;
    const sum = reviews.reduce((acc, curr) => acc + (curr.rating || 5), 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  // Handle food photo file selection
  const handleFoodPhotoChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressed = await compressImage(file, 1200, 0.85);
      setFoodPhotoPreview(compressed);
    } catch (err) {
      console.error('Failed to process food image:', err);
    }
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
      foodPhoto: foodPhotoPreview || null,
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
    setFoodPhotoPreview(null);
    setFoodPhotoCaption('');
    setProfilePhotoPreview(null);
    setIsSubmitting(false);
    setIsModalOpen(false);

    setToastMessage('🎉 Thank you! Your food photo and review are now live in the community gallery.');
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
              <span>Patron Food Gallery ({galleryPhotos.length} {galleryPhotos.length === 1 ? 'Snap' : 'Snaps'})</span>
            </h3>

            <span className="text-[11px] text-neutral-400 font-medium hidden sm:inline">
              Click any photo to view full size &amp; guest review
            </span>
          </div>

          {galleryPhotos.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {galleryPhotos.map((item, idx) => (
                <motion.div
                  key={item.id || idx}
                  whileHover={{ y: -4, scale: 1.02 }}
                  onClick={() => setLightboxPhoto(item)}
                  className="relative group rounded-2xl overflow-hidden aspect-square bg-neutral-100 border border-neutral-200/90 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <img
                    src={item.photo}
                    alt={item.caption || `Food photo of ${product.name}`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Expand icon on hover */}
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom details */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <div className="flex items-center gap-1 text-amber-300 text-[10px] font-bold mb-0.5">
                      <Star className="w-3 h-3 fill-amber-300" />
                      <span>{item.rating || 5}.0</span>
                    </div>
                    <p className="text-[11px] font-bold line-clamp-1 leading-tight text-white drop-shadow-xs">
                      {item.authorName}
                    </p>
                    <p className="text-[10px] text-white/70 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}

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
                  Add Your Photo
                </span>
                <span className="text-[10px] text-neutral-500 mt-0.5">
                  Share your Adda moment
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
                Be the very first patron to upload a snap enjoying {product.name} at Coffee Adda.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-brand-forest text-white text-xs font-bold hover:bg-brand-dark transition-all shadow-sm cursor-pointer"
              >
                Upload First Photo
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
                <span>With Photos ({galleryPhotos.length})</span>
              </button>
            </div>
          </div>

          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-[#FAF8F5] border border-neutral-200/80 hover:border-brand-forest/30 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Review Header: User Profile Avatar / Logo */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      {/* Profile Photo OR Default Profile Logo if optional is not added */}
                      <div className="relative w-11 h-11 rounded-full border border-brand-gold/40 flex items-center justify-center overflow-hidden shrink-0 shadow-xs bg-brand-forest/10">
                        {rev.authorPhoto ? (
                          <img
                            src={rev.authorPhoto}
                            alt={rev.authorName}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          // Default Profile Logo when no photo is uploaded (as requested!)
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

                {/* Review Food Photo Attachment (if present) */}
                {rev.foodPhoto && (
                  <div
                    onClick={() => setLightboxPhoto({
                      photo: rev.foodPhoto,
                      caption: rev.foodPhotoCaption || `Enjoying ${product.name}`,
                      authorName: rev.authorName,
                      authorPhoto: rev.authorPhoto,
                      rating: rev.rating,
                      date: rev.date,
                      reviewText: rev.reviewText,
                    })}
                    className="mt-2 mb-3 rounded-xl overflow-hidden border border-neutral-200/90 relative group cursor-pointer h-36 bg-neutral-100"
                  >
                    <img
                      src={rev.foodPhoto}
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
            ))}
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* 3. LIGHTBOX MODAL FOR EXPANDED FOOD PHOTO */}
      {/* ======================================================== */}
      <AnimatePresence>
        {lightboxPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-neutral-900 border border-white/15 rounded-3xl overflow-hidden max-w-3xl w-full text-white shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxPhoto(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white/80 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area */}
              <div className="md:w-3/5 bg-black flex items-center justify-center overflow-hidden min-h-[300px]">
                <img
                  src={lightboxPhoto.photo}
                  alt={lightboxPhoto.caption}
                  className="w-full h-full max-h-[70vh] object-contain"
                />
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
                      {lightboxPhoto.authorPhoto ? (
                        <img
                          src={lightboxPhoto.authorPhoto}
                          alt={lightboxPhoto.authorName}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-5 h-5 text-brand-gold" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">
                        {lightboxPhoto.authorName}
                      </h4>
                      <p className="text-[11px] text-white/60">
                        {lightboxPhoto.date || 'Coffee Adda Guest'}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${
                          s < (lightboxPhoto.rating || 5)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-neutral-600'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-white/80 ml-1">
                      {lightboxPhoto.rating || 5}.0
                    </span>
                  </div>

                  {/* Caption */}
                  {lightboxPhoto.caption && (
                    <p className="text-xs font-semibold text-brand-gold mb-2 italic">
                      “{lightboxPhoto.caption}”
                    </p>
                  )}

                  {/* Review Text */}
                  {lightboxPhoto.reviewText && (
                    <p className="text-xs text-white/80 leading-relaxed">
                      {lightboxPhoto.reviewText}
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10 mt-6 text-[11px] text-white/50 flex items-center justify-between">
                  <span>📍 Coffee Adda, Budhanilkantha</span>
                  <span>Verified Patron Snap</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* 4. MODAL: UPLOAD FOOD PHOTO & SUBMIT REVIEW */}
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
                  Upload a photo eating <span className="font-bold text-neutral-800">{product.name}</span> and share your thoughts with great minds gathering at Adda.
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

                {/* 2. Upload Dish/Eating Photo (The Core Feature) */}
                <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-brand-forest flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-brand-forest" />
                      <span>Photo of You Eating or Enjoying This Item</span>
                    </label>
                    {foodPhotoPreview && (
                      <button
                        type="button"
                        onClick={() => setFoodPhotoPreview(null)}
                        className="text-[11px] text-rose-600 hover:underline flex items-center gap-0.5 font-medium cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                        Remove
                      </button>
                    )}
                  </div>

                  {foodPhotoPreview ? (
                    <div className="relative rounded-xl overflow-hidden h-40 bg-neutral-100 border border-neutral-200/80 mb-2">
                      <img
                        src={foodPhotoPreview}
                        alt="Dish snap preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-md font-semibold">
                        Preview: Added to Guest Gallery
                      </div>
                    </div>
                  ) : (
                    <label className="border-2 border-dashed border-neutral-300 hover:border-brand-forest rounded-xl p-4 flex flex-col items-center justify-center text-center cursor-pointer bg-neutral-50/50 hover:bg-brand-sage/10 transition-colors">
                      <Upload className="w-6 h-6 text-brand-forest/60 mb-1" />
                      <span className="text-xs font-bold text-brand-forest">
                        Click or tap to upload your food snap
                      </span>
                      <span className="text-[10px] text-neutral-500 mt-0.5">
                        JPG, PNG, WEBP from your phone camera or gallery
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFoodPhotoChange}
                        className="hidden"
                      />
                    </label>
                  )}

                  {/* Food Photo Caption */}
                  {foodPhotoPreview && (
                    <input
                      type="text"
                      placeholder="Photo caption (e.g. Sipping my iced mocha on the sunlit terrace!)"
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
