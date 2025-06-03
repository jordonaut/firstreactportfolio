// ProjectCard.jsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TagList } from '../../components/TagList';

export const ProjectCard = ({
  slug,
  title,
  subtitle,
  heroImage,
  alt,
  tags = [],
  hoverEffect = 'solid', 
}) => {
  const navigate = useNavigate();

  const hoverClass =
    hoverEffect === 'gradient'
      ? 'hover:shadow-[0_0_16px_var(--color-ring-glow)] hover:border-gradient-to-r hover:from-[var(--color-primary)] hover:to-[var(--color-accent)]'
      : 'hover:shadow-[0_0_16px_var(--color-mint-glow)] hover:border-white/20';

  return (
    <motion.article
      layoutId={`card-${slug}`}
      onClick={() => navigate(`/projects/${slug}`)}
      aria-label={`View ${title} case study`}
      className={`group flex flex-col h-full cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[var(--color-surface)] text-[var(--color-text)] shadow-md transition-all duration-300 transform hover:scale-[1.01] ${hoverClass}`}
    >
      {/* Image on Top */}
      {heroImage && (
        <motion.div
          layoutId={`image-${slug}`}
          className="w-full aspect-[4/3] flex items-center justify-center bg-black"
        >
          <img
            src={heroImage}
            alt={alt || `${title} thumbnail`}
            className="w-full h-full object-contain"
          />
        </motion.div>
      )}

      {/* Content Below */}
      <div className="p-4 flex flex-col justify-center h-full">
        <div>
          <motion.h3
            layoutId={`title-${slug}`}
            className="text-2xl font-semibold mb-2 group-hover:underline"
          >
            {title}
          </motion.h3>

          {subtitle && (
            <motion.p
              layoutId={`subtitle-${slug}`}
              className="text-sm text-[var(--color-text)]"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        {tags.length > 0 && (
          <div className="mt-4">
            <TagList tags={tags} />
          </div>
        )}
      </div>
    </motion.article>
  );
};
