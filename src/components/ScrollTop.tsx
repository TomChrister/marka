import { useEffect, useState } from 'react';

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Til toppen"
      className="fixed bottom-8 right-8 z-30 w-11 h-11 bg-bark text-cream border-none cursor-pointer text-lg flex items-center justify-center hover:bg-clay transition-colors"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      ↑
    </button>
  );
}
