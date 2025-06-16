import styles from './ServiceBottomCTA.module.css';
import { motion } from 'framer-motion';

export default function ServiceBottomCTA() {
  return (
    <section className={styles.ctaSection}>
      <motion.h2
        className={styles.headline}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        Let’s Build Your Brand Together
      </motion.h2>
      <div className={styles.ctaRow}>
        <motion.button
          className={styles.ctaBtnOutline}
          whileHover={{ scale: 1.07, backgroundColor: '#F47C3C', color: '#fff', borderColor: '#F47C3C' }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Book Us Now
        </motion.button>
      </div>
    </section>
  );
}
