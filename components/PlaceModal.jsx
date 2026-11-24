'use client';

export default function PlaceModal({ place, onClose }) {
  if (!place) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <img src={place.image} alt={place.title} className="modal-hero-img" />
        <div className="modal-content">
          <div className="modal-top-row">
            <span className="card-location">
              {place.location} • {place.scenery}
            </span>
            <button type="button" onClick={onClose} className="modal-close-btn">
              Close ✕
            </button>
          </div>

          <h2 className="modal-title">{place.title}</h2>
          <p className="modal-desc">{place.description}</p>

          <div className="modal-info-grid">
            <div>
              <strong>Best Season:</strong> {place.bestTime}
            </div>
            <div>
              <strong>Est. Daily Budget:</strong> {place.dailyBudget}
            </div>
            <div>
              <strong>Airport Entry:</strong> {place.nearestAirport}
            </div>
            <div>
              <strong>Ideal Stay:</strong> {place.idealStay}
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <strong>Must-Try Local Food:</strong> {place.mustTryFood}
            </div>
          </div>

          <div className="itinerary-section">
            <div className="itinerary-heading">Suggested 3-Day Route</div>
            <div className="itinerary-list">
              {place.itinerary.map((step, idx) => (
                <div key={idx} className="itinerary-day">
                  <strong>Day {idx + 1}:</strong> {step}
                </div>
              ))}
            </div>
          </div>

          <div className="local-tip-box">
            <strong>On-the-Ground Tip:</strong> {place.localTip}
          </div>
        </div>
      </div>
    </div>
  );
}