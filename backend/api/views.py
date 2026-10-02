from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Category, MenuItem, Review, Reservation
from .serializers import (
    CategorySerializer,
    MenuItemSerializer,
    ReviewSerializer,
    ReservationSerializer
)

@api_view(['GET'])
def api_root(request):
    return Response({
        'message': 'Welcome to Coffee Adda (Budhanilkantha) API',
        'endpoints': {
            'menu': '/api/menu/',
            'categories': '/api/categories/',
            'reviews': '/api/reviews/',
            'reservations': '/api/reservations/',
        }
    })

class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class MenuItemListCreateView(generics.ListCreateAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        queryset = super().get_queryset()
        category_slug = self.request.query_params.get('category')
        if category_slug and category_slug != 'all':
            queryset = queryset.filter(category__slug=category_slug)
        available_only = self.request.query_params.get('available')
        if available_only == 'true':
            queryset = queryset.filter(is_available=True)
        return queryset

class MenuItemDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class ReviewListView(generics.ListCreateAPIView):
    queryset = Review.objects.filter(is_approved=True)
    serializer_class = ReviewSerializer

class ReservationCreateView(generics.CreateAPIView):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
