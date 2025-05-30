// Section.jsx
import { motion } from 'framer-motion';

export const Section = ({ id, children, className = '', ...rest }) => {
  return (
    <section
      id={id}
      {...rest}
      className={`w-full px-4 sm:px-8 py-12 space-y-20 ${className}`}
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.div>
    </section>
  );
};
