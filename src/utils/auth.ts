export const ADMIN_TOKEN_KEY = 'admin_token_v1';

type LoginResult = { ok: true } | { ok: false; message: string };

const HARDCODED = { username: 'admin', password: 'admin123' };

export function login(
  username: string,
  password: string,
): Promise<LoginResult> {
  return new Promise((res) => {
    setTimeout(() => {
      if (username === HARDCODED.username && password === HARDCODED.password) {
        const token = `admintok_${Date.now()}`;
        const payload = {
          token,
          issuedAt: Date.now(),
          expiresAt: Date.now() + 1000 * 60 * 60 * 24,
        };
        localStorage.setItem(ADMIN_TOKEN_KEY, JSON.stringify(payload));
        res({ ok: true });
      } else {
        res({ ok: false, message: 'Invalid credentials' });
      }
    }, 300);
  });
}

export function logout() {
  localStorage.removeItem(ADMIN_TOKEN_KEY);
}

export function isAuthenticated(): boolean {
  try {
    const raw = localStorage.getItem(ADMIN_TOKEN_KEY);
    if (!raw) return false;
    const obj = JSON.parse(raw) as { token: string; expiresAt: number };
    if (!obj.token) return false;
    if (obj.expiresAt && Date.now() > obj.expiresAt) {
      logout();
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}

export function getToken(): string | null {
  try {
    const raw = localStorage.getItem(ADMIN_TOKEN_KEY);
    if (!raw) return null;
    const obj = JSON.parse(raw) as { token: string };
    return obj.token || null;
  } catch (e) {
    return null;
  }
}

export default { login, logout, isAuthenticated, getToken };
