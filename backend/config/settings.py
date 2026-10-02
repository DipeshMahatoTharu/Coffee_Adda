"""
Django settings for coffee_adda_backend project.
"""

from pathlib import Path
import os
from dotenv import load_dotenv

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Load environment variables from backend/.env or root .env
load_dotenv(BASE_DIR.parent / '.env', override=True)
load_dotenv(BASE_DIR / '.env', override=True)

from django.core.exceptions import ImproperlyConfigured

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.environ.get('DEBUG', 'True').lower() in ('true', '1', 'yes')

# SECURITY WARNING: keep the secret key used in production secret!
# Production deployments must provide a unique SECRET_KEY via deployment configuration.
INSECURE_DEV_SECRET_KEY = 'django-insecure-coffee-adda-budhanilkantha-artisan-roast-key'
SECRET_KEY = os.environ.get('SECRET_KEY')

if not SECRET_KEY:
    if DEBUG:
        SECRET_KEY = INSECURE_DEV_SECRET_KEY
    else:
        raise ImproperlyConfigured(
            'The SECRET_KEY environment variable must be set in production to protect cryptographic signatures.'
        )
elif not DEBUG and SECRET_KEY == INSECURE_DEV_SECRET_KEY:
    raise ImproperlyConfigured(
        'Insecure default SECRET_KEY detected in production. Set a unique SECRET_KEY in your deployment environment.'
    )

# Restrict accepted hosts in production to prevent Host header poisoning.
# Wildcard '*' is never permitted in production environments.
default_hosts = 'localhost,127.0.0.1,[::1],coffee-adda.vercel.app'
raw_hosts = os.environ.get('ALLOWED_HOSTS', default_hosts)
ALLOWED_HOSTS = [h.strip() for h in raw_hosts.split(',') if h.strip()]

if not DEBUG:
    # Strictly disallow wildcard in production
    ALLOWED_HOSTS = [h for h in ALLOWED_HOSTS if h != '*']
    if not ALLOWED_HOSTS:
        raise ImproperlyConfigured(
            'ALLOWED_HOSTS must contain specific domain names in production when DEBUG=False.'
        )

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # Third party apps
    'corsheaders',
    'rest_framework',

    # Local apps
    'api.apps.ApiConfig',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',  # Top of middleware for CORS handling
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'
ASGI_APPLICATION = 'config.asgi.application'

# Database Configuration
# Preserves configurable access to PostgreSQL (for production & existing databases)
# and SQLite (for local development or testing).
DATABASE_URL = os.environ.get('DATABASE_URL')
db_engine = os.environ.get('DB_ENGINE', '').lower().strip()

if DATABASE_URL:
    try:
        import dj_database_url
        DATABASES = {
            'default': dj_database_url.parse(
                DATABASE_URL,
                conn_max_age=int(os.environ.get('DB_CONN_MAX_AGE', '600'))
            )
        }
    except ImportError:
        from urllib.parse import urlparse
        url = urlparse(DATABASE_URL)
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.postgresql' if url.scheme in ('postgres', 'postgresql') else url.scheme,
                'NAME': url.path.lstrip('/'),
                'USER': url.username or '',
                'PASSWORD': url.password or '',
                'HOST': url.hostname or '',
                'PORT': str(url.port or '5432'),
                'CONN_MAX_AGE': int(os.environ.get('DB_CONN_MAX_AGE', '600')),
            }
        }
elif 'postgresql' in db_engine:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': os.environ.get('DB_NAME', 'coffee_adda_db'),
            'USER': os.environ.get('DB_USER', 'postgres'),
            'PASSWORD': os.environ.get('DB_PASSWORD', ''),
            'HOST': os.environ.get('DB_HOST', 'localhost'),
            'PORT': os.environ.get('DB_PORT', '5432'),
            'CONN_MAX_AGE': int(os.environ.get('DB_CONN_MAX_AGE', '600')),
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Asia/Kathmandu'
USE_I18N = True
USE_TZ = True

# Static files (CSS, JavaScript, Images)
STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

MEDIA_URL = 'media/'
MEDIA_ROOT = BASE_DIR / 'media'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# CORS Configuration for React frontend
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:3000',
]

# Django REST Framework Configuration
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.FormParser',
        'rest_framework.parsers.MultiPartParser',
    ],
}
