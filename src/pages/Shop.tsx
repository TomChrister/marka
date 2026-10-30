import { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

const filters = ['Alle', ...new Set(products.map((p) => p.category))];

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('Alle');

  const filtered = activeFilter === 'Alle' ? products : products.filter(p => p.category === activeFilter);

  return (
    <div className="pt-[80px] md:pt-[120px] animate-fade-in">
      <div className="py-12 md:py-20 px-6 md:px-20">
        <p className="text-[0.8rem] tracking-[0.22em] uppercase text-stone mb-4">Sortiment</p>
        <h1 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-normal leading-[1.15] text-bark mb-6">
          Alle produkter
        </h1>
        <div className="flex gap-4 mt-6 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
              className={`px-4 sm:px-9 py-2.5 sm:py-3.5 text-[0.8rem] tracking-[0.15em] uppercase font-sans font-normal cursor-pointer transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-bark text-cream border-none hover:bg-clay'
                  : 'bg-transparent text-bark border border-bark hover:bg-bark hover:text-cream'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
