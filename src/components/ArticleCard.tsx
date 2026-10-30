import { Link } from 'react-router-dom';
import type { Article } from '../store/cartStore';

export function ArticleCard({ a }: { a: Article }) {
  return (
    <Link to="/artikkel" className="group">
      <div className="aspect-[16/10] overflow-hidden mb-5 bg-light-stone">
        <div
          className="w-full h-full flex items-center justify-center text-5xl group-hover:scale-[1.04] transition-transform duration-500"
          aria-hidden="true"
          style={{ background: 'linear-gradient(135deg,#D4C5B2,#8B7355)' }}
        >
          {a.emoji}
        </div>
      </div>
      <p className="text-[0.8rem] tracking-[0.15em] uppercase text-clay mb-2">{a.category}</p>
      <h3 className="font-serif text-2xl font-normal leading-[1.3] mb-2">{a.title}</h3>
      <p className="text-base text-stone leading-[1.7] mb-3">{a.excerpt}</p>
      <p className="text-[0.8rem] text-stone tracking-wide">
        {a.date} · {a.readTime} min lesning
      </p>
    </Link>
  );
}
