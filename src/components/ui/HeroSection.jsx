// HeroSection.jsx
import { motion } from 'framer-motion';
import { TagList } from '../../components/TagList';

export const HeroSection = ({
  slug,
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
    <section className="w-full py-24 px-0 text-[var(--color-text)] bg-[var(--color-bg)]">
      <div className="max-w-screen-2xl mx-auto px-4 space-y-16">
        {/* Title, Tags, Subtitle */}
        <div className="text-center space-y-8">
          {title && (
            <motion.h1
              layoutId={`title-${slug}`}
              className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
            >
              {title}
            </motion.h1>
          )}

          {tags.length > 0 && (
            <div className="flex justify-center">
              <TagList tags={tags} />
            </div>
          )}

          {subtitle && (
            <motion.p
              layoutId={`subtitle-${slug}`}
              className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {/* Hero Image */}
        {image && (
          <div className="w-full">
            <motion.img
              layoutId={`image-${slug}`}
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
        )}

        {/* Role & Tools */}
        {(role || tools) && (
          <div className="text-center space-y-2 max-w-xl mx-auto">
            {role && <p><strong>Role:</strong> {role}</p>}
            {tools && <p><strong>Tools:</strong> {tools}</p>}
          </div>
        )}
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';
