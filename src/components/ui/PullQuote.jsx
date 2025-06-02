// src/ui/PullQuote.jsx
import { Quote } from 'lucide-react';

export const PullQuote = ({ children, attribution, align = 'left' }) => {
  const isRight = align === 'right';

  return (
    <div
      className={`my-12 flex ${isRight ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`relative w-full md:w-2/3 max-w-prose flex gap-4 items-start ${
          isRight
            ? 'flex-row-reverse border-r-4 pr-4 text-right'
            : 'border-l-4 pl-4 text-left'
        } border-[var(--color-accent)] text-[var(--color-text-secondary)]`}
      >
        <Quote className="w-5 h-5 mt-1 text-[var(--color-accent)] shrink-0" />
        <div>
          <blockquote className="text-lg leading-relaxed">
            “{children}”
          </blockquote>
          {attribution && (
            <footer className="mt-2 text-sm text-[var(--color-text-secondary)]">
              ~ {attribution}
            </footer>
          )}
        </div>
      </div>
    </div>
  );
};
