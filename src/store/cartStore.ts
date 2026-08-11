import { create } from 'zustand';

export interface CartItem {
  name: string;
  price: string;
  icon: string;
  qty: number;
}

export interface WishlistItem {
  name: string;
  price: string;
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  date: string;
  emoji: string;
}

interface AppStore {
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isSearchOpen: boolean;
  articles: Article[];
  addToCart: (name: string, price: string, icon: string, qty?: number) => void;
  removeFromCart: (idx: number) => void;
  toggleWishlist: (name: string, price: string, icon: string) => void;
  removeFromWishlist: (name: string) => void;
  toggleCart: () => void;
  closeCart: () => void;
  toggleWishlistDrawer: () => void;
  toggleSearch: () => void;
  addArticle: (article: Omit<Article, 'id'>) => void;
}

const defaultArticles: Article[] = [
  {
    id: '1',
    title: 'Slow living — om å leve langsommere',
    excerpt: 'Hva betyr det egentlig å leve med færre, men bedre ting?',
    category: 'Livsstil',
    readTime: 6,
    date: '5. mars 2025',
    emoji: '🌾',
  },
  {
    id: '2',
    title: 'Møt bonden bak villmarks-honningen',
    excerpt: 'En morgen med Per og Lise på Hardangervidda.',
    category: 'Produsenter',
    readTime: 5,
    date: '28. feb 2025',
    emoji: '🏔️',
  },
  {
    id: '3',
    title: 'Havtorn-lemonade til sommerens varmeste dager',
    excerpt: 'Frisk og rik på C-vitamin. Klar på 10 minutter.',
    category: 'Oppskrift',
    readTime: 3,
    date: '20. feb 2025',
    emoji: '🌊',
  },
];

export const useAppStore = create<AppStore>((set) => ({
  cartItems: [],
  wishlistItems: [],
  isCartOpen: false,
  isWishlistOpen: false,
  isSearchOpen: false,
  articles: defaultArticles,

  addToCart: (name, price, icon, qty = 1) =>
    set((state) => {
      const existing = state.cartItems.find((i) => i.name === name);
      if (existing) {
        return {
          cartItems: state.cartItems.map((i) =>
            i.name === name ? { ...i, qty: i.qty + qty } : i
          ),
          isCartOpen: true,
        };
      }
      return {
        cartItems: [...state.cartItems, { name, price, icon, qty }],
        isCartOpen: true,
      };
    }),

  removeFromCart: (idx) =>
    set((state) => ({
      cartItems: state.cartItems.filter((_, i) => i !== idx),
    })),

  toggleWishlist: (name, price, icon) =>
    set((state) => {
      const exists = state.wishlistItems.some((i) => i.name === name);
      if (exists) {
        return {
          wishlistItems: state.wishlistItems.filter((i) => i.name !== name),
        };
      }
      return {
        wishlistItems: [...state.wishlistItems, { name, price, icon }],
      };
    }),

  removeFromWishlist: (name) =>
    set((state) => ({
      wishlistItems: state.wishlistItems.filter((i) => i.name !== name),
    })),

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  closeCart: () => set({ isCartOpen: false }),
  toggleWishlistDrawer: () =>
    set((state) => ({ isWishlistOpen: !state.isWishlistOpen })),
  toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen })),

  addArticle: (article) =>
    set((state) => ({
      articles: [{ ...article, id: String(Date.now()) }, ...state.articles],
    })),
}));
