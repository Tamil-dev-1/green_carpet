import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./whoWe.css";

// ── Placeholder images (replace src with your own) ──────────────────────────
// Card 1: health workers group photo
const IMG_WHO = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80";
// Card 2: community meeting / women studying
const IMG_WHAT = "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&q=80";
// Card 3: rural / candlelight scene
const IMG_WHERE = "https://images.pexels.com/photos/32214031/pexels-photo-32214031.jpeg";

const cards = [
  {
    id: "who",
    theme: "card-blue",
    image: IMG_WHO,
    imageAlt: "Health workers group",
    title: "Who we are",
    text: "We support the public health system by implementing innovative maternal and child health solutions designed for scale.",
    link: "#who",
  },
  {
    id: "what",
    theme: "card-red",
    image: IMG_WHAT,
    imageAlt: "Community health meeting",
    title: "What we do",
    text: "We use data, and partner with health workers to identify and manage risk, improve capacities, and elevate the quality of care at the last mile.",
    link: "#what",
  },
  {
    id: "where",
    theme: "card-amber",
    image: IMG_WHERE,
    imageAlt: "Rural community scene",
    title: "Where we work",
    text: "We work across India's most challenging geographies, largely with marginalized communities.",
    link: "#where",
  },
];

function InfoCard({ theme, image, imageAlt, title, text, link }) {
  return (
    <div className={`info-card ${theme}`}>
      {/* Image with colour-duotone overlay */}
      <div className="card-image-wrapper">
        <img src={image} alt={imageAlt} />
      </div>

      {/* Text body */}
      <div className="card-body-custom">
        <h2 className="card-title-custom">{title}</h2>
        <p className="card-text-custom">{text}</p>
      </div>

      {/* CTA */}
      <div className="card-footer-custom">
        <a href={link} className="btn-know-more">
          Know More <span className="arrow">&#8594;</span>
        </a>
      </div>
    </div>
  );
}

export default function CardsSection() {
  return (
    <section className="cards-section">
      {/* Section Heading */}
      <div className="section-heading">
        <h1 className="section-main-title">Who We Are</h1>
        <div className="section-title-underline"></div>
      </div>

      <div className="cards-row">
        {cards.map((card) => (
          <InfoCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}
