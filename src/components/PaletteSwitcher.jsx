// src/components/PaletteSwitcher.jsx
import { useState, useEffect } from 'react';
import HeartIcon  from '../assets/heart.svg?react';

const palettes = [
  { id: 'hot-pink', scent: 'Rose', color: '#FF69B4' },
  { id: 'red', scent: 'Cedar', color: '#B33F3F' },
  { id: 'orange', scent: 'Orange', color: '#FF7133' },
  { id: 'yellow', scent: 'Ginger', color: '#FBEA67' },
  { id: 'green', scent: 'Mint', color: '#21F3A4' },
  { id: 'turquoise', scent: 'Rain', color: '#40E0D0' },
  { id: 'indigo', scent: 'Lotus', color: '#6B6BFF' },
  { id: 'violet', scent: 'Lilac', color: '#B388FF' },
];

export function PaletteSwitcher() {
  const [currentIndex, setCurrentIndex] = useState(() => {
  const stored = sessionStorage.getItem('palette');
  const initial = stored || 'green';
  return palettes.findIndex(p => p.id === initial);
});

  const [isPulsing, setIsPulsing] = useState(false);
  const current = palettes[currentIndex];

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', current.id);
    sessionStorage.setItem('palette', current.id);

    // Trigger pulse animation
    setIsPulsing(true);
    const timeout = setTimeout(() => setIsPulsing(false), 300);
    return () => clearTimeout(timeout);
  }, [current]);

  const cyclePalette = () => {
    setCurrentIndex((prev) => (prev + 1) % palettes.length);
  };

  return (
    <button
      onClick={cyclePalette}
      aria-label={`Switch palette to ${current.scent}`}
      title={current.scent}
      className={`p-2 transition-transform hover:scale-110 ${isPulsing ? 'pulse' : ''}`}
    >
      <HeartIcon
        style={{
          stroke: current.color,
          strokeWidth: 2,
          width: '1.75rem',
          height: '1.75rem',
          fill: 'none',
          transition: 'stroke 0.3s ease',
        }}
      />
    </button>
  );
}
