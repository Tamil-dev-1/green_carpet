import React from "react";
import "./climateChange.css";

/* ── Premium SVG Icons ── */

const IconCarbonCredit = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="5"/>
    <path d="M14.5 10a3 3 0 0 0-5 2.2c0 1.6 1.1 2.8 2.5 2.8"/>
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>
    <path d="M6.34 6.34l1.42 1.42M16.24 16.24l1.42 1.42"/>
  </svg>
);

const IconInstitutional = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 21h18"/>
    <path d="M5 21V9l7-6 7 6v12"/>
    <rect x="9" y="14" width="6" height="7" rx="0.5"/>
    <rect x="6" y="11" width="3" height="3" rx="0.5"/>
    <rect x="15" y="11" width="3" height="3" rx="0.5"/>
    <path d="M12 3v2"/>
  </svg>
);

const IconCommunity = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="9" cy="6.5" r="2.5"/>
    <circle cx="15" cy="6.5" r="2.5"/>
    <circle cx="12" cy="6.5" r="2.5"/>
    <path d="M4 19.5c0-2.76 2.46-5 5.5-5h5c3.04 0 5.5 2.24 5.5 5"/>
    <path d="M12 14.5v-2.5"/>
    <path d="M9.5 12c.8 1.2 4.2 1.2 5 0"/>
  </svg>
);

const IconESG = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 22C7 18 3 14.5 3 10a6 6 0 0 1 9-5.2A6 6 0 0 1 21 10c0 4.5-4 8-9 12z"/>
    <path d="M8 10.5c1.2 2.5 4.5 3.5 7.5 2"/>
    <path d="M12 7.5v2"/>
    <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const IconMonitoring = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5"/>
    <path d="M12 12l3.5-3.5"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/>
    <path d="M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41"/>
    <path d="M3 12h2M19 12h2M12 3v2M12 19v2"/>
  </svg>
);

/* ── Card Data ── */
const cards = [
  {
    id: 1,
    icon: <IconCarbonCredit />,
    title: "Carbon Credit Programs",
    description: "Promoting transparent and impactful carbon credit initiatives.",
  },
  {
    id: 2,
    icon: <IconInstitutional />,
    title: "Institutional Carbon Awareness",
    description: "Empowering organizations to understand, reduce and offset emissions.",
  },
  {
    id: 3,
    icon: <IconCommunity />,
    title: "Community Climate Initiatives",
    description: "Supporting local communities in building climate resilience.",
  },
  {
    id: 4,
    icon: <IconESG />,
    title: "ESG Alignment",
    description: "Helping institutions align with global ESG standards.",
  },
  {
    id: 5,
    icon: <IconMonitoring />,
    title: "Monitoring & Impact Measurement",
    description: "Data driven monitoring for measurable and meaningful impact.",
  },
];

/* ── Component ── */
const ClimateCarbon = () => (
  <section className="climate-section">
    <h2 className="climate-section__title">Climate &amp; Carbon Action</h2>
    <div className="climate-section__grid">
      {cards.map((card) => (
        <div className="climate-card" key={card.id}>
          <div className="climate-card__icon-wrap">{card.icon}</div>
          <div className="climate-card__content">
            <h3 className="climate-card__title">{card.title}</h3>
            <p className="climate-card__desc">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ClimateCarbon;
