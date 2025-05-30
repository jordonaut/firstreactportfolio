export function FeatureQuote({ children, subline }) {
  return (
    <section className="w-full py-12 px-4 sm:px-4">
      <blockquote className="text-3xl md:text-4xl lg:text-5xl leading-snug text-[var(--color-text)] text-center font-bold max-w-6xl mx-auto">
        {children}
        {subline && (
          <footer className="mt-6 text-lg md:text-2xl font-normal text-[var(--color-text-secondary)]">
            {subline}
          </footer>
        )}
      </blockquote>
    </section>
  );
}
