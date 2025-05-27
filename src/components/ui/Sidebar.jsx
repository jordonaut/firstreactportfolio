import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Sidebar() {
  const navigate = useNavigate();
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState(null);

  // Automatically find all <section id="..."> elements
  useEffect(() => {
    const sectionEls = Array.from(document.querySelectorAll('section[id]'));
    const sectionInfo = sectionEls.map((el) => ({
      id: el.id,
      label: el.dataset.label || el.id.replace(/-/g, ' '),
    }));
    setSections(sectionInfo);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      {
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0.1,
      }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!sections.length) return null;

  return (
    <aside className="fixed top-28 left-6 w-48 hidden xl:block z-40 border border-white/20 bg-[var(--color-surface)] shadow-lg rounded-xl px-4 py-6 backdrop-blur-sm bg-opacity-90">
      <button
        onClick={() => navigate('/')}
        className="block px-3 py-1 text-left text-sm text-[var(--color-accent)] underline mb-4 hover:text-[var(--color-primary-bright)] transition-colors duration-200"
      >
        ← Back to Home
      </button>

      <nav className="space-y-3 text-sm text-[var(--color-text-secondary)]">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`block px-3 py-1 rounded transition-all ${
              activeId === id
                ? 'bg-[var(--color-accent)] text-black font-semibold'
                : 'hover:text-[var(--color-accent)]'
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
