import { TagList } from '../../components/TagList';

export const HeroSection = ({
  title,
  subtitle,
  image,
  alt,
  caption,
  role,
  tools,
  tags = [],
}) => {
  return (
    <section className="col-span-12 md:col-span-8 md:col-start-3 pt-20 pb-12 space-y-6">
      {title && (
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--color-text)]">
          {title}
        </h1>
      )}

      {tags.length > 0 && <TagList tags={tags} />}

      {subtitle && (
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          {subtitle}
        </p>
      )}

      {image && (
        <div className="mt-8">
          <img
            src={image}
            alt={alt}
            className="w-full h-auto rounded-xl shadow-md"
          />
          {caption && (
            <p className="text-sm mt-2 text-[var(--color-text-secondary)] text-center max-w-3xl mx-auto">
              {caption}
            </p>
          )}
        </div>
      )}

      <div className="space-y-1 text-[var(--color-text)]">
        {role && <p><strong>Role:</strong> {role}</p>}
        {tools && <p><strong>Tools:</strong> {tools}</p>}
      </div>

    </section>
  );
};
