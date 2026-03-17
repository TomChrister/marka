import { useNavigate } from 'react-router-dom';

const categories = [
  { icon: '🍯', name: 'Honning & Syltetøy', count: '24 produkter' },
  { icon: '🌿', name: 'Urter & Krydder', count: '18 produkter' },
  { icon: '🫙', name: 'Oljer & Eddiker', count: '15 produkter' },
  { icon: '🧴', name: 'Kroppspleie', count: '22 produkter' },
  { icon: '🫖', name: 'Te & Drikke', count: '19 produkter' },
  { icon: '🍫', name: 'Snacks & Søtt', count: '12 produkter' },
  { icon: '🌱', name: 'Frø & Planting', count: '8 produkter' },
  { icon: '🎁', name: 'Gavesett', count: '10 produkter' },
];

export default function Categories() {
  const navigate = useNavigate();

  return (
    <div className="pt-[80px] md:pt-[120px] animate-fade-in">
      <div className="py-12 md:py-20 px-6 md:px-20">
        <p className="text-[0.68rem] tracking-[0.22em] uppercase text-stone mb-4">Oversikt</p>
        <h1 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-bark mb-4">
          Kategorier
        </h1>
        <p className="text-[0.92rem] text-stone max-w-[520px] leading-[1.8] mb-0">
          Utforsk hele vårt sortiment, organisert etter type.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-light-stone">
        {categories.map((cat) => (
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
    </div>
  );
}
