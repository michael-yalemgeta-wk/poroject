import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CourseDetailModal.module.css';
import type { Course } from '../data/courses';

type CourseDetailModalProps = {
  course: Course | null;
  open: boolean;
  onClose: () => void;
};

export default function CourseDetailModal({ course, open, onClose }: CourseDetailModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open || !course) return null;

  // Example details (expand as needed)
  const details = {
    tools: ['VS Code', 'Figma', 'Photoshop', 'Google Analytics'],
    objectives: [
      'Master core concepts and workflows',
      'Build real-world projects',
      'Get hands-on with industry tools',
      'Earn a certificate of completion',
    ],
    certificate: course.tags.includes('Certification'),
    fullDesc: course.desc + ' This course provides a comprehensive, hands-on learning experience with expert instructors and practical projects. You’ll gain the skills and confidence to excel in your field.',
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={styles.modal}
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          onClick={e => e.stopPropagation()}
        >
          <div className={styles.thumb} style={{ backgroundImage: `url('${course.img}')` }} />
          <h2 className={styles.title}>{course.title}</h2>
          <p className={styles.fullDesc}>{details.fullDesc}</p>
          <div className={styles.metaRow}>
            <span className={styles.meta}>{course.tags[0]}</span>
            <span className={styles.meta}>{course.tags[1]}</span>
          </div>
          <div className={styles.section}>
            <h4>Tools/Software</h4>
            <ul className={styles.toolsList}>
              {details.tools.map(tool => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
          <div className={styles.section}>
            <h4>What You'll Learn</h4>
            <ul className={styles.objectivesList}>
              {details.objectives.map(obj => (
                <li key={obj}>{obj}</li>
              ))}
            </ul>
          </div>
          {details.certificate && (
            <div className={styles.certificate}>Certificate of Completion included</div>
          )}
          <div className={styles.ctaRow}>
            <button className={styles.startBtn}>Start Now</button>
            <button className={styles.closeBtn} onClick={onClose}>Close</button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
