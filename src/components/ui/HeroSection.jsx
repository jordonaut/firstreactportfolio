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
    <section className="w-full px-4 sm:px-6 py-16">
      <div className="max-w-screen-xl mx-auto text-center space-y-8">
        {title && (
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--color-text)]">
            {title}
          </h1>
        )}

        {tags.length > 0 && (
          <div className="flex justify-center">
            <TagList tags={tags} />
          </div>
        )}

        {subtitle && (
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}

        {image && (
          <div className="grid grid-cols-12 gap-4 mt-8">
            <div className="col-span-12 md:col-start-3 md:col-span-10">
              <img
                src={image}
                alt={alt}
                className="w-full h-auto rounded-xl shadow-md"
              />
              {caption && (
                <p className="text-sm mt-2 text-[var(--color-text-secondary)] text-left md:text-center">
                  {caption}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="space-y-1 text-[var(--color-text)] text-center">
          {role && <p><strong>Role:</strong> {role}</p>}
          {tools && <p><strong>Tools:</strong> {tools}</p>}
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';
