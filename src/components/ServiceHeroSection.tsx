import styles from './ServiceHeroSection.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ServiceHeroSection({ onQuote }: { onQuote?: () => void }) {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleSeeOurWork = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/portfolio');
    }, 400);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.bgGradient} />
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Build a Bold Digital Brand That Stands Out.
        </motion.h1>
        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          Empowering brands through stunning visuals, immersive web experiences, and impactful strategy.
        </motion.p>
        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <button className={styles.cta} onClick={onQuote}>Order Us</button>
          <button className={styles.ctaSecondary} onClick={handleSeeOurWork}>See Our Work</button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: '#fff', zIndex: 10, display: fadeOut ? 'block' : 'none' }}
      />
    </section>
  );
}
