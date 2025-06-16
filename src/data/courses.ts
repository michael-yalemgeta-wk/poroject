export type Course = {
  id: string;
  title: string;
  desc: string;
  img: string;
  tags: string[];
  category: string;
};

export const courses: Course[] = [
  {
    id: 'react-beg',
    title: 'React for Beginners',
    desc: 'Build interactive UIs and master React fundamentals with hands-on projects.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    tags: ['Beginner', '6 Weeks', 'Certification'],
    category: 'Web Dev',
  },
  {
    id: 'design-ess',
    title: 'Graphic Design Essentials',
    desc: 'Master Photoshop, Illustrator, and design theory for stunning visuals.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    tags: ['Beginner', '4 Weeks', 'Certification'],
    category: 'Design',
  },
  {
    id: 'marketing-mastery',
    title: 'Digital Marketing Mastery',
    desc: 'Learn SEO, content marketing, paid ads, and email marketing to grow your brand.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    tags: ['Advanced', '8 Weeks', 'Certification'],
    category: 'Marketing',
  },
  {
    id: 'fullstack-web',
    title: 'Fullstack Web Development',
    desc: 'Go from zero to hero with HTML, CSS, JavaScript, Node.js, and React.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    tags: ['Intermediate', '12 Weeks', 'Certification'],
    category: 'Web Dev',
  },
  {
    id: 'uiux-bootcamp',
    title: 'UI/UX Design Bootcamp',
    desc: 'Design user-friendly interfaces and experiences with Figma and prototyping tools.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    tags: ['Intermediate', '8 Weeks', 'Certification'],
    category: 'Design',
  },
  {
    id: 'content-strategy',
    title: 'Content Marketing Strategy',
    desc: 'Plan, create, and distribute content that drives engagement and results.',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    tags: ['All Levels', '5 Weeks', 'Certification'],
    category: 'Marketing',
  },
];
