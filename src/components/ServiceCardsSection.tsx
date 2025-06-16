import styles from './ServiceCardsSection.module.css';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaVideo, FaBullhorn } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={38} color="#2C3E50" />,
    title: 'Web & Mobile App Development',
    desc: 'Responsive websites and mobile apps built for performance and scalability.',
  },
  {
    icon: <FaPaintBrush size={38} color="#2C3E50" />,
    title: 'Graphic Design',
    desc: 'From logos and posters to flyers and business cards with a consistent visual identity.',
  },
  {
    icon: <FaVideo size={38} color="#2C3E50" />,
    title: 'Video Editing & Motion Graphics',
    desc: 'Engaging video content, edits, and animations that bring ideas to life.',
  },
  {
    icon: <FaBullhorn size={38} color="#2C3E50" />,
    title: 'Digital Marketing',
    desc: 'Targeted SEO, ad campaigns, and social media strategies to grow your presence.',
  },
];

export default function ServiceCardsSection() {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Services – What We Offer</h2>
      <div className={styles.grid}>
        {services.map((service, idx) => (
          <motion.div
            className={styles.card}
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #34495e22' }}
          >
            <div className={styles.icon}>{service.icon}</div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.desc}>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
