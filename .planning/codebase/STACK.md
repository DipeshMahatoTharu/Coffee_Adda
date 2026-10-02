# Technology Stack

**Analysis Date:** 2026-10-02

## Languages

**Primary:**
- **JavaScript (ES Modules / JSX)** - Core frontend application logic, routing, UI components, and state management (`frontend/src/**/*.jsx`, `frontend/src/**/*.js`).
- **Python (3.10+)** - Backend REST API service, data models, serializers, and Django administrative interfaces (`backend/**/*.py`).

**Secondary:**
- **TypeScript** - Used for reusable UI primitives, types, and animated components (`frontend/src/components/ui/**/*.tsx`, `frontend/src/lib/utils.ts`).
- **CSS / Tailwind CSS (v3)** - Utility-first styling with custom brand color tokens (`#143826` forest, `#D4AF37` gold, `#FAF8F5` cream) and typography (`frontend/src/index.css`, `frontend/tailwind.config.js`).

## Runtime

**Environment:**
- **Browser Runtime:** Modern evergreen browsers (Chrome, Safari, Edge, Firefox) with HTML5 and ES2022+ features.
- **Node.js:** v18.0.0+ (Production build environment on Vercel runs Node.js 22.x).
- **Python:** v3.10+ (Tested with Python 3.14 on Windows/Vercel).

**Package Managers:**
- **npm (v9 / v10)** - Frontend dependencies (`frontend/package.json`).
  - Lockfile: `frontend/package-lock.json` present.
- **pip** - Python backend dependencies (`backend/requirements.txt`).
  - Lockfile: `backend/requirements.txt` specifies pinned/range versions.

## Frameworks

**Core:**
- **React (v18.3.1)** - Frontend declarative UI library with hooks, hash routing, and functional components.
- **Django (>=5.0, <7.0)** - Backend web framework with ORM, authentication, admin panel, and settings (`backend/config/settings.py`).
- **Django REST Framework (>=3.14.0)** - REST API serialization, generic API views, and response rendering (`backend/api/`).
- **django-cors-headers (>=4.3.0)** - Cross-Origin Resource Sharing middleware for React frontend integration.

**Animation & Interactive UI:**
- **Framer Motion (v11.18.2)** & **Motion (v13.2.0)** - Complex page transitions, hero scroll expansion, modal animations, and photo carousels (`frontend/src/components/ProductCommunitySection.jsx`, `frontend/src/components/ui/ScrollExpansionHero.jsx`).
- **GSAP (v3.15.0)** - High-performance timeline and scroll-based animation engine.
- **Radix UI Primitives** - Accessible unstyled headless components (`@radix-ui/react-dialog`, `@radix-ui/react-select`, `@radix-ui/react-slot`, `@radix-ui/react-toggle`, `@radix-ui/react-label`).
- **Lucide React (v0.453.0)** - Iconography across menu, navigation, reviews, and detail pages.

**Build & Dev:**
- **Vite (v5.4.10)** - Next-generation frontend bundler and HMR dev server (`frontend/vite.config.js`).
- **PostCSS (v8.4.47)** & **Autoprefixer (v10.4.20)** - CSS post-processing pipeline.
- **Tailwind CSS (v3.4.14)** - Utility-first styling engine with customized brand color palette and typography.

## Key Dependencies

**Critical:**
- `react` & `react-dom` (`^18.3.1`): Powers entire single-page web application (`frontend/src/CoffeeAdda.jsx`).
- `framer-motion` (`^11.18.2`): Powers hero transitions, food gallery carousels, and guest review lightboxes.
- `clsx` (`^2.1.1`) & `tailwind-merge` (`^3.7.0`): Dynamic class merging helper for Tailwind components (`frontend/src/lib/utils.ts`).
- `djangorestframework` (`>=3.14.0`): REST endpoints for categories, menu items, reviews, and reservations (`backend/api/views.py`).

**Infrastructure:**
- `asgiref` (`>=3.8.1`): ASGI specification support for Django async handlers.
- `sqlparse` (`>=0.5.0`): Non-validating SQL parser for Django database migrations.
- `tzdata` (`>=2024.1`): Timezone database supporting Kathmandu (`Asia/Kathmandu`).

## Configuration

**Environment Configuration:**
- Frontend: `import.meta.env.VITE_API_URL` with default fallback to `http://127.0.0.1:8000/api` (`frontend/src/services/api.js`).
- Backend: `backend/config/settings.py` configures `SECRET_KEY`, `ALLOWED_HOSTS`, `CORS_ALLOWED_ORIGINS`, `TIME_ZONE = 'Asia/Kathmandu'`.

**Build Configuration:**
- Frontend Vite: `frontend/vite.config.js` sets path alias `@` -> `./src`, server host binding (`host: true`), and dev/preview port `5173`.
- Tailwind: `frontend/tailwind.config.js` defines brand palette (`forest`, `gold`, `cream`, `sage`) and font families (`Playfair Display`, `Plus Jakarta Sans`).
- Root Vercel: `vercel.json` configures build command `cd frontend && npm install && npm run build`, output directory `frontend/dist`, and SPA fallback rewrite rule `/(.*)` -> `/index.html`.

## Platform Requirements

**Development:**
- Node.js 18.0+ and npm
- Python 3.10+ (with virtualenv)
- Local dev ports: 5173 (Vite frontend), 8000 (Django backend)

**Production:**
- **Frontend Hosting:** Vercel Static & Edge CDN ([coffee-adda.vercel.app](https://coffee-adda.vercel.app), [coffee-adda-nepal.vercel.app](https://coffee-adda-nepal.vercel.app))
- **Backend Hosting:** Python ASGI/WSGI web host (e.g. Railway, Render, or VPS) for Django API endpoints.

---

*Stack analysis: 2026-10-02*
