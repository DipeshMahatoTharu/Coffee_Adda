from django.core.management.base import BaseCommand
from api.models import Category, MenuItem, Review

class Command(BaseCommand):
    help = 'Seeds initial menu items and customer reviews for Coffee Adda'

    def handle(self, *args, **options):
        self.stdout.write(self.style.NOTICE('Seeding Coffee Adda data...'))

        # 1. Categories
        cat_hot, _ = Category.objects.get_or_create(
            slug='hot',
            defaults={'name': 'Hot Brews', 'display_order': 1}
        )
        cat_cold, _ = Category.objects.get_or_create(
            slug='cold',
            defaults={'name': 'Cold Specials', 'display_order': 2}
        )
        cat_bakery, _ = Category.objects.get_or_create(
            slug='bakery',
            defaults={'name': 'Artisan Bakery', 'display_order': 3}
        )

        self.stdout.write(self.style.SUCCESS('Categories created/verified.'))

        # 2. Menu Items
        items_data = [
            {
                'category': cat_hot,
                'name': 'Cappuccino',
                'price': 280,
                'tag': 'Popular',
                'sub_category': 'Espresso Bar',
                'description': 'Rich, balanced double espresso topped with equal parts velvety steamed milk and airy foam with signature free-pour latte art.',
                'details': ['🥛 Whole / Oat Milk', '🔥 Hot (8oz)'],
                'image_url': 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMjTB-ditOYgxnlYcLY6V54j2iwNiXT1m2XqIew3Bkse2f-SZYiDFV-55N0Et_85yx-V4H22ZM_cPsw8ly8xP-9k3h7gD4LBH6sdAZPstftH2YNWoQcEz3o8r_jyvunOGXrq99_KEHJGzpwC47b1j3IQtTlsJgr7beMTWxLmM8tGpzlK6jzSf7MhyxwYluZO13U_z_-G_A9O1I7ZbGUEbPi1iDi2OYysiTSYK92b117sjC-bO6nXih'
            },
            {
                'category': cat_hot,
                'name': 'Caffè Latte',
                'price': 310,
                'tag': 'Barista Pick',
                'sub_category': 'Silky Smooth',
                'description': 'Gentle espresso combined with generous silky textured micro-foam milk in a sage ceramic cup. Mellow, sweet, and comforting.',
                'details': ['🥛 Customizable', '🔥 Hot (10oz)'],
                'image_url': 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-HydCGjJv_Tr3FhQJ-oXJCh5HT86JQnendHcw2JskFuZGYpXrv_flzBcfbWlH6zpOiIQ8GVrdVtOfZowkSqUtb-XUnOoJs_TRYLs54sZq5lvQ5FexFPcfP15FlUVcc39910_k9wJR6g54EsWJ7u_QaRy1XQxnW1TTBCi8zLh9-K6C1Tbrewg0vkMYqxL8vjmDGvlTQWE3g-docRIf5-duA2vbweeJYjTo-Q8e_Lky7XCmqM_lIrVG'
            },
            {
                'category': cat_cold,
                'name': 'Signature Iced Coffee',
                'price': 340,
                'tag': 'Summer Fav',
                'sub_category': 'Chilled',
                'description': 'Slow-drip 14-hour cold brew layered over condensed milk swirl, served tall on crystal cubes with whole roasted coffee bean garnish.',
                'details': ['🧊 Extra Chilled', '⚡ High Caffeine'],
                'image_url': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNjPKlqKtESQ0TETpEvAJ6w_PSCQk9WgAA1Jgc4uHzJoZ09hVO10rICprzoG_ZB8gMYCO23wsuw-CQV0X0VvgsdhD3Y5eCXnqJGkFbUj2EZ4nLeyMkKTkPZnm92CqElBheeuEToElHeY9b_110tlgan7d383KkzKtSMQTFxQbL1heAHP0ZZ0M4-u3hl2cdUpx7-OUCjgjAi3OT0QSz4-fRL6cH04idkadg3soDM8gnkUMfW_UD4cSA'
            },
            {
                'category': cat_bakery,
                'name': 'Artisan Butter Croissant',
                'price': 220,
                'tag': 'Fresh Baked',
                'sub_category': 'Pastry',
                'description': 'Flaky, multi-layered golden French pastry baked fresh daily at 6:30 AM with creamy alpine butter.',
                'details': ['🥐 Hand-rolled', '✨ Warm Served'],
                'image_url': 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
            },
            {
                'category': cat_cold,
                'name': 'Cascara Sparkling Cold Brew',
                'price': 330,
                'tag': 'Specialty',
                'sub_category': 'Refresher',
                'description': 'Infused with organic coffee cherry peel, tonic water, and a twist of local fresh lime over crystal ice.',
                'details': ['🍋 Citrus Zest', '🧊 Light Fizz'],
                'image_url': 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80'
            },
            {
                'category': cat_bakery,
                'name': 'Chocolate Babka Brioche',
                'price': 260,
                'tag': 'Sweet Treat',
                'sub_category': 'House Special',
                'description': 'Braided sweet yeast bread swirled with 70% dark Himalayan cocoa and fragrant Ceylon cinnamon syrup.',
                'details': ['🍫 Dark Chocolate', '🍯 Honey Glaze'],
                'image_url': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
            }
        ]

        for item_data in items_data:
            obj, created = MenuItem.objects.get_or_create(
                name=item_data['name'],
                defaults=item_data
            )
            if created:
                self.stdout.write(f"  + Created item: {obj.name}")
            else:
                self.stdout.write(f"  * Item already exists: {obj.name}")

        # 3. Reviews
        reviews_data = [
            {
                'author': 'Aarav Sharma',
                'role': 'Local Guide • 18 reviews',
                'rating': 5,
                'quote': 'Coffee Adda is easily the best cafe in the Budhanilkantha area! Their cappuccino has the silkiest micro-foam and the latte art is top tier. A tranquil oasis to read or work on your laptop.',
                'initials': 'AS',
                'avatar_bg': 'bg-brand-sage text-brand-forest'
            },
            {
                'author': 'Pooja Thapa',
                'role': 'Regular Patron • Budhanilkantha',
                'rating': 5,
                'quote': 'Such a cosy ambiance with plenty of natural greenery and warm wood tables. The iced cold brew with condensed milk on a sunny afternoon is pure heaven. Friendly baristas too!',
                'initials': 'PT',
                'avatar_bg': 'bg-amber-100 text-amber-900'
            },
            {
                'author': 'Rohan Karki',
                'role': 'Digital Nomad',
                'rating': 5,
                'quote': 'Fair prices, superb espresso consistency, and wonderful aesthetic vibes. The pastry was warm and buttery. Highly recommended if you are heading towards Shivapuri or living nearby!',
                'initials': 'RK',
                'avatar_bg': 'bg-emerald-100 text-emerald-900'
            }
        ]

        for rev in reviews_data:
            Review.objects.get_or_create(
                author=rev['author'],
                defaults=rev
            )

        self.stdout.write(self.style.SUCCESS('Successfully seeded all Coffee Adda data!'))
