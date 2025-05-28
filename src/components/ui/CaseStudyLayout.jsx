import { Navbar } from '../Navbar';
import { Sidebar } from './Sidebar';
import { MobileSectionNav } from './MobileSectionNav';
import { motion } from 'framer-motion';

export const CaseStudyLayout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      {/* Top Navbar */}
      <Navbar />

      {/* Page Layout */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Floating Sidebar */}
        <div className="hidden md:block w-60">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 py-12 space-y-20 relative">
          {/* Mobile Nav */}
          <div className="md:hidden mb-8 px-4 sm:px-8">
            <MobileSectionNav />
          </div>

          {/* Dynamically wrap Sections only */}
          {Array.isArray(children)
            ? children.map((child, index) => {
                const name = child?.type?.name;
                const isSection = name === 'Section';
                return (
                  <div
                    key={index}
                    className={isSection ? 'max-w-5xl mx-auto px-4 sm:px-8' : ''}
                  >
                    {child}
                  </div>
                );
              })
            : children}
        </main>
      </div>
    </motion.div>
  );
};
