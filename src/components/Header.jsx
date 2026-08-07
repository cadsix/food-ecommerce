import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { logo } from '../constants/images';
import { useCart } from '../context/CartContext';
import AuthModal from './AuthModal';

/* ── Icons ── */
const IconCart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);
const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
    <path d="M7 2v20"/>
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
  </svg>
);
const IconApp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12.01" y2="18"/>
  </svg>
);
const IconContact = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.57 3.4 2 2 0 0 1 3.54 1.19h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 6.3 6.3l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* Sun icon — shown in dark mode to switch to light */
const IconSun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

/* Moon icon — shown in light mode to switch to dark */
const IconMoon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const NAV = [
  { label: 'Home',       id: 'home',       Icon: IconHome },
  { label: 'Menu',       id: 'menu',       Icon: IconMenu },
  { label: 'Mobile App', id: 'mobile-app', Icon: IconApp },
  { label: 'Contact',    id: 'contact',    Icon: IconContact },
];

export default function Header() {
  const [active, setActive]     = useState('home');
  const [authOpen, setAuthOpen] = useState(false);
  const [drawerOpen, setDrawer] = useState(false);
  const [dark, setDark]         = useState(() => {
    // persist preference across reloads
    return localStorage.getItem('theme') === 'dark';
  });

  const { getCartCount, setIsCartOpen } = useCart();

  /* Apply theme to <html> and persist */
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  /* Close drawer on desktop resize */
  useEffect(() => {
    const fn = () => { if (window.innerWidth > 768) setDrawer(false); };
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);

  /* Lock body scroll when drawer open */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const go = (id) => {
    setActive(id);
    setDrawer(false);
    if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const cartCount = getCartCount();

  return (
    <>
      <header className="header">
        <div className="header-inner">

          {/* Logo */}
          <div className="header-logo" onClick={() => go('home')}
            role="button" tabIndex={0} aria-label="Go to home">
            <img src={logo} alt="Tomato" />
          </div>

          {/* Desktop nav */}
          <nav className="nav-desktop" aria-label="Main navigation">
            {NAV.map(({ label, id }) => (
              <a key={id} href={`#${id}`}
                className={`nav-link${active === id ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); go(id); }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="header-actions">

            {/* Cart */}
            <button className="btn-icon"
              aria-label={`Cart, ${cartCount} items`}
              onClick={() => setIsCartOpen(true)}
            >
              <IconCart />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* Theme toggle */}
            <button
              className="btn-theme btn-icon"
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setDark(v => !v)}
              title={dark ? 'Light mode' : 'Dark mode'}
            >
              {dark ? <IconSun /> : <IconMoon />}
            </button>

            {/* Sign in — desktop only */}
            <button className="btn-signin" onClick={() => setAuthOpen(true)}>
              Sign In
            </button>

            {/* Hamburger */}
            <button
              className={`btn-menu${drawerOpen ? ' open' : ''}`}
              aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={drawerOpen}
              onClick={() => setDrawer(v => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {drawerOpen && (
        <div className="drawer-backdrop" onClick={() => setDrawer(false)} />
      )}

      {/* Mobile drawer */}
      <nav
        className={`drawer${drawerOpen ? ' open' : ''}`}
        aria-hidden={!drawerOpen}
        aria-label="Mobile navigation"
      >
        <div className="drawer-head">
          <span className="drawer-brand">Tomato.</span>
          <button className="drawer-close" onClick={() => setDrawer(false)} aria-label="Close menu">
            <IconClose />
          </button>
        </div>

        <ul className="drawer-nav">
          {NAV.map(({ label, id, Icon }) => (
            <li key={id}>
              <a href={`#${id}`}
                className={`drawer-link${active === id ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); go(id); }}
              >
                <Icon />
                {label}
              </a>
            </li>
          ))}
          {/* Theme toggle inside drawer */}
          <li>
            <button
              className="drawer-link"
              style={{ width: '100%', cursor: 'pointer' }}
              onClick={() => setDark(v => !v)}
            >
              {dark ? <IconSun /> : <IconMoon />}
              {dark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>

        <div className="drawer-foot">
          <button className="drawer-signin"
            onClick={() => { setAuthOpen(true); setDrawer(false); }}
          >
            <IconUser />
            Sign In / Register
          </button>
        </div>
      </nav>

      {authOpen && (
        <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      )}
    </>
  );
}
