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
    <section className="w-full py-24 px-0 sm:px-0 text-[var(--color-text)]">
      <div className="max-w-screen-xl mx-auto space-y-8 px-4">
        {/* Title & Subtitle */}
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
          <div className="w-full px-0">
            <motion.img
              layoutId={`image-${slug}`}
              src={image}
              alt={alt}
              className="w-full h-auto rounded-xl shadow-lg"
            />
            {caption && (
              <p className="text-sm mt-3 text-[var(--color-text-secondary)] text-center">
                {caption}
              </p>
            )}
          </div>
        )}

        {/* Role and Tools */}
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
