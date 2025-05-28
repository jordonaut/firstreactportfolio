export const TagList = ({ tags = [] }) => {
  if (!tags.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-green-700/10 text-teal-200 py-1 px-3 rounded-full text-sm hover:bg-[var(--color-ring-glow)] transition"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
