import { useRef, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import HeroSection from './components/HeroSection';
import FlashCardsSection from './components/FlashCardsSection';
import Footer from './components/Footer';
import { navData } from './data/harddata';
import DemoPage from './pages/DemoPage';
import ServicePage from './pages/ServicePage';
import AllCoursesPage from './pages/AllCoursesPage';
import JoinOnlineClassPage from './pages/JoinOnlineClassPage';
import PortfolioPage from './pages/PortfolioPage';

import './App.css';

type TopNavProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

function TopNav({ theme, setTheme }: TopNavProps) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: 64,
        background: '#fff',
        boxShadow: '0 2px 16px #34495e11',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2vw',
        borderBottom: '1px solid #ecf0f1',
      }}
    >
      {/* Left Placeholder */}
      <div
        style={{
          minWidth: 120,
          fontWeight: 700,
          fontSize: 22,
          color: '#2c3e50',
          letterSpacing: 1,
        }}
      >
        {navData.brandName}
      </div>
      {/* Center Links */}
      <div style={{ display: 'flex', gap: '2.2rem', alignItems: 'center' }}>
        {navData.links.map((link) => {
          const active = location.pathname === link.path;
          return (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              style={{
                background: 'none',
                border: 'none',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: active ? '#f47c3c' : '#34495e',
                borderBottom: active
                  ? '2.5px solid #f47c3c'
                  : '2.5px solid transparent',
                padding: '0.3rem 0.7rem',
                cursor: 'pointer',
                transition: 'color 0.2s, border-bottom 0.2s',
              }}
            >
              {link.label}
            </button>
          );
        })}
      </div>
      {/* Right Dark/Light Mode Switch */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        title={
          theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'
        }
      >
        <div
          style={{
            width: 54,
            height: 28,
            borderRadius: 16,
            background: theme === 'dark' ? '#34495e' : '#f47c3c',
            position: 'relative',
            transition: 'background 0.3s',
            boxShadow: '0 2px 8px #34495e22',
            margin: '0 0.7rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: '#fff',
              position: 'absolute',
              top: 2,
              left: theme === 'dark' ? 28 : 2,
              transition: 'left 0.3s',
              boxShadow: '0 1px 4px #34495e33',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {theme === 'dark' ? (
              // Moon SVG
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#34495e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
              </svg>
            ) : (
              // Sun SVG
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f47c3c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            )}
          </div>
        </div>
        <span
          style={{
            fontWeight: 700,
            marginLeft: '0.7rem',
            color: theme === 'dark' ? '#34495e' : '#f47c3c',
            transition: 'color 0.3s',
          }}
        >
          {theme === 'dark' ? 'Dark' : 'Light'} Mode
        </span>
      </div>
    </nav>
  );
}

function MainApp() {
  const flashCardsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleExploreLearning = () => {
    navigate('/demo');
  };

  const handleExploreService = () => {
    navigate('/service');
  };

  return (
    <div className="root">
      <HeroSection
        onExploreLearning={handleExploreLearning}
        onExploreService={handleExploreService}
      />
      <div ref={flashCardsRef} id="flashcards">
        <FlashCardsSection />
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <BrowserRouter>
      <TopNav theme={theme} setTheme={setTheme} />
      <div
        className={theme === 'dark' ? 'dark-mode' : ''}
        style={{ paddingTop: 64 }}
      >
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/courses" element={<AllCoursesPage />} />
          <Route path="/join-online-class" element={<JoinOnlineClassPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
