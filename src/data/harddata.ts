// ---------------------------------------------------------------------------
// src/data/harddata.ts
// Centralized static copy for the site (hero, nav, demo page, footer, about, etc.)
// Edit values here to change visible text across the app.
// ---------------------------------------------------------------------------

// -------- Types ----------------------------------------------------------------
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

export type NavLink = { label: string; path: string };

export type DemoSkill = { name: string; desc: string };

export type DemoPageData = {
  heroTitle: string;
  heroSubtext: string;
  heroButtons: { browseCourses: string; joinOnline: string };
  skillsTitle: string;
  skills: DemoSkill[];
  faq?: { question: string; answer: string }[];
  bottomCtaTitle: string;
  bottomCtaSubtext: string;
  bottomCtaButtons: { browse: string; join: string };
};

export type AboutCard = { title: string; text: string };

// -------- HERO (homepage top) --------------------------------------------------
export const heroData: HeroData = {
  // Main headline shown on the site hero
  title: 'Dream More, Achieve More.',
  // Primary CTA label (filled button)
  ctaPrimary: 'Explore Learning',
  // Secondary CTA label (outline button)
  ctaSecondary: 'Explore Our Service',
};

// -------- SERVICE HERO (service page top) ------------------------------------
export const serviceHeroData: ServiceHeroData = {
  // Headline shown on the service hero
  headline: 'Build a Bold Digital Brand That Stands Out.',
  // Supporting subtext under the headline
  subtext:
    'Empowering brands through stunning visuals, immersive web experiences, and impactful strategy.',
  // Primary and secondary CTAs for the service hero
  ctaPrimary: 'Order Us',
  ctaSecondary: 'See Our Work',
};

// -------- FOOTER ----------------------------------------------------------------
export const footerData: FooterData = {
  // Quick links labels shown in the footer
  quickLinks: ['Home', 'About', 'Services', 'Contact'],
  contactText: 'Contact: info@dreammore.com',
  email: 'info@dreammore.com',
  brandName: 'DreamMore',
};

// -------- NAVIGATION -----------------------------------------------------------
export const navData: { brandName: string; links: NavLink[] } = {
  brandName: 'DreamMore',
  links: [
    { label: 'Home', path: '/' },
    { label: 'Training', path: '/demo' },
    { label: 'Service', path: '/service' },
  ],
};

// -------- DEMO PAGE (training) -------------------------------------------------
export const demoPageData: DemoPageData = {
  // Hero title and supporting subtext for the Demo/Training page
  heroTitle: 'Become a Creative Pro — Learn. Build. Succeed.',
  heroSubtext:
    'Master design, development, and digital strategy with expert-led online classes.',
  // Hero buttons
  heroButtons: {
    browseCourses: 'Browse Courses',
    joinOnline: 'Join Online Class',
  },
  // Skills block title and items (used on the Demo page)
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
  // Bottom CTA on the Demo page
  bottomCtaTitle: 'Start Learning Today',
  bottomCtaSubtext:
    'Free to explore. Affordable to master. Your future starts now.',
  bottomCtaButtons: {
    browse: 'Browse Courses',
    join: 'Join Online Class',
  },
  // Frequently Asked Questions shown on the Demo page
  faq: [
    {
      question: 'Do I need experience to start?',
      answer: 'No, beginner-friendly courses are available.',
    },
    {
      question: 'Are these classes self-paced?',
      answer: 'Yes, learn at your own convenience.',
    },
    {
      question: 'What software/tools do I need?',
      answer: 'Depends on the course, all requirements are provided.',
    },
    {
      question: 'Are certificates official?',
      answer: 'Yes, industry-recognized certifications are offered.',
    },
    {
      question: "Can I get help if I'm stuck?",
      answer: 'Absolutely! Mentors and the community are here to support you.',
    },
  ],
};

// -------- ABOUT / MISSION / VISION / POLICY ----------------------------------
export const aboutData: { cards: AboutCard[] } = {
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

// Default export kept for backward compatibility; prefer named imports.
export default {
  heroData,
  serviceHeroData,
  footerData,
  navData,
  demoPageData,
  aboutData,
};
