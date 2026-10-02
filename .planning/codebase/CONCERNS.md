# Codebase Concerns

**Analysis Date:** 2026-10-02

## Tech Debt

**Monolithic Data & Component Files:**
- **Issue:** Several files have grown substantially in length:
  - `frontend/src/data/menuData.js`: 2,152 lines (contains exhaustive catalogue for 150+ menu items in a single file).
  - `frontend/src/components/ProductCommunitySection.jsx`: 1,205 lines (contains community reviews, photo gallery, upload modal form, in-card photo slider, and lightbox).
- **Files:** `frontend/src/data/menuData.js`, `frontend/src/components/ProductCommunitySection.jsx`.
- **Impact:** Increases cognitive overhead during maintenance and increases risk of unintended merge conflicts.
- **Fix approach:** Split `menuData.js` into category sub-modules (e.g. `data/menu/coffee.js`, `data/menu/bakery.js`, `data/menu/snacks.js`) and extract the photo upload dialog into a standalone `ReviewUploadModal.jsx` component.

**Dual Source of Truth (Static Dataset vs Django DB):**
- **Issue:** The application maintains dish information both in static JavaScript datasets (`menuData.js`) and in the Django SQLite database (`backend/db.sqlite3`).
- **Files:** `frontend/src/data/menuData.js`, `backend/api/models.py`, `frontend/src/services/api.js`.
- **Impact:** Updates made by café staff in Django Admin (`/admin/`) are reflected only when the client reaches the live Django API. If the API is offline or not deployed publicly, the frontend shows the static version.
- **Fix approach:** When the Django API is deployed to a hosted backend service (e.g. Railway or Render), configure the frontend build or runtime to fetch directly from the remote API with local static caching as fallback.

**Lack of Automated Test Suite:**
- **Issue:** Neither the frontend nor backend currently includes automated unit or integration tests (`npm test` does not exist, `backend/api/tests.py` is absent).
- **Files:** `frontend/package.json`, `backend/api/`.
- **Impact:** Regressions must be manually verified through manual browser testing.
- **Fix approach:** Introduce Vitest for frontend regression tests and DRF `APITestCase` for backend endpoint tests.

## Security Concerns

**Hardcoded Django Secret Key & Debug Mode:**
- **Issue:** `SECRET_KEY` in `backend/config/settings.py` is hardcoded as `'django-insecure-coffee-adda-budhanilkantha-artisan-roast-key'` and `DEBUG = True`.
- **Files:** `backend/config/settings.py:12-15`.
- **Impact:** If the Django backend is deployed to a public server without modification, it exposes debug traceback details and uses an insecure signing key.
- **Fix approach:** Replace hardcoded values with `os.environ.get('DJANGO_SECRET_KEY')` and `DEBUG = os.environ.get('DJANGO_DEBUG', 'False') == 'True'`.

**Permissive CORS Settings in Backend:**
- **Issue:** `CORS_ALLOW_ALL_ORIGINS = True` is enabled in `backend/config/settings.py:108`.
- **Files:** `backend/config/settings.py:108`.
- **Impact:** Allows any origin to send requests to the API.
- **Fix approach:** In production, restrict CORS origins strictly to `https://coffee-adda.vercel.app` and `https://coffee-adda-nepal.vercel.app`.

## Performance Considerations

**Frontend Bundle Size (Large JS Chunk Warning):**
- **Issue:** During `npm run build`, Vite produces a single large JavaScript bundle: `dist/assets/index-*.js` is **911 kB** (gzip: ~282 kB), which exceeds Vite's recommended 500 kB chunk threshold.
- **Files:** `frontend/src/CoffeeAdda.jsx`, `frontend/vite.config.js`.
- **Impact:** Slower initial page load on constrained 3G mobile connections in Nepal.
- **Fix approach:** Implement route-level code splitting using React `lazy()` and `Suspense` for secondary pages (`AboutPage.jsx`, `ReviewsPage.jsx`, `LocationPage.jsx`, `ProductDetailPage.jsx`), and configure Rollup manual chunks in `vite.config.js` for heavy libraries (`framer-motion`, `lucide-react`).

**Hero Video Asset Weight:**
- **Issue:** The café hero background video `frontend/src/assets/video hero seciton.mp4` is **~3.97 MB**.
- **Files:** `frontend/src/assets/video hero seciton.mp4`.
- **Impact:** Consumes significant bandwidth on mobile devices before streaming starts.
- **Fix approach:** Compress video to WebM/MP4 with low bitrate, lazy-load video play after first interaction, or stream via Cloudinary/CDN.

## Fragile Areas

**Browser LocalStorage Storage Quota:**
- **Issue:** Guest reviews and food photos are stored client-side in LocalStorage. While `compressImage()` resizes photos to max 1000px, base64 strings still consume ~100–200KB per image.
- **Files:** `frontend/src/data/productReviewsData.js`, `frontend/src/components/ProductCommunitySection.jsx`.
- **Impact:** If a patron uploads dozens of multi-photo reviews on a single browser session, LocalStorage may reach the browser's ~5MB quota, causing `QuotaExceededError`.
- **Fix approach:** When the Django backend API is live in production, submit uploads directly to the backend database via `POST /api/reviews/` with image multipart uploads, utilizing LocalStorage only as a temporary cache.

**Hash Routing Scroll Coordination:**
- **Issue:** Routing relies on `window.location.hash` and imperative `setTimeout(() => scrollIntoView(), 60)` calls for intra-page anchors.
- **Files:** `frontend/src/CoffeeAdda.jsx:69-73`.
- **Impact:** If component mounting takes longer than 60ms on low-end devices, the smooth scroll target element may not yet be attached to the DOM.
- **Fix approach:** Use React `useEffect` dependent on page transitions or a standard React Router solution.

---

*Concerns analysis: 2026-10-02*
