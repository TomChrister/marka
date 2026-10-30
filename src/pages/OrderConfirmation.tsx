import { Link } from 'react-router-dom';

export default function OrderConfirmation() {
  return (
    <div className="pt-[80px] md:pt-[120px] animate-fade-in">
      <div className="max-w-[640px] mx-auto px-6 py-16 md:py-24 text-center">
        <p className="text-5xl mb-6" aria-hidden="true">🌿</p>
        <h1 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-normal leading-[1.15] text-bark mb-4">
          Takk for din bestilling!
        </h1>
        <p className="text-lg text-stone leading-[1.8] mb-10">
          Vi har mottatt bestillingen din og sender en bekreftelse på e-post. Varene pakkes med omhu og
          leveres innen 2–4 virkedager.
        </p>
        <Link
          to="/butikk"
          className="inline-block bg-bark text-cream px-9 py-3.5 text-[0.8rem] tracking-[0.15em] uppercase font-sans font-normal hover:bg-clay transition-colors"
        >
          Fortsett å handle
        </Link>
      </div>
    </div>
  );
}
