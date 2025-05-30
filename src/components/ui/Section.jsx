import { motion } from 'framer-motion';

export const Section = ({ id, children, className = '', ...rest }) => {
  return (
    <motion.div
      id={id}
      {...rest}
      className={`w-full px-4 sm:px-8 py-16 scroll-mt-20 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
