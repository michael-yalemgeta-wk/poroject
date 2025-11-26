export type HeroData = {
  title: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export type ServiceHeroData = {
  headline: string;
  subtext: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export type FooterData = {
  quickLinks: string[];
  contactText: string;
  email: string;
  brandName: string;
};

export const heroData: HeroData = {
  title: 'Dream More, Achieve More.',
  ctaPrimary: 'Explore Learning',
  ctaSecondary: 'Explore Our Service',
};

export const serviceHeroData: ServiceHeroData = {
  headline: 'Build a Bold Digital Brand That Stands Out.',
  subtext:
    'Empowering brands through stunning visuals, immersive web experiences, and impactful strategy.',
  ctaPrimary: 'Order Us',
  ctaSecondary: 'See Our Work',
};

export const footerData: FooterData = {
  quickLinks: ['Home', 'About', 'Services', 'Contact'],
  contactText: 'Contact: info@dreammore.com',
  email: 'info@dreammore.com',
  brandName: 'DreamMore',
};

export default {
  heroData,
  serviceHeroData,
  footerData,
};

export type NavLink = { label: string; path: string };

export const navData: { brandName: string; links: NavLink[] } = {
  brandName: 'DreamMore',
  links: [
    { label: 'Home', path: '/' },
    { label: 'Training', path: '/demo' },
    { label: 'Service', path: '/service' },
  ],
};

export const demoPageData = {
  heroTitle: 'Become a Creative Pro — Learn. Build. Succeed.',
  heroSubtext:
    'Master design, development, and digital strategy with expert-led online classes.',
  heroButtons: {
    browseCourses: 'Browse Courses',
    joinOnline: 'Join Online Class',
  },
  skillsTitle: 'What You Can Learn',
  skills: [
    {
      name: 'Web & Mobile Development',
      desc: 'Learn HTML, CSS, JavaScript, React, and more to build modern web and mobile apps.',
    },
    {
      name: 'Graphic Design',
      desc: 'Master Photoshop, Illustrator, and design theory to create stunning visuals.',
    },
    {
      name: 'Video Editing & Motion Graphics',
      desc: 'Learn Premiere, After Effects, and storytelling techniques for engaging videos.',
    },
    {
      name: 'Digital Marketing',
      desc: 'Learn SEO, content marketing, paid ads, and email marketing to grow your brand.',
    },
  ],
  bottomCtaTitle: 'Start Learning Today',
  bottomCtaSubtext:
    'Free to explore. Affordable to master. Your future starts now.',
  bottomCtaButtons: {
    browse: 'Browse Courses',
    join: 'Join Online Class',
  },
};

export const aboutData = {
  cards: [
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
  ],
};
