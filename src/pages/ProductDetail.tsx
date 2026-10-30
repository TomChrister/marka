import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
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

const PRODUCT = { name: 'Lynghonning Premium', price: 'kr 189', icon: '🍯' };

export default function ProductDetail() {
  const { addToCart, toggleWishlist, wishlistItems } = useAppStore();
  const [qty, setQty] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const wishlisted = wishlistItems.some((i) => i.name === PRODUCT.name);

  return (
    <div className="pt-[65px] md:pt-[100px] animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[calc(100vh-100px)]">
        <div className="bg-light-stone flex items-center justify-center text-[8rem] h-[300px] md:h-auto md:sticky md:top-20 md:h-[calc(100vh-80px)]">
          🍯
        </div>
        <div className="px-6 md:px-16 py-12 md:py-20">
          <Link
            to="/butikk"
            className="block text-[0.8rem] text-stone tracking-widest mb-8 hover:text-clay transition-colors"
          >
            Butikk <span className="text-clay">/ Honning & Syltetøy</span>
          </Link>
          <h1 className="font-serif text-[2.8rem] font-normal leading-[1.1] mb-2 text-bark">
            Lynghonning<br />Premium
          </h1>
          <p className="text-sm text-stone tracking-wide mb-6">500g · Håndtappet · Hardangervidda</p>
          <p className="font-serif text-[1.8rem] font-normal text-bark mb-8">kr 189</p>
          <p className="text-base text-stone leading-[1.85] mb-10 max-w-[440px]">
            Vår lynghonning er håndtappet av bieavlere på Hardangervidda etter tradisjonelle metoder. Den har en karakteristisk mørk farge og kraftig, aromatisk smak med hint av lyng og ville blomster.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <button
              className="w-8 h-8 border border-light-stone bg-transparent cursor-pointer text-base text-bark hover:border-bark transition-colors"
              onClick={() => setQty(Math.max(1, qty - 1))}
              aria-label="Færre"
            >
              −
            </button>
            <span className="text-base min-w-[20px] text-center" aria-live="polite">{qty}</span>
            <button
              className="w-8 h-8 border border-light-stone bg-transparent cursor-pointer text-base text-bark hover:border-bark transition-colors"
              onClick={() => setQty(qty + 1)}
              aria-label="Flere"
            >
              +
            </button>
          </div>
          <button
            className="w-full py-4 bg-bark text-cream border-none font-sans text-sm tracking-[0.15em] uppercase cursor-pointer hover:bg-clay transition-colors mb-4"
            onClick={() => addToCart(PRODUCT.name, PRODUCT.price, PRODUCT.icon, qty)}
          >
            Legg i handlevogn
          </button>
          <button
            onClick={() => toggleWishlist(PRODUCT.name, PRODUCT.price, PRODUCT.icon)}
            className={`w-full py-4 border font-sans text-sm tracking-[0.15em] uppercase cursor-pointer transition-all flex items-center justify-center gap-2 ${
              wishlisted
                ? 'bg-bark text-cream border-bark'
                : 'bg-transparent text-bark border-bark hover:bg-bark hover:text-cream'
            }`}
          >
            <Heart size={15} strokeWidth={1.5} fill={wishlisted ? 'currentColor' : 'none'} />
            {wishlisted ? 'Lagt til i ønskeliste' : 'Legg til ønskeliste'}
          </button>
          <div className="mt-12 border-t border-light-stone">
            {accordionItems.map((item, i) => (
              <div key={i} className="border-b border-light-stone">
                <button
                  className="w-full py-5 flex justify-between items-center bg-transparent border-none cursor-pointer font-sans text-sm tracking-[0.12em] uppercase text-charcoal hover:text-clay transition-colors"
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  aria-expanded={openAccordion === i}
                >
                  <span>{item.title}</span>
                  <span>{openAccordion === i ? '−' : '+'}</span>
                </button>
                {openAccordion === i && (
                  <div className="text-base text-stone leading-[1.8] pb-4">
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
