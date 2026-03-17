import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/cartStore';

const accordionItems = [
  {
    title: 'Ingredienser & innhold',
    content: '100% ren lynghonning. Ingen tilsetningsstoffer, ikke oppvarmet over 40°C. Produsert av Hvalstorp Birøkterlaget, Hardangervidda.',
  },
  {
    title: 'Levering & frakt',
    content: 'Fri frakt ved kjøp over kr 500. Standard levering 2–4 virkedager. Ekspress tilgjengelig. Leveres i miljøvennlig emballasje.',
  },
  {
    title: 'Oppbevaring',
    content: 'Oppbevares i romtemperatur, unngå direkte sollys. Holdbarhet: 2 år. Naturlig krystallisering er normalt og påvirker ikke kvaliteten.',
  },
];

export default function ProductDetail() {
  const navigate = useNavigate();
  const { addToCart } = useAppStore();
  const [qty, setQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <div className="pt-[65px] md:pt-[100px] animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[calc(100vh-100px)]">
        <div className="bg-light-stone flex items-center justify-center text-[8rem] h-[300px] md:h-auto md:sticky md:top-20 md:h-[calc(100vh-80px)]">
          🍯
        </div>
        <div className="px-6 md:px-16 py-12 md:py-20">
          <p
            className="text-[0.7rem] text-stone tracking-widest mb-8 cursor-pointer hover:text-clay transition-colors"
            onClick={() => navigate('/butikk')}
          >
            Butikk <span className="text-clay">/ Honning & Syltetøy</span>
          </p>
          <h1 className="font-serif text-[2.8rem] font-light leading-[1.1] mb-2 text-bark">
            Lynghonning<br />Premium
          </h1>
          <p className="text-[0.78rem] text-stone tracking-wide mb-6">500g · Håndtappet · Hardangervidda</p>
          <p className="font-serif text-[1.8rem] font-light text-bark mb-8">kr 189</p>
          <p className="text-[0.88rem] text-stone leading-[1.85] mb-10 max-w-[440px]">
            Vår lynghonning er håndtappet av bieavlere på Hardangervidda etter tradisjonelle metoder. Den har en karakteristisk mørk farge og kraftig, aromatisk smak med hint av lyng og ville blomster.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <button
              className="w-8 h-8 border border-light-stone bg-transparent cursor-pointer text-base text-bark hover:border-bark transition-colors"
              onClick={() => setQty(Math.max(1, qty - 1))}
            >
              −
            </button>
            <span className="text-[0.9rem] min-w-[20px] text-center">{qty}</span>
            <button
              className="w-8 h-8 border border-light-stone bg-transparent cursor-pointer text-base text-bark hover:border-bark transition-colors"
              onClick={() => setQty(qty + 1)}
            >
              +
            </button>
          </div>
          <button
            className="w-full py-4 bg-bark text-cream border-none font-sans text-[0.75rem] tracking-[0.15em] uppercase cursor-pointer hover:bg-clay transition-colors mb-4"
            onClick={() => addToCart('Lynghonning Premium', 'kr 189', '🍯')}
          >
            Legg i handlevogn
          </button>
          <button className="w-full py-4 bg-transparent text-bark border border-bark font-sans text-[0.75rem] tracking-[0.15em] uppercase cursor-pointer hover:bg-bark hover:text-cream transition-all">
            Legg til ønskeliste
          </button>
          <div className="mt-12 border-t border-light-stone">
            {accordionItems.map((item, i) => (
              <div key={i} className="border-b border-light-stone">
                <button
                  className="w-full py-5 flex justify-between items-center bg-transparent border-none cursor-pointer font-sans text-[0.75rem] tracking-[0.12em] uppercase text-charcoal hover:text-clay transition-colors"
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                >
                  <span>{item.title}</span>
                  <span>{openAccordion === i ? '−' : '+'}</span>
                </button>
                {openAccordion === i && (
                  <div className="text-[0.82rem] text-stone leading-[1.8] pb-4">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
