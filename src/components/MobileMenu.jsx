export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[var(--color-surface)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-[var(--text-color)] text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      {['Home', 'About', 'Projects', 'Contact'].map((label) => (
        <a
          key={label}
          href={`#${label.toLowerCase()}`}
          className={`text-[var(--color-text-secondary)] text-2xl font-semibold my-4 transform transition-transform duration-300 ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </a>
      ))}
    </div>
  );
};
