from django.contrib import admin
from django.utils.html import format_html
from .models import Category, MenuItem, Review, Reservation

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug', 'display_order', 'item_count')
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name',)
    ordering = ('display_order', 'name')

    def item_count(self, obj):
        return obj.items.count()
    item_count.short_description = "Items"


@admin.action(description="Increase price of selected items by Rs. 10")
def increase_price_10(modeladmin, request, queryset):
    for item in queryset:
        item.price += 10
        item.save()

@admin.action(description="Decrease price of selected items by Rs. 10")
def decrease_price_10(modeladmin, request, queryset):
    for item in queryset:
        if item.price > 10:
            item.price -= 10
            item.save()


@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('image_preview', 'name', 'category', 'price', 'sub_category', 'tag', 'is_available')
    list_filter = ('category', 'is_available', 'sub_category')
    search_fields = ('name', 'description', 'sub_category')
    list_editable = ('price', 'category', 'is_available')
    list_per_page = 25
    actions = [increase_price_10, decrease_price_10]

    fieldsets = (
        ("Basic Information", {
            'fields': ('name', 'category', 'sub_category', 'price', 'tag', 'is_available')
        }),
        ("Media & Visuals", {
            'fields': ('image_url', 'image_display')
        }),
        ("Details & Culinary Notes", {
            'fields': ('description', 'details')
        }),
    )
    readonly_fields = ('image_display',)

    def image_preview(self, obj):
        if obj.image_url:
            return format_html(
                '<img src="{}" style="width: 44px; height: 44px; object-fit: cover; border-radius: 6px; border: 1px solid #ddd;" />',
                obj.image_url
            )
        return format_html('<span style="color: #999;">No Photo</span>')
    image_preview.short_description = "Photo"

    def image_display(self, obj):
        if obj.image_url:
            return format_html(
                '<img src="{}" style="max-width: 320px; max-height: 220px; object-fit: cover; border-radius: 8px; border: 1px solid #ccc;" />',
                obj.image_url
            )
        return "No image preview available"
    image_display.short_description = "Current Photo Preview"


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('author', 'role', 'rating', 'is_approved', 'created_at')
    list_filter = ('rating', 'is_approved')
    search_fields = ('author', 'quote')
    list_editable = ('is_approved',)


@admin.register(Reservation)
class ReservationAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'guest_count', 'reservation_date', 'reservation_time', 'created_at')
    list_filter = ('reservation_date',)
    search_fields = ('name', 'phone', 'email')
