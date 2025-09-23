import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function FadeInUp({ 
  children, 
  delay = 0, 
  className = "",
  threshold = 0.1, // How much of the element should be visible to trigger
  ...props 
}) {
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: true, // Animation plays only once
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}