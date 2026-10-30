import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/cartStore';

const categoryEmojis: Record<string, string> = {
  'Oppskrift': '🍃',
  'Livsstil': '🌾',
  'Produsenter': '🏔️',
  'Helse & natur': '🌿',
  'Redaksjonelt': '✍️',
};

export default function WriteArticle() {
  const navigate = useNavigate();
  const { addArticle } = useAppStore();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Oppskrift');
  const [readTime, setReadTime] = useState(5);
  const [excerpt, setExcerpt] = useState('');
  const [body, setBody] = useState('');

  const inputClass =
    'w-full px-4 py-3 border border-light-stone bg-cream font-sans text-base text-charcoal outline-none focus:border-bark transition-colors';

  const handlePublish = () => {
    if (!title.trim() || !body.trim()) {
      alert('Vennligst fyll inn tittel og innhold.');
      return;
    }
    const today = new Date().toLocaleDateString('no-NO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    addArticle({
      title,
      excerpt: excerpt || body.substring(0, 100) + '…',
      category,
      readTime,
      date: today,
      emoji: categoryEmojis[category] || '📝',
    });
    navigate('/magasin');
  };

  return (
    <div className="pt-[80px] md:pt-[120px] pb-20 px-6 md:px-20 max-w-[900px] mx-auto animate-fade-in">
      <h1 className="font-serif text-[2.5rem] font-normal text-bark mb-2">Ny artikkel</h1>
      <p className="text-base text-stone mb-12">
        Del kunnskap, oppskrifter eller historier med Marka-fellesskapet.
      </p>

      <div className="mb-8">
        <label htmlFor="tittel" className="block text-[0.8rem] tracking-[0.15em] uppercase text-stone mb-2">
          Tittel
        </label>
        <input
          id="tittel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Gi artikkelen din en tittel…"
          className="w-full py-3 bg-transparent border-b-2 border-light-stone font-serif text-[2rem] font-normal text-bark outline-none focus:border-clay transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div>
          <label htmlFor="kategori" className="block text-[0.8rem] tracking-[0.15em] uppercase text-stone mb-2">
            Kategori
          </label>
          <select
            id="kategori"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={inputClass}
          >
            <option>Oppskrift</option>
            <option>Livsstil</option>
            <option>Produsenter</option>
            <option>Helse & natur</option>
            <option>Redaksjonelt</option>
          </select>
        </div>
        <div>
          <label htmlFor="lesetid" className="block text-[0.8rem] tracking-[0.15em] uppercase text-stone mb-2">
            Lesetid (min)
          </label>
          <input
            id="lesetid"
            type="number"
            value={readTime}
            onChange={(e) => setReadTime(Number(e.target.value))}
            min={1}
            max={60}
            className={inputClass}
          />
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="ingress" className="block text-[0.8rem] tracking-[0.15em] uppercase text-stone mb-2">
          Ingress — kort sammendrag
        </label>
        <input
          id="ingress"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="En setning som fanger leseren…"
          className={inputClass}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="artikkelinnhold" className="block text-[0.8rem] tracking-[0.15em] uppercase text-stone mb-2">
          Artikkelinnhold
        </label>
        <textarea
          id="artikkelinnhold"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Skriv artikkelen din her…"
          className="w-full min-h-[320px] p-4 border border-light-stone bg-cream font-sans text-base leading-[1.85] text-charcoal outline-none resize-y focus:border-bark transition-colors"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handlePublish}
          className="bg-bark text-cream px-9 py-3.5 text-[0.8rem] tracking-[0.15em] uppercase border-none cursor-pointer font-sans font-normal hover:bg-clay transition-colors"
        >
          Publiser artikkel
        </button>
        <button
          onClick={() => navigate('/magasin')}
          className="bg-transparent text-bark px-9 py-3.5 text-[0.8rem] tracking-[0.15em] uppercase border border-bark cursor-pointer font-sans font-normal hover:bg-bark hover:text-cream transition-all"
        >
          Avbryt
        </button>
      </div>
    </div>
  );
}
