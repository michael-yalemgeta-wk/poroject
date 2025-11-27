import styles from './IndustriesSection.module.css';
import { motion } from 'framer-motion';
import { industries as industriesData } from '../data/industries';

// Map the iconKey values from the data file to the same emoji set used by the
// previous hardcoded array so the UI doesn't change.
const ICON_EMOJI: Record<string, string> = {
  building: '�',
  cart: '🛒',
  hospital: '🏥',
  restaurant: '🍽️',
  home: '�️',
  education: '🎓',
  creative: '🎭',
  briefcase: '💼',
  desktop: '�️',
};

export default function IndustriesSection() {
  // Only render industries that are enabled (treat undefined as enabled)
  const visible = industriesData.filter((i) => i.enabled !== false);

  return (
    <section className={styles.industriesSection}>
      <h2 className={styles.sectionTitle}>Industries We Serve</h2>
      <div className={styles.grid}>
        {visible.map((ind, idx) => (
          <motion.div
            className={styles.card}
            key={ind.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.07 }}
            whileHover={{ scale: 1.07, boxShadow: '0 4px 24px #34495e22' }}
          >
            <span className={styles.icon}>
              {ICON_EMOJI[ind.iconKey ?? 'building']}
            </span>
            <span className={styles.label}>{ind.title}</span>
            <span className={styles.metric}>{ind.description}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
