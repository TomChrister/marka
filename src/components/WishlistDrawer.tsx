import { Heart } from 'lucide-react';
import { useAppStore } from '../store/cartStore';

export function WishlistDrawer() {
  const {
    wishlistItems,
    isWishlistOpen,
    toggleWishlistDrawer,
    removeFromWishlist,
    addToCart,
  } = useAppStore();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isWishlistOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleWishlistDrawer}
      />

      <div
        className={`fixed right-0 top-0 bottom-0 w-full sm:w-[400px] bg-warm-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ${
          isWishlistOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 sm:p-8 border-b border-light-stone flex justify-between items-center">
          <h3 className="font-serif text-[1.4rem] font-normal">Ønskeliste</h3>
          <button
            onClick={toggleWishlistDrawer}
            className="text-stone text-2xl bg-transparent border-none cursor-pointer hover:text-bark transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 sm:p-8 flex flex-col gap-6">
          {wishlistItems.length === 0 ? (
            <p className="text-center py-12 text-stone font-serif text-xl italic">
              Ønskelisten din er tom
            </p>
          ) : (
            wishlistItems.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-[70px] h-[90px] bg-light-stone flex items-center justify-center text-2xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-serif text-base mb-0.5">{item.name}</p>
                  <p className="text-[0.85rem] font-normal mb-2">{item.price}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <button
                      onClick={() => addToCart(item.name, item.price, item.icon)}
                      className="text-[0.65rem] text-bark cursor-pointer uppercase tracking-widest bg-transparent border-none hover:text-clay transition-colors"
                    >
                      Legg i vogn
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.name)}
                      className="text-[0.65rem] text-stone cursor-pointer uppercase tracking-widest bg-transparent border-none hover:text-bark transition-colors"
                    >
                      Fjern
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {wishlistItems.length > 0 && (
          <div className="p-5 sm:p-8 border-t border-light-stone flex items-center gap-2 text-stone">
            <Heart size={15} strokeWidth={1.5} />
            <span className="text-[0.8rem]">
              {wishlistItems.length}{' '}
              {wishlistItems.length === 1 ? 'lagret produkt' : 'lagrede produkter'}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
