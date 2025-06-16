import ServiceHeroSection from '../components/ServiceHeroSection';
import ServiceCardsSection from '../components/ServiceCardsSection';
import PortfolioSection from '../components/PortfolioSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ServiceProcessSection from '../components/ServiceProcessSection';
import IndustriesSection from '../components/IndustriesSection';
import ServiceBottomCTA from '../components/ServiceBottomCTA';
import styles from './DemoPage.module.css';

export default function ServicePage() {
  return (
    <div className={styles.demoPage}>
      <ServiceHeroSection />
      <ServiceCardsSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <ServiceProcessSection />
      <IndustriesSection />
      <ServiceBottomCTA />
    </div>
  );
}
