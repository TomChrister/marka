import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  // Honning & Syltetøy
  { name: 'Lynghonning Premium', meta: '500g · Hardangervidda', price: 'kr 189', icon: '🍯', badge: 'Ny', bg: 'linear-gradient(135deg,#E8D5BF,#C4A882)', category: 'Honning & Syltetøy' },
  { name: 'Morgen-honning', meta: '350g · Telemark', price: 'kr 149', icon: '🍯', bg: 'linear-gradient(135deg,#F0DEC0,#D4A860)', category: 'Honning & Syltetøy' },
  { name: 'Blåbær syltetøy', meta: '300g · Trysil', price: 'kr 149', icon: '🫐', bg: 'linear-gradient(135deg,#D8D0E8,#8870AA)', category: 'Honning & Syltetøy' },
  { name: 'Jordbær-rips syltetøy', meta: '300g · Østfold', price: 'kr 139', icon: '🍓', bg: 'linear-gradient(135deg,#F0D0D0,#D07878)', category: 'Honning & Syltetøy' },

  // Urter
  { name: 'Vill Brennesle-te', meta: '40g · Hamar', price: 'kr 129', icon: '🌱', bg: 'linear-gradient(135deg,#D4E8D0,#8AAF82)', category: 'Urter' },
  { name: 'Tørket Timian', meta: '20g · Rogaland', price: 'kr 89', icon: '🌿', bg: 'linear-gradient(135deg,#E0E8D8,#7A9E6E)', category: 'Urter' },
  { name: 'Rosenblad te', meta: '30g · Agder', price: 'kr 109', icon: '🌹', bg: 'linear-gradient(135deg,#E8D8D0,#C09080)', category: 'Urter' },
  { name: 'Kamille te', meta: '25g · Vestfold', price: 'kr 99', icon: '🌼', bg: 'linear-gradient(135deg,#F0EAC8,#D4C078)', category: 'Urter' },

  // Oljer
  { name: 'Valnøtt-olje', meta: '250ml · Vestfold', price: 'kr 149', oldPrice: 'kr 179', icon: '🫙', bg: 'linear-gradient(135deg,#E8D8C4,#B89070)', category: 'Oljer' },
  { name: 'Skogssopp ekstrakt', meta: '100ml · Telemark', price: 'kr 249', icon: '🍄', badge: 'Bestselger', bg: 'linear-gradient(135deg,#E8E0C8,#BEB080)', category: 'Oljer' },
  { name: 'Hageurt-olje', meta: '200ml · Hedmark', price: 'kr 169', icon: '🌾', bg: 'linear-gradient(135deg,#E4DCC0,#A89858)', category: 'Oljer' },
  { name: 'Linolje kaldpresset', meta: '500ml · Trøndelag', price: 'kr 199', icon: '🫗', bg: 'linear-gradient(135deg,#DDE8D4,#8AA870)', category: 'Oljer' },

  // Kroppspleie
  { name: 'Havtorn body lotion', meta: '200ml · Møre', price: 'kr 219', icon: '🧴', bg: 'linear-gradient(135deg,#C8D8E0,#6898A0)', category: 'Kroppspleie' },
  { name: 'Lavendel håndkrem', meta: '75ml · Agder', price: 'kr 169', icon: '💜', bg: 'linear-gradient(135deg,#E0D8F0,#9880C8)', category: 'Kroppspleie' },
  { name: 'Birk body wash', meta: '300ml · Nordland', price: 'kr 189', icon: '🚿', bg: 'linear-gradient(135deg,#D8E8D8,#78A878)', category: 'Kroppspleie' },
  { name: 'Einer ansiktsolje', meta: '30ml · Hardanger', price: 'kr 279', badge: 'Ny', icon: '✨', bg: 'linear-gradient(135deg,#D8E0E8,#7090A8)', category: 'Kroppspleie' },
];

const filters = ['Alle', 'Honning & Syltetøy', 'Urter', 'Oljer', 'Kroppspleie'];

export default function Shop() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Alle');

  const filtered = activeFilter === 'Alle' ? products : products.filter(p => p.category === activeFilter);

  return (
    <div className="pt-[120px] animate-fade-in">
      <div className="py-20 px-20">
        <p className="text-[0.68rem] tracking-[0.22em] uppercase text-stone mb-4">Sortiment</p>
        <h1 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15] text-bark mb-6">
          Alle produkter
        </h1>
        <div className="flex gap-4 mt-6 mb-12 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-9 py-3.5 text-[0.65rem] tracking-[0.15em] uppercase font-sans font-normal cursor-pointer transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-bark text-cream border-none hover:bg-clay'
                  : 'bg-transparent text-bark border border-bark hover:bg-bark hover:text-cream'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-8">
          {filtered.map((p) => (
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
                {'badge' in p && p.badge && (
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
      </div>
    </div>
  );
}
