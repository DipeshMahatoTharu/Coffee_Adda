from rest_framework import serializers
from .models import Category, MenuItem, Review, Reservation

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'display_order']


class MenuItemSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.slug', read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True
    )
    subCategory = serializers.CharField(source='sub_category', required=False, allow_blank=True)
    image = serializers.URLField(source='image_url')

    class Meta:
        model = MenuItem
        fields = [
            'id',
            'name',
            'category',
            'category_id',
            'price',
            'tag',
            'subCategory',
            'description',
            'details',
            'image',
            'is_available',
        ]


class ReviewSerializer(serializers.ModelSerializer):
    avatarBg = serializers.CharField(source='avatar_bg', required=False)

    class Meta:
        model = Review
        fields = [
            'id',
            'author',
            'role',
            'rating',
            'quote',
            'initials',
            'avatarBg',
            'created_at',
        ]


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
