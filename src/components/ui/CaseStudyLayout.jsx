import { Navbar } from '../Navbar';
import { Sidebar } from './Sidebar';
import { MobileSectionNav } from './MobileSectionNav'; // You’ll create this next
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
        {/* Floating Sidebar (desktop/tablet only) */}
        <div className="hidden md:block w-60">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-8 py-12 space-y-20 relative">
          {/* Mobile Nav (only on small screens) */}
          <div className="md:hidden mb-8">
            <MobileSectionNav />
          </div>
          {children}
        </main>
      </div>
    </motion.div>
  );
};
