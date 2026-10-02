import React, { useState, useMemo, useEffect } from 'react';
import {
  Lock,
  Key,
  LogOut,
  Plus,
  Trash2,
  Edit3,
  Search,
  ArrowLeft,
  Camera,
  Check,
  AlertCircle,
  RotateCcw,
  Coffee,
  X,
  Upload,
  ChevronDown,
  Save,
  DollarSign,
  Tag,
  Eye,
  EyeOff,
  ShieldCheck,
  ShieldAlert,
  SlidersHorizontal,
} from 'lucide-react';
import {
  menuCategories,
  getStoredMenuItems,
  saveStoredMenuItems,
  resetStoredMenuItems,
  getFallbackImage,
} from '../data/menuData';

const SESSION_STORAGE_KEY = 'coffee_adda_staff_session';
const CUSTOM_HASH_KEY = 'coffee_adda_custom_admin_hash';
const LOCKOUT_KEY = 'coffee_adda_admin_lockout_until';
const ATTEMPTS_KEY = 'coffee_adda_admin_failed_attempts';
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 60 * 1000;
const SESSION_DURATION_MS = 2 * 60 * 60 * 1000;

// Precomputed SHA-256 hashes of authorized administrative credentials
const AUTHORIZED_STAFF_HASHES = [
  '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9',
  '24ac1f0a2a11291920cd6981863c7d2cd47a19700498f88111f0b264b207c7ad',
  'e255eec1151b0717d2b6c3fd116c146b3fcf3163dd1551b5e535f074c4b5c408',
];

async function sha256Hex(str) {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuf = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash).toString(16);
}

function checkSessionActive() {
  try {
    const raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return false;
    const session = JSON.parse(raw);
    return Boolean(session && session.expiresAt && Date.now() < session.expiresAt);
  } catch {
    return false;
  }
}

export default function AdminPage({ onNavigate }) {
  // Authentication & Security state
  const [isAuthenticated, setIsAuthenticated] = useState(checkSessionActive);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);
  const [lockoutRemaining, setLockoutRemaining] = useState(0);

  // Password change modal state
  const [securityModalOpen, setSecurityModalOpen] = useState(false);
  const [changePasswordForm, setChangePasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [changePasswordShow, setChangePasswordShow] = useState({
    current: false,
    next: false,
    confirm: false,
  });
  const [changePasswordError, setChangePasswordError] = useState('');

  // Menu items state
  const [items, setItems] = useState(getStoredMenuItems);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState(null);

  // Edit / Create modal state
  const [editingItem, setEditingItem] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [deleteConfirmItem, setDeleteConfirmItem] = useState(null);
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: 'hot-beverages',
    subCategory: 'Espresso Bar',
    price: 150,
    tag: '',
    dietary: 'veg',
    description: '',
    details: '',
    image: '',
    alt: '',
  });

  const showNotification = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => {
      setNotification(null);
    }, 3500);
  };

  // Sync with storage if updated elsewhere
  useEffect(() => {
    const handleUpdate = () => {
      setItems(getStoredMenuItems());
    };
    window.addEventListener('coffee_adda_menu_updated', handleUpdate);
    return () => window.removeEventListener('coffee_adda_menu_updated', handleUpdate);
  }, []);

  // Track brute-force lockout countdown
  useEffect(() => {
    const updateLockout = () => {
      const until = Number(sessionStorage.getItem(LOCKOUT_KEY) || 0);
      const remaining = Math.max(0, Math.ceil((until - Date.now()) / 1000));
      setLockoutRemaining(remaining);
    };
    updateLockout();
    const interval = setInterval(updateLockout, 1000);
    return () => clearInterval(interval);
  }, []);

  // Periodic session validity check
  useEffect(() => {
    if (!isAuthenticated) return;
    const interval = setInterval(() => {
      if (!checkSessionActive()) {
        setIsAuthenticated(false);
        sessionStorage.removeItem(SESSION_STORAGE_KEY);
        showNotification('Session expired for security. Please sign in again.', 'info');
      }
    }, 30000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  // Handle Admin Login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (lockoutRemaining > 0) return;
    if (!username.trim() || !password) {
      setLoginError('Please enter both staff username and password.');
      return;
    }

    setIsSubmittingLogin(true);
    try {
      const hashedEnteredPassword = await sha256Hex(password);
      const customHash = localStorage.getItem(CUSTOM_HASH_KEY);

      const isUserMatch = username.trim().toLowerCase() === 'admin';
      const isPasswordMatch =
        AUTHORIZED_STAFF_HASHES.includes(hashedEnteredPassword) ||
        (customHash && hashedEnteredPassword === customHash);

      if (isUserMatch && isPasswordMatch) {
        const sessionPayload = {
          authenticated: true,
          user: 'admin',
          createdAt: Date.now(),
          expiresAt: Date.now() + SESSION_DURATION_MS,
        };
        sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionPayload));
        sessionStorage.removeItem(ATTEMPTS_KEY);
        sessionStorage.removeItem(LOCKOUT_KEY);
        setIsAuthenticated(true);
        setLoginError('');
        setPassword('');
        setShowPassword(false);
        showNotification('Welcome back, Coffee Adda Staff Administrator');
      } else {
        const currentAttempts = Number(sessionStorage.getItem(ATTEMPTS_KEY) || 0) + 1;
        sessionStorage.setItem(ATTEMPTS_KEY, String(currentAttempts));

        if (currentAttempts >= MAX_FAILED_ATTEMPTS) {
          const lockEnd = Date.now() + LOCKOUT_DURATION_MS;
          sessionStorage.setItem(LOCKOUT_KEY, String(lockEnd));
          sessionStorage.setItem(ATTEMPTS_KEY, '0');
          setLockoutRemaining(60);
          setLoginError('Security lockout active: Too many failed attempts. Try again in 60 seconds.');
        } else {
          const attemptsLeft = MAX_FAILED_ATTEMPTS - currentAttempts;
          setLoginError(`Invalid staff credentials. ${attemptsLeft} attempt(s) remaining before security lockout.`);
        }
        setPassword('');
      }
    } catch {
      setLoginError('Authentication service encountered an error. Please try again.');
    } finally {
      setIsSubmittingLogin(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setShowPassword(false);
    showNotification('Signed out securely from Staff Admin');
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setChangePasswordError('');

    if (!changePasswordForm.currentPassword) {
      setChangePasswordError('Please enter your current password.');
      return;
    }
    if (changePasswordForm.newPassword.length < 8) {
      setChangePasswordError('New password must be at least 8 characters long.');
      return;
    }
    if (!/[0-9]/.test(changePasswordForm.newPassword) || !/[a-zA-Z]/.test(changePasswordForm.newPassword)) {
      setChangePasswordError('New password must contain both letters and numbers.');
      return;
    }
    if (changePasswordForm.newPassword !== changePasswordForm.confirmPassword) {
      setChangePasswordError('New passwords do not match.');
      return;
    }

    try {
      const currentHashed = await sha256Hex(changePasswordForm.currentPassword);
      const customHash = localStorage.getItem(CUSTOM_HASH_KEY);
      const isCurrentValid =
        AUTHORIZED_STAFF_HASHES.includes(currentHashed) ||
        (customHash && currentHashed === customHash);

      if (!isCurrentValid) {
        setChangePasswordError('Current password is incorrect.');
        return;
      }

      const newHash = await sha256Hex(changePasswordForm.newPassword);
      localStorage.setItem(CUSTOM_HASH_KEY, newHash);
      setSecurityModalOpen(false);
      setChangePasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setChangePasswordShow({ current: false, next: false, confirm: false });
      showNotification('Admin password updated successfully. The new password is now active.');
    } catch {
      setChangePasswordError('Failed to process password change securely.');
    }
  };

  // Quick price adjuster
  const handleQuickPriceChange = (item, delta) => {
    const newPrice = Math.max(10, item.price + delta);
    const updated = items.map((i) => (i.id === item.id ? { ...i, price: newPrice } : i));
    setItems(updated);
    saveStoredMenuItems(updated);
    showNotification(`Updated price of ${item.name} to Rs. ${newPrice}`);
  };

  // Open edit modal
  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setIsCreatingNew(false);
    setFormData({
      id: item.id,
      name: item.name,
      category: item.category || 'hot-beverages',
      subCategory: item.subCategory || '',
      price: item.price || 100,
      tag: item.tag || '',
      dietary: item.dietary || 'veg',
      description: item.description || '',
      details: Array.isArray(item.details) ? item.details.join(', ') : '',
      image: item.image || '',
      alt: item.alt || item.name,
    });
  };

  // Open new item modal
  const handleOpenCreate = () => {
    const newId = `item-${Date.now()}`;
    setEditingItem(null);
    setIsCreatingNew(true);
    setFormData({
      id: newId,
      name: '',
      category: selectedCategory !== 'all' ? selectedCategory : 'hot-beverages',
      subCategory: 'Barista Special',
      price: 150,
      tag: 'New',
      dietary: 'veg',
      description: '',
      details: 'Freshly Prepared, Signature Recipe',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
      alt: '',
    });
  };

  // Image file upload handler
  const handleImageFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Photo is too large. Please select an image under 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target?.result;
      if (typeof base64 === 'string') {
        setFormData((prev) => ({ ...prev, image: base64 }));
        showNotification('Photo uploaded and ready to save');
      }
    };
    reader.readAsDataURL(file);
  };

  // Save form data (create or edit)
  const handleSaveItem = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please provide an item name.');
      return;
    }

    const parsedDetails = formData.details
      .split(',')
      .map((d) => d.trim())
      .filter(Boolean);

    const newItemObj = {
      id: formData.id,
      name: formData.name.trim(),
      category: formData.category,
      subCategory: formData.subCategory.trim(),
      price: Number(formData.price) || 0,
      tag: formData.tag.trim(),
      dietary: formData.dietary,
      description: formData.description.trim(),
      details: parsedDetails,
      image: formData.image || getFallbackImage(formData.category),
      alt: formData.alt.trim() || formData.name.trim(),
    };

    let updatedList;
    if (isCreatingNew) {
      updatedList = [newItemObj, ...items];
      showNotification(`Added new item: ${newItemObj.name}`);
    } else {
      updatedList = items.map((i) => (i.id === newItemObj.id ? newItemObj : i));
      showNotification(`Updated item: ${newItemObj.name}`);
    }

    setItems(updatedList);
    saveStoredMenuItems(updatedList);
    setEditingItem(null);
    setIsCreatingNew(false);
  };

  // Delete item
  const handleConfirmDelete = () => {
    if (!deleteConfirmItem) return;
    const updated = items.filter((i) => i.id !== deleteConfirmItem.id);
    setItems(updated);
    saveStoredMenuItems(updated);
    showNotification(`Deleted ${deleteConfirmItem.name} from menu`);
    setDeleteConfirmItem(null);
  };

  // Reset to default menu
  const handleResetToDefault = () => {
    const restored = resetStoredMenuItems();
    setItems(restored);
    setResetConfirmOpen(false);
    showNotification('Menu reset to authentic official chalkboard items (157 items)');
  };

  // Filtered items
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        item.name.toLowerCase().includes(q) ||
        (item.subCategory && item.subCategory.toLowerCase().includes(q)) ||
        (item.description && item.description.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-cream/80 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-brand-gold/30 p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-brand-forest text-brand-gold rounded-2xl flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-brand-forest">
              Coffee Adda Staff Admin
            </h1>
            <p className="text-sm text-neutral-600">
              Sign in to manage menu items, update photos, adjust prices, and manage categories.
            </p>
          </div>

          {lockoutRemaining > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-center gap-2.5">
              <ShieldAlert className="w-5 h-5 shrink-0 text-amber-600" />
              <div>
                <p className="font-semibold">Security Lockout Active</p>
                <p className="text-amber-700">Please wait {lockoutRemaining}s before attempting to sign in again.</p>
              </div>
            </div>
          )}

          {loginError && lockoutRemaining === 0 && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter staff username"
                  disabled={lockoutRemaining > 0 || isSubmittingLogin}
                  autoComplete="username"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-forest/30 focus:border-brand-forest text-sm disabled:bg-neutral-100 disabled:cursor-not-allowed"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  disabled={lockoutRemaining > 0 || isSubmittingLogin}
                  autoComplete="current-password"
                  spellCheck="false"
                  className="w-full pl-4 pr-11 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-forest/30 focus:border-brand-forest text-sm disabled:bg-neutral-100 disabled:cursor-not-allowed"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={lockoutRemaining > 0 || isSubmittingLogin}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-brand-forest transition-colors p-1"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-500 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>SHA-256 encrypted verification</span>
              </span>
              <span>5 max attempts</span>
            </div>

            <button
              type="submit"
              disabled={lockoutRemaining > 0 || isSubmittingLogin}
              className="w-full py-3 bg-brand-forest hover:bg-brand-dark text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 disabled:bg-neutral-300 disabled:cursor-not-allowed"
            >
              <Key className="w-4 h-4 text-brand-gold" />
              <span>
                {isSubmittingLogin
                  ? 'Verifying...'
                  : lockoutRemaining > 0
                  ? `Locked (${lockoutRemaining}s)`
                  : 'Sign In to Admin Portal'}
              </span>
            </button>
          </form>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-xs text-neutral-500 hover:text-brand-forest inline-flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Coffee Adda Website</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // DASHBOARD SCREEN
  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      {/* Toast notification */}
      {notification && (
        <div className="fixed top-5 right-5 z-50 bg-brand-forest text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-brand-gold/40 animate-fade-in">
          <Check className="w-5 h-5 text-brand-gold" />
          <span className="text-sm font-medium">{notification.msg}</span>
        </div>
      )}

      {/* Top Admin Navbar */}
      <header className="bg-brand-forest text-white sticky top-0 z-40 border-b border-brand-gold/30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white"
              title="Return to website"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold font-bold">
                <Coffee className="w-4 h-4" />
              </div>
              <div>
                <h1 className="font-serif font-bold text-base sm:text-lg leading-tight">
                  Coffee Adda Admin
                </h1>
                <p className="text-[11px] text-brand-gold/80">Menu Management Portal</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleOpenCreate}
              className="px-3.5 py-1.5 rounded-lg bg-brand-gold text-brand-dark hover:bg-amber-400 font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-sm transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Item</span>
            </button>

            <button
              onClick={() => setResetConfirmOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
              title="Reset menu to default"
            >
              <RotateCcw className="w-3.5 h-3.5 text-brand-gold" />
              <span className="hidden md:inline">Reset Menu</span>
            </button>

            <button
              onClick={() => {
                setSecurityModalOpen(true);
                setChangePasswordError('');
              }}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
              title="Security & Password Settings"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span className="hidden lg:inline">Security</span>
            </button>

            <button
              onClick={handleLogout}
              className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-200 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        {/* Stat badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
            <span className="text-xs text-neutral-500 font-medium">Total Items</span>
            <p className="text-2xl font-bold text-brand-forest mt-1">{items.length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
            <span className="text-xs text-neutral-500 font-medium">Active Categories</span>
            <p className="text-2xl font-bold text-brand-forest mt-1">{menuCategories.length - 1}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
            <span className="text-xs text-neutral-500 font-medium">Filtered Shown</span>
            <p className="text-2xl font-bold text-emerald-700 mt-1">{filteredItems.length}</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm">
            <span className="text-xs text-neutral-500 font-medium">Live Storage</span>
            <p className="text-xs font-bold text-brand-forest mt-2 inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Synchronized
            </p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-3 text-neutral-400" />
              <input
                type="text"
                placeholder="Search coffee or food items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-forest/20 focus:border-brand-forest"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-neutral-400 hover:text-neutral-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Dropdown for quick jump */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-neutral-500 font-semibold whitespace-nowrap">Filter:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-56 px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-forest/20 focus:border-brand-forest font-medium text-neutral-800"
              >
                {menuCategories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Category Badges */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {menuCategories.map((c) => {
              const active = selectedCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap transition-colors ${
                    active
                      ? 'bg-brand-forest text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Table / Grid */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-neutral-500 font-semibold uppercase tracking-wider px-2">
            <span>Showing {filteredItems.length} items</span>
            <span>Price adjustments update live on website</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => {
              const catObj = menuCategories.find((c) => c.id === item.category);
              const catName = catObj ? catObj.label : item.category;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-neutral-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
                >
                  {/* Top card info */}
                  <div className="p-4 flex gap-3.5">
                    {/* Item Image with hover change photo icon */}
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 border border-neutral-200 bg-neutral-100 group">
                      <img
                        src={item.image || getFallbackImage(item.category)}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleOpenEdit(item)}
                        className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                        title="Update Photo"
                      >
                        <Camera className="w-5 h-5 text-brand-gold" />
                      </button>
                    </div>

                    {/* Details */}
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="font-bold text-sm text-neutral-900 truncate leading-snug">
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-brand-sage/60 text-brand-forest shrink-0">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-neutral-500">
                        <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-[11px] font-medium text-neutral-700">
                          {catName}
                        </span>
                        {item.subCategory && (
                          <span className="text-[11px] text-neutral-400 truncate">
                            • {item.subCategory}
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                        {item.description || 'No description provided.'}
                      </p>
                    </div>
                  </div>

                  {/* Bottom action toolbar */}
                  <div className="bg-neutral-50 px-4 py-2.5 border-t border-neutral-100 flex items-center justify-between gap-2">
                    {/* Quick Price Adjuster */}
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleQuickPriceChange(item, -10)}
                        className="w-7 h-7 rounded bg-white border border-neutral-300 text-neutral-700 font-bold hover:bg-neutral-100 active:scale-95 transition-all text-xs flex items-center justify-center"
                        title="Decrease price by Rs. 10"
                      >
                        -10
                      </button>

                      <span className="font-bold text-sm text-brand-forest min-w-16 text-center tabular-nums">
                        Rs. {item.price}
                      </span>

                      <button
                        onClick={() => handleQuickPriceChange(item, 10)}
                        className="w-7 h-7 rounded bg-white border border-neutral-300 text-neutral-700 font-bold hover:bg-neutral-100 active:scale-95 transition-all text-xs flex items-center justify-center"
                        title="Increase price by Rs. 10"
                      >
                        +10
                      </button>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleOpenEdit(item)}
                        className="px-2.5 py-1.5 rounded-lg bg-brand-forest/10 hover:bg-brand-forest/20 text-brand-forest font-semibold text-xs flex items-center gap-1 transition-colors"
                        title="Edit all fields"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => setDeleteConfirmItem(item)}
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="Delete item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-white rounded-xl border border-neutral-200">
              <Coffee className="w-10 h-10 text-neutral-300 mx-auto mb-2" />
              <p className="text-neutral-600 font-medium">No menu items match your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs text-brand-forest font-bold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </main>

      {/* EDIT / CREATE MODAL */}
      {(editingItem || isCreatingNew) && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-neutral-200 max-h-[92vh] flex flex-col my-auto">
            {/* Modal Header */}
            <div className="p-5 border-b border-neutral-200 flex items-center justify-between shrink-0 bg-brand-forest text-white rounded-t-2xl">
              <div>
                <h2 className="font-serif font-bold text-lg leading-tight">
                  {isCreatingNew ? 'Add New Menu Item' : `Edit: ${formData.name}`}
                </h2>
                <p className="text-xs text-brand-gold/90">
                  Update photo, price, category type, and descriptions.
                </p>
              </div>
              <button
                onClick={() => {
                  setEditingItem(null);
                  setIsCreatingNew(false);
                }}
                className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveItem} className="p-6 space-y-4 overflow-y-auto flex-1">
              {/* Photo Upload & Preview Section */}
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-3">
                <span className="block text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Menu Item Photo
                </span>

                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 rounded-xl border border-neutral-300 bg-white overflow-hidden shrink-0 shadow-sm relative">
                    <img
                      src={formData.image || getFallbackImage(formData.category)}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-2 flex-1">
                    <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-forest hover:bg-brand-dark text-white text-xs font-bold cursor-pointer transition-colors shadow-sm">
                      <Upload className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Upload Photo from Device</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageFileUpload}
                        className="hidden"
                      />
                    </label>

                    <div className="text-[11px] text-neutral-500">
                      Or paste an online image URL:
                    </div>
                    <input
                      type="url"
                      placeholder="https://example.com/photo.jpg"
                      value={formData.image}
                      onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                      className="w-full px-3 py-1.5 text-xs rounded-lg border border-neutral-300 focus:outline-none focus:border-brand-forest font-mono text-neutral-700"
                    />
                  </div>
                </div>
              </div>

              {/* Name & Price */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Honey Sea Salt Cortado"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:border-brand-forest font-medium text-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Price (NPR) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-xs font-bold text-neutral-400">Rs.</span>
                    <input
                      type="number"
                      required
                      min="10"
                      step="5"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:border-brand-forest font-bold text-brand-forest"
                    />
                  </div>
                </div>
              </div>

              {/* Category / Type & Subcategory */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Category Type *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:border-brand-forest font-medium text-neutral-900"
                  >
                    {menuCategories
                      .filter((c) => c.id !== 'all')
                      .map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.label}
                        </option>
                      ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Sub-Category
                  </label>
                  <input
                    type="text"
                    value={formData.subCategory}
                    onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
                    placeholder="e.g. Espresso Bar, Silky Smooth"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:border-brand-forest text-sm text-neutral-800"
                  />
                </div>
              </div>

              {/* Tag & Dietary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Badge Tag (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.tag}
                    onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                    placeholder="e.g. Popular, Barista Pick, Summer Fav"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:border-brand-forest text-sm text-neutral-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Dietary Classification
                  </label>
                  <select
                    value={formData.dietary}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:border-brand-forest text-sm text-neutral-800"
                  >
                    <option value="veg">Veg (Vegetarian)</option>
                    <option value="egg">Contains Egg</option>
                    <option value="non-veg">Non-Veg</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Description
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Provide tasting notes, brewing style, and ingredients..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:border-brand-forest leading-relaxed text-neutral-800"
                />
              </div>

              {/* Details Tags */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">
                  Attribute Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Pure Arabica, Hot (8oz), Whole Milk"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:border-brand-forest text-sm text-neutral-800"
                />
                <span className="text-[11px] text-neutral-400">
                  Separated by comma, e.g. "Pure Arabica, Hot (8oz)"
                </span>
              </div>

              {/* Modal Action Buttons */}
              <div className="pt-4 border-t border-neutral-200 flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setEditingItem(null);
                    setIsCreatingNew(false);
                  }}
                  className="px-4 py-2 rounded-lg border border-neutral-300 hover:bg-neutral-100 font-semibold text-xs text-neutral-700 transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-brand-forest hover:bg-brand-dark text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-colors"
                >
                  <Save className="w-4 h-4 text-brand-gold" />
                  <span>{isCreatingNew ? 'Create Menu Item' : 'Save Changes'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION MODAL */}
      {deleteConfirmItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl border border-neutral-200">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="font-bold text-base text-neutral-900">
                Delete "{deleteConfirmItem.name}"?
              </h3>
              <p className="text-xs text-neutral-500">
                This item will be immediately removed from the live website menu. You can reset to default anytime if needed.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setDeleteConfirmItem(null)}
                className="w-1/2 py-2 rounded-lg border border-neutral-300 text-neutral-700 font-semibold text-xs hover:bg-neutral-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="w-1/2 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors shadow-sm"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RESET TO DEFAULT MODAL */}
      {resetConfirmOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl border border-neutral-200">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <RotateCcw className="w-6 h-6" />
            </div>

            <div className="text-center space-y-1">
              <h3 className="font-bold text-base text-neutral-900">
                Reset to Authentic Chalkboard Menu?
              </h3>
              <p className="text-xs text-neutral-500">
                This will restore all 157 official items, standard prices, and authentic descriptions transcribed from the Budhanilkantha café boards.
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setResetConfirmOpen(false)}
                className="w-1/2 py-2 rounded-lg border border-neutral-300 text-neutral-700 font-semibold text-xs hover:bg-neutral-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleResetToDefault}
                className="w-1/2 py-2 rounded-lg bg-brand-forest hover:bg-brand-dark text-white font-bold text-xs transition-colors shadow-sm"
              >
                Reset Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECURITY / CHANGE PASSWORD MODAL */}
      {securityModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl border border-neutral-200">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand-forest/10 text-brand-forest flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-brand-forest" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-neutral-900">Security & Password</h3>
                  <p className="text-xs text-neutral-500">Update staff admin credentials</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSecurityModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-700 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {changePasswordError && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{changePasswordError}</span>
              </div>
            )}

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={changePasswordShow.current ? 'text' : 'password'}
                    value={changePasswordForm.currentPassword}
                    onChange={(e) =>
                      setChangePasswordForm((prev) => ({ ...prev, currentPassword: e.target.value }))
                    }
                    placeholder="Enter current password"
                    className="w-full pl-4 pr-11 py-2 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-forest/30"
                    required
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setChangePasswordShow((prev) => ({ ...prev, current: !prev.current }))
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-brand-forest p-1"
                  >
                    {changePasswordShow.current ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  New Password (min. 8 characters, letters & numbers)
                </label>
                <div className="relative">
                  <input
                    type={changePasswordShow.next ? 'text' : 'password'}
                    value={changePasswordForm.newPassword}
                    onChange={(e) =>
                      setChangePasswordForm((prev) => ({ ...prev, newPassword: e.target.value }))
                    }
                    placeholder="Enter new strong password"
                    className="w-full pl-4 pr-11 py-2 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-forest/30"
                    required
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setChangePasswordShow((prev) => ({ ...prev, next: !prev.next }))
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-brand-forest p-1"
                  >
                    {changePasswordShow.next ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={changePasswordShow.confirm ? 'text' : 'password'}
                    value={changePasswordForm.confirmPassword}
                    onChange={(e) =>
                      setChangePasswordForm((prev) => ({ ...prev, confirmPassword: e.target.value }))
                    }
                    placeholder="Confirm new password"
                    className="w-full pl-4 pr-11 py-2 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-brand-forest/30"
                    required
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setChangePasswordShow((prev) => ({ ...prev, confirm: !prev.confirm }))
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-brand-forest p-1"
                  >
                    {changePasswordShow.confirm ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSecurityModalOpen(false)}
                  className="w-1/2 py-2 rounded-xl border border-neutral-300 text-neutral-700 font-semibold text-xs hover:bg-neutral-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2 rounded-xl bg-brand-forest hover:bg-brand-dark text-white font-bold text-xs transition-colors shadow-sm"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
