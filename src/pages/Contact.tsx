export default function Contact() {
  const inputClass =
    'w-full px-4 py-3 border border-light-stone bg-warm-white font-sans text-base text-charcoal outline-none focus:border-bark transition-colors';

  return (
    <div className="pt-[65px] md:pt-20 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-bark text-cream px-8 md:px-20 py-14 md:py-24">
          <p className="text-[0.8rem] tracking-[0.22em] uppercase text-clay-light mb-4">Si hei</p>
          <h1 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-normal leading-[1.15] text-cream mb-4">
            La oss snakke<br />
            <em className="italic text-clay-light">sammen</em>
          </h1>
          <p className="text-lg text-cream/70 max-w-[520px] leading-[1.8] mb-12">
            Vi svarer alle henvendelser innen én virkedag. Vi er et lite team og setter pris på å høre fra deg.
          </p>
          <div className="flex flex-col gap-8">
            {[
              { label: 'E-post', value: 'hei@markabutikk.no' },
              { label: 'Telefon', value: '+47 22 33 44 55\nMan–fre, 09–16' },
              { label: 'Adresse', value: 'Gøteborggata 12\n0566 Oslo, Norge' },
              { label: 'Sosiale medier', value: '@markabutikk på Instagram og Facebook' },
            ].map((item) => (
              <div key={item.label}>
                <h4 className="text-[0.8rem] tracking-[0.18em] uppercase text-clay-light mb-1">
                  {item.label}
                </h4>
                <p className="text-base text-cream/80 whitespace-pre-line">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-8 md:px-20 py-14 md:py-24 bg-warm-white">
          <h3 className="font-serif text-[1.8rem] font-normal text-bark mb-8">
            Send oss en melding
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="fornavn" className="block text-[0.8rem] tracking-[0.12em] uppercase text-stone mb-2">
                Fornavn
              </label>
              <input id="fornavn" type="text" placeholder="Kari" className={inputClass} />
            </div>
            <div>
              <label htmlFor="etternavn" className="block text-[0.8rem] tracking-[0.12em] uppercase text-stone mb-2">
                Etternavn
              </label>
              <input id="etternavn" type="text" placeholder="Nordmann" className={inputClass} />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="epost" className="block text-[0.8rem] tracking-[0.12em] uppercase text-stone mb-2">
              E-post
            </label>
            <input id="epost" type="email" placeholder="kari@eksempel.no" className={inputClass} />
          </div>
          <div className="mb-6">
            <label htmlFor="emne" className="block text-[0.8rem] tracking-[0.12em] uppercase text-stone mb-2">
              Emne
            </label>
            <select id="emne" className={inputClass}>
              <option>Spørsmål om produkt</option>
              <option>Bestilling & levering</option>
              <option>Retur</option>
              <option>Samarbeid</option>
              <option>Annet</option>
            </select>
          </div>
          <div className="mb-8">
            <label htmlFor="melding" className="block text-[0.8rem] tracking-[0.12em] uppercase text-stone mb-2">
              Melding
            </label>
            <textarea
              id="melding"
              placeholder="Skriv din melding her…"
              className="w-full h-[140px] px-4 py-3 resize-y border border-light-stone bg-cream font-sans text-base text-charcoal outline-none focus:border-bark transition-colors"
            />
          </div>
          <button className="bg-bark text-cream px-9 py-3.5 text-[0.8rem] tracking-[0.15em] uppercase border-none cursor-pointer font-sans font-normal hover:bg-clay transition-colors">
            Send melding
          </button>
        </div>
      </div>
    </div>
  );
}
