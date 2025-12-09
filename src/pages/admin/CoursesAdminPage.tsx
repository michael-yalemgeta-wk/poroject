import { useEffect, useState } from 'react';
import adminApi from '../../api/adminApi';
import styles from '../../styles/Admin.module.css';
import type { Course } from '../../data/courses';

function uid() {
  return 'c_' + Math.random().toString(36).slice(2, 9);
}

export default function CoursesAdminPage() {
  const [items, setItems] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    setLoading(true);
    const list = await adminApi.getCourses();
    setItems(list);
    setLoading(false);
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this course?')) return;
    await adminApi.deleteCourse(id);
    load();
  }

  async function handleCreate() {
    const title = prompt('Title') || '';
    if (!title) return;
    const newItem: Course = {
      id: uid(),
      title,
      desc: '',
      img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
      tags: ['All Levels'],
      category: 'General',
    };
    await adminApi.createCourse(newItem);
    load();
  }

  async function handleEdit(item: Course) {
    const title = prompt('Title', item.title) || item.title;
    const desc = prompt('Description', item.desc) || item.desc;
    const updated = { ...item, title, desc };
    await adminApi.updateCourse(updated);
    load();
  }

  return (
    <div>
      <div className={styles.pageHeader}>
        <h2>Courses</h2>
        <div>
          <button onClick={handleCreate} className={styles.primary}>
            Create
          </button>
        </div>
      </div>
      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className={styles.listWrap}>
          {items.map((it) => (
            <div key={it.id} className={styles.itemCard}>
              <img src={it.img} alt={it.title} />
              <div className={styles.itemInfo}>
                <strong>{it.title}</strong>
                <div className={styles.sm}>{it.category}</div>
              </div>
              <div className={styles.itemActions}>
                <button onClick={() => handleEdit(it)} className={styles.ghost}>
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(it.id)}
                  className={styles.destructive}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
