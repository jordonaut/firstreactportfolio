import { Link } from 'react-router-dom';

export const ProjectCard = ({ title, description, to, tags = [] }) => {
  return (
    <Link
      to={to}
      aria-label={`View ${title} case study`}
      className="block p-6 rounded-xl border border-white/10 bg-[var(--color-surface)] text-[var(--color-text)] transition-all duration-300 transform hover:scale-[1.01] hover:border-green-700 hover:shadow-[0_0_16px_var(--color-mint-glow)] cursor-pointer"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="bg-green-700/10 text-teal-200 py-1 px-3 rounded-full text-sm hover:bg-[var(--color-ring-glow)] transition"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};
