import { Navbar } from '../Navbar';
import { motion } from 'framer-motion';
import { Sidebar } from './Sidebar.jsx';


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
      <Sidebar />


      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-8 py-12 space-y-20">
        {children}
      </main>
    </motion.div>
  );
};
