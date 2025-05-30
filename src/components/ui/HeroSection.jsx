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
    <section className="w-full py-24 px-4 sm:px-6 bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="grid grid-cols-12 gap-4 max-w-screen-xl mx-auto">
        <div className="col-span-12 lg:col-start-3 lg:col-span-9 text-center space-y-8">
          {title && (
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              {title}
            </h1>
          )}

          {tags.length > 0 && (
            <div className="flex justify-center">
              <TagList tags={tags} />
            </div>
          )}

          {subtitle && (
            <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {image && (
        <div className="col-span-12 grid grid-cols-12 mt-12">
          <div className="col-start-3 col-span-9 mx-auto">
            <img
              src={image}
              alt={alt}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            {caption && (
              <p className="text-sm mt-3 text-[var(--color-text-secondary)] text-center">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}


        <div className="col-span-12 lg:col-start-3 lg:col-span-9 text-center mt-12 space-y-2 text-[var(--color-text)]">
          {role && <p><strong>Role:</strong> {role}</p>}
          {tools && <p><strong>Tools:</strong> {tools}</p>}
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';
