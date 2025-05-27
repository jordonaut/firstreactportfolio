import { useEffect, useState } from 'react';

export function MobileSectionNav() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const sectionEls = Array.from(document.querySelectorAll('section[id]'));
    const sectionInfo = sectionEls.map((el) => ({
      id: el.id,
      label: el.dataset.label || el.id.replace(/-/g, ' '),
    }));
    setSections(sectionInfo);
  }, []);

  if (!sections.length) return null;

  return (
    <nav className="flex overflow-x-auto space-x-4 scrollbar-hide px-2">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="whitespace-nowrap px-4 py-2 text-sm font-medium rounded-full bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
