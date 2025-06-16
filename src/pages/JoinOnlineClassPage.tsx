import styles from './JoinOnlineClassPage.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function JoinOnlineClassPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.bg}>
      <motion.div
        className={styles.centered}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.illustration}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, type: 'spring' }}
        >
          {/* Optional: Rocket SVG illustration */}
          <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#glow)">
              <path d="M45 10 L55 50 L45 40 L35 50 Z" fill="#F47C3C" />
              <ellipse cx="45" cy="60" rx="8" ry="16" fill="#ECF0F1" opacity="0.7" />
            </g>
            <defs>
              <filter id="glow" x="0" y="0" width="90" height="90" filterUnits="userSpaceOnUse">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </motion.div>
        <motion.h1
          className={styles.headline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Coming Soon
        </motion.h1>
        <motion.p
          className={styles.subtext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Our live class experience is launching shortly. Stay tuned!
        </motion.p>
        <motion.form
          className={styles.notifyForm}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          onSubmit={e => e.preventDefault()}
        >
          <input
            className={styles.emailInput}
            type="email"
            placeholder="Notify me (email) — coming soon"
            disabled
          />
        </motion.form>
        <motion.button
          className={styles.backBtn}
          whileHover={{ scale: 1.05, backgroundColor: '#F9A66C', boxShadow: '0 0 16px #F47C3C55' }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => navigate('/')}
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}
