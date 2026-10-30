import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-bark text-cream px-6 md:px-20 pt-12 md:pt-20 pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-16 mb-12 md:mb-16">
        <div>
          <span className="font-serif text-[1.6rem] tracking-[0.15em] uppercase text-cream block mb-4">
            MARKA
          </span>
          <p className="text-base text-cream/60 leading-[1.7] max-w-[260px]">
            Ærlige produkter fra norsk natur. Vi tror på det enkle, det nære og det ekte.
          </p>
        </div>

        <div>
          <h5 className="text-[0.8rem] tracking-[0.2em] uppercase text-clay-light mb-5">Butikk</h5>
          <Link to="/butikk" className="block text-base text-cream/70 hover:text-cream mb-2.5 no-underline transition-colors">Alle produkter</Link>
          <Link to="/kategorier" className="block text-base text-cream/70 hover:text-cream mb-2.5 no-underline transition-colors">Kategorier</Link>
          <span className="block text-base text-cream/70 mb-2.5 cursor-default">Bestselgere</span>
          <span className="block text-base text-cream/70 mb-2.5 cursor-default">Nyheter</span>
        </div>

        <div>
          <h5 className="text-[0.8rem] tracking-[0.2em] uppercase text-clay-light mb-5">Magasin</h5>
          <Link to="/magasin" className="block text-base text-cream/70 hover:text-cream mb-2.5 no-underline transition-colors">Artikler</Link>
          <Link to="/skriv-artikkel" className="block text-base text-cream/70 hover:text-cream mb-2.5 no-underline transition-colors">Skriv artikkel</Link>
          <span className="block text-base text-cream/70 mb-2.5 cursor-default">Oppskrifter</span>
          <span className="block text-base text-cream/70 mb-2.5 cursor-default">Livsstil</span>
        </div>

        <div>
          <h5 className="text-[0.8rem] tracking-[0.2em] uppercase text-clay-light mb-5">Info</h5>
          <Link to="/om-oss" className="block text-base text-cream/70 hover:text-cream mb-2.5 no-underline transition-colors">Om oss</Link>
          <Link to="/kontakt" className="block text-base text-cream/70 hover:text-cream mb-2.5 no-underline transition-colors">Kontakt</Link>
          <span className="block text-base text-cream/70 mb-2.5 cursor-default">Frakt & retur</span>
          <span className="block text-base text-cream/70 mb-2.5 cursor-default">Personvern</span>
        </div>
      </div>

      <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-[0.8rem] text-cream/70 tracking-wide">© 2025 MARKA AS. Alle rettigheter forbeholdt.</p>
        <p className="text-[0.8rem] text-cream/70">Laget med kjærlighet i Norge 🌿</p>
      </div>
    </footer>
  );
}
