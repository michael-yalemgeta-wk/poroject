import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../../utils/auth';
import styles from '../../styles/Admin.module.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/admin';

  const submit = async (e: any) => {
    e.preventDefault();
    setError(null);
    const res = await auth.login(username, password);
    if (res.ok) {
      navigate(from, { replace: true });
    } else {
      setError(res.message);
    }
  };

  return (
    <div className={styles.loginWrap}>
      <div className={styles.loginCard}>
        <h2>Admin Login</h2>
        <form onSubmit={submit} className={styles.loginForm}>
          <label>
            Username
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles.row}>
            <button type="submit" className={styles.primary}>
              Sign in
            </button>
          </div>
        </form>
        <div className={styles.hint}>
          Use <code>admin</code> / <code>admin123</code>
        </div>
      </div>
    </div>
  );
}
