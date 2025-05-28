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

      {/* 12-column Grid Layout */}
      <div className="grid grid-cols-12 w-full px-4 md:px-8 gap-x-6">
        {/* Sidebar: spans 2 columns on md+ */}
        <aside className="hidden md:block col-span-2 pt-12">
          <Sidebar />
        </aside>

        {/* Main Content: spans 12 on mobile, 8 centered on md+ */}
        <main className="col-span-12 md:col-span-8 md:col-start-4 pt-12 space-y-20 relative">
          {/* Mobile Nav: only visible on small screens */}
          <div className="md:hidden mb-8">
            <MobileSectionNav />
          </div>

          {/* Section Wrapping */}
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
