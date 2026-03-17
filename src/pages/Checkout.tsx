import { useAppStore } from '../store/cartStore';

export default function Checkout() {
  const { cartItems } = useAppStore();

  const total = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
    return sum + price * item.qty;
  }, 0);

  const inputClass =
    'w-full px-4 py-3 border border-light-stone bg-warm-white font-sans text-[0.85rem] text-charcoal outline-none focus:border-bark transition-colors';
  const labelClass = 'block text-[0.7rem] tracking-[0.12em] uppercase text-stone mb-2';
  const sectionLabel =
    'text-[0.72rem] tracking-[0.15em] uppercase text-stone mt-8 mb-6 block';

  return (
    <div className="pt-[65px] md:pt-20 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 px-6 md:px-20 py-10 md:py-16 min-h-[calc(100vh-80px)]">
        <div className="order-2 lg:order-1">
          <h2 className="font-serif text-[2rem] font-light text-bark mb-8">
            Fullfør bestilling
          </h2>

          <span className={sectionLabel}>Kontaktinformasjon</span>
          <div className="mb-6">
            <label className={labelClass}>E-post</label>
            <input type="email" placeholder="kari@eksempel.no" className={inputClass} />
          </div>

          <span className={sectionLabel}>Leveringsadresse</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className={labelClass}>Fornavn</label>
              <input type="text" placeholder="Kari" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Etternavn</label>
              <input type="text" placeholder="Nordmann" className={inputClass} />
            </div>
          </div>
          <div className="mb-6">
            <label className={labelClass}>Adresse</label>
            <input type="text" placeholder="Gøteborggata 12" className={inputClass} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className={labelClass}>Postnummer</label>
              <input type="text" placeholder="0566" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>By</label>
              <input type="text" placeholder="Oslo" className={inputClass} />
            </div>
          </div>
          <div className="mb-6">
            <label className={labelClass}>Telefon</label>
            <input type="tel" placeholder="+47 123 45 678" className={inputClass} />
          </div>

          <span className={sectionLabel}>Betaling</span>
          <div className="mb-6">
            <label className={labelClass}>Kortnummer</label>
            <input type="text" placeholder="1234 5678 9012 3456" className={inputClass} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className={labelClass}>Utløpsdato</label>
              <input type="text" placeholder="MM/ÅÅ" className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>CVC</label>
              <input type="text" placeholder="123" className={inputClass} />
            </div>
          </div>
          <button
            className="w-full py-4 mt-4 bg-bark text-cream border-none font-sans text-[0.78rem] tracking-[0.15em] uppercase cursor-pointer hover:bg-clay transition-colors"
            onClick={() =>
              alert('Takk for din bestilling! 🌿 Du vil motta en bekreftelse på e-post.')
            }
          >
            Betal og bestill
          </button>
        </div>

        <div className="order-1 lg:order-2">
          <div className="bg-cream p-6 sm:p-10 lg:sticky lg:top-[100px]">
            <h3 className="font-serif text-[1.3rem] font-normal mb-6">Din bestilling</h3>
            {cartItems.length === 0 ? (
              <div className="flex justify-between text-[0.82rem] py-2 border-b border-light-stone">
                <span className="text-stone">Ingen varer</span>
              </div>
            ) : (
              cartItems.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between text-[0.82rem] py-2 border-b border-light-stone"
                >
                  <span>
                    {item.icon} {item.name} ×{item.qty}
                  </span>
                  <span>{item.price}</span>
                </div>
              ))
            )}
            <div className="flex justify-between font-serif text-lg mt-4">
              <span>Total</span>
              <span>kr {total}</span>
            </div>
            <p className="text-[0.72rem] text-stone mt-4 leading-[1.6]">
              Inkl. mva. Frakt beregnes ved kasse. Gratis frakt over kr 500.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
