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
  const [success, setSuccess] = useState(false);

  const inputClass =
    'w-full px-4 py-3 border border-light-stone bg-cream font-sans text-[0.88rem] text-charcoal outline-none focus:border-bark transition-colors';

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
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate('/magasin');
    }, 2000);
    setTitle('');
    setExcerpt('');
    setBody('');
  };

  return (
    <div className="pt-[120px] pb-20 px-20 max-w-[900px] mx-auto animate-fade-in">
      <h1 className="font-serif text-[2.5rem] font-light text-bark mb-2">Ny artikkel</h1>
      <p className="text-[0.85rem] text-stone mb-12">
        Del kunnskap, oppskrifter eller historier med Marka-fellesskapet.
      </p>

      {success && (
        <div className="bg-moss text-white px-6 py-4 text-[0.82rem] tracking-wide mb-4">
          ✓ Artikkelen er publisert i magasinet!
        </div>
      )}

      <div className="mb-8">
        <label className="block text-[0.68rem] tracking-[0.15em] uppercase text-stone mb-2">
          Tittel
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Gi artikkelen din en tittel…"
          className="w-full py-3 border-b-2 border-light-stone font-serif text-[2rem] font-light text-bark outline-none focus:border-clay transition-colors"
          style={{ background: 'none', border: 'none', borderBottom: '2px solid #E8E3DC' }}
          onFocus={(e) => (e.target.style.borderBottomColor = '#B87A5A')}
          onBlur={(e) => (e.target.style.borderBottomColor = '#E8E3DC')}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <label className="block text-[0.68rem] tracking-[0.15em] uppercase text-stone mb-2">
            Kategori
          </label>
          <select
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
          <label className="block text-[0.68rem] tracking-[0.15em] uppercase text-stone mb-2">
            Lesetid (min)
          </label>
          <input
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
        <label className="block text-[0.68rem] tracking-[0.15em] uppercase text-stone mb-2">
          Ingress — kort sammendrag
        </label>
        <input
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="En setning som fanger leseren…"
          className={inputClass}
        />
      </div>

      <div className="mb-8">
        <label className="block text-[0.68rem] tracking-[0.15em] uppercase text-stone mb-2">
          Artikkelinnhold
        </label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Skriv artikkelen din her…"
          className="w-full min-h-[320px] p-4 border border-light-stone bg-cream font-sans text-[0.9rem] leading-[1.85] text-charcoal outline-none resize-y focus:border-bark transition-colors"
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={handlePublish}
          className="bg-bark text-cream px-9 py-3.5 text-[0.72rem] tracking-[0.15em] uppercase border-none cursor-pointer font-sans font-normal hover:bg-clay transition-colors"
        >
          Publiser artikkel
        </button>
        <button
          onClick={() => navigate('/magasin')}
          className="bg-transparent text-bark px-9 py-3.5 text-[0.72rem] tracking-[0.15em] uppercase border border-bark cursor-pointer font-sans font-normal hover:bg-bark hover:text-cream transition-all"
        >
          Avbryt
        </button>
      </div>
    </div>
  );
}
