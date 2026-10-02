# External Integrations

**Analysis Date:** 2026-10-02

## APIs & External Services

**Internal Backend REST API:**
- **Django REST API** - Serves menu categories, item inventory, verified testimonials, and table reservation submissions.
  - Client Service: `frontend/src/services/api.js` (`fetchMenu()`, `fetchReviews()`).
  - Base URL: `import.meta.env.VITE_API_URL` (defaults to `http://127.0.0.1:8000/api`).
  - Endpoints:
    - `GET /api/menu/` - Returns active menu items with category filtering support (`?category=<slug>`).
    - `GET /api/categories/` - Returns ordered menu taxonomy (`Hot Coffee`, `Cold Brews`, `Bakery`, `Snacks`, `Momo`).
    - `GET, POST /api/reviews/` - Returns approved guest reviews and accepts new submissions.
    - `POST /api/reservations/` - Receives guest table bookings with date, time, and party size.
  - Resiliency / Fallback: If Django backend is unreachable, the frontend gracefully degrades by serving authentic bundled datasets from `frontend/src/data/menuData.js`.

**Content & Media CDNs:**
- **Unsplash Image CDN:**
  - High-resolution, optimized food and artisan coffee imagery with dynamic resize parameters (`?auto=format&fit=crop&w=800&q=80`).
  - Used in `frontend/src/data/menuData.js`, `frontend/src/data/productStories.js`, and `frontend/src/data/productReviewsData.js`.
- **Google Fonts CDN:**
  - Delivers `Playfair Display` (editorial serif headings) and `Plus Jakarta Sans` (body interface typography) via `frontend/index.html`.
- **Google Maps Embed API:**
  - Interactive iframe map showing Coffee Adda's physical location at Budhanilkantha, Kathmandu (`frontend/src/components/Location.jsx`, `frontend/src/components/LocationPage.jsx`).

**Social Media Channels:**
- **Instagram:** Direct link to café community [`@coffee_adda9`](https://www.instagram.com/coffee_adda9/) (`frontend/src/components/InstagramFeed.jsx`, `frontend/src/components/Footer.jsx`).
- **TikTok:** Official café account [`@coffe.adda`](https://www.tiktok.com/@coffe.adda).

## Data Storage

**Client-Side Browser Storage (LocalStorage):**
- **Cart & Order State:** Stored under key `coffee_adda_cart` (persists order items, quantity, customizations, and subtotal across page reloads).
- **Dish Community Reviews & Food Snaps:**
  - Stored under key `coffee_adda_dish_reviews_v3_${productId}` in `frontend/src/data/productReviewsData.js`.
  - Supports client-side compressed base64 JPEG photo uploads, user-submitted ratings, and migration from legacy `v1`/`v2` keys.

**Backend Database:**
- **SQLite 3 (`backend/db.sqlite3`):**
  - Configured in `backend/config/settings.py` (`django.db.backends.sqlite3`).
  - Managed by Django ORM migrations (`backend/api/migrations/`).
  - Stores `Category`, `MenuItem`, `Review`, and `Reservation` models (`backend/api/models.py`).

**File & Asset Storage:**
- **Local Static Assets:**
  - Packaged directly into frontend Vite build (`frontend/src/assets/`).
  - Key assets: `video hero seciton.mp4` (café hero background loop), `logo.png` (branding), `video_frame_preview.jpg` (poster fallback).

## Authentication & Identity

**Backend Administration:**
- **Django Admin Auth:** Powered by `django.contrib.auth` at `/admin/`.
- Manages administrative menu updates, item availability flags, and review approvals (`backend/api/admin.py`).

**Customer / Patron Experience:**
- Frictionless guest access. Patrons can browse menu items, read heritage stories, customize orders, submit reviews, and upload food photos without account registration or barrier.

## Monitoring & Observability

**Error Tracking:**
- Client-side error logging handled via standard console outputs with informative fallbacks (`console.warn` in `frontend/src/services/api.js` when API is offline).
- Django debug mode enabled in development (`DEBUG = True` in `backend/config/settings.py`).

**Logs:**
- Standard Vite development and HMR logging.
- Django HTTP request logs via `runserver`.

## CI/CD & Deployment

**Hosting Platform:**
- **Vercel:** Hosts the production single-page application.
  - Primary Production Domain: [`https://coffee-adda.vercel.app`](https://coffee-adda.vercel.app)
  - Mirror Production Domain: [`https://coffee-adda-nepal.vercel.app`](https://coffee-adda-nepal.vercel.app)
  - Deployment configuration defined in `vercel.json`.

**CI/CD Pipeline:**
- Automatic Git push deployments triggered on `main` branch via GitHub integration.
- Direct Vercel CLI deployment support (`npx vercel --prod --yes`).

## Environment Configuration

**Required Environment Variables:**
- `VITE_API_URL` (optional in frontend, defaults to `http://127.0.0.1:8000/api`).
- `SECRET_KEY` (in backend settings; currently hardcoded development key in `backend/config/settings.py`, should be extracted to environment variable before public API deployment).

**Secrets Location:**
- Local environment files (`.env`, `.env.local`) gitignored via `.gitignore`.

## Webhooks & Callbacks

**Incoming:** None configured.
**Outgoing:** None configured.

---

*Integration audit: 2026-10-02*
