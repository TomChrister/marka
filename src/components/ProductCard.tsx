import { Link } from 'react-router-dom';
import type { Product } from '../data/products';

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link to="/produkt" className="group">
      <div className="aspect-[3/4] bg-light-stone overflow-hidden mb-5 relative">
        <div
          className="w-full h-full flex items-center justify-center text-5xl group-hover:scale-[1.03] transition-transform duration-500"
          aria-hidden="true"
          style={{ background: p.bg }}
        >
          {p.icon}
        </div>
        {p.badge && (
          <span className="absolute top-4 left-4 bg-clay text-white text-xs tracking-widest uppercase px-2.5 py-1">
            {p.badge}
          </span>
        )}
      </div>
      <p className="font-serif text-xl font-normal mb-1">{p.name}</p>
      <p className="text-sm text-stone mb-2 tracking-wide">{p.meta}</p>
      <p className="text-base font-normal text-bark">
        {p.oldPrice && <span className="line-through text-stone mr-2">{p.oldPrice}</span>}
        {p.price}
      </p>
    </Link>
  );
}
