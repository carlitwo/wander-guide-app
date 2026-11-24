'use client';

export default function DestinationCard({ place, isSaved, onToggleSave, onOpenModal }) {
  return (
    <article className="destination-card">
      <div className="card-visual-banner" onClick={() => onOpenModal(place)}>
        <img
          src={place.image}
          alt={`${place.title}, ${place.location}`}
          className="card-cover-img"
        />
        <div className="card-shimmer" />

        <div className="card-banner-overlay">
          <div className="chip-group">
            <span className="category-chip">{place.category}</span>
            <span className="scenery-chip">{place.scenery}</span>
          </div>

          <div className="card-top-right">
            <span className="rating-pill">★ {place.rating}</span>
            <button
              type="button"
              className={`save-heart-btn ${isSaved ? 'saved' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(place.id);
              }}
              aria-label="Save destination"
            >
              {isSaved ? '♥' : '♡'}
            </button>
          </div>
        </div>

        <div className="card-bottom-badge">Best: {place.bestTime}</div>
      </div>

      <div className="card-body">
        <div className="card-location">{place.location}</div>
        <h2 className="card-title">{place.title}</h2>
        <p className="card-description">{place.description}</p>

        <div className="card-logistics">
          <div className="logistics-item">
            <span className="logistics-label">Daily Budget</span>
            <span className="logistics-value">{place.dailyBudget}</span>
          </div>
          <div className="logistics-item">
            <span className="logistics-label">Entry Airport</span>
            <span className="logistics-value">{place.nearestAirport}</span>
          </div>
          <div className="logistics-item">
            <span className="logistics-label">Ideal Stay</span>
            <span className="logistics-value">{place.idealStay}</span>
          </div>
        </div>

        <div className="card-footer-meta">
          <span className="highlight-tag">Must-See: {place.highlight}</span>
          <button
            type="button"
            onClick={() => onOpenModal(place)}
            className="btn-read-guide"
          >
            Explore Guide →
          </button>
        </div>
      </div>
    </article>
  );
}