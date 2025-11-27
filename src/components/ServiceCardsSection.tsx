import styles from './ServiceCardsSection.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { CSSProperties, ComponentType } from 'react';
import { FaCode, FaPaintBrush, FaVideo, FaBullhorn } from 'react-icons/fa';
import { services as servicesData } from '../data/service';

// Map simple icon keys from data to actual icon components
const ICON_MAP: Record<string, ComponentType<Record<string, unknown>>> = {
  code: FaCode,
  paint: FaPaintBrush,
  video: FaVideo,
  bullhorn: FaBullhorn,
};

export default function ServiceCardsSection() {
  // Number of service cards from data
  const count = servicesData.length;
  // Compute columns: equal to number of items up to 4, then fall back to 4 columns
  const columns = Math.min(Math.max(1, count), 4);

  // Inline grid style to adapt columns based on data size
  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(220px, 1fr))`,
    gap: '1.25rem',
  };

  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Our Services – What We Offer</h2>
      <div className={styles.grid} style={gridStyle}>
        {servicesData.map((service, idx) => {
          const Icon = ICON_MAP[service.iconKey] ?? FaCode;
          const isExpanded = expandedId === service.id;
          const descStyle: CSSProperties = isExpanded
            ? {}
            : {
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              };

          return (
            <motion.div
              className={styles.card}
              key={service.id}
              role="button"
              tabIndex={0}
              onClick={() => toggle(service.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggle(service.id);
              }}
              aria-expanded={isExpanded}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #34495e22' }}
            >
              <div className={styles.icon}>
                <Icon size={38} color="#2C3E50" />
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc} style={descStyle}>
                {service.desc}
              </p>
              {!isExpanded && (
                <div style={{ marginTop: 8, fontSize: 13, color: '#f47c3c' }}>
                  More...
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
