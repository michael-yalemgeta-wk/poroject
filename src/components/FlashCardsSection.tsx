import { motion } from 'framer-motion';
import styles from './FlashCardsSection.module.css';
import { aboutData } from '../data/harddata';

export default function FlashCardsSection() {
  return (
    <section className={styles.flashCardsSection}>
      <div className={styles.cardsContainer}>
        {aboutData.cards.map((card, idx) => (
          <motion.div
            className={styles.card}
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
          >
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardText}>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
