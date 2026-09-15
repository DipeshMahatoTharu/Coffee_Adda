from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ['display_order', 'name']

    def __str__(self):
        return self.name


class MenuItem(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='items')
    name = models.CharField(max_length=200)
    price = models.PositiveIntegerField(help_text="Price in Nepalese Rupees (NPR)")
    tag = models.CharField(max_length=50, blank=True, help_text="e.g. Popular, Barista Pick, Summer Fav")
    sub_category = models.CharField(max_length=100, blank=True, help_text="e.g. Espresso Bar, Silky Smooth, Chilled")
    description = models.TextField()
    image_url = models.URLField(max_length=1000)
    details = models.JSONField(default=list, blank=True, help_text="Array of attribute tags, e.g. ['🥛 Whole / Oat Milk', '🔥 Hot (8oz)']")
    is_available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['category', 'name']

    def __str__(self):
        return f"{self.name} (Rs. {self.price})"


class Review(models.Model):
    author = models.CharField(max_length=150)
    role = models.CharField(max_length=150, default="Guest")
    rating = models.PositiveIntegerField(default=5)
    quote = models.TextField()
    initials = models.CharField(max_length=10, blank=True)
    avatar_bg = models.CharField(max_length=100, default="bg-brand-sage text-brand-forest")
    is_approved = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.author} ({self.rating}★)"


class Reservation(models.Model):
    name = models.CharField(max_length=150)
    phone = models.CharField(max_length=50)
    email = models.EmailField(blank=True)
    guest_count = models.PositiveIntegerField(default=2)
    reservation_date = models.DateField()
    reservation_time = models.TimeField()
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Reservation for {self.name} on {self.reservation_date} at {self.reservation_time}"
