export type ServiceItem = {
  id: string;
  iconKey: 'code' | 'paint' | 'video' | 'bullhorn' | string;
  title: string;
  desc: string;
};

// Add or remove items here — the ServiceCardsSection will adjust its layout
// Services array — add or remove items here. Each item must provide:
//  - id: unique string
//  - iconKey: one of the supported icon keys (see list below)
//  - title: short title
//  - desc: short description
//
// Supported iconKey values (map to react-icons in the UI):
//  'code'     -> FaCode
//  'paint'    -> FaPaintBrush
//  'video'    -> FaVideo
//  'bullhorn' -> FaBullhorn
// If you need more icons later, add a new key here and map it in
// `src/components/ServiceCardsSection.tsx` ICON_MAP to the desired icon component.
export const services: ServiceItem[] = [
  {
    id: 'web-mobile',
    iconKey: 'code',
    title: 'Web & Mobile App Development',
    desc: 'Responsive websites and mobile apps built for performance and scalability.',
  },
  {
    id: 'graphic-design',
    iconKey: 'paint',
    title: 'Graphic Design',
    desc: 'From logos and posters to flyers and business cards with a consistent visual identity.',
  },
  {
    id: 'video-motion',
    iconKey: 'video',
    title: 'Video Editing & Motion Graphics',
    desc: 'Engaging video content, edits, and animations that bring ideas to life.',
  },
  {
    id: 'digital-marketing',
    iconKey: 'bullhorn',
    title: 'Digital Marketing',
    desc: 'Targeted SEO, ad campaigns, and social media strategies to grow your presence.',
  },
];

export default services;
