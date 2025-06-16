import styles from './WhyChooseUsSection.module.css';
import { motion } from 'framer-motion';
import { FaBrain, FaBriefcase, FaRocket, FaPhone } from 'react-icons/fa';

const values = [
  {
    icon: <FaBrain size={32} color="#F47C3C" />,
    title: 'Creative & Strategic Thinking',
    desc: 'Solutions designed with purpose and originality',
  },
  {
    icon: <FaBriefcase size={32} color="#F47C3C" />,
    title: 'Professional, Business-Focused Design',
    desc: 'Visuals that speak the language of results',
  },
  {
    icon: <FaRocket size={32} color="#F47C3C" />,
    title: 'Fast Turnaround & Scalable Tech',
    desc: 'Timely delivery and growth-ready platforms',
  },
  {
    icon: <FaPhone size={32} color="#F47C3C" />,
    title: 'Ongoing Support & Revisions',
    desc: 'Reliable partnership, even after launch',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className={styles.whySection}>
      <h2 className={styles.sectionTitle}>Why Choose Us</h2>
      <div className={styles.grid}>
        {values.map((val, idx) => (
          <motion.div
            className={styles.valueBlock}
            key={val.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #34495e22' }}
          >
            <div className={styles.icon}>{val.icon}</div>
            <h3 className={styles.title}>{val.title}</h3>
            <p className={styles.desc}>{val.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
