'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import Navbar from './Navbar';
import PlaceModal from './PlaceModal';
import { destinations } from '../data/destinations';

const TravelContext = createContext();

export function useTravel() {
  return useContext(TravelContext);
}

export default function AppShell({ children }) {
  const [savedIds, setSavedIds] = useState([1, 5]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('wanderguide-saved');
    if (stored) {
      setSavedIds(JSON.parse(stored));
    }
  }, []);

  const toggleSave = (id) => {
    setSavedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('wanderguide-saved', JSON.stringify(next));
      return next;
    });
  };

  const tickerItems = [...destinations, ...destinations];

  return (
    <TravelContext.Provider value={{ savedIds, toggleSave, openModal: setSelectedPlace }}>
      <div className="marquee-bar">
        <div className="marquee-track">
          {tickerItems.map((d, idx) => (
            <span key={idx} className="ticker-item">
              ✦ <strong>{d.title}</strong> ({d.nearestAirport}) • {d.dailyBudget}/day • Best:{' '}
              {d.bestTime}
            </span>
          ))}
        </div>
      </div>

      <Navbar
        savedIds={savedIds}
        onToggleSave={toggleSave}
        onSelectPlace={setSelectedPlace}
      />

      <main className="main-content">{children}</main>

      <footer className="footer">© 2026 WanderGuide. All rights reserved.</footer>

      <PlaceModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </TravelContext.Provider>
  );
}