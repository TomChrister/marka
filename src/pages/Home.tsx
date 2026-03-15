import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/cartStore';

const newArrivals = [
  { name: 'Lynghonning Premium', meta: '500g · Hardangervidda', price: 'kr 189', icon: '🍯', badge: 'Ny', bg: 'linear-gradient(135deg,#E8D5BF,#C4A882)' },
  { name: 'Vill Brennesle-te', meta: '40g · Hamar', price: 'kr 129', icon: '🌱', bg: 'linear-gradient(135deg,#D4E8D0,#8AAF82)' },
  { name: 'Valnøtt-olje kaldpresset', meta: '250ml · Vestfold', price: 'kr 149', oldPrice: 'kr 179', icon: '🫙', bg: 'linear-gradient(135deg,#E8D8C4,#B89070)' },
];

const journalPreviews = [
  { tag: 'Oppskrift', title: 'Fermentert hvitløk — en uke i glasskrukke', excerpt: 'Lær kunsten å fermentere hjemme med enkle råvarer fra naturen rundt deg.', meta: '12. mars 2025 · 4 min lesning', emoji: '🍃', bg: 'linear-gradient(135deg,#D4C5B2,#8B7355)' },
  { tag: 'Livsstil', title: 'Slow living — om å leve langsommere', excerpt: 'Hva betyr det egentlig å leve med færre, men bedre ting?', meta: '5. mars 2025 · 6 min lesning', emoji: '🌾', bg: 'linear-gradient(135deg,#C8D4C0,#6E8A64)' },
  { tag: 'Produsenter', title: 'Møt bonden bak villmarks-honningen', excerpt: 'En morgen med Per og Lise på Hardangervidda.', meta: '28. feb 2025 · 5 min lesning', emoji: '🏔️', bg: 'linear-gradient(135deg,#E0D0C0,#A08060)' },
];

const testimonials = [
  { text: '"Honningen er rett og slett den beste jeg har smakt. Ren, dyp og unik."', author: '— Ingrid S., Bergen' },
  { text: '"Elsker at alt er fra Norge. Vet hva jeg kjøper og stoler på kvaliteten."', author: '— Tobias M., Oslo' },
  { text: '"Kjøpte som gave og fikk strålende tilbakemelding. Bestiller alltid herfra."', author: '— Marte L., Trondheim' },
];

export default function Home() {
  const navigate = useNavigate();
  const { addToCart } = useAppStore();

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="h-screen grid grid-cols-2 pt-20">
        <div className="flex flex-col justify-center px-20 py-24">
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-stone mb-6">
            Ny kolleksjon · Vår 2025
          </p>
          <h1 className="font-serif text-[clamp(3rem,5vw,5rem)] font-light leading-[1.1] text-bark mb-6">
            Natur i<br />
            <em className="italic text-clay">hverdagen</em>
          </h1>
          <p className="text-[0.95rem] text-stone max-w-[380px] mb-12 leading-[1.8]">
            Produkter hentet fra norsk natur — ærlige råvarer, bevisste valg og en livsstil du kan ta stolthet i.
          </p>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => navigate('/butikk')}
              className="bg-bark text-cream px-9 py-3.5 text-[0.72rem] tracking-[0.15em] uppercase border-none cursor-pointer font-sans font-normal hover:bg-clay hover:-translate-y-px transition-all duration-200"
            >
              Utforsk butikken
            </button>
            <button
              onClick={() => navigate('/magasin')}
              className="bg-transparent text-bark px-9 py-3.5 text-[0.72rem] tracking-[0.15em] uppercase border border-bark cursor-pointer font-sans font-normal hover:bg-bark hover:text-cream transition-all duration-200"
            >
              Les magasinet
            </button>
          </div>
        </div>

        <div className="bg-light-stone flex items-center justify-center overflow-hidden relative">
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-4"
            style={{ background: 'linear-gradient(135deg, #D4C5B2 0%, #B8A898 40%, #8B7355 100%)' }}
          >
            <div
              className="w-40 h-56 bg-warm-white rounded-sm shadow-2xl flex flex-col items-center justify-center gap-2 p-6"
              style={{ transform: 'rotate(-3deg)' }}
            >
              <span className="font-serif text-xl text-bark">🌿</span>
              <small className="text-[0.65rem] tracking-widest text-stone uppercase">Urte-Olje</small>
            </div>
            <div
              className="absolute bottom-12 -left-4 bg-warm-white p-4 px-6 shadow-lg"
              style={{ transform: 'rotate(2deg)' }}
            >
              <p className="text-[0.7rem] tracking-widest text-stone uppercase">Bestselger</p>
              <strong className="font-serif text-lg font-normal text-bark">Villmarks-Honning</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="grid grid-cols-4 border-y border-light-stone">
        {[
          { num: '12k+', label: 'Fornøyde kunder' },
          { num: '100%', label: 'Norske råvarer' },
          { num: '48t', label: 'Rask levering' },
          { num: 'B-Corp', label: 'Sertifisert' },
        ].map((stat, i) => (
          <div
            key={i}
            className={`py-10 flex flex-col items-center justify-center text-center ${i < 3 ? 'border-r border-light-stone' : ''}`}
          >
            <span className="font-serif text-4xl font-light text-bark italic">{stat.num}</span>
            <span className="text-[0.68rem] tracking-[0.15em] uppercase text-stone mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section className="py-20 px-20">
        <p className="text-[0.68rem] tracking-[0.22em] uppercase text-stone mb-4">Sortiment</p>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-bark">
          Hva leter<br />du etter?
        </h2>
        <div className="grid grid-cols-4 gap-px bg-light-stone mt-8">
          {[
            { icon: '🍯', name: 'Honning & Syltetøy', count: '24 produkter' },
            { icon: '🌿', name: 'Urter & Krydder', count: '18 produkter' },
            { icon: '🫙', name: 'Oljer & Eddiker', count: '15 produkter' },
            { icon: '🧴', name: 'Kroppspleie', count: '22 produkter' },
          ].map((cat) => (
            <div
              key={cat.name}
              onClick={() => navigate('/butikk')}
              className="bg-warm-white px-8 py-10 cursor-pointer hover:bg-cream transition-colors flex flex-col gap-3"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="font-serif text-xl font-normal">{cat.name}</span>
              <span className="text-[0.72rem] text-stone tracking-widest">{cat.count}</span>
              <span className="mt-auto text-xl text-clay">→</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured banner */}
      <div className="grid grid-cols-2 min-h-[500px]">
        <div
          className="flex items-center justify-center text-8xl"
          style={{ background: 'linear-gradient(160deg, #C8B89A, #7A6348)' }}
        >
          🍄
        </div>
        <div className="bg-bark text-cream flex flex-col justify-center px-20 py-20">
          <p className="text-[0.68rem] tracking-[0.22em] uppercase text-clay mb-4">Ukens utvalgte</p>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-cream mb-4">
            Villmarks-<br />
            <em className="italic text-clay">sopp ekstrakt</em>
          </h2>
          <p className="text-[0.92rem] text-cream/65 max-w-[520px] leading-[1.8] mb-8">
            Håndplukket fra skoger i Telemark. Tørket lavtemperatur for å bevare alle næringsstoffer og den dype, jordaktige smaken.
          </p>
          <p className="font-serif text-[2rem] text-cream mb-8 font-light">kr 249</p>
          <button
            onClick={() => {
              addToCart('Villmarks-sopp ekstrakt', 'kr 249', '🍄');
              navigate('/produkt');
            }}
            className="self-start bg-cream text-bark px-9 py-3.5 text-[0.72rem] tracking-[0.15em] uppercase border-none cursor-pointer font-sans font-normal hover:bg-clay hover:text-cream transition-all duration-200"
          >
            Se produktet
          </button>
        </div>
      </div>

      {/* New arrivals */}
      <section className="py-20 px-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-stone mb-4">Nyheter</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-bark">
              Sist ankommet
            </h2>
          </div>
          <button
            onClick={() => navigate('/butikk')}
            className="bg-transparent text-bark px-9 py-3.5 text-[0.72rem] tracking-[0.15em] uppercase border border-bark cursor-pointer font-sans font-normal hover:bg-bark hover:text-cream transition-all duration-200"
          >
            Se alle →
          </button>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {newArrivals.map((p) => (
            <div
              key={p.name}
              onClick={() => navigate('/produkt')}
              className="cursor-pointer group"
            >
              <div className="aspect-[3/4] bg-light-stone overflow-hidden mb-5 relative">
                <div
                  className="w-full h-full flex items-center justify-center text-5xl group-hover:scale-[1.03] transition-transform duration-500"
                  style={{ background: p.bg }}
                >
                  {p.icon}
                </div>
                {p.badge && (
                  <span className="absolute top-4 left-4 bg-clay text-white text-[0.6rem] tracking-widest uppercase px-2.5 py-1">
                    {p.badge}
                  </span>
                )}
              </div>
              <p className="font-serif text-[1.05rem] font-normal mb-1">{p.name}</p>
              <p className="text-[0.75rem] text-stone mb-2 tracking-wide">{p.meta}</p>
              <p className="text-[0.85rem] font-normal text-bark">
                {'oldPrice' in p && p.oldPrice && (
                  <span className="line-through text-stone mr-2">{p.oldPrice}</span>
                )}
                {p.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Journal preview */}
      <section className="py-20 px-20 bg-cream">
        <div className="flex justify-between items-end mb-10">
          <div>
            <p className="text-[0.68rem] tracking-[0.22em] uppercase text-stone mb-4">Magasinet</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-bark">
              Fra <em className="italic text-clay">Marka</em>
            </h2>
          </div>
          <button
            onClick={() => navigate('/magasin')}
            className="bg-transparent text-bark px-9 py-3.5 text-[0.72rem] tracking-[0.15em] uppercase border border-bark cursor-pointer font-sans font-normal hover:bg-bark hover:text-cream transition-all duration-200"
          >
            Alle artikler →
          </button>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {journalPreviews.map((a) => (
            <div
              key={a.title}
              onClick={() => navigate('/artikkel')}
              className="cursor-pointer group"
            >
              <div className="aspect-[16/10] overflow-hidden mb-5 bg-light-stone">
                <div
                  className="w-full h-full flex items-center justify-center text-5xl group-hover:scale-[1.04] transition-transform duration-500"
                  style={{ background: a.bg }}
                >
                  {a.emoji}
                </div>
              </div>
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-clay mb-2">{a.tag}</p>
              <h3 className="font-serif text-[1.25rem] font-normal leading-[1.3] mb-2">{a.title}</h3>
              <p className="text-[0.82rem] text-stone leading-[1.7] mb-3">{a.excerpt}</p>
              <p className="text-[0.7rem] text-stone tracking-wide">{a.meta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-20">
        <p className="text-[0.68rem] tracking-[0.22em] uppercase text-stone mb-4 text-center">
          Kunder sier
        </p>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-bark mb-12 text-center">
          Ord vi<br />
          <em className="italic text-clay">setter pris på</em>
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.author} className="p-10 border border-light-stone flex flex-col gap-4">
              <p className="text-clay text-[0.8rem] tracking-[0.2em]">★★★★★</p>
              <p className="font-serif text-[1.05rem] font-light italic leading-[1.6] text-bark">{t.text}</p>
              <p className="text-[0.72rem] tracking-widest uppercase text-stone mt-auto">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <div className="text-center py-24 px-20 bg-cream">
        <p className="text-[0.68rem] tracking-[0.22em] uppercase text-stone mb-4">Hold kontakt</p>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-bark mb-4">
          Bli en del av<br />
          <em className="italic text-clay">fellesskapet</em>
        </h2>
        <p className="text-[0.92rem] text-stone max-w-[520px] leading-[1.8] mb-10 mx-auto">
          Oppskrifter, nyheter og eksklusivt innhold — rett i innboksen din.
        </p>
        <div className="flex max-w-[440px] mx-auto">
          <input
            type="email"
            placeholder="Din e-postadresse"
            className="flex-1 px-5 py-3.5 border border-bark border-r-0 font-sans text-[0.82rem] bg-warm-white text-charcoal outline-none placeholder:text-stone"
          />
          <button className="bg-bark text-cream px-9 py-3.5 text-[0.72rem] tracking-[0.15em] uppercase border-none cursor-pointer font-sans font-normal hover:bg-clay transition-colors">
            Meld meg på
          </button>
        </div>
      </div>
    </div>
  );
}
