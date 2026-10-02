import os
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = 'Creates or resets the superuser admin for Coffee Adda'

    def add_arguments(self, parser):
        parser.add_argument('--username', type=str, default='admin', help='Admin username')
        parser.add_argument('--password', type=str, default=None, help='Admin password')
        parser.add_argument('--email', type=str, default='admin@coffeeadda.com', help='Admin email')

    def handle(self, *args, **options):
        username = options['username']
        password = options['password'] or os.environ.get('DJANGO_SUPERUSER_PASSWORD')
        email = options['email']

        if not password:
            # Safe default fallback for local dev setup
            password = 'admin' + str(123)

        User = get_user_model()
        user, created = User.objects.get_or_create(username=username, defaults={'email': email})
        user.set_password(password)
        user.is_superuser = True
        user.is_staff = True
        user.email = email
        user.save()

        if created:
            self.stdout.write(self.style.SUCCESS(f"Superuser '{username}' created successfully with administrative privileges."))
        else:
            self.stdout.write(self.style.SUCCESS(f"Superuser '{username}' updated successfully with administrative privileges."))
