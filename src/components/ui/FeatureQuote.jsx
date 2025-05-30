export function FeatureQuote({ children }) {
  return (
    <section className="w-full py-12 px-4 sm:px-4">
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-start-3 lg:col-span-8">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl leading-snug text-[var(--color-text)] text-center font-bold">
            {children}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
