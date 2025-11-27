import styles from './DemoPage.module.css';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaVideo, FaBullhorn } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { courses as allCoursesData } from '../data/courses';
import { demoPageData } from '../data/harddata';
import { communityLinks, communityStats } from '../data/community';
import type { Course } from '../data/courses';
import CourseDetailModal from '../components/CourseDetailModal';

export default function DemoPage() {
  const [filter, setFilter] = useState('All');
  const [fadeOut, setFadeOut] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const navigate = useNavigate();
  // Use the shared course data
  const courses: Course[] = allCoursesData;
  const filteredCourses: Course[] =
    filter === 'All'
      ? courses
      : courses.filter((c: Course) => c.category === filter);

  // Only show 4 courses in Popular Courses
  const popularCourses: Course[] = filteredCourses.slice(0, 4);

  // Handler for Browse Courses with fade-out animation
  const handleBrowseCourses = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/courses');
    }, 400); // Match fade duration
  };

  // Handler for Join Online Class with fade-out animation
  const handleJoinOnlineClass = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/join-online-class');
    }, 400); // Match fade duration
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <section className={styles.heroSection}>
        <div className={styles.overlay} />
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>{demoPageData.heroTitle}</h1>
          <p className={styles.heroSubtext}>{demoPageData.heroSubtext}</p>
          <div className={styles.heroButtons}>
            <motion.button
              className={styles.cta}
              whileHover={{ scale: 1.05, backgroundColor: '#F9A66C' }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={handleBrowseCourses}
            >
              {demoPageData.heroButtons.browseCourses}
            </motion.button>
            <motion.button
              className={styles.ctaSecondary}
              whileHover={{ scale: 1.05, backgroundColor: '#F9A66C' }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={handleJoinOnlineClass}
            >
              {demoPageData.heroButtons.joinOnline}
            </motion.button>
          </div>
        </motion.div>
      </section>

      <section className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>{demoPageData.skillsTitle}</h2>
        <div className={styles.skillsGrid}>
          {demoPageData.skills.map((skill, idx) => {
            const Icon =
              [FaCode, FaPaintBrush, FaVideo, FaBullhorn][idx] ?? FaCode;
            return (
              <motion.div
                className={styles.skillBlock}
                key={skill.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                <Icon className={styles.skillIcon} />
                <h3 className={styles.skillName}>{skill.name}</h3>
                <p className={styles.skillDesc}>{skill.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className={styles.valueSection}>
        <h2 className={styles.valueTitle}>Why Learn With Us</h2>
        <div className={styles.valueGrid}>
          <motion.div
            className={styles.valueBlock}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className={styles.valueIcon}
              role="img"
              aria-label="Industry Experts"
            >
              🧑‍🏫
            </span>
            <h3 className={styles.valueName}>Learn from Industry Experts</h3>
            <p className={styles.valueDesc}>
              Instructors with real-world experience delivering industry
              insights.
            </p>
          </motion.div>
          <motion.div
            className={styles.valueBlock}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span
              className={styles.valueIcon}
              role="img"
              aria-label="Project-Based Learning"
            >
              🧠
            </span>
            <h3 className={styles.valueName}>Project-Based Learning</h3>
            <p className={styles.valueDesc}>
              Develop expertise by working on real-world tasks and projects.
            </p>
          </motion.div>
          <motion.div
            className={styles.valueBlock}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span
              className={styles.valueIcon}
              role="img"
              aria-label="Flexible & Self-Paced"
            >
              🕒
            </span>
            <h3 className={styles.valueName}>Flexible & Self-Paced</h3>
            <p className={styles.valueDesc}>
              Learn anytime, anywhere with adaptable schedules.
            </p>
          </motion.div>
          <motion.div
            className={styles.valueBlock}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span
              className={styles.valueIcon}
              role="img"
              aria-label="Certificates of Completion"
            >
              📜
            </span>
            <h3 className={styles.valueName}>Certificates of Completion</h3>
            <p className={styles.valueDesc}>
              Earn shareable proof of achievement for career advancement.
            </p>
          </motion.div>
          <motion.div
            className={styles.valueBlock}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span
              className={styles.valueIcon}
              role="img"
              aria-label="Job-Ready Skills"
            >
              💼
            </span>
            <h3 className={styles.valueName}>Job-Ready Skills</h3>
            <p className={styles.valueDesc}>
              Acquire market-relevant skills tailored to industry demands.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.coursesSection}>
        <h2 className={styles.coursesTitle}>Popular Courses</h2>
        <div className={styles.coursesFilters}>
          {['All', 'Development', 'Design', 'Marketing'].map((cat) => (
            <button
              key={cat}
              className={
                styles.filterBtn + (filter === cat ? ' ' + styles.active : '')
              }
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className={styles.coursesGrid}>
          {popularCourses.map((course, idx) => (
            <motion.div
              className={styles.courseCard}
              key={course.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 40px #34495e33' }}
            >
              <div
                className={styles.courseThumb}
                style={{ backgroundImage: `url('${course.img}')` }}
              />
              <div className={styles.courseContent}>
                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={styles.courseDesc}>{course.desc}</p>
                <div className={styles.courseMeta}>
                  {course.tags.map((tag: string) => (
                    <span className={styles.tag} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className={styles.courseBtn}
                  onClick={() => {
                    setSelectedCourse(course);
                    setModalOpen(true);
                  }}
                >
                  View Course
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <CourseDetailModal
          course={selectedCourse}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </section>

      <section className={styles.roadmapSection}>
        <h2 className={styles.roadmapTitle}>
          Learning Path / Curriculum Roadmap
        </h2>
        <div className={styles.roadmapTimeline}>
          {[
            {
              icon: '🏁',
              title: 'Getting Started',
              desc: 'Introduction to foundational skills & concepts.',
            },
            {
              icon: '🔨',
              title: 'Build Projects',
              desc: 'Hands-on learning through real-world assignments.',
            },
            {
              icon: '📜',
              title: 'Earn Certificate',
              desc: 'Completion credentials validating acquired expertise.',
            },
            {
              icon: '🚀',
              title: 'Portfolio Ready',
              desc: 'Prepare industry-level work samples for career growth.',
            },
          ].map((step, idx) => (
            <motion.div
              className={styles.roadmapStep}
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 40px #34495e33' }}
            >
              <span
                className={styles.roadmapIcon}
                role="img"
                aria-label={step.title}
              >
                {step.icon}
              </span>
              <h3 className={styles.roadmapStepTitle}>{step.title}</h3>
              <p className={styles.roadmapStepDesc}>{step.desc}</p>
              {idx < 3 && <div className={styles.roadmapConnector} />}
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.communitySection}>
        <h2 className={styles.communityTitle}>Join the Community</h2>
        <div className={styles.communityOptions}>
          {communityLinks
            .filter((l) => l.enabled !== false)
            .map((link, idx) => {
              const img = (key: string) => {
                // return the same inline SVGs used previously by key
                if (key === 'telegram')
                  return (
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="20" fill="#229ED9" />
                      <path
                        d="M29.5 12.5L25.5 28.5C25.5 28.5 25 29.5 24 29.5C23.5 29.5 22.5 29 22 28.5L18.5 25.5L16.5 27.5C16.5 27.5 16 28 15.5 28C15 28 15 27.5 15 27.5L13 20.5L29 13.5C29 13.5 29.5 13 29.5 12.5Z"
                        fill="white"
                      />
                    </svg>
                  );
                if (key === 'discord')
                  return (
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="20" cy="20" r="20" fill="#5865F2" />
                      <path
                        d="M27.5 26C27.5 26 26.5 25.5 26 25C27.5 24.5 28.5 23.5 28.5 23.5C28.5 23.5 27.5 24 26.5 24.5C25.5 24 24.5 23.5 24.5 23.5C24.5 23.5 25.5 24.5 27 25C26.5 25.5 25.5 26 25.5 26C25.5 26 26.5 25.5 27.5 26ZM15.5 26C15.5 26 16.5 25.5 17 25C15.5 24.5 14.5 23.5 14.5 23.5C14.5 23.5 15.5 24 16.5 24.5C17.5 24 18.5 23.5 18.5 23.5C18.5 23.5 17.5 24.5 16 25C16.5 25.5 17.5 26 17.5 26C17.5 26 16.5 25.5 15.5 26ZM20 13C16.1 13 13 16.1 13 20C13 23.9 16.1 27 20 27C23.9 27 27 23.9 27 20C27 16.1 23.9 13 20 13ZM20 25.5C17.2 25.5 15 23.3 15 20.5C15 17.7 17.2 15.5 20 15.5C22.8 15.5 25 17.7 25 20.5C25 23.3 22.8 25.5 20 25.5Z"
                        fill="white"
                      />
                    </svg>
                  );
                // tiktok or fallback
                return (
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="20" r="20" fill="#000" />
                    <path
                      d="M27 18.5C25.6 18.5 24.5 17.4 24.5 16V14.5H22.5V25.5C22.5 26.3 21.8 27 21 27C20.2 27 19.5 26.3 19.5 25.5C19.5 24.7 20.2 24 21 24C21.2 24 21.4 24.1 21.5 24.2V22.2C21.3 22.1 21.2 22 21 22C19.1 22 17.5 23.6 17.5 25.5C17.5 27.4 19.1 29 21 29C22.9 29 24.5 27.4 24.5 25.5V18.5H27Z"
                      fill="#fff"
                    />
                    <path
                      d="M27 18.5C25.6 18.5 24.5 17.4 24.5 16V14.5H22.5V25.5C22.5 26.3 21.8 27 21 27C20.2 27 19.5 26.3 19.5 25.5C19.5 24.7 20.2 24 21 24C21.2 24 21.4 24.1 21.5 24.2V22.2C21.3 22.1 21.2 22 21 22C19.1 22 17.5 23.6 17.5 25.5C17.5 27.4 19.1 29 21 29C22.9 29 24.5 27.4 24.5 25.5V18.5H27Z"
                      fill="#25F4EE"
                    />
                    <path
                      d="M27 18.5C25.6 18.5 24.5 17.4 24.5 16V14.5H22.5V25.5C22.5 26.3 21.8 27 21 27C20.2 27 19.5 26.3 19.5 25.5C19.5 24.7 20.2 24 21 24C21.2 24 21.4 24.1 21.5 24.2V22.2C21.3 22.1 21.2 22 21 22C19.1 22 17.5 23.6 17.5 25.5C17.5 27.4 19.1 29 21 29C22.9 29 24.5 27.4 24.5 25.5V18.5H27Z"
                      fill="#FE2C55"
                    />
                  </svg>
                );
              };

              const normalize = (u: string) => {
                if (!u) return u;
                const t = u.trim();
                if (/^https?:\/\//i.test(t) || /^\/\//.test(t)) return t;
                return `https://${t}`;
              };

              return (
                <motion.a
                  key={link.id}
                  href={normalize(link.href)}
                  className={
                    styles.communityBlock +
                    ' ' +
                    styles[link.styleKey || 'telegram']
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                >
                  <span className={styles.communityIcon}>
                    {img(link.iconKey || link.id)}
                  </span>
                  <h3>{link.title}</h3>
                  <p>{link.desc}</p>
                </motion.a>
              );
            })}
        </div>
        <div className={styles.communityStats}>
          {communityStats.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {demoPageData.faq?.map((item, idx) => (
            <motion.div
              className={styles.faqItem}
              key={item.question}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className={styles.bottomCtaSection}>
        <motion.div
          className={styles.bottomCtaContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.bottomCtaTitle}>
            {demoPageData.bottomCtaTitle}
          </h2>
          <p className={styles.bottomCtaSubtext}>
            {demoPageData.bottomCtaSubtext}
          </p>
          <div className={styles.bottomCtaButtons}>
            <button className={styles.cta}>
              {demoPageData.bottomCtaButtons.browse}
            </button>
            <button className={styles.ctaSecondary}>
              {demoPageData.bottomCtaButtons.join}
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
