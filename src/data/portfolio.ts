export type ProjectItem = {
  id: string;
  title: string;
  desc: string;
  outcome?: string;
  link?: string;
};

// Featured projects for the Portfolio section.
// Add entries here; the PortfolioSection will adapt its grid based on count.
// The `link` field may be an internal path or an external URL (https://...).
// External links will open in a new tab.
export const projects: ProjectItem[] = [
  {
    id: 'brandx-redesign',
    title: 'BrandX Website Redesign',
    desc: 'Modern, responsive site for a SaaS startup.',
    outcome: '↑ 200% traffic, 3x conversions',
    link: '#',
  },
  {
    id: 'cafe-luna-identity',
    title: 'Logo & Identity for Cafe Luna',
    desc: 'Logo, menus, and signage for a boutique coffee shop.',
    outcome: 'Brand recall & local buzz',
    link: '#',
  },
  {
    id: 'techconf-motion',
    title: 'Motion Graphics for TechConf',
    desc: 'Animated intro and highlight reels for a major tech event.',
    outcome: '↑ Engagement on social media',
    link: 'www.youtube.com',
  },
  {
    id: 'greenmarket-ads',
    title: 'Ad Campaign for GreenMarket',
    desc: 'Digital ads and landing pages for a local grocer.',
    outcome: '↑ 40% online sales',
    link: 'www.google.com',
  },
];

export default projects;
