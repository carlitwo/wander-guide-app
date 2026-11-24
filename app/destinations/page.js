'use client';

import { useState } from 'react';
import { destinations } from '../../data/destinations';
import DestinationCard from '../../components/DestinationCard';
import { useTravel } from '../../components/AppShell';

export default function DestinationsPage() {
  const { savedIds, toggleSave, openModal } = useTravel();
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');
  const [sceneryFilter, setSceneryFilter] = useState('All');

  const filteredDestinations = destinations.filter((place) => {
    const matchesRegion = regionFilter === 'All' || place.category === regionFilter;
    const matchesScenery = sceneryFilter === 'All' || place.scenery === sceneryFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      `${place.title} ${place.location} ${place.highlight}`.toLowerCase().includes(q);
    return matchesRegion && matchesScenery && matchesSearch;
  });

  return (
    <>
      <section className="destinations-header">
        <div style={{ flex: 1, minWidth: '260px' }}>
          <div className="section-kicker">
            Destination Directory ({filteredDestinations.length} Guides)
          </div>
          <h1 className="section-title">Beaches &amp; Landscapes</h1>
          <p className="section-subtitle" style={{ marginBottom: '1rem' }}>
            Search by city or highlight, filter by region or scenery, and click any card for a
            full 3-day itinerary.
          </p>
          <input
            type="text"
            className="search-input"
            placeholder="Search Siargao, Kyoto, lagoons, surf, waterfalls..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-groups">
          <div className="filter-row">
            <span className="filter-label">Region:</span>
            {['All', 'Philippines', 'International'].map((region) => (
              <button
                key={region}
                type="button"
                className={`filter-pill ${regionFilter === region ? 'active' : ''}`}
                onClick={() => setRegionFilter(region)}
              >
                {region}
              </button>
            ))}
          </div>

          <div className="filter-row">
            <span className="filter-label">Scenery:</span>
            {[
              { value: 'All', label: 'All Terrain' },
              { value: 'Beach', label: 'Beaches' },
              { value: 'Landscape', label: 'Landscapes' },
            ].map((scenery) => (
              <button
                key={scenery.value}
                type="button"
                className={`filter-pill ${sceneryFilter === scenery.value ? 'active' : ''}`}
                onClick={() => setSceneryFilter(scenery.value)}
              >
                {scenery.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="cards-grid">
        {filteredDestinations.map((place) => (
          <DestinationCard
            key={place.id}
            place={place}
            isSaved={savedIds.includes(place.id)}
            onToggleSave={toggleSave}
            onOpenModal={openModal}
          />
        ))}
      </section>
    </>
  );
}