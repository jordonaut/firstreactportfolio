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
  caption,
  role,
  tools,
  tags = [],
}) => {
  const navigate = useNavigate();

  return (
    <motion.article
      layoutId={`card-${slug}`}
      onClick={() => navigate(`/projects/${slug}`)}
      aria-label={`View ${title} case study`}
      className="block cursor-pointer rounded-xl border border-white/20 bg-[var(--color-surface)] text-[var(--color-text)] overflow-hidden shadow-md transition-all duration-300 transform hover:scale-[1.01] hover:border-white/50 hover:shadow-[0_0_16px_var(--color-mint-glow)]"
    >
      {heroImage && (
        <motion.img
          layoutId={`image-${slug}`}
          src={heroImage}
          alt={alt || `${title} thumbnail`}
          className="w-full h-56 object-cover"
        />
      )}

      <div className="p-6">
        <motion.h3
          layoutId={`title-${slug}`}
          className="text-xl font-semibold mb-2"
        >
          {title}
        </motion.h3>

        {subtitle && (
          <motion.p
            layoutId={`subtitle-${slug}`}
            className="text-[var(--color-text)] mb-4"
          >
            {subtitle}
          </motion.p>
        )}

        {tags.length > 0 && (
          <div className="mt-2">
            <TagList tags={tags} />
          </div>
        )}
      </div>
    </motion.article>
  );
};
