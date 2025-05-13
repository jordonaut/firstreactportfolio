import { useEffect, useState } from 'react'; //please let this work (testing)

export const Home = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem('visitCount')) || 0;
    const nextCount = storedCount + 1;
    localStorage.setItem('visitCount', nextCount);
    setVisitCount(nextCount);
  }, []);

  const getGreeting = () => {
    if (visitCount === 1) return "Hi, I’m Jordan Green.";
    if (visitCount === 2) return "Hey, welcome back. I’m still Jordan Green.";
    if (visitCount === 3) return "Good to see you again! Still Jordan Green.";
    if (visitCount >= 4) return "Hello old friend. Jordan here. Good to see you."
    return "Hi there. Welcome back.";
  };

  const getPrimaryCTA = () => {
    if (visitCount === 1) return "View My Work";
    if (visitCount === 2) return "See What’s New";
    return "Let’s Explore Again";
  };

  const getSecondaryCTA = () => {
    if (visitCount === 1) return "Get in Touch";
    if (visitCount === 2) return "Let’s Catch Up";
    return null;
  };

   const secondaryCTA = getSecondaryCTA();


  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center space-y-4 px-4">
      <h1 className="text-4xl md:text-6xl px-[15vw] font-black mb-8 pb-1.75 bg-gradient-to-r from-teal-400 to-green-600 bg-clip-text text-transparent">
        {getGreeting()}
      </h1>

      <p className="text-[var(--color-text)] text-lg max-w-2xl">
        Help People. Do good. Help people do good. <p></p>From design systems to digital
          strategy, I craft intuitive experiences that scale — grounded in
          research, driven by story, and built for real impact.
      </p>

      <div className="flex flex-wrap justify-center gap-4 pt-6">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold hover:bg-[var(--color-primary-bright)] transition"
        >
          {getPrimaryCTA()}
        </a>

       {secondaryCTA && (
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition"
          >
            {secondaryCTA}
          </a>
        )}
      </div>
    </section>
  );
};
