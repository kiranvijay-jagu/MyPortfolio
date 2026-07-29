import { motion } from 'framer-motion'

/**
 * Reveal
 * A reusable wrapper that fades + slides its children into view as they
 * enter the viewport. Used across every section to keep scroll-reveal
 * animation consistent without repeating framer-motion boilerplate.
 *
 * Props:
 *  - delay: stagger delay in seconds
 *  - y: initial vertical offset in px
 *  - as: motion element tag (default div)
 */
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}
