import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';
import { footerData } from '../data/harddata';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.quickLinks}>
          {footerData.quickLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>
              {l}
            </a>
          ))}
        </div>
        <div className={styles.contactInfo}>
          <span>{footerData.contactText}</span>
        </div>
        <div className={styles.socialIcons}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href={`mailto:${footerData.email}`} aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} {footerData.brandName}. All rights
        reserved.
      </div>
    </footer>
  );
}
