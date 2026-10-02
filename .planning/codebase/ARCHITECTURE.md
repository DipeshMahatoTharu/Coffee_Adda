<!-- refreshed: 2026-10-02 -->
# Architecture

**Analysis Date:** 2026-10-02

## System Overview

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                        Browser / Client Layer                           │
├─────────────────────────────────────────────────────────────────────────┤
│                             `index.html`                                │
│                                  │                                      │
│                             `main.jsx`                                  │
│                                  │                                      │
│                              `App.jsx`                                  │
│                                  │                                      │
│                         `CoffeeAdda.jsx`                                │
│                     (Hash Router & Page State)                          │
├──────────────────┬──────────────────┬─────────────────┬─────────────────┤
│   Home Page      │  Product Detail  │   About Page    │  Reviews Page   │
│   `Home.jsx`     │  `ProductDetail` │  `AboutPage.jsx`│ `ReviewsPage.jsx│
├──────────────────┴──────────────────┴─────────────────┴─────────────────┤
│               Presentation & Interactive Component Layer                │
│  - `Menu.jsx`               - `ProductCommunitySection.jsx`             │
│  - `ImageStreamHero.jsx`    - `FavoritesSection.jsx`                    │
│  - `Navbar.jsx`             - `InstagramFeed.jsx`                       │
│  - `Footer.jsx`             - `LocationPage.jsx`                        │
├─────────────────────────────────────────────────────────────────────────┤
│                       Reusable UI Primitives                            │
│  - `ScrollExpansionHero.jsx` - `button.tsx`         - `dialog.tsx`      │
│  - `card-fan-carousel.tsx`   - `text-animate.tsx`   - `utils.ts`        │
├─────────────────────────────────────────────────────────────────────────┤
│                          Client Data Layer                              │
│  - `menuData.js` (150+ dishes)  - `productStories.js` (Heritage notes)  │
│  - `productReviewsData.js`      - Browser LocalStorage (`v3_` cache)    │
│  - `services/api.js` (Fetch with graceful offline fallback)             │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ HTTP REST (CORS)
                                     ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                     Django REST Backend Service                         │
│                    `backend/config/urls.py`                             │
│                                  │                                      │
│                       `backend/api/views.py`                            │
│           (CategoryListCreate, MenuItemListCreate, ReviewList)          │
│                                  │                                      │
│                    `backend/api/serializers.py`                         │
│                                  │                                      │
│                      `backend/api/models.py`                            │
│                                  │                                      │
│                     `backend/db.sqlite3` (SQLite)                       │
└─────────────────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| `CoffeeAdda` | Top-level state coordinator, hash routing (`#product/...`, `#menu`, `#about`), and smooth scroll orchestration | `frontend/src/CoffeeAdda.jsx` |
| `ProductDetailPage` | Detailed dish showcase, tasting notes, preparation methods, allergen tags, and community review section | `frontend/src/components/ProductDetailPage.jsx` |
| `ProductCommunitySection` | Guest photo gallery, review submissions with image upload, client compression, in-card photo slider, and full-screen lightbox | `frontend/src/components/ProductCommunitySection.jsx` |
| `Menu` | Categorized dish catalogue with live search, price display, dietary indicators, and add-to-cart triggers | `frontend/src/components/Menu.jsx` |
| `ImageStreamHero` | Immersive multi-column dynamic stream of café ambiance, latte art, and guest moments | `frontend/src/components/ImageStreamHero.jsx` |
| `ScrollExpansionHero` | Scroll-triggered animated visual expanding hero element | `frontend/src/components/ui/ScrollExpansionHero.jsx` |
| `Navbar` | Navigation header, brand logo, mobile navigation drawer, and quick links | `frontend/src/components/Navbar.jsx` |
| `Footer` | Café hours, Budhanilkantha location, Google Maps directions, and social media channels | `frontend/src/components/Footer.jsx` |
| `api.js` | API client service connecting to Django with seamless fallback to static datasets | `frontend/src/services/api.js` |
| `productReviewsData.js` | Community reviews dataset, `v3` LocalStorage persistence, seed datasets, and migration logic | `frontend/src/data/productReviewsData.js` |

## Pattern Overview

**Overall:** Decoupled Single-Page Application (SPA) with Hash-Based Navigation and Hybrid Offline-First Data Strategy.

**Key Characteristics:**
- **Zero-Friction Client Routing:** Uses window hash navigation (`#product/cold-iced-mocha`, `#menu`, `#reviews`) avoiding full page reloads while maintaining direct shareable deep links.
- **Graceful API Degradation:** If the Django backend is offline or sleeping, `frontend/src/services/api.js` automatically catches connection errors and seamlessly renders the comprehensive bundled catalog (`frontend/src/data/menuData.js`).
- **Client-Side Image Optimization:** Image attachments submitted by guests are scaled down to max 1000px and compressed to JPEG Data URLs in-browser before localStorage persistence, preventing quota exhaustion.
- **Micro-Interaction Architecture:** Utilizes Framer Motion variants and Tailwind CSS for smooth spring-based modal open/close, photo carousel transitions, and interactive rating stars.

## Layers

**1. Routing & Top-Level State:**
- Purpose: Manages current view, selected dish id, and window scroll position.
- Location: `frontend/src/CoffeeAdda.jsx`
- Depends on: Component views and browser hash events.

**2. Presentation & Page Views:**
- Purpose: Render specific application sections (`home`, `product-detail`, `about`, `reviews`, `location`).
- Location: `frontend/src/pages/`, `frontend/src/components/`
- Depends on: Data layer, UI primitives, and Lucide icons.

**3. Interactive Modules & Modals:**
- Purpose: Standalone interactive widgets (Lightbox, Photo Upload modal, Cart drawer).
- Location: `frontend/src/components/ProductCommunitySection.jsx`
- Contains: In-card photo sliders, image compression utilities, touch gesture listeners.

**4. Reusable UI Primitives:**
- Purpose: Accessible, styled base elements (Dialogs, Buttons, Text Reveal animations).
- Location: `frontend/src/components/ui/`
- Depends on: Radix UI, Framer Motion, and Tailwind CSS.

**5. Client Data & Persistence:**
- Purpose: Serve menu records, heritage stories, and persist user-generated reviews.
- Location: `frontend/src/data/`
- Contains: `menuData.js`, `productStories.js`, `productReviewsData.js`.

**6. Backend REST API Layer:**
- Purpose: Serve dynamic database records and receive reservation/review submissions.
- Location: `backend/api/`
- Contains: Django models, serializers, views, and admin registrations.

## Data Flow

### Primary Dish Detail & Review View Flow

1. User clicks any dish card in `Menu.jsx` or `FavoritesSection.jsx`.
2. Triggers `navigateTo('product-detail', item.id)` in `frontend/src/CoffeeAdda.jsx:38`.
3. Updates `selectedProductId`, sets `window.location.hash = '#product/{id}'`, and smoothly scrolls to top.
4. `ProductDetailPage.jsx` loads dish info from `menuData.js` and heritage lore from `productStories.js`.
5. `ProductCommunitySection.jsx` queries `getProductReviews(productId)` from `frontend/src/data/productReviewsData.js:253`.
6. Checks localStorage `coffee_adda_dish_reviews_v3_{productId}`, applies migration if older records exist, and merges with official seed reviews.
7. Renders the interactive review cards with the `ReviewCardPhotos` slider and community gallery.

### Guest Food Photo Submission Flow

1. Patron clicks "Add Your Photos" in `ProductCommunitySection.jsx`.
2. Selects image files from their mobile or desktop file picker.
3. Client executes `compressImage(file, 1000, 0.82)` (`frontend/src/components/ProductCommunitySection.jsx:33`), generating an optimized data URL.
4. Patron submits rating, name, and comment.
5. Review object is saved via `saveProductReview()` to localStorage (`frontend/src/data/productReviewsData.js:287`).
6. State updates reactively without page refresh, and image immediately appears in the community gallery.

## Key Abstractions

**MenuItem Entity:**
- Unified structure representing a menu item:
  - `id`: Unique kebab-case slug (e.g. `'hot-cappuccino'`, `'cold-iced-mocha'`).
  - `name`: Display title.
  - `price`: Numeric cost in Nepalese Rupees (NPR).
  - `category`: Category key matching taxonomy.
  - `image`: URL to high-resolution asset.
  - `details`: Array of tag attributes (e.g. `['🥛 Whole / Oat Milk', '🔥 Hot (8oz)']`).

**ProductReview Entity:**
- Community feedback model:
  - `id`: Unique identifier (`'seed-cap-1'` or timestamped UUID).
  - `authorName`: Guest name.
  - `authorPhoto`: Optional profile picture (defaults to brand logo fallback if null).
  - `foodPhotos`: Array of uploaded food photo URLs.
  - `rating`: 1 to 5 star score.
  - `reviewText`: Written comment.

## Entry Points

**Frontend Application:**
- `frontend/index.html` - HTML document with meta tags, fonts, and `#root` container.
- `frontend/src/main.jsx` - React 18 DOM mount point.
- `frontend/src/App.jsx` - Root application container.
- `frontend/src/CoffeeAdda.jsx` - Central coordinator managing hash routing and page views.

**Backend Application:**
- `backend/manage.py` - Django CLI command runner (`runserver`, `migrate`, `seed_data`).
- `backend/config/urls.py` - Root URL configuration routing `/admin/` and `/api/`.
- `backend/config/wsgi.py` & `backend/config/asgi.py` - Server entry points for WSGI/ASGI deployments.

## Architectural Constraints

- **Static Vercel Deployment:** The frontend must compile to static assets (`frontend/dist`) deployable without an active Node server. All server rewrites must direct to `/index.html` (`vercel.json`).
- **No Mandatory Login Requirement:** Customer reviews and photo submissions must remain client-accessible without forced auth to encourage high participation.
- **LocalStorage Storage Limits:** Browser LocalStorage has a ~5MB quota per domain. All images must pass through `compressImage` before storage to ensure hundreds of reviews fit comfortably.

## Anti-Patterns

### Hardcoded Card Dimensions on Responsive Media
**What happens:** Setting fixed heights (`h-36`) on media containers inside flexible grid columns.
**Why it's wrong:** On wide screens (~450px wide cards), a 144px height forces a 3:1 letterbox aspect ratio, severely cropping the top and bottom of food photography.
**Do this instead:** Use responsive aspect ratios (`aspect-[16/10]` or `aspect-[4/3]` with `max-h-72`) as demonstrated in `ReviewCardPhotos` (`frontend/src/components/ProductCommunitySection.jsx`).

### Unversioned LocalStorage Keys
**What happens:** Storing JSON lists under generic unversioned keys without schema checks.
**Why it's wrong:** When data schemas evolve (e.g. adding `foodPhotos` arrays), returning visitors load stale cached structures that lack the new fields.
**Do this instead:** Use versioned keys (`coffee_adda_dish_reviews_v3_`) with automated migration of user-created entries (`frontend/src/data/productReviewsData.js:253`).

## Error Handling

- **Fetch Failures:** All API calls in `frontend/src/services/api.js` are wrapped in `try/catch` with automatic fallback to bundled datasets (`menuData.js`).
- **Image Load Failures:** Missing author avatars fall back to the brand avatar icon (`<User />`).
- **Image Upload Validation:** Input file handlers validate image MIME types and provide instant visual previews before submission.

## Cross-Cutting Concerns

- **Brand Design Tokens:** Enforced via `tailwind.config.js` (`brand-forest`, `brand-gold`, `brand-cream`, `brand-sage`).
- **Typography:** Dual hierarchy with `font-serif` (`Playfair Display`) for editorial headings and `font-sans` (`Plus Jakarta Sans`) for interface controls.

---

*Architecture analysis: 2026-10-02*
