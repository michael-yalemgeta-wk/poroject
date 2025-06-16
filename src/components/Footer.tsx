import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.quickLinks}>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
        <div className={styles.contactInfo}>
          <span>Contact: info@dreammore.com</span>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:info@dreammore.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} DreamMore. All rights reserved.
      </div>
    </footer>
  );
}
