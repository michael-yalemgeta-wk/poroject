import { Link, Outlet, useNavigate } from 'react-router-dom';
import styles from '../../styles/Admin.module.css';
import auth from '../../utils/auth';
import { useEffect, useState } from 'react';
import adminApi from '../../api/adminApi';

type Props = {
  theme: string;
  setTheme: (t: string) => void;
};

export default function AdminLayout({ theme, setTheme }: Props) {
  const navigate = useNavigate();
  const [counts, setCounts] = useState<{ courses?: number }>({});

  useEffect(() => {
    adminApi.getCounts().then((c) => setCounts(c));
  }, []);

  function doLogout() {
    auth.logout();
    navigate('/admin/login');
  }

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
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
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button
              onClick={() => navigate('/')}
              className={styles.ghost}
              title="Go to site homepage"
            >
              Home
            </button>
            <div>Welcome, admin</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button
              onClick={toggleTheme}
              className={styles.ghost}
              title="Toggle theme"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <button onClick={doLogout} className={styles.primary}>
              Sign out
            </button>
          </div>
        </header>
        <section className={styles.pageBody}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
