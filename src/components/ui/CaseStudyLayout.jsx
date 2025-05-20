import { Navbar } from './Navbar';
import { motion } from 'framer-motion';

export const CaseStudyLayout = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col lg:flex-row min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      {/* Top Navbar */}
      <Navbar />

      {/* Sidebar Navigation */}
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="hidden lg:block w-64 sticky top-20 h-screen px-6 py-10 overflow-y-auto border-r border-white/10"
      >
        <nav className="space-y-6 text-sm">
          <a href="#hero" className="block hover:text-[var(--color-accent)]">Intro</a>
          <a href="#opportunity" className="block hover:text-[var(--color-accent)]">Opportunity</a>
          <a href="#systems-approach" className="block hover:text-[var(--color-accent)]">Systems Approach</a>
          <a href="#impact" className="block hover:text-[var(--color-accent)]">Impact</a>
          <a href="#reflection" className="block hover:text-[var(--color-accent)]">Reflection</a>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-8 py-12 space-y-20">
        {children}
      </main>
    </motion.div>
  );
};
