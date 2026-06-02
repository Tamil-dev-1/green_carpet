const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #fff;
    font-family: 'Outfit', sans-serif;
    overflow-x: hidden;
  }

  /* ── MARQUEE WRAPPER ── */
  .marquee-section {
    width: 100%;
    overflow: hidden;
    padding: 24px 0;
    border-top: 2px solid #e5e5e5;
    border-bottom: 2px solid #e5e5e5;
    background: #fff;
    cursor: default;
    user-select: none;
  }

  /* Track — holds two identical sets side by side */
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marqueeRTL 26s linear infinite;
  }

  /* Pause on hover of the whole section */
  .marquee-section:hover .marquee-track {
    animation-play-state: paused;
  }

  @keyframes marqueeRTL {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* Each repeated set */
  .marquee-set {
    display: flex;
    align-items: center;
    gap: 0;
    white-space: nowrap;
    padding-right: 0;
  }

  /* Individual item = bullet + text */
  .marquee-item {
    display: inline-flex;
    align-items: center;
    gap: 20px;
    padding: 0 28px;
  }

  .marquee-bullet {
    font-size: clamp(22px, 3vw, 36px);
    font-weight: 900;
    color: #2b2b2b;
    line-height: 1;
    transition: color 0.2s ease;
    flex-shrink: 0;
  }

  .marquee-text {
    font-size: clamp(21px, 4vw, 40px);
    font-weight: 800;
    color: #2b2b2b;
    letter-spacing: -0.02em;
    line-height: 1;
    transition: color 0.25s ease;
    white-space: nowrap;
  }

  /* Hover: turn lime green */
  .marquee-item:hover .marquee-text,
  .marquee-item:hover .marquee-bullet {
    color: #c6f135;
  }

  /* Mobile */
  @media (max-width: 600px) {
    .marquee-track { animation-duration: 12s; }
    .marquee-item  { padding: 0 18px; gap: 12px; }
  }
`;

const LABELS = [
  "Let's Work Together",
  "Web Development",
  "React JS",
  "Frontend Developer",
  "UI/UX Design",
  "Responsive Design",
  "JavaScript",
  "Creative Solutions",
  "Modern Websites",
  "Portfolio Design"
];

export default function TextMarquee() {
  const Set = () => (
    <div className="marquee-set">
      {LABELS.map((label, index) => (
        <div className="marquee-item" key={index}>
          <span className="marquee-bullet">·</span>
          <span className="marquee-text">{label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <style>{css}</style>

      <div
        style={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#fff",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "0 24px 48px",
            fontFamily: "'Outfit', sans-serif",
          }}
        >
        </div>

        <div className="marquee-section">
          <div className="marquee-track">
            {/* Duplicate for seamless infinite scrolling */}
            <Set />
            <Set />
          </div>
        </div>
      </div>
    </>
  );
}