import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export function CaseStudyImage({ src, alt, caption }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="my-6">
      <motion.img
        src={src}
        alt={alt}
        onClick={() => setOpen(true)}
        className="rounded-lg shadow-md cursor-zoom-in hover:scale-[1.02] transition-transform"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
      {caption && (
        <p className="text-sm mt-2 text-[var(--color-text-secondary)] italic text-center">
          {caption}
        </p>
      )}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src }]}
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' } }}
      />
    </div>
  );
}
