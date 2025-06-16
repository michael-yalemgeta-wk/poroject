import { motion } from 'framer-motion';
import styles from './FlashCardsSection.module.css';

const cards = [
  {
    title: 'Our Mission',
    text: 'Empowering learners and organizations to dream bigger and achieve more through innovative, accessible education and services.',
  },
  {
    title: 'Our Vision',
    text: 'To be the leading catalyst for personal and professional growth, inspiring a world where everyone can realize their full potential.',
  },
  {
    title: 'Our Policy',
    text: 'We are committed to inclusivity, quality, and continuous improvement in everything we do.',
  },
];

export default function FlashCardsSection() {
  return (
    <section className={styles.flashCardsSection}>
      <div className={styles.cardsContainer}>
        {cards.map((card, idx) => (
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
