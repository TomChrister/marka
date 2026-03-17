import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useAppStore } from '../store/cartStore';

const navLinks = [
  { to: '/butikk', label: 'Butikk' },
  { to: '/kategorier', label: 'Kategorier' },
  { to: '/magasin', label: 'Magasin' },
  { to: '/om-oss', label: 'Om oss' },
  { to: '/kontakt', label: 'Kontakt' },
];

const Navbar = () => {
  const { cartItems, toggleCart, toggleSearch } = useAppStore();
  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-16 py-5 md:py-6 bg-warm-white/95 backdrop-blur-md border-b border-light-stone transition-all duration-300">
        <Link
          to="/"
          className="font-serif text-[1.6rem] font-normal tracking-[0.15em] text-bark uppercase no-underline"
        >
          MARKA
        </Link>

        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-[0.75rem] tracking-[0.12em] uppercase font-normal no-underline transition-colors duration-200 ${
                  isActive ? 'text-clay' : 'text-charcoal hover:text-clay'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex gap-5 items-center">
          <button
            onClick={toggleSearch}
            className="text-bark hover:text-clay transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
            aria-label="Søk"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            onClick={toggleCart}
            className="relative text-bark hover:text-clay transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
            aria-label="Handlevogn"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-clay text-white text-[0.6rem] w-4 h-4 rounded-full flex items-center justify-center font-sans font-medium">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-bark hover:text-clay transition-colors duration-200 cursor-pointer bg-transparent border-none p-0"
            aria-label="Meny"
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-[65px] left-0 right-0 z-40 bg-warm-white border-b border-light-stone md:hidden">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 text-[0.75rem] tracking-[0.12em] uppercase font-normal no-underline border-b border-light-stone transition-colors duration-200 ${
                  isActive ? 'text-clay' : 'text-charcoal hover:text-clay'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
