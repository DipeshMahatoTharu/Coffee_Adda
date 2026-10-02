# Testing Patterns

**Analysis Date:** 2026-10-02

## Test Framework

**Current State & Runners:**
- **Frontend Test Runner:** Currently **not configured**. There are no test scripts in `frontend/package.json` (only `"dev"`, `"build"`, and `"preview"`).
- **Backend Test Runner:** Django's built-in test runner (`python manage.py test`) is available via standard Django, but no test suite is currently implemented in `backend/api/tests.py`.
- **Primary Quality Gate:** Production compilation via `npm run build` (`vite build`) serves as the current CI/CD verification gate, enforcing valid JavaScript/TypeScript syntax, module resolution, and asset bundling.

**Verification Commands Currently in Use:**
```bash
# Frontend production build verification
cd frontend
npm run build

# Backend migration & syntax verification
cd backend
python manage.py check
```

## Recommended Testing Architecture

When implementing automated test coverage for future phases, follow these standards:

### 1. Frontend Testing Setup (Recommended: Vitest + React Testing Library)
- **Runner:** `vitest` (natively integrates with `vite.config.js` and shares same plugin pipeline).
- **DOM Assertions:** `@testing-library/react` and `@testing-library/jest-dom`.
- **Package Additions:**
  ```bash
  npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
  ```
- **Configuration (`frontend/vite.config.js`):**
  ```javascript
  /// <reference types="vitest" />
  export default defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.js',
    },
  });
  ```

### 2. Backend Testing Setup (Recommended: pytest-django / Django TestCase)
- **Runner:** `pytest-django` or `python manage.py test api`.
- **HTTP Client:** DRF `APIClient` for testing `/api/menu/`, `/api/reviews/`, and `/api/reservations/`.

## Test File Organization

**Recommended File Structure:**
- Frontend unit/component tests should be co-located or placed in `__tests__`:
  ```text
  frontend/src/
  ├── components/
  │   ├── ProductCommunitySection.jsx
  │   └── __tests__/
  │       ├── ProductCommunitySection.test.jsx
  │       └── ReviewCardPhotos.test.jsx
  ├── data/
  │   └── __tests__/
  │       └── productReviewsData.test.js
  ```
- Backend tests should reside in `backend/api/tests/`:
  ```text
  backend/api/tests/
  ├── __init__.py
  ├── test_models.py
  ├── test_views.py
  └── test_serializers.py
  ```

## Recommended Test Patterns

### Component & In-Card Slider Test Pattern
```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import ReviewCardPhotos from '../ReviewCardPhotos';

describe('ReviewCardPhotos', () => {
  const mockReview = {
    id: 'test-1',
    authorName: 'Aarav Sharma',
    foodPhotos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'],
    foodPhotoCaption: 'Great iced mocha',
  };

  it('renders initial photo and photo counter badge', () => {
    render(<ReviewCardPhotos review={mockReview} onOpenLightbox={vi.fn()} />);
    expect(screen.getByText('1 / 3 Photos')).toBeInTheDocument();
  });

  it('advances to next photo when next arrow is clicked', () => {
    render(<ReviewCardPhotos review={mockReview} onOpenLightbox={vi.fn()} />);
    const nextBtn = screen.getByLabelText('Next photo');
    fireEvent.click(nextBtn);
    expect(screen.getByText('2 / 3 Photos')).toBeInTheDocument();
  });
});
```

### Backend API Endpoint Test Pattern
```python
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from api.models import Category, MenuItem

class MenuItemApiTests(APITestCase):
    def setUp(self):
        self.category = Category.objects.create(name='Coffee Hot', slug='coffee-hot')
        self.item = MenuItem.objects.create(
            category=self.category,
            name='Hot Cappuccino',
            price=220,
            image_url='https://example.com/cap.jpg'
        )

    def test_get_menu_items(self):
        url = reverse('menu-list-create')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['name'], 'Hot Cappuccino')
```

## Mocking & Fixtures

**Test Data Fixtures:**
- Rich reference datasets already exist in `frontend/src/data/menuData.js` and `frontend/src/data/productReviewsData.js`.
- Backend management command `python manage.py seed_data` populates local SQLite database with authentic menu items and reviews.

**Browser API Mocks:**
- `localStorage` mock needed for tests testing `getProductReviews()` and `saveProductReview()`.
- `FileReader` and HTML5 Canvas API mocks needed for tests verifying `compressImage()`.

## Coverage

- **Target Coverage:** None enforced currently.
- **Recommended Goal:** 70%+ coverage on data access layer (`productReviewsData.js`, `api.js`) and critical UI components (`ProductCommunitySection.jsx`, `Menu.jsx`).

---

*Testing analysis: 2026-10-02*
