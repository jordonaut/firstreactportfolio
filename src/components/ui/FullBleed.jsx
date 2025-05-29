import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function FullBleed({ imageA, altA, captionA, imageB, altB, captionB }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsZoomed(false);
    }
  }, []);

  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed, handleKeyDown]);

  const ImageBlock = ({ src, alt, caption }) => (
    <div className="my-24">
      <img
        src={src}
        alt={alt}
        onClick={() => {
          setIsZoomed(true);
          setActiveImage({ src, alt, caption });
        }}
        className="w-full h-auto object-cover rounded-xl shadow-md cursor-zoom-in"
      />
      {caption && (
        <figcaption className="text-center text-sm text-[var(--color-text-secondary)] mt-2 max-w-4xl mx-auto px-4">
          {caption}
        </figcaption>
      )}
    </div>
  );

  return (
    <figure className="w-screen max-w-none relative left-1/2 -translate-x-1/2 px-0">
      <div className="w-full px-4 sm:px-8 max-w-screen-2xl mx-auto">
        <ImageBlock src={imageA} alt={altA} caption={captionA} />
        {imageB && <ImageBlock src={imageB} alt={altB} caption={captionB} />}
      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 bg-black z-[999] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-full max-h-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage?.src}
                alt={activeImage?.alt}
                className="w-auto h-auto max-h-[90vh] max-w-[95vw] object-contain"
              />
              <p className="absolute bottom-4 left-4 right-4 text-sm text-center text-white bg-black/70 px-6 py-2 rounded-md max-w-3xl mx-auto">
                {activeImage?.caption} — Use scroll to pan. Press <kbd>Esc</kbd> to exit.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </figure>
  );
}
