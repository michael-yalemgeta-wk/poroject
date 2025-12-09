import { useEffect, useState } from 'react';
import adminApi from '../../api/adminApi';
import styles from '../../styles/Admin.module.css';

export default function DashboardHome() {
  const [counts, setCounts] = useState<{ courses?: number }>({});
  const [recent, setRecent] = useState<any[]>([]);

  useEffect(() => {
    adminApi.getCounts().then((c) => setCounts(c));
    adminApi.getCourses().then((list) => setRecent(list.slice(0, 5)));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div className={styles.gridStats}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>{counts.courses ?? 0}</div>
          <div className={styles.statLabel}>Courses</div>
        </div>
      </div>

      <section className={styles.section}>
        <h3>Recent courses</h3>
        <ul className={styles.itemList}>
          {recent.map((c) => (
            <li key={c.id} className={styles.itemRow}>
              <img src={c.img} alt={c.title} />
              <div>
                <strong>{c.title}</strong>
                <div className={styles.sm}>{c.category}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
