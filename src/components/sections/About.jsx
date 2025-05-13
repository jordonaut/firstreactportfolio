import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect, useState } from "react";
import jordanprofessional from "../../assets/images/jordan-professional.jpg";

export const About = () => {
  const uxSkills = [
    "UX Research",
    "Community-Centered Design",
    "Accessibility",
    "Inclusive Design",
    "Interaction Design",
    "Visual Design",
    "Design Systems",
    "Service Design",
    "Facilitation",
    "Stakeholder Alignment",
  ];

  const codeSkills = [
    "Semantic HTML",
    "Modular CSS",
    "Mobile-First Design",
    "ARIA",
    "Keyboard Nav",
    "React (Vite, JSX, Hooks)",
    "Tailwind CSS",
    "CSS Custom Properties",
    "Dynamic UI",
  ];

  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const storedCount = sessionStorage.getItem("visitCount");
    const count = storedCount ? parseInt(storedCount) + 1 : 1;
    sessionStorage.setItem("visitCount", count);
    setVisitCount(count);
  }, []);

  const getCaption = () => {
    if (visitCount > 1) return "Welcome back. Did you scroll all this way to see my face?";
    return "Hi, I'm Jordan—nice to meet you.";
  };


  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-teal-400 bg-clip-text text-transparent text-center">
            About Me:
          </h2>

          <div className="rounded-xl p-6 mb-6 border-white/10 border hover:-translate-y-1 transition-all">
            <div className="flex flex-col md:flex-row items-start gap-10 mb-6">
              <div className="flex flex-col items-center md:items-start w-full">
                    <img 
                    src={jordanprofessional}
                    alt="Professional headshot of Jordan Green"
                    className="w-64 h-64 object-cover object-top rounded-full border border-white/20 shadow-lg"
                    />
                    <p className="text-sm text-[var(--color-text-secondary)] mt-3 text-center w-64">
                        {getCaption()}
                    </p>
                </div>



              <div className="space-y-4 text-gray-200 text-base leading-relaxed md:max-w-xl">
                <p><strong>I'm a designer who codes.</strong></p>
                <p>The world has enough well-designed shopping carts—what we need are more tools that engender connection rather than frustration.</p>
                <p>I believe technology should be a bridge—a way to connect people and amplify voices; a way to build a more joyful and just world.</p>
                <p>My most elegant solutions have always started from listening. Whether it's in civic tech, aerospace, or community organizing, decentering the self leads to great designs. I apply this philosophy whether I'm coding design systems or sketching user flows on breakfast napkins.</p>
                <p>Useful design isn't pretty—it's purposeful. It considers both aesthetics and operations, meeting people where they are, whether on spotty mobile connections or government desktops running Windows 7 (yes, still).</p>
                <p>My mission: create digital experiences that make win-wins possible, to live a honest, purposeful life; <strong>and above all to help people do good.</strong></p>
                <p>Because saving the world shouldn't require a 50-page user manual—and if it does, we shouldn't bury the lede.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4">UX Design</h3>
              <div className="flex flex-wrap gap-2">
                {uxSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-700/10 text-teal-200 py-1 px-3 rounded-full text-sm hover:bg-green-300/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl font-bold mb-4">Designing in Code</h3>
              <div className="flex flex-wrap gap-2">
                {codeSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-700/10 text-teal-200 py-1 px-3 rounded-full text-sm hover:bg-green-300/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
