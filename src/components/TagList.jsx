export const TagList = ({ tags = [] }) => {
  if (!tags.length) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] py-1 px-3 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

{/* tags should go: type of design, type of industry, company/org name, tools used in order of importance */}