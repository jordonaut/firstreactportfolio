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

      {/* Grid Layout */}
      <div className="grid grid-cols-12 w-full px-4 md:px-8 gap-x-6">
        {/* Sidebar */}
        <div className="hidden md:block col-span-2 pt-12">
          <Sidebar />
        </div>

        {/* Mobile Nav */}
        <div className="col-span-12 md:hidden mb-8 pt-12">
          <MobileSectionNav />
        </div>

        {/* Page Content */}
        {normalizedChildren.map((child, index) => {
          const name = getComponentName(child);
          const isSection = name === 'Section';
          const isFullBleed = name === 'FullBleed';

          if (name === 'Unknown') {
            console.warn('CaseStudyLayout: Unrecognized child component', child);
          }

          let wrapperClass = 'col-span-12';

          if (isSection) {
            wrapperClass += ' md:col-span-7 md:col-start-3 max-w-5xl w-full px-4 sm:px-8 py-12 space-y-20';
          } else if (isFullBleed) {
            wrapperClass += ' w-full py-12';
          }

          return (
            <div key={index} className={wrapperClass}>
              {child}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
