import { useNavigate } from 'react-router-dom';

export default function ArticleDetail() {
  const navigate = useNavigate();

  return (
    <div className="pt-20 animate-fade-in">
      <div
        className="h-[55vh] flex items-center justify-center text-[8rem]"
        style={{ background: 'linear-gradient(160deg, #C8B89A, #7A6348)' }}
      >
        🍃
      </div>

      <div className="max-w-[720px] mx-auto px-8 py-16">
        <p className="text-[0.65rem] tracking-[0.2em] uppercase text-clay mb-5">
          Oppskrift · 12. mars 2025
        </p>
        <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] font-light leading-[1.15] text-bark mb-4">
          Fermentert hvitløk — en uke i glasskrukke
        </h1>
        <p className="text-[0.75rem] text-stone tracking-wide">
          Av Marka Redaksjonen · 4 min lesning
        </p>
      </div>

      <div className="max-w-[680px] mx-auto px-8 pb-24">
        <p className="text-[0.95rem] leading-[1.9] text-[#4A3D34] mb-6">
          Fermentering er ikke ny teknologi — det er gammel kunnskap pakket inn i moderne nysgjerrighet. I dette innlegget tar vi deg gjennom den enkle prosessen med å fermentere hvitløk i honning, en kombinasjon som er like god for kroppen som den er enkel å lage.
        </p>
        <h2 className="font-serif text-[1.8rem] font-normal text-bark mt-10 mb-4">Hva trenger du?</h2>
        <p className="text-[0.95rem] leading-[1.9] text-[#4A3D34] mb-6">
          Alt du trenger er fersk hvitløk, rå honning — gjerne vår Lynghonning Premium — og et rent, lufttett glass. Hvitløken bidrar med probiotika og svovelrike forbindelser, mens honningen fungerer som sukkerkilde for fermenteringen og gir en naturlig, myk sødme.
        </p>
        <blockquote className="border-l-[3px] border-clay pl-6 my-8 font-serif text-xl italic text-bark leading-[1.6]">
          Fermentering er å gi tid til naturen. Det handler ikke om kontroll, men om tillit.
        </blockquote>
        <h2 className="font-serif text-[1.8rem] font-normal text-bark mt-10 mb-4">Slik gjør du det</h2>
        <p className="text-[0.95rem] leading-[1.9] text-[#4A3D34] mb-6">
          Skrell hvitløksfeddene og legg dem i et rent glass. Hell rå honning over til alt er dekket. Lukk glasset løst — gassen trenger å slippe ut de første dagene. La stå i romtemperatur i 7–10 dager. Vend glasset én gang daglig.
        </p>
        <p className="text-[0.95rem] leading-[1.9] text-[#4A3D34] mb-6">
          Etter en uke vil du merke at honningen har blitt tynnere og hvitløken har fått en mildere, nesten karamellisert smak. Bruk det på brød, i sauser eller rett fra skjeen som et daglig velværetilskudd.
        </p>
        <div className="text-center pt-8">
          <button
            onClick={() => navigate('/magasin')}
            className="bg-transparent text-bark px-9 py-3.5 text-[0.72rem] tracking-[0.15em] uppercase border border-bark cursor-pointer font-sans font-normal hover:bg-bark hover:text-cream transition-all"
          >
            ← Tilbake til magasinet
          </button>
        </div>
      </div>
    </div>
  );
}
