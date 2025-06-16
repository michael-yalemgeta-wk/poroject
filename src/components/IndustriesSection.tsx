import styles from './IndustriesSection.module.css';
import { motion } from 'framer-motion';

const industries = [
  { icon: '🏢', label: 'Startups', metric: '12+ projects' },
  { icon: '🛒', label: 'E-commerce', metric: '18+ projects' },
  { icon: '🏥', label: 'NGOs', metric: '7+ projects' },
  { icon: '🍽️', label: 'Restaurants', metric: '10+ projects' },
  { icon: '🏘️', label: 'Real Estate', metric: '15+ projects' },
  { icon: '🎓', label: 'Education', metric: '9+ projects' },
  { icon: '🎭', label: 'Creative Agencies', metric: '8+ projects' },
  { icon: '💼', label: 'Consultants', metric: '11+ projects' },
  { icon: '🖥️', label: 'Tech SaaS', metric: '14+ projects' },
];

export default function IndustriesSection() {
  return (
    <section className={styles.industriesSection}>
      <h2 className={styles.sectionTitle}>Industries We Serve</h2>
      <div className={styles.grid}>
        {industries.map((ind, idx) => (
          <motion.div
            className={styles.card}
            key={ind.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.07 }}
            whileHover={{ scale: 1.07, boxShadow: '0 4px 24px #34495e22' }}
          >
            <span className={styles.icon}>{ind.icon}</span>
            <span className={styles.label}>{ind.label}</span>
            <span className={styles.metric}>{ind.metric}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
