import { CategoryGrid } from '../components/CategoryGrid';
import { categories } from '../data/products';

export default function Categories() {
  return (
    <div className="pt-[80px] md:pt-[120px] animate-fade-in">
      <div className="py-12 md:py-20 px-6 md:px-20">
        <p className="text-[0.8rem] tracking-[0.22em] uppercase text-stone mb-4">Oversikt</p>
        <h1 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-normal leading-[1.15] text-bark mb-4">
          Kategorier
        </h1>
        <p className="text-lg text-stone max-w-[520px] leading-[1.8] mb-0">
          Utforsk hele vårt sortiment, organisert etter type.
        </p>
      </div>
      <CategoryGrid items={categories} />
    </div>
  );
}
