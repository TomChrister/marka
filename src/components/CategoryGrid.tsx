import { Link } from 'react-router-dom';
import type { categories } from '../data/products';

export function CategoryGrid({ items, className = '' }: { items: typeof categories; className?: string }) {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-px bg-light-stone ${className}`}>
      {items.map((cat) => (
        <Link
          key={cat.name}
          to="/butikk"
          className="bg-warm-white px-5 md:px-8 py-8 md:py-10 hover:bg-cream transition-colors flex flex-col gap-3"
        >
          <span className="text-3xl">{cat.icon}</span>
          <span className="font-serif text-xl font-normal">{cat.name}</span>
          <span className="text-[0.8rem] text-stone tracking-widest">{cat.count}</span>
          <span className="mt-auto text-xl text-clay">→</span>
        </Link>
      ))}
    </div>
  );
}
