import React, { useRef } from "react";
import "./SDGgoal.css";

/* ────────────────────────────────────────────
   All 17 UN SDG Icons as inline SVG
   Official colours + white icon treatment
──────────────────────────────────────────── */

const icons = {
  1: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <path d="M32 10 C20 10 10 20 10 32 C10 44 20 54 32 54 C44 54 54 44 54 32 C54 20 44 10 32 10Z M32 16 C40 16 47 22 47 32 C47 42 40 48 32 48 C24 48 17 42 17 32 C17 22 24 16 32 16Z"/>
        <path d="M28 24 L28 40 L36 40 L36 36 L32 36 L32 24Z"/>
        <circle cx="32" cy="20" r="3"/>
      </g>
    </svg>
  ),
  2: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <path d="M32 8 C26 8 20 12 20 20 C20 26 24 30 30 32 L30 48 L34 48 L34 32 C40 30 44 26 44 20 C44 12 38 8 32 8Z M32 12 C36 12 40 15 40 20 C40 25 36 28 32 28 C28 28 24 25 24 20 C24 15 28 12 32 12Z"/>
        <path d="M12 52 L52 52 L52 56 L12 56Z"/>
        <ellipse cx="32" cy="45" rx="10" ry="4"/>
      </g>
    </svg>
  ),
  3: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <path d="M32 10 C20 10 10 20 10 32 C10 44 20 54 32 54 C44 54 54 44 54 32 C54 20 44 10 32 10Z M32 14 C42 14 50 22 50 32 C50 42 42 50 32 50 C22 50 14 42 14 32 C14 22 22 14 32 14Z"/>
        <rect x="29" y="20" width="6" height="10" rx="2"/>
        <rect x="29" y="34" width="6" height="10" rx="2"/>
        <rect x="20" y="29" width="10" height="6" rx="2"/>
        <rect x="34" y="29" width="10" height="6" rx="2"/>
      </g>
    </svg>
  ),
  4: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <path d="M12 48 L12 20 L32 10 L52 20 L52 48Z M32 14 L48 22 L48 44 L16 44 L16 22Z"/>
        <path d="M20 28 L20 44 M28 24 L28 44 M36 24 L36 44 M44 28 L44 44"/>
        <path d="M20 28 Q24 20 28 24 Q32 28 36 24 Q40 20 44 28"/>
      </g>
    </svg>
  ),
  5: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <circle cx="32" cy="22" r="12" strokeWidth="0"/>
        <path d="M32 34 C22 34 14 40 14 48 L50 48 C50 40 42 34 32 34Z"/>
        <path d="M26 22 L38 22 M32 16 L32 28" stroke="white" strokeWidth="3" fill="none"/>
      </g>
    </svg>
  ),
  6: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <path d="M32 12 C32 12 16 28 16 38 C16 46 23 52 32 52 C41 52 48 46 48 38 C48 28 32 12 32 12Z"/>
        <path d="M24 38 C24 42 27 45 32 45" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </g>
    </svg>
  ),
  7: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <circle cx="32" cy="32" r="12"/>
        <line x1="32" y1="8" x2="32" y2="16" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="32" y1="48" x2="32" y2="56" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="8" y1="32" x2="16" y2="32" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="48" y1="32" x2="56" y2="32" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="15.5" y1="15.5" x2="21.5" y2="21.5" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="42.5" y1="42.5" x2="48.5" y2="48.5" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="48.5" y1="15.5" x2="42.5" y2="21.5" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="21.5" y1="42.5" x2="15.5" y2="48.5" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
      </g>
    </svg>
  ),
  8: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <path d="M10 42 L10 36 L28 28 L28 22 C28 18 31 16 34 18 L54 28 L54 34 L36 34 L36 42Z"/>
        <circle cx="18" cy="48" r="6"/>
        <circle cx="46" cy="48" r="6"/>
        <rect x="8" y="40" width="48" height="4" rx="2"/>
      </g>
    </svg>
  ),
  9: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <rect x="10" y="40" width="44" height="12" rx="3"/>
        <rect x="18" y="28" width="8" height="12"/>
        <rect x="30" y="22" width="8" height="18"/>
        <rect x="42" y="32" width="8" height="8"/>
        <path d="M10 40 L54 40" stroke="white" strokeWidth="2"/>
      </g>
    </svg>
  ),
  10: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <circle cx="32" cy="32" r="20" fill="none" stroke="white" strokeWidth="3"/>
        <path d="M24 32 L32 24 L40 32 L32 40Z"/>
        <line x1="32" y1="12" x2="32" y2="52" stroke="white" strokeWidth="2.5"/>
        <line x1="12" y1="32" x2="52" y2="32" stroke="white" strokeWidth="2.5"/>
      </g>
    </svg>
  ),
  11: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <rect x="10" y="34" width="44" height="18" rx="2"/>
        <path d="M14 34 L32 16 L50 34Z"/>
        <rect x="26" y="38" width="12" height="14"/>
        <rect x="14" y="38" width="8" height="10" rx="1"/>
        <rect x="42" y="38" width="8" height="10" rx="1"/>
      </g>
    </svg>
  ),
  12: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <path d="M32 14 C24 14 18 20 18 28 C18 34 22 38 28 40 L28 50 L36 50 L36 40 C42 38 46 34 46 28 C46 20 40 14 32 14Z"/>
        <path d="M18 52 L46 52" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <path d="M26 28 L30 32 L38 24" stroke="#BF8B2E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </g>
    </svg>
  ),
  13: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <circle cx="32" cy="32" r="18" fill="none" stroke="white" strokeWidth="3"/>
        <circle cx="32" cy="32" r="8"/>
        <ellipse cx="32" cy="32" rx="18" ry="10" fill="none" stroke="white" strokeWidth="2.5"/>
        <line x1="32" y1="14" x2="32" y2="50" stroke="white" strokeWidth="2.5"/>
      </g>
    </svg>
  ),
  14: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <path d="M12 32 Q18 26 24 32 Q30 38 36 32 Q42 26 52 32 L52 50 Q42 44 36 50 Q30 56 24 50 Q18 44 12 50Z"/>
        <path d="M20 20 C24 14 30 14 32 20 C34 26 28 28 28 28 C28 28 22 26 20 20Z"/>
        <circle cx="30" cy="23" r="3"/>
      </g>
    </svg>
  ),
  15: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <path d="M32 10 C32 10 20 18 18 30 C16 40 22 48 32 52 C42 48 48 40 46 30 C44 18 32 10 32 10Z"/>
        <line x1="32" y1="10" x2="32" y2="52" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
        <path d="M32 30 C28 26 20 24 18 30" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
        <path d="M32 22 C36 18 44 18 46 24" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none"/>
      </g>
    </svg>
  ),
  16: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <path d="M32 10 L52 22 L52 42 L32 54 L12 42 L12 22Z" fill="none" stroke="white" strokeWidth="3"/>
        <path d="M32 18 L46 26 L46 38 L32 46 L18 38 L18 26Z" fill="white"/>
        <path d="M32 26 L38 32 L32 38 L26 32Z" fill="#00689D"/>
        <circle cx="32" cy="32" r="3" fill="#00689D"/>
      </g>
    </svg>
  ),
  17: (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g fill="white">
        <circle cx="32" cy="32" r="20" fill="none" stroke="white" strokeWidth="2.5"/>
        <circle cx="32" cy="32" r="10" fill="none" stroke="white" strokeWidth="2.5"/>
        <line x1="32" y1="12" x2="32" y2="52" stroke="white" strokeWidth="2.5"/>
        <line x1="12" y1="32" x2="52" y2="32" stroke="white" strokeWidth="2.5"/>
        <path d="M16 20 Q32 28 48 20" fill="none" stroke="white" strokeWidth="2"/>
        <path d="M16 44 Q32 36 48 44" fill="none" stroke="white" strokeWidth="2"/>
      </g>
    </svg>
  ),
};

/* ── All 17 SDGs data ── */
const sdgData = [
  { id: 1,  label: "No Poverty",              color: "#e5243b" },
  { id: 2,  label: "Zero Hunger",             color: "#DDA63A" },
  { id: 3,  label: "Good Health & Well-Being",color: "#4C9F38" },
  { id: 4,  label: "Quality Education",       color: "#C5192D" },
  { id: 5,  label: "Gender Equality",         color: "#FF3A21" },
  { id: 6,  label: "Clean Water & Sanitation",color: "#26BDE2" },
  { id: 7,  label: "Affordable & Clean Energy",color: "#FCC30B" },
  { id: 8,  label: "Decent Work & Economic Growth", color: "#A21942" },
  { id: 9,  label: "Industry, Innovation & Infrastructure", color: "#FD6925" },
  { id: 10, label: "Reduced Inequalities",    color: "#DD1367" },
  { id: 11, label: "Sustainable Cities & Communities", color: "#FD9D24" },
  { id: 12, label: "Responsible Consumption", color: "#BF8B2E" },
  { id: 13, label: "Climate Action",          color: "#3F7E44" },
  { id: 14, label: "Life Below Water",        color: "#0A97D9" },
  { id: 15, label: "Life on Land",            color: "#56C02B" },
  { id: 16, label: "Peace, Justice & Strong Institutions", color: "#00689D" },
  { id: 17, label: "Partnerships for the Goals", color: "#19486A" },
];

/* Duplicate for seamless loop */
const loopedCards = [...sdgData, ...sdgData];

/* ── Component ── */
const SustainabilityGoals = () => {
  const trackRef = useRef(null);

  return (
    <section className="sdg-section">
      <h2 className="sdg-section__title">Sustainability Goals</h2>

      <div className="sdg-marquee-wrapper">
        <div className="sdg-marquee-track" ref={trackRef}>
          {loopedCards.map((sdg, idx) => (
            <div
              key={`${sdg.id}-${idx}`}
              className={`sdg-card sdg--${sdg.id}`}
              title={`SDG ${sdg.id}: ${sdg.label}`}
            >
              {/* Number + short label */}
              <div className="sdg-card__header">
                <span className="sdg-card__number">{sdg.id}</span>
                <span className="sdg-card__label">{sdg.label}</span>
              </div>

              {/* Icon */}
              <div className="sdg-card__icon">
                {icons[sdg.id]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="sdg-cta-wrap">
        <a href="#goals" className="sdg-cta-btn">
          View All Goals
          <svg viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default SustainabilityGoals;
