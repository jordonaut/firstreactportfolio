// Home.jsx
export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-black mb-8 pb-1.75 bg-gradient-to-r from-teal-400 to-green-600 bg-clip-text text-transparent">
          Hi, I’m <span className="text-accent">Jordan Green</span>.
        </h1>

        <p className="text-gray-200 text-lg mb-8 max-w-lg mx-auto">
          I bring structure to the mess. From design systems to digital
          strategy, I craft intuitive experiences that scale — grounded in
          research, driven by story, and built for real impact.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="bg-green-700 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="border border-green-300/50 text-green-300 py-3 px-6 rounded font-medium transition transform hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-green-300/20"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};