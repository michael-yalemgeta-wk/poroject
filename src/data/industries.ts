/**
 * Industries data
 * Each item represents an industry card shown on the site. The UI should
 * remain unchanged — this file only centralizes the content so you can
 * enable/disable cards by toggling the `enabled` flag.
 */

export type Industry = {
  id: string; // unique key
  title: string;
  /** Short auxiliary text shown on the card (e.g. "12+ projects"). Optional. */
  description?: string;
  /** Optional icon key that components may map to an icon. Free-form. */
  iconKey?: string;
  /** Optional external or internal link for the industry card. */
  link?: string;
  /** When false the card should be hidden from UI lists. Defaults to true. */
  enabled?: boolean;
};

export const industries: Industry[] = [
  {
    id: 'startups',
    title: 'Startups',
    description: '12+ projects',
    iconKey: 'building',
    enabled: true,
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: '18+ projects',
    iconKey: 'cart',
    enabled: true,
  },
  {
    id: 'ngos',
    title: 'NGOs',
    description: '7+ projects',
    iconKey: 'hospital',
    enabled: true,
  },
  {
    id: 'restaurants',
    title: 'Restaurants',
    description: '10+ projects',
    iconKey: 'restaurant',
    enabled: true,
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: '15+ projects',
    iconKey: 'home',
    enabled: true,
  },
  {
    id: 'education',
    title: 'Education',
    description: '9+ projects',
    iconKey: 'education',
    enabled: true,
  },
  {
    id: 'creative-agencies',
    title: 'Creative Agencies',
    description: '8+ projects',
    iconKey: 'creative',
    enabled: true,
  },
  {
    id: 'consultants',
    title: 'Consultants',
    description: '11+ projects',
    iconKey: 'briefcase',
    enabled: true,
  },
  {
    id: 'tech-saas',
    title: 'Tech SaaS',
    description: '114+ projects',
    iconKey: 'desktop',
    enabled: true,
  },
];

export default industries;
