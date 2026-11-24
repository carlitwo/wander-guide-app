'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { destinations } from '../data/destinations';

export default function Navbar({ savedIds, onToggleSave, onSelectPlace }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState('light');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('wanderguide-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('wanderguide-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const savedDestinations = destinations.filter((d) => savedIds.includes(d.id));

  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <span className="logo-mark">W</span>
            <span>WanderGuide</span>
          </Link>

          <div className="nav-right-group">
            <nav className="nav-links">
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
              <Link
                href="/destinations"
                className={`nav-link ${pathname === '/destinations' ? 'active' : ''}`}
              >
                Top Destinations
              </Link>
            </nav>

            <button
              type="button"
              className="saved-pill-btn"
              onClick={() => setDrawerOpen(true)}
            >
              <span>♥ Saved</span>
              <span className="saved-badge">{savedIds.length}</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="theme-switch"
              aria-label="Toggle color theme"
            >
              <span className="switch-track">
                <span className="switch-thumb" />
              </span>
              <span className="switch-label">{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </button>
          </div>
        </div>
      </header>

      {drawerOpen && (
        <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)}>
          <div className="saved-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div>
                <span className="section-kicker" style={{ marginBottom: 0 }}>
                  Your Shortlist
                </span>
                <h3 className="drawer-title">Saved Trips</h3>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="modal-close-btn"
              >
                ✕
              </button>
            </div>

            <div className="drawer-body">
              {savedDestinations.length === 0 ? (
                <p className="empty-drawer-msg">
                  No saved destinations yet. Click the ♡ icon on any destination card to bookmark it here.
                </p>
              ) : (
                savedDestinations.map((d) => (
                  <div key={d.id} className="drawer-item">
                    <img src={d.image} alt={d.title} className="drawer-item-img" />
                    <div className="drawer-item-info">
                      <div className="drawer-item-loc">
                        {d.category} • {d.scenery}
                      </div>
                      <div className="drawer-item-title">{d.title}</div>
                      <div className="drawer-item-meta">
                        {d.dailyBudget} • {d.nearestAirport}
                      </div>
                      <div className="drawer-item-actions">
                        <button
                          type="button"
                          className="drawer-view-btn"
                          onClick={() => {
                            setDrawerOpen(false);
                            onSelectPlace(d);
                          }}
                        >
                          View 3-Day Plan
                        </button>
                        <button
                          type="button"
                          className="drawer-remove-btn"
                          onClick={() => onToggleSave(d.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}