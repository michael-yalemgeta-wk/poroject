import styles from './PortfolioSection.module.css';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { useState } from 'react';
import type { CSSProperties } from 'react';

export default function PortfolioSection() {
  // Show up to 4 projects in a 2x2 layout (2 columns x 2 rows)
  const shown = projects.slice(0, 4);

  // Fixed 2 columns to create a wider card layout
  const columns = 2;
  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(320px, 1fr))`,
    gap: '1.5rem',
    alignItems: 'start',
  };

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const toggle = (id: string) => setExpandedId((p) => (p === id ? null : id));

  /**
   * Normalize a URL so that values like `www.example.com` or `example.com`
   * become absolute `https://...` links. Returns undefined for falsy input.
   */
  const normalizeUrl = (url?: string) => {
    if (!url) return undefined;
    const trimmed = url.trim();
    // already absolute or protocol-relative
    if (/^https?:\/\//i.test(trimmed) || /^\/\//.test(trimmed)) return trimmed;
    // common patterns that should be treated as external
    if (/^www\./i.test(trimmed)) return `https://${trimmed}`;
    // bare domain like example.com (has a dot and no spaces)
    if (/^[^\s@]+\.[^\s@]+$/i.test(trimmed)) return `https://${trimmed}`;
    return trimmed;
  };

  const isExternal = (url?: string) => {
    const n = normalizeUrl(url);
    return !!n && (/^https?:\/\//i.test(n) || /^\/\//.test(n));
  };

  return (
    <section className={styles.portfolioSection}>
      <h2 className={styles.sectionTitle}>Portfolio / Featured Work</h2>
      <div className={styles.grid} style={gridStyle}>
        {shown.map((proj, idx) => {
          const isExpanded = expandedId === proj.id;
          const descStyle: CSSProperties = isExpanded
            ? {}
            : {
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              };

          return (
            <motion.div
              className={styles.card}
              key={proj.id}
              role="button"
              tabIndex={0}
              onClick={() => toggle(proj.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggle(proj.id);
              }}
              aria-expanded={isExpanded}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 8px 32px var(--shadow-2)',
              }}
            >
              <h3 className={styles.title}>{proj.title}</h3>
              <p className={styles.desc} style={descStyle}>
                {proj.desc}
              </p>
              <div className={styles.outcome}>{proj.outcome}</div>

              {proj.link && (
                <a
                  className={styles.link}
                  href={normalizeUrl(proj.link) ?? proj.link}
                  target={isExternal(proj.link) ? '_blank' : '_self'}
                  rel={
                    isExternal(proj.link) ? 'noopener noreferrer' : undefined
                  }
                  onClick={(e) => {
                    // prevent toggling expansion when clicking the link itself
                    e.stopPropagation();
                  }}
                >
                  View Case Study
                </a>
              )}

              {!isExpanded && (
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 13,
                    color: 'var(--primary)',
                  }}
                >
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
