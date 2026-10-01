# Coffee Adda — Full-Stack Application (React + Django)

A decoupled full-stack application for **Coffee Adda (Budhanilkantha, Bagmati Province, Nepal)**.

- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Backend**: Python + Django + Django REST Framework + SQLite
- **Features**:
  - **ScrollExpansionHero**: Smooth Framer Motion scroll-expansion hero effect adapted specifically for Coffee Adda.
  - **Live Filterable Menu**: Hot Brews, Cold Specials, Artisan Bakery with dynamic category tabs.
  - **Interactive Cart & Order Drawer**: Live count, quantity adjust, total calculation, and direct WhatsApp order button.
  - **Django REST API**: Pre-seeded SQLite database, models for Categories, MenuItems, Orders, OrderItems, Reviews, and Reservations.

---

## 📁 Project Structure

```
coffee_adda/
├── requirements.txt              # Root Python dependencies file (for quick install)
├── backend/                      # Python Django REST Backend
│   ├── manage.py
│   ├── db.sqlite3                # Pre-seeded SQLite database
│   ├── requirements.txt          # Backend Python dependencies
│   ├── config/                   # Project settings, CORS & URL routing
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
│   │   └── asgi.py
│   └── api/                      # App: Models, Serializers, Views & Seed data
│       ├── models.py             # Category, MenuItem, Order, OrderItem, Review
│       ├── serializers.py
│       ├── views.py
│       ├── urls.py
│       └── management/commands/
│           └── seed_data.py      # Populates Coffee Adda menu & reviews
│
├── frontend/                     # React Single Page App (Vite + Tailwind)
│   ├── index.html
│   ├── package.json              # React & framer-motion dependencies
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── src/
│       ├── main.jsx              # App mount point
│       ├── App.jsx               # App container coordinating layout & cart state
│       ├── pages/
│       │   └── Home.jsx          # Homepage composing ScrollExpansionHero & sections
│       ├── services/
│       │   └── api.js            # API client connected to Django
│       ├── components/
│       │   ├── ui/
│       │   │   └── ScrollExpansionHero.jsx  # Framer Motion scroll expansion hero
│       │   ├── Banner.jsx
│       │   ├── Navbar.jsx
│       │   ├── WhyUs.jsx
│       │   ├── Menu.jsx
│       │   ├── SpecialOffer.jsx
│       │   ├── About.jsx
│       │   ├── Reviews.jsx
│       │   ├── Location.jsx
│       │   ├── Footer.jsx
│       │   ├── CartModal.jsx
│       │   └── CartToast.jsx
│       └── data/
│           └── menuData.js       # Fallback static menu & reviews
│
├── .gitignore
└── README.md
```

---

## ⚛️ Component Hierarchy

```
App.jsx
  ├── Banner
  ├── Navbar
  └── Home.jsx
        ├── ScrollExpansionHero (Framer Motion scroll expansion)
        ├── WhyUs
        ├── Menu
        ├── SpecialOffer
        ├── About
        ├── Reviews
        └── Location
  ├── Footer
  ├── CartModal (Slide-over order drawer)
  └── CartToast (Add-to-cart feedback)
```

---

## ☕ 1. Backend Setup & Run (Django + Python)

### Quick Install Dependencies
```bash
py -m pip install -r requirements.txt
```

### Start the Django Server
```bash
cd backend
py manage.py migrate
py manage.py seed_data
py manage.py runserver
```
- API Base URL: **`http://127.0.0.1:8000/api/`**
- Django Admin: **`http://127.0.0.1:8000/admin/`**

---

## 💻 2. Frontend Setup & Run (React + Vite)

### Install Node.js (If npm is not recognized)
Run in PowerShell:
```powershell
winget install OpenJS.NodeJS -e
```
*(Restart your PowerShell terminal after installation)*

### Start the React App
```bash
cd frontend
npm install
npm run dev
```
Open **`http://localhost:5173`** in your browser.
