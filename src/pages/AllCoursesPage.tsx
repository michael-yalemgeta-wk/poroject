import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AllCoursesPage.module.css';

const allCourses = [
  {
    id: 'react-beg',
    title: 'React for Beginners',
    desc: 'Build interactive UIs and master React fundamentals with hands-on projects.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    tags: ['Beginner', '6 Weeks'],
    category: 'Web Dev',
  },
  {
    id: 'design-ess',
    title: 'Graphic Design Essentials',
    desc: 'Master Photoshop, Illustrator, and design theory for stunning visuals.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    tags: ['Beginner', '4 Weeks'],
    category: 'Design',
  },
  {
    id: 'marketing-mastery',
    title: 'Digital Marketing Mastery',
    desc: 'Learn SEO, content marketing, paid ads, and email marketing to grow your brand.',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
    tags: ['Advanced', '8 Weeks'],
    category: 'Marketing',
  },
  {
    id: 'fullstack-web',
    title: 'Fullstack Web Development',
    desc: 'Go from zero to hero with HTML, CSS, JavaScript, Node.js, and React.',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    tags: ['Intermediate', '12 Weeks'],
    category: 'Web Dev',
  },
  {
    id: 'uiux-bootcamp',
    title: 'UI/UX Design Bootcamp',
    desc: 'Design user-friendly interfaces and experiences with Figma and prototyping tools.',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    tags: ['Intermediate', '8 Weeks'],
    category: 'Design',
  },
  {
    id: 'content-strategy',
    title: 'Content Marketing Strategy',
    desc: 'Plan, create, and distribute content that drives engagement and results.',
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    tags: ['All Levels', '5 Weeks'],
    category: 'Marketing',
  },
];

const categories = ['All', 'Web Dev', 'Design', 'Marketing'];
const sortOptions = ['Newest', 'Popular', 'A–Z'];

export default function AllCoursesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('Newest');
  const [visible, setVisible] = useState(6);

  let filtered = allCourses.filter(c =>
    (category === 'All' || c.category === category) &&
    (c.title.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase()))
  );
  if (sort === 'A–Z') filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === 'Popular') filtered = filtered;
  if (sort === 'Newest') filtered = filtered;

  return (
    <div className={styles.allCoursesPage}>
      <motion.div className={styles.header} initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className={styles.categories}>
          {categories.map(cat => (
            <button
              key={cat}
              className={styles.category + (category === cat ? ' ' + styles.active : '')}
              onClick={() => setCategory(cat)}
            >{cat}</button>
          ))}
        </div>
        <select className={styles.sortSelect} value={sort} onChange={e => setSort(e.target.value)}>
          {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </motion.div>
      <motion.div className={styles.coursesGrid} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <AnimatePresence>
          {filtered.slice(0, visible).map(course => (
            <motion.div
              key={course.id}
              className={styles.courseCard}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 40px #34495e33' }}
            >
              <div className={styles.courseThumb} style={{ backgroundImage: `url('${course.img}')` }} />
              <div className={styles.courseContent}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDesc}>{course.desc}</p>
                <div className={styles.courseMeta}>
                  {course.tags.map(tag => (
                    <span className={styles.tag} key={tag}>{tag}</span>
                  ))}
                </div>
                <button className={styles.courseBtn} onClick={() => window.location.href = `/courses/${course.id}`}>View Course</button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {visible < filtered.length && (
        <motion.button
          className={styles.loadMoreBtn}
          onClick={() => setVisible(v => v + 3)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Load More
        </motion.button>
      )}
    </div>
  );
}
