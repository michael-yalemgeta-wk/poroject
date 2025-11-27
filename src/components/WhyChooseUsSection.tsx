import styles from './WhyChooseUsSection.module.css';
import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { FaBrain, FaBriefcase, FaRocket, FaPhone } from 'react-icons/fa';
import { whyItems } from '../data/why';

const ICON_MAP: Record<string, ComponentType<Record<string, unknown>>> = {
  brain: FaBrain,
  briefcase: FaBriefcase,
  rocket: FaRocket,
  phone: FaPhone,
};

export default function WhyChooseUsSection() {
  return (
    <section className={styles.whySection}>
      <h2 className={styles.sectionTitle}>Why Choose Us</h2>
      <div className={styles.grid}>
        {whyItems.map((val, idx) => {
          const Icon = ICON_MAP[val.iconKey] ?? FaBrain;
          return (
            <motion.div
              className={styles.valueBlock}
              key={val.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #34495e22' }}
            >
              <div className={styles.icon}>
                <Icon size={32} color="#F47C3C" />
              </div>
              <h3 className={styles.title}>{val.title}</h3>
              <p className={styles.desc}>{val.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
