# Coding Conventions

**Analysis Date:** 2026-10-02

## Naming Patterns

**Files:**
- React Components: PascalCase matching the default exported component name (e.g. `ProductDetailPage.jsx`, `ProductCommunitySection.jsx`, `Menu.jsx`).
- Shared Utilities & Dataset Modules: camelCase (e.g. `menuData.js`, `productReviewsData.js`, `productStories.js`, `api.js`).
- UI Primitives: kebab-case with `.tsx` or `.jsx` extension (e.g. `card-fan-carousel.tsx`, `text-animate.tsx`).
- Python Modules: snake_case (e.g. `serializers.py`, `models.py`, `views.py`).

**Functions:**
- Event Handlers: Prefix with `handle` (e.g. `handlePrevPhoto`, `handleNextPhoto`, `handleSubmitReview`, `handleSelect`).
- Action Triggers / Callbacks: Prefix with `on` (e.g. `onOpenLightbox`, `onSelectCategory`, `onAddToCart`).
- Data Accessors: Prefix with `get` or `fetch` (e.g. `getProductReviews`, `fetchMenu`, `fetchReviews`, `saveProductReview`).
- Functional React Components: PascalCase (e.g. `function ReviewCardPhotos({ review, onOpenLightbox })`).

**Variables & State:**
- React State: `[value, setValue]` standard tuple pattern (e.g. `[lightboxReview, setLightboxReview]`, `[currentIndex, setCurrentIndex]`).
- Boolean Flags: Prefix with `is` or `has` (e.g. `isModalOpen`, `isSubmitting`, `isAvailable`, `isLive`).
- Constants & Storage Keys: UPPER_SNAKE_CASE (e.g. `STORAGE_PREFIX`, `API_BASE_URL`, `SEED_PRODUCT_REVIEWS`).

**Types & Interfaces:**
- TypeScript interfaces and types: PascalCase (e.g. `MenuItem`, `Review`, `Category`).

## Code Style

**Formatting:**
- Indentation: 2 spaces for JavaScript/TypeScript/JSX/JSON/CSS; 4 spaces for Python.
- Quotes: Single quotes preferred in JavaScript/JSX (`import React from 'react'`); double quotes in HTML attributes and JSON.
- Semicolons: Semicolons used consistently throughout JavaScript and TypeScript files.

**Tailwind CSS Organization:**
- Utility classes grouped logically: Layout & Positioning -> Sizing & Spacing -> Typography -> Visuals & Borders -> Effects & Transitions -> Responsive prefixes (`sm:`, `md:`, `lg:`).
- Custom brand tokens used instead of generic colors: `text-brand-forest`, `bg-brand-cream`, `border-brand-gold/40`.
- Class merging: When constructing dynamic or conditional classes, use the `cn()` helper (`clsx` + `tailwind-merge`) from `frontend/src/lib/utils.ts`.

## Import Organization

**Order:**
1. React core and hooks (`import React, { useState, useEffect, useMemo } from 'react';`)
2. Third-party animation & UI libraries (`framer-motion`, `lucide-react`, `@radix-ui/...`)
3. Internal utilities and helpers (`../lib/utils`, `../services/api`)
4. Data models & datasets (`../data/menuData`, `../data/productReviewsData`)
5. Sibling components and sub-views (`./ReviewCardPhotos`, `./Navbar`)
6. Stylesheets and asset files (`./index.css`, `../assets/logo.png`)

**Path Aliases:**
- Configured path alias `@` maps to `<rootDir>/frontend/src` in `frontend/vite.config.js`. Relative imports (`../data/...`, `./components/...`) are also widely supported and used.

## Error Handling

**Network & API Communications:**
- Every asynchronous fetch in `frontend/src/services/api.js` is wrapped in a `try/catch` block.
- On failure, network errors are logged using `console.warn` with a diagnostic message, and a robust fallback static object is returned with an `isLive: false` status flag so the user UI never crashes or renders blank screens.

**Local Storage Access:**
- All `localStorage.getItem` and `localStorage.setItem` calls in `frontend/src/data/productReviewsData.js` check for `typeof window !== 'undefined'` and wrap parsing inside `try/catch` to handle private browsing restrictions and corrupted JSON payloads gracefully.

## Logging

**Patterns:**
- `console.warn` is used for non-fatal network degradations (e.g. backend offline, falling back to local dataset).
- `console.error` is reserved for write failures or unexpected runtime exceptions.
- No spammy debug logs in production builds.

## Comments

**When to Comment:**
- JSDoc docstrings precede all exported utility functions and data accessors (e.g. `compressImage()`, `getProductReviews()`, `saveProductReview()`).
- High-level block comments clearly delimit major UI sections in components (e.g. `/* 1. PATRON FOOD GALLERY */`, `/* 2. REVIEWS FEED & FILTERS */`, `/* 3. LIGHTBOX MODAL */`).
- Rationale comments accompany complex regexes, schema migrations, and aspect ratio decisions.

## Function Design

**Size:**
- Sub-components are extracted when a section possesses distinct state or interactivity (e.g. `ReviewCardPhotos` extracted from `ProductCommunitySection`).
- Pure utility functions (like `compressImage`) are kept decoupled from React component lifecycle.

**Parameters:**
- Component props use object destructuring with sensible default fallbacks:
  ```jsx
  function ReviewCardPhotos({ review, onOpenLightbox }) { ... }
  ```

**Return Values:**
- Data access functions consistently return predictable array or object formats (e.g. always returns array of reviews, even if empty, preventing `undefined.map()` crashes).

## Module Design

**Exports:**
- Page views and primary components use default exports (`export default function ProductDetailPage(...)`).
- Data sets, helper utilities, and action functions use named exports (`export const SEED_PRODUCT_REVIEWS = ...`, `export function getProductReviews(...)`).

**Barrel Files:**
- Avoid large barrel files that bundle unnecessary components. Direct imports ensure optimal tree-shaking during Vite compilation.

---

*Convention analysis: 2026-10-02*
