# Codebase Structure

**Analysis Date:** 2026-10-02

## Directory Layout

```text
coffee_adda/
├── frontend/                        # React + Vite Client Application
│   ├── public/                      # Static assets served at root
│   ├── src/                         # Application source code
│   │   ├── assets/                  # High-res video loops, brand logos, posters
│   │   ├── components/              # Application sections and pages
│   │   │   └── ui/                  # Reusable UI primitives and animation components
│   │   ├── data/                    # Authentic static datasets (menu, stories, reviews)
│   │   ├── lib/                     # Shared utilities (class merger)
│   │   ├── pages/                   # Standalone page views (Home.jsx)
│   │   ├── services/                # Backend API integration services
│   │   ├── App.jsx                  # Application root component
│   │   ├── CoffeeAdda.jsx           # Master state coordinator & hash router
│   │   ├── index.css                # Global stylesheet & Tailwind directives
│   │   └── main.jsx                 # React 18 DOM mount point
│   ├── index.html                   # HTML entry point with fonts & metadata
│   ├── package.json                 # Frontend dependencies and build scripts
│   ├── tailwind.config.js           # Brand design tokens & theme configuration
│   └── vite.config.js               # Bundler configuration and dev server setup
│
├── backend/                         # Python Django REST Framework Service
│   ├── api/                         # Core API application
│   │   ├── management/commands/     # Custom Django management commands (seed_data)
│   │   ├── migrations/              # Database schema migrations
│   │   ├── admin.py                 # Django admin registration
│   │   ├── apps.py                  # Django app configuration
│   │   ├── models.py                # Database models (Category, MenuItem, Review, Reservation)
│   │   ├── serializers.py           # DRF model serializers
│   │   ├── urls.py                  # API endpoint routing
│   │   └── views.py                 # REST API viewsets and views
│   ├── config/                      # Project-level configuration
│   │   ├── asgi.py                  # ASGI server entry
│   │   ├── settings.py              # Application settings (CORS, DB, installed apps)
│   │   ├── urls.py                  # Master URL routing
│   │   └── wsgi.py                  # WSGI server entry
│   ├── manage.py                    # Django management CLI script
│   └── requirements.txt             # Python backend dependencies
│
├── docs/                            # Documentation assets
│   └── screenshots/                 # Application preview screenshots for portfolio/README
├── vercel.json                      # Vercel production deployment and rewrite rules
├── README.md                        # Project documentation and interview showcase
└── .gitignore                       # Ignored build artifacts, dependencies, and venv
```

## Directory Purposes

**`frontend/src/components/`:**
- Purpose: Primary application sections and views.
- Contains: Full-page views (`AboutPage.jsx`, `ReviewsPage.jsx`, `LocationPage.jsx`, `ProductDetailPage.jsx`) and section components (`Menu.jsx`, `Navbar.jsx`, `Footer.jsx`, `WhyUs.jsx`, `InstagramFeed.jsx`, `ProductCommunitySection.jsx`).
- Key files: `ProductDetailPage.jsx`, `ProductCommunitySection.jsx`, `Menu.jsx`.

**`frontend/src/components/ui/`:**
- Purpose: Self-contained, reusable UI atoms, Radix UI wrappers, and motion primitives.
- Contains: `button.tsx`, `dialog.tsx`, `card-fan-carousel.tsx`, `text-animate.tsx`, `ScrollExpansionHero.jsx`.
- Key files: `ScrollExpansionHero.jsx`, `utils.ts`.

**`frontend/src/data/`:**
- Purpose: Comprehensive, verified local datasets providing zero-latency reads and offline resilience.
- Contains: `menuData.js` (150+ authentic transcribed items), `productStories.js` (dish heritage and origin stories), `productReviewsData.js` (community reviews with multi-photo attachments and `v3` storage manager).

**`frontend/src/services/`:**
- Purpose: External network communication with backend services.
- Key files: `api.js` (fetch client with automatic fallback).

**`backend/api/`:**
- Purpose: Django REST Framework application exposing data endpoints.
- Key files: `models.py`, `views.py`, `serializers.py`, `urls.py`.

## Key File Locations

**Entry Points:**
- `frontend/src/main.jsx`: Mounts React application to `#root`.
- `frontend/src/CoffeeAdda.jsx`: Top-level application router and state manager.
- `backend/manage.py`: Django command runner.
- `backend/config/urls.py`: Backend root URL routing.

**Configuration:**
- `frontend/vite.config.js`: Vite bundling options, port, host binding, path aliases.
- `frontend/tailwind.config.js`: Custom color palette and font family extensions.
- `backend/config/settings.py`: Django settings, SQLite database, timezone (`Asia/Kathmandu`), and CORS settings.
- `vercel.json`: Vercel root build script and SPA rewrite rules.

**Core Logic:**
- `frontend/src/components/ProductCommunitySection.jsx`: Review moderation, in-card photo slider, client-side photo compression, and lightbox modal.
- `frontend/src/data/productReviewsData.js`: LocalStorage data migration and seed data accessor.

## Naming Conventions

**Files:**
- React Components: PascalCase (e.g. `ProductDetailPage.jsx`, `ScrollExpansionHero.jsx`, `Menu.jsx`).
- TypeScript UI Primitives: kebab-case (e.g. `card-fan-carousel.tsx`, `text-animate.tsx`, `about-section.tsx`).
- Utility & Data Modules: camelCase (e.g. `menuData.js`, `productStories.js`, `productReviewsData.js`, `api.js`).
- Python Modules: snake_case (e.g. `settings.py`, `models.py`, `serializers.py`).

**Directories:**
- Frontend directories: lowercase (e.g. `components`, `assets`, `data`, `services`).
- Backend directories: lowercase (e.g. `api`, `config`, `management`).

## Where to Add New Code

**New Menu Item or Dish Category:**
- Static Dataset: Add to `frontend/src/data/menuData.js` under the appropriate category array.
- Heritage Lore: Add story details to `frontend/src/data/productStories.js`.
- Seed Community Reviews: Add initial patron reviews and photos to `frontend/src/data/productReviewsData.js`.
- Backend Database: Add record via Django Admin (`/admin/`) or via `python manage.py seed_data`.

**New Standalone Page or Section:**
- Implementation: Create component in `frontend/src/components/NewSection.jsx`.
- Router Integration: Register page view and hash route in `frontend/src/CoffeeAdda.jsx` inside `currentPage` state and `navigateTo()` handler.
- Navigation Link: Add link to header in `frontend/src/components/Navbar.jsx` and footer in `frontend/src/components/Footer.jsx`.

**New Reusable UI Component:**
- Implementation: Place in `frontend/src/components/ui/` with Tailwind styling and Radix UI primitives.
- Utility Imports: Use `cn()` helper from `frontend/src/lib/utils.ts`.

**New Backend API Endpoint:**
- Model: Define model in `backend/api/models.py`.
- Serializer: Define serializer in `backend/api/serializers.py`.
- View: Define generic view in `backend/api/views.py`.
- URL: Wire endpoint in `backend/api/urls.py`.

## Special Directories

**`frontend/dist/`:**
- Purpose: Production build output generated by `npm run build`.
- Generated: Yes.
- Committed: No (gitignored).

**`backend/db.sqlite3`:**
- Purpose: SQLite database file for local development.
- Generated: Yes.
- Committed: Yes (initial seed included).

**`backend/venv/`:**
- Purpose: Python virtual environment directory.
- Generated: Yes.
- Committed: No (gitignored).

---

*Structure analysis: 2026-10-02*
