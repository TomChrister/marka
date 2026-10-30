export default function About() {
  return (
    <div className="pt-[65px] md:pt-20 animate-fade-in">
      {/* About split */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px]">
        <div
          className="flex items-center justify-center text-[6rem] min-h-[250px] md:min-h-0"
          style={{ background: 'linear-gradient(170deg, #C2AE96 0%, #7D6550 100%)' }}
        >
          🌲
        </div>
        <div className="px-8 md:px-20 py-14 md:py-24 flex flex-col justify-center">
          <p className="text-[0.8rem] tracking-[0.22em] uppercase text-stone mb-4">Vår historie</p>
          <h1 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-normal leading-[1.15] text-bark mb-4">
            Vi tror på det<br />
            <em className="italic text-clay">ekte og enkle</em>
          </h1>
          <p className="text-lg text-stone max-w-[520px] leading-[1.8] mb-8">
            MARKA ble grunnlagt i 2019 av to venner som var lei av forpakkede produkter uten sjel. Vi ville tilbake til røttene — til det norske, til naturen og til de menneskene som kjenner den best.
          </p>
          <div className="flex flex-col gap-6">
            {[
              {
                num: '01',
                title: 'Ærlige råvarer',
                text: 'Vi kjenner alle produsentene våre personlig. Ingenting selges uten at vi vet nøyaktig hvor det kommer fra.',
              },
              {
                num: '02',
                title: 'Kortreist alltid',
                text: '100% norske råvarer. Det reduserer karbonavtrykk og støtter norsk landbruk og natur.',
              },
              {
                num: '03',
                title: 'Minimal emballasje',
                text: 'Alt er pakket i gjenvinnbart materiale. Vi er B-Corp sertifisert og stolt av det.',
              },
            ].map((v) => (
              <div key={v.num} className="flex gap-6 items-start">
                <span className="font-serif text-[1.8rem] text-clay italic flex-shrink-0 leading-none">
                  {v.num}
                </span>
                <div>
                  <h4 className="text-base tracking-widest uppercase mb-1">{v.title}</h4>
                  <p className="text-base text-stone leading-[1.7]">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team section */}
      <section className="py-12 md:py-20 px-6 md:px-20 bg-cream">
        <p className="text-[0.8rem] tracking-[0.22em] uppercase text-stone mb-4 text-center">
          Teamet
        </p>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-normal leading-[1.15] text-bark mb-12 text-center">
          Menneskene<br />
          <em className="italic text-clay">bak Marka</em>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { emoji: '👩', name: 'Kari Lund', role: 'Medgründer & Produksjon', bg: 'linear-gradient(135deg,#C8B89A,#7A6348)' },
            { emoji: '👨', name: 'Erik Halvorsen', role: 'Medgründer & Konsept', bg: 'linear-gradient(135deg,#C0D0C8,#6A8A78)' },
            { emoji: '👩', name: 'Maja Berg', role: 'Innhold & Magasin', bg: 'linear-gradient(135deg,#D0C0D0,#907880)' },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div
                className="w-[120px] h-[120px] rounded-full flex items-center justify-center text-[3rem] mx-auto mb-5"
                style={{ background: member.bg }}
              >
                {member.emoji}
              </div>
              <h4 className="font-serif text-xl font-normal mb-1">{member.name}</h4>
              <p className="text-[0.8rem] text-stone tracking-widest uppercase">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
