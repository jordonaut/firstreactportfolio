import { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export function CaseStudyImage({ images, label = 'View Full Size' }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loadedIndexes, setLoadedIndexes] = useState([]);

  // Guard: if images is not provided, render nothing
  if (!images) return null;

  const imageArray = Array.isArray(images) ? images : [images];

  // Debug logs
  console.log('CaseStudyImage rendered with:', { images, imageArray });

  const handleClick = (i) => {
    console.log('Image clicked, index:', i);
    setIndex(i);
    setOpen(true);
  };

  const handleLoad = (i) => {
    console.log('Image loaded, index:', i);
    setLoadedIndexes((prev) => (prev.includes(i) ? prev : [...prev, i]));
  };

  const getGridClass = (length) => {
    if (length === 1) return '';
    if (length === 2) return 'grid grid-cols-1 sm:grid-cols-2 gap-4';
    return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4';
  };

  return (
    <div className={`my-8 ${getGridClass(imageArray.length)}`}>
      {imageArray.map((img, i) => {
        console.log('Rendering image:', i, img); // Debug each image
        return (
          <motion.div
            key={i}
            className="relative cursor-zoom-in group overflow-hidden rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={loadedIndexes.includes(i) ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onClick={() => {
              console.log('Motion div clicked, index:', i);
              handleClick(i);
            }}
          >
            <img
              src={img?.src}
              alt={img?.alt || ''}
              loading="lazy"
              onLoad={() => handleLoad(i)}
              onError={(e) => console.log('Image failed to load:', i, e)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onClick={(e) => {
                e.stopPropagation();
                console.log('IMG element clicked, index:', i);
                handleClick(i);
              }}
              style={{ cursor: 'zoom-in' }}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-sm md:text-base font-medium">{label}</p>
            </div>
            {img?.caption && (
              <p className="text-sm mt-2 text-[var(--color-text-secondary)] italic text-center">
                {img.caption}
              </p>
            )}
          </motion.div>
        );
      })}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={imageArray.map((img) => ({
          src: img?.src,
          alt: img?.alt,
          title: img?.caption,
        }))}
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' } }}
        carousel={{ finite: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
      />
    </div>
  );
}
