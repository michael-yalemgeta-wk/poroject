export type WhyItem = {
  id: string;
  iconKey: 'brain' | 'briefcase' | 'rocket' | 'phone' | string;
  title: string;
  desc: string;
};

// Why Choose Us items. To add/remove items, edit this array.
// Supported iconKey values (mapped in the component):
//  'brain'     -> FaBrain
//  'briefcase' -> FaBriefcase
//  'rocket'    -> FaRocket
//  'phone'     -> FaPhone
export const whyItems: WhyItem[] = [
  {
    id: 'creative-strategy',
    iconKey: 'brain',
    title: 'Creative & Strategic Thinking',
    desc: 'Solutions designed with purpose and originality',
  },
  {
    id: 'business-design',
    iconKey: 'briefcase',
    title: 'Professional, Business-Focused Design',
    desc: 'Visuals that speak the language of results',
  },
  {
    id: 'fast-turnaround',
    iconKey: 'rocket',
    title: 'Fast Turnaround & Scalable Tech',
    desc: 'Timely delivery and growth-ready platforms',
  },
  {
    id: 'ongoing-support',
    iconKey: 'phone',
    title: 'Ongoing Support & Revisions',
    desc: 'Reliable partnership, even after launch',
  },
];

export default whyItems;
