from django.urls import path
from .views import (
    api_root,
    CategoryListCreateView,
    MenuItemListCreateView,
    ReviewListView,
    ReservationCreateView,
)

urlpatterns = [
    path('', api_root, name='api-root'),
    path('categories/', CategoryListCreateView.as_view(), name='category-list'),
    path('menu/', MenuItemListCreateView.as_view(), name='menu-list'),
    path('reviews/', ReviewListView.as_view(), name='review-list'),
    path('reservations/', ReservationCreateView.as_view(), name='reservation-create'),
]
