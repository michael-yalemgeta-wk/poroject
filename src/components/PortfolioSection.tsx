import styles from './PortfolioSection.module.css';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'BrandX Website Redesign',
    desc: 'Modern, responsive site for a SaaS startup.',
    outcome: '↑ 200% traffic, 3x conversions',
    link: '#',
  },
  {
    title: 'Logo & Identity for Cafe Luna',
    desc: 'Logo, menus, and signage for a boutique coffee shop.',
    outcome: 'Brand recall & local buzz',
    link: '#',
  },
  {
    title: 'Motion Graphics for TechConf',
    desc: 'Animated intro and highlight reels for a major tech event.',
    outcome: '↑ Engagement on social media',
    link: '#',
  },
  {
    title: 'Ad Campaign for GreenMarket',
    desc: 'Digital ads and landing pages for a local grocer.',
    outcome: '↑ 40% online sales',
    link: '#',
  },
];

export default function PortfolioSection() {
  return (
    <section className={styles.portfolioSection}>
      <h2 className={styles.sectionTitle}>Portfolio / Featured Work</h2>
      <div className={styles.grid}>
        {projects.map((proj, idx) => (
          <motion.div
            className={styles.card}
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #34495e22' }}
          >
            <h3 className={styles.title}>{proj.title}</h3>
            <p className={styles.desc}>{proj.desc}</p>
            <div className={styles.outcome}>{proj.outcome}</div>
            {proj.link && <a className={styles.link} href={proj.link}>View Case Study</a>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
