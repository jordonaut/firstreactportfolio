import { motion } from 'framer-motion';

export const Section = ({ id, children, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={`w-full max-w-5xl mx-auto px-4 py-20 md:py-28 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
};
