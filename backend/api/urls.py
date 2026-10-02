from django.urls import path
from .views import (
    api_root,
    CategoryListCreateView,
    CategoryDetailView,
    MenuItemListCreateView,
    MenuItemDetailView,
    ReviewListView,
    ReservationCreateView,
)

urlpatterns = [
    path('', api_root, name='api-root'),
    path('categories/', CategoryListCreateView.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetailView.as_view(), name='category-detail'),
    path('menu/', MenuItemListCreateView.as_view(), name='menu-list'),
    path('menu/<int:pk>/', MenuItemDetailView.as_view(), name='menu-detail'),
    path('reviews/', ReviewListView.as_view(), name='review-list'),
    path('reservations/', ReservationCreateView.as_view(), name='reservation-create'),
]
