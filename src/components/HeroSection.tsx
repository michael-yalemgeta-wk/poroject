import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import { heroData } from '../data/harddata';

export default function HeroSection({
  onExploreLearning,
  onExploreService,
}: {
  onExploreLearning: () => void;
  onExploreService: () => void;
}) {
  return (
    <section
      className={styles.heroSection}
      style={{
        background:
          'linear-gradient(to bottom right, var(--primary), var(--secondary))',
        color: 'var(--primary-contrast)',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}
    >
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          className={styles.heroTitle}
          style={{ fontSize: '3rem', marginBottom: '1rem' }}
        >
          {heroData.title}
        </h1>
        <div className={styles.heroButtons}>
          <button
            className={styles.cta}
            onClick={onExploreLearning}
            style={{
              background: 'var(--surface)',
              color: 'var(--primary)',
              padding: '0.8rem 1.5rem',
              borderRadius: '5px',
              fontWeight: 'bold',
              margin: '0 0.5rem',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {heroData.ctaPrimary}
          </button>
          <button
            className={styles.ctaSecondary}
            onClick={onExploreService}
            style={{
              background: 'transparent',
              color: 'var(--primary-contrast)',
              padding: '0.8rem 1.5rem',
              border: '2px solid var(--primary-contrast)',
              borderRadius: '5px',
              fontWeight: 'bold',
              margin: '0 0.5rem',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = 'scale(1.05)')
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {heroData.ctaSecondary}
          </button>
        </div>
      </motion.div>
    </section>
  );
}
