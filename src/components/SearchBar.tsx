import { Search } from 'lucide-react';
import { useAppStore } from '../store/cartStore';

export function SearchBar() {
  const { isSearchOpen, toggleSearch } = useAppStore();

  if (!isSearchOpen) return null;

  return (
    <div className="fixed top-[80px] left-0 right-0 z-40 bg-cream border-b border-light-stone px-20 py-4 flex items-center gap-4">
      <Search size={18} strokeWidth={1.5} className="text-stone flex-shrink-0" />
      <input
        className="flex-1 py-2.5 border-none border-b border-bark bg-transparent font-serif text-xl text-bark outline-none placeholder:text-stone"
        placeholder="Søk etter produkter, oppskrifter..."
        autoFocus
      />
      <button
        onClick={toggleSearch}
        className="cursor-pointer text-stone text-[0.75rem] tracking-widest uppercase hover:text-bark transition-colors border-none bg-transparent"
      >
        Lukk
      </button>
    </div>
  );
}
