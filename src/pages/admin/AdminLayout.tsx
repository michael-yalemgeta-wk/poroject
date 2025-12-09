import { Link, Outlet, useNavigate } from 'react-router-dom';
import styles from '../../styles/Admin.module.css';
import auth from '../../utils/auth';
import { useEffect, useState } from 'react';
import adminApi from '../../api/adminApi';

export default function AdminLayout() {
  const navigate = useNavigate();
  const [counts, setCounts] = useState<{ courses?: number }>({});

  useEffect(() => {
    adminApi.getCounts().then((c) => setCounts(c));
  }, []);

  function doLogout() {
    auth.logout();
    navigate('/admin/login');
  }

  return (
    <div className={styles.adminRoot}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>Admin</div>
        <nav className={styles.sideNav}>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/courses">Courses ({counts.courses ?? '–'})</Link>
        </nav>
        <div className={styles.sideFooter}>
          <button onClick={doLogout} className={styles.ghost}>
            Sign out
          </button>
        </div>
      </aside>
      <main className={styles.content}>
        <header className={styles.topbar}>
          <div>Welcome, admin</div>
        </header>
        <section className={styles.pageBody}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
