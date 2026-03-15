import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/cartStore';

export function CartDrawer() {
  const { cartItems, isCartOpen, toggleCart, closeCart, removeFromCart } = useAppStore();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ''));
    return sum + price * item.qty;
  }, 0);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleCart}
      />

      <div
        className={`fixed right-0 top-0 bottom-0 w-[400px] bg-warm-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 border-b border-light-stone flex justify-between items-center">
          <h3 className="font-serif text-[1.4rem] font-normal">Handlevogn</h3>
          <button
            onClick={toggleCart}
            className="text-stone text-2xl bg-transparent border-none cursor-pointer hover:text-bark transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <p className="text-center py-12 text-stone font-serif text-xl italic">
              Din vogn er tom
            </p>
          ) : (
            cartItems.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-[70px] h-[90px] bg-light-stone flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-serif text-base mb-0.5">{item.name}</p>
                  <p className="text-[0.72rem] text-stone mb-2">Antall: {item.qty}</p>
                  <p className="text-[0.85rem] font-normal">{item.price}</p>
                  <button
                    onClick={() => removeFromCart(idx)}
                    className="text-[0.65rem] text-stone cursor-pointer uppercase tracking-widest bg-transparent border-none hover:text-bark transition-colors mt-1"
                  >
                    Fjern
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-8 border-t border-light-stone">
            <div className="flex justify-between mb-6">
              <span className="font-serif text-lg">Totalt</span>
              <span className="font-serif text-lg">kr {total}</span>
            </div>
            <button
              className="w-full py-4 bg-bark text-cream text-[0.75rem] tracking-[0.15em] uppercase font-sans font-normal hover:bg-clay transition-colors cursor-pointer border-none"
              onClick={() => {
                closeCart();
                navigate('/kasse');
              }}
            >
              Gå til kasse
            </button>
          </div>
        )}
      </div>
    </>
  );
}
