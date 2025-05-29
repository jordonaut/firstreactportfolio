export function FeatureQuote({ children }) {
  return (
    <section className="w-full px-4 sm:px-4 py-16 md:py-0">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          <blockquote className="text-2xl sm:text-3xl md:text-4xl leading-snug text-[var(--color-text)] text-center font-bold">
            {children}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
