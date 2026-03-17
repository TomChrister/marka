import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/cartStore';

export default function Journal() {
  const navigate = useNavigate();
  const { articles } = useAppStore();

  return (
    <div className="pt-[80px] md:pt-[120px] animate-fade-in">
      <div className="py-12 md:py-20 px-6 md:px-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
          <div>
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-stone mb-4">Magasinet</p>
            <h1 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-bark mb-4">
              Fra <em className="italic text-clay">Marka</em>
            </h1>
            <p className="text-[0.92rem] text-stone max-w-[520px] leading-[1.8]">
              Oppskrifter, livsstil og historiene bak produktene våre.
            </p>
          </div>
          <button
            onClick={() => navigate('/skriv-artikkel')}
            className="bg-bark text-cream px-9 py-3.5 text-[0.72rem] tracking-[0.15em] uppercase border-none cursor-pointer font-sans font-normal hover:bg-clay transition-colors"
          >
            + Skriv artikkel
          </button>
        </div>

        {/* Featured article */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 mb-12 cursor-pointer"
          onClick={() => navigate('/artikkel')}
        >
          <div
            className="flex items-center justify-center text-[7rem] min-h-[250px] md:min-h-[400px]"
            style={{ background: 'linear-gradient(160deg,#C8B89A,#7A6348)' }}
          >
            🍃
          </div>
          <div className="bg-cream p-8 md:p-16">
            <p className="text-[0.65rem] tracking-[0.15em] uppercase text-clay mb-2">Redaksjonelt</p>
            <h2 className="font-serif text-[2.2rem] font-light leading-[1.2] text-bark mb-4">
              Fermentert hvitløk — en uke i glasskrukke
            </h2>
            <p className="text-stone text-[0.88rem] leading-[1.8] mb-6">
              Lær kunsten å fermentere hjemme. En gammel tradisjon som gir kroppen det den trenger og kjøkkenet din en helt ny dimensjon av smak.
            </p>
            <p className="text-[0.7rem] text-stone tracking-wide">12. mars 2025 · 4 min lesning</p>
          </div>
        </div>

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {articles.map((a) => (
            <div
              key={a.id}
              onClick={() => navigate('/artikkel')}
              className="cursor-pointer group"
            >
              <div className="aspect-[16/10] overflow-hidden mb-5 bg-light-stone">
                <div
                  className="w-full h-full flex items-center justify-center text-5xl group-hover:scale-[1.04] transition-transform duration-500"
                  style={{ background: 'linear-gradient(135deg,#D4C5B2,#8B7355)' }}
                >
                  {a.emoji}
                </div>
              </div>
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-clay mb-2">{a.category}</p>
              <h3 className="font-serif text-[1.25rem] font-normal leading-[1.3] mb-2">{a.title}</h3>
              <p className="text-[0.82rem] text-stone leading-[1.7] mb-3">{a.excerpt}</p>
              <p className="text-[0.7rem] text-stone tracking-wide">
                {a.date} · {a.readTime} min lesning
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
