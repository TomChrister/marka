import { Link } from 'react-router-dom';
import { useAppStore } from '../store/cartStore';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ArticleCard } from '../components/ArticleCard';
import { CategoryGrid } from '../components/CategoryGrid';

const newArrivals = products.filter((p) =>
  ['Lynghonning Premium', 'Vill Brennesle-te', 'Valnøtt-olje'].includes(p.name)
);

const testimonials = [
  { text: '"Honningen er rett og slett den beste jeg har smakt. Ren, dyp og unik."', author: '— Ingrid S., Bergen' },
  { text: '"Elsker at alt er fra Norge. Vet hva jeg kjøper og stoler på kvaliteten."', author: '— Tobias M., Oslo' },
  { text: '"Kjøpte som gave og fikk strålende tilbakemelding. Bestiller alltid herfra."', author: '— Marte L., Trondheim' },
];

const stats = [
  { num: '12k+', label: 'Fornøyde kunder' },
  { num: '100%', label: 'Norske råvarer' },
  { num: '48t', label: 'Rask levering' },
  { num: 'B-Corp', label: 'Sertifisert' },
];

const btnDark =
  'bg-bark text-cream px-9 py-3.5 text-[0.8rem] tracking-[0.15em] uppercase font-sans font-normal hover:bg-clay transition-all duration-200';
const btnOutline =
  'bg-transparent text-bark px-9 py-3.5 text-[0.8rem] tracking-[0.15em] uppercase border border-bark font-sans font-normal hover:bg-bark hover:text-cream transition-all duration-200';
const eyebrow = 'text-[0.8rem] tracking-[0.22em] uppercase text-stone mb-4';
const heading = 'font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-normal leading-[1.15] text-bark';

export default function Home() {
  const articles = useAppStore((s) => s.articles);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 pt-16 md:pt-20">
        <div className="flex flex-col justify-center px-6 md:px-20 py-16 md:py-24">
          <p className="text-[0.8rem] tracking-[0.2em] uppercase text-stone mb-6">
            Ny kolleksjon · Vår 2025
          </p>
          <h1 className="font-serif text-[clamp(3rem,5vw,5rem)] font-normal leading-[1.1] text-bark mb-6">
            Natur i<br />
            <em className="italic text-clay">hverdagen</em>
          </h1>
          <p className="text-lg text-stone max-w-[380px] mb-12 leading-[1.8]">
            Produkter hentet fra norsk natur — ærlige råvarer, bevisste valg og en livsstil du kan ta stolthet i.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Link to="/butikk" className={`${btnDark} hover:-translate-y-px`}>
              Utforsk butikken
            </Link>
            <Link to="/magasin" className={btnOutline}>
              Les magasinet
            </Link>
          </div>
        </div>

        <div className="bg-light-stone flex items-center justify-center overflow-hidden relative min-h-[300px] md:min-h-0">
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-4"
            style={{ background: 'linear-gradient(135deg, #D4C5B2 0%, #B8A898 40%, #8B7355 100%)' }}
          >
            <div className="w-40 h-56 bg-warm-white rounded-sm shadow-2xl flex flex-col items-center justify-center gap-2 p-6 -rotate-3">
              <span className="font-serif text-xl text-bark">🌿</span>
              <small className="text-[0.8rem] tracking-widest text-stone uppercase">Urte-Olje</small>
            </div>
            <div className="absolute bottom-12 -left-4 bg-warm-white p-4 px-6 shadow-lg rotate-2">
              <p className="text-[0.8rem] tracking-widest text-stone uppercase">Bestselger</p>
              <strong className="font-serif text-lg font-normal text-bark">Villmarks-Honning</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-y border-light-stone">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`py-8 md:py-10 flex flex-col items-center justify-center text-center border-light-stone ${i < 3 ? 'md:border-r' : ''} ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''}`}
          >
            <span className="font-serif text-4xl font-normal text-bark italic">{stat.num}</span>
            <span className="text-[0.8rem] tracking-[0.15em] uppercase text-stone mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section className="py-12 md:py-20 px-6 md:px-20">
        <p className={eyebrow}>Sortiment</p>
        <h2 className={heading}>
          Hva leter<br />du etter?
        </h2>
        <CategoryGrid items={categories.slice(0, 4)} className="mt-8" />
      </section>

      {/* Featured banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[500px]">
        <div
          className="flex items-center justify-center text-8xl min-h-[250px] md:min-h-0"
          style={{ background: 'linear-gradient(160deg, #C8B89A, #7A6348)' }}
        >
          🍄
        </div>
        <div className="bg-bark text-cream flex flex-col justify-center px-8 md:px-20 py-14 md:py-20">
          <p className="text-[0.8rem] tracking-[0.22em] uppercase text-clay-light mb-4">Ukens utvalgte</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-normal leading-[1.15] text-cream mb-4">
            Villmarks-<br />
            <em className="italic text-clay-light">sopp ekstrakt</em>
          </h2>
          <p className="text-lg text-cream/65 max-w-[520px] leading-[1.8] mb-8">
            Håndplukket fra skoger i Telemark. Tørket lavtemperatur for å bevare alle næringsstoffer og den dype, jordaktige smaken.
          </p>
          <p className="font-serif text-[2rem] text-cream mb-8 font-normal">kr 249</p>
          <Link
            to="/produkt"
            className="self-start bg-cream text-bark px-9 py-3.5 text-[0.8rem] tracking-[0.15em] uppercase font-sans font-normal hover:bg-clay hover:text-cream transition-all duration-200"
          >
            Se produktet
          </Link>
        </div>
      </div>

      {/* New arrivals */}
      <section className="py-12 md:py-20 px-6 md:px-20">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10">
          <div>
            <p className={eyebrow}>Nyheter</p>
            <h2 className={heading}>Sist ankommet</h2>
          </div>
          <Link to="/butikk" className={btnOutline}>
            Se alle →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {newArrivals.map((p) => (
            <ProductCard key={p.name} p={p} />
          ))}
        </div>
      </section>

      {/* Journal preview */}
      <section className="py-12 md:py-20 px-6 md:px-20 bg-cream">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10">
          <div>
            <p className={eyebrow}>Magasinet</p>
            <h2 className={heading}>
              Fra <em className="italic text-clay">Marka</em>
            </h2>
          </div>
          <Link to="/magasin" className={btnOutline}>
            Alle artikler →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {articles.slice(0, 3).map((a) => (
            <ArticleCard key={a.id} a={a} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 px-6 md:px-20">
        <p className={`${eyebrow} text-center`}>Kunder sier</p>
        <h2 className={`${heading} mb-12 text-center`}>
          Ord vi<br />
          <em className="italic text-clay">setter pris på</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.author} className="p-10 border border-light-stone flex flex-col gap-4">
              <p className="text-clay text-sm tracking-[0.2em]">★★★★★</p>
              <p className="font-serif text-xl font-normal italic leading-[1.6] text-bark">{t.text}</p>
              <p className="text-[0.8rem] tracking-widest uppercase text-stone mt-auto">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <div className="text-center py-16 md:py-24 px-6 md:px-20 bg-cream">
        <p className={eyebrow}>Hold kontakt</p>
        <h2 className={`${heading} mb-4`}>
          Bli en del av<br />
          <em className="italic text-clay">fellesskapet</em>
        </h2>
        <p className="text-lg text-stone max-w-[520px] leading-[1.8] mb-10 mx-auto">
          Oppskrifter, nyheter og eksklusivt innhold — rett i innboksen din.
        </p>
        <div className="flex flex-col sm:flex-row max-w-[440px] mx-auto">
          <input
            type="email"
            placeholder="Din e-postadresse"
            aria-label="E-postadresse"
            className="flex-1 px-5 py-3.5 border border-bark sm:border-r-0 font-sans text-base bg-warm-white text-charcoal outline-none placeholder:text-stone"
          />
          <button className={`${btnDark} border-none cursor-pointer`}>Meld meg på</button>
        </div>
      </div>
    </div>
  );
}
