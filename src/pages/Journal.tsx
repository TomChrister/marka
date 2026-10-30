import { Link } from 'react-router-dom';
import { useAppStore } from '../store/cartStore';
import { ArticleCard } from '../components/ArticleCard';

export default function Journal() {
  const articles = useAppStore((s) => s.articles);

  return (
    <div className="pt-[80px] md:pt-[120px] animate-fade-in">
      <div className="py-12 md:py-20 px-6 md:px-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
          <div>
            <p className="text-[0.8rem] tracking-[0.22em] uppercase text-stone mb-4">Magasinet</p>
            <h1 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-normal leading-[1.15] text-bark mb-4">
              Fra <em className="italic text-clay">Marka</em>
            </h1>
            <p className="text-lg text-stone max-w-[520px] leading-[1.8]">
              Oppskrifter, livsstil og historiene bak produktene våre.
            </p>
          </div>
          <Link
            to="/skriv-artikkel"
            className="bg-bark text-cream px-9 py-3.5 text-[0.8rem] tracking-[0.15em] uppercase font-sans font-normal hover:bg-clay transition-colors"
          >
            + Skriv artikkel
          </Link>
        </div>

        {/* Featured article */}
        <Link to="/artikkel" className="grid grid-cols-1 md:grid-cols-2 mb-12">
          <div
            className="flex items-center justify-center text-[7rem] min-h-[250px] md:min-h-[400px]"
            style={{ background: 'linear-gradient(160deg,#C8B89A,#7A6348)' }}
          >
            🍃
          </div>
          <div className="bg-cream p-8 md:p-16">
            <p className="text-[0.8rem] tracking-[0.15em] uppercase text-clay mb-2">Redaksjonelt</p>
            <h2 className="font-serif text-[2.2rem] font-normal leading-[1.2] text-bark mb-4">
              Fermentert hvitløk — en uke i glasskrukke
            </h2>
            <p className="text-stone text-base leading-[1.8] mb-6">
              Lær kunsten å fermentere hjemme. En gammel tradisjon som gir kroppen det den trenger og kjøkkenet din en helt ny dimensjon av smak.
            </p>
            <p className="text-[0.8rem] text-stone tracking-wide">12. mars 2025 · 4 min lesning</p>
          </div>
        </Link>

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {articles.map((a) => (
            <ArticleCard key={a.id} a={a} />
          ))}
        </div>
      </div>
    </div>
  );
}
