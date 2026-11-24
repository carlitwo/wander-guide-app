'use client';

import { useState } from 'react';
import Link from 'next/link';
import { destinations } from '../data/destinations';
import { useTravel } from '../components/AppShell';

export default function HomePage() {
  const { openModal } = useTravel();
  const [selectedId, setSelectedId] = useState(1);
  const [tierMult, setTierMult] = useState(1);
  const [days, setDays] = useState(4);

  const selectedPlace = destinations.find((d) => d.id === Number(selectedId)) || destinations[0];
  const dailyPhp = Math.round(selectedPlace.baseCostPhp * tierMult);
  const totalPhp = dailyPhp * days;

  return (
    <>
      <section className="split-hero">
        <div className="split-hero-left">
          <h1 className="display-hero-title">
            Discover Coastlines &amp; Highlands{' '}
            <span className="gradient-text">Worth the Journey.</span>
          </h1>
          <p className="display-hero-sub">
            Editorial destination guides across Philippine islands and world-renowned
            landscapes—complete with airport codes, honest daily budgets, and 3-day sample
            routes.
          </p>
          <div className="hero-cta-row">
            <Link href="/destinations" className="btn-primary-glow">
              Explore All 8 Destinations →
            </Link>
            <a href="#budget-planner" className="btn-secondary-glass">
              Estimate Trip Cost ↓
            </a>
          </div>

          <div className="hero-metrics">
            <div>
              <strong>8</strong>
              <span>Curated Guides</span>
            </div>
            <div>
              <strong>24</strong>
              <span>Sample Route Days</span>
            </div>
            <div>
              <strong>4.9★</strong>
              <span>Avg. Reader Rating</span>
            </div>
          </div>
        </div>

        <div className="split-hero-right">
          <div
            className="spotlight-main-card"
            onClick={() => openModal(destinations.find((d) => d.id === 2))}
          >
            <img
              src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1000&q=85"
              alt="El Nido Palawan"
            />
            <div className="spotlight-glass-overlay">
              <div className="spotlight-top">
                <span className="scenery-chip">Trending Pick</span>
                <span className="rating-pill">★ 4.9</span>
              </div>
              <div>
                <div className="spotlight-loc">Northern Palawan, Philippines</div>
                <h3 className="spotlight-name">El Nido Limestone Lagoons</h3>
                <div className="spotlight-meta">Entry: Lio (ENI) • Est. ₱3,500 – ₱6,000/day</div>
              </div>
            </div>
          </div>

          <div className="spotlight-mini-stack">
            <div
              className="mini-spotlight-card"
              onClick={() => openModal(destinations.find((d) => d.id === 6))}
            >
              <img
                src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=500&q=80"
                alt="Swiss Alps"
              />
              <div>
                <span className="mini-tag">Alpine Escape</span>
                <h4>Bernese Oberland</h4>
                <p>Zurich (ZRH) • ★ 5.0</p>
              </div>
            </div>

            <div
              className="mini-spotlight-card"
              onClick={() => openModal(destinations.find((d) => d.id === 1))}
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=80"
                alt="Siargao"
              />
              <div>
                <span className="mini-tag">Surf &amp; Lagoons</span>
                <h4>Siargao Island</h4>
                <p>Sayak (IAO) • ★ 4.9</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header-flex">
          <div>
            <div className="section-kicker">Visual Highlights</div>
            <h2 className="section-title">Featured Landscapes &amp; Shores</h2>
          </div>
          <Link href="/destinations" className="text-action-link">
            View Full Directory →
          </Link>
        </div>

        <div className="bento-grid">
          <div
            className="bento-tile bento-large"
            onClick={() => openModal(destinations.find((d) => d.id === 5))}
          >
            <img
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85"
              alt="Kyoto Japan"
            />
            <div className="bento-overlay">
              <span className="category-chip">International • Landscape</span>
              <h3>Kyoto, Japan</h3>
              <p>Vermilion torii mountain trails, Arashiyama bamboo groves &amp; Uji matcha.</p>
            </div>
          </div>

          <div
            className="bento-tile"
            onClick={() => openModal(destinations.find((d) => d.id === 3))}
          >
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=85"
              alt="Batanes"
            />
            <div className="bento-overlay">
              <span className="category-chip">Philippines</span>
              <h3>Batanes Rolling Hills</h3>
              <p>Pacific cliff pastures &amp; Ivatan stone villages.</p>
            </div>
          </div>

          <div
            className="bento-tile"
            onClick={() => openModal(destinations.find((d) => d.id === 7))}
          >
            <img
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=85"
              alt="Amalfi Coast"
            />
            <div className="bento-overlay">
              <span className="category-chip">International</span>
              <h3>Amalfi Coast, Italy</h3>
              <p>Cliffside lemon groves &amp; Tyrrhenian ferries.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="budget-planner" className="estimator-card">
        <div className="estimator-left">
          <div className="section-kicker">Interactive Tool</div>
          <h2 className="section-title">Trip Budget &amp; Duration Estimator</h2>
          <p className="section-subtitle" style={{ marginBottom: '1.25rem' }}>
            Pick a destination, choose your comfort tier, and slide the number of days to preview
            estimated on-the-ground expenses (excluding airfare).
          </p>

          <div className="estimator-controls">
            <div className="control-group">
              <label htmlFor="estDestination">Destination</label>
              <select
                id="estDestination"
                className="styled-select"
                value={selectedId}
                onChange={(e) => setSelectedId(Number(e.target.value))}
              >
                {destinations.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.title} ({d.category})
                  </option>
                ))}
              </select>
            </div>

            <div className="control-group">
              <label>Travel Style</label>
              <div className="tier-pills">
                {[
                  { label: 'Backpacker', mult: 0.75 },
                  { label: 'Mid-Range', mult: 1 },
                  { label: 'Comfort', mult: 1.55 },
                ].map((tier) => (
                  <button
                    key={tier.label}
                    type="button"
                    className={`tier-btn ${tierMult === tier.mult ? 'active' : ''}`}
                    onClick={() => setTierMult(tier.mult)}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <label htmlFor="estDays">
                Trip Duration: <strong>{days} Days</strong>
              </label>
              <input
                type="range"
                id="estDays"
                min="2"
                max="10"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="styled-range"
              />
            </div>
          </div>
        </div>

        <div className="estimator-result-box">
          <span className="est-badge">Estimated Ground Total</span>
          <div className="est-total-amount">₱{totalPhp.toLocaleString()}</div>
          <div className="est-sub-note">
            ~₱{dailyPhp.toLocaleString()}/day • Entry via {selectedPlace.nearestAirport}
          </div>
          <button
            type="button"
            className="btn-primary-glow"
            style={{ width: '100%', marginTop: '1.1rem' }}
            onClick={() => openModal(selectedPlace)}
          >
            Open 3-Day Sample Route →
          </button>
        </div>
      </section>

      <section id="travel-tips" className="section-block">
        <div className="section-kicker">Before You Depart</div>
        <h2 className="section-title">Practical Travel Field Notes</h2>
        <p className="section-subtitle">
          Tested packing, transit, and timing habits for regional island flights and overland
          routes.
        </p>

        <div className="tips-grid">
          <article className="tip-card">
            <div className="tip-photo-wrap">
              <img
                src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&w=800&q=85"
                alt="Carry-on backpack"
              />
            </div>
            <div className="tip-card-body">
              <span className="tip-category">Baggage &amp; Gear</span>
              <h3>Stick to a 7kg Carry-On</h3>
              <p>
                Regional turboprop flights to Siargao or Batanes enforce strict luggage limits.
                Packing light saves transfer fees and waiting time.
              </p>
              <ul className="tip-checklist">
                <li>35L–40L soft-shell travel backpack</li>
                <li>15L dry bag for boat and lagoon tours</li>
                <li>Quick-dry layers &amp; reef-safe sunscreen</li>
              </ul>
            </div>
          </article>

          <article className="tip-card">
            <div className="tip-photo-wrap">
              <img
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=85"
                alt="Offline Map"
              />
            </div>
            <div className="tip-card-body">
              <span className="tip-category">Connectivity &amp; Cash</span>
              <h3>Prepare Offline Maps &amp; Cash</h3>
              <p>
                Cell signal drops along coastal cliffs and alpine passes, while remote island ATMs
                occasionally run out of bills during peak weekends.
              </p>
              <ul className="tip-checklist">
                <li>Download regional Google Maps offline</li>
                <li>Withdraw small bills at main airport hubs</li>
                <li>Save offline PDFs of flights &amp; bookings</li>
              </ul>
            </div>
          </article>

          <article className="tip-card">
            <div className="tip-photo-wrap">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=85"
                alt="Early sunrise lake"
              />
            </div>
            <div className="tip-card-body">
              <span className="tip-category">Timing &amp; Pacing</span>
              <h3>Start Excursions at 6:30 AM</h3>
              <p>
                Arriving within an hour of sunrise lets you experience lagoons, temples, and
                viewpoints in calm weather without tour crowds.
              </p>
              <ul className="tip-checklist">
                <li>Book first-departure island boats (7:00 AM)</li>
                <li>Check tide charts before visiting rock pools</li>
                <li>Keep one open afternoon as weather buffer</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}