// CaseStudyLayout.jsx
import { Navbar } from '../Navbar';
import { Sidebar } from './Sidebar';
import { MobileSectionNav } from './MobileSectionNav';
import { motion } from 'framer-motion';
import { Children, isValidElement } from 'react';

export const CaseStudyLayout = ({ children }) => {
  const normalizedChildren = Children.toArray(children).filter(isValidElement);

  const getComponentName = (child) => {
    return (
      child?.type?.displayName ||
      child?.type?.name ||
      child?.props?.mdxType ||
      'Unknown'
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      {/* Navbar */}
      <Navbar />

      {/* Grid Container */}
      <div className="grid grid-cols-12 w-full gap-x-6 relative md:pl-20">
        {/* Sidebar */}
        <aside className="hidden md:block fixed top-20 left-8 z-40">
          <Sidebar />
        </aside>

        {/* Mobile Nav */}
        <div className="col-span-12 md:hidden mb-8 pt-12">
          <MobileSectionNav />
        </div>

        {/* Page Content */}
        {normalizedChildren.map((child, index) => {
          const name = getComponentName(child);
          const isFullBleed =
            name === 'FullBleed' ||
            name === 'HeroSection' ||
            name === 'FeatureQuote';

          return (
            <div
              key={index}
              className={
                isFullBleed
                  ? 'col-span-12 w-full py-12'
                  : 'col-span-12 md:col-span-7 md:col-start-3'
              }
            >
              {child}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
