import { useEffect, useRef } from "react";
import TextMarquee from "../textmarquee/TextMarquee";

/* ── 12 images split into 3 columns of 4 ── */
const col1 = [
  { url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80", alt: "Pug Dog" },
  { url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80", alt: "Aerial Forest" },
  { url: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=400&q=80", alt: "Wildlife" },
  { url: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=400&q=80", alt: "Waterfall" },
];
const col2 = [
  { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", alt: "Mountain Lake" },
  { url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80", alt: "Ocean Waves" },
  { url: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&q=80", alt: "Desert Dunes" },
  { url: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=400&q=80", alt: "Prairie Sunset" },
];
const col3 = [
  { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80", alt: "Alpine Meadow" },
  { url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80", alt: "Forest Path" },
  { url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80", alt: "Sunrise Valley" },
  { url: "https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?w=400&q=80", alt: "Coral Reef" },
];

/* ── Fixed card height so we can calculate exact loop distance ── */
const CARD_H = 180;   // px  — height of every card
const GAP    = 12;    // px  — gap between cards
const ITEMS  = 4;     // items per column (before doubling)
// Total height of one "set" = ITEMS * (CARD_H + GAP)
const SET_H  = ITEMS * (CARD_H + GAP); // 768px

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,700;1,300&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #f0ede6;
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }

  /* ── HERO ── */
  .hero {
    display: grid;
    grid-template-columns: 48% 52%;
    /* compact: just enough for content, no 100vh */
    padding: 0;
  }

  /* LEFT */
  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px 48px 64px 72px;
    background: #f0ede6;
  }

  .eyebrow {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #2e7d5e;
    margin-bottom: 18px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .eyebrow::before {
    content: '';
    display: inline-block;
    width: 28px; height: 2px;
    background: #2e7d5e;
    flex-shrink: 0;
  }

  .hero-title {
    font-family: 'Fraunces', serif;
    font-size: clamp(38px, 4.8vw, 68px);
    font-weight: 700;
    line-height: 1.05;
    color: #0f1f10;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
  }
  .hero-title em {
    font-style: italic;
    font-weight: 300;
    color: #2e7d5e;
    display: block;
  }

  .hero-desc {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: #5a6058;
    max-width: 400px;
    margin-bottom: 40px;
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    background: #0f1f10;
    color: #f0ede6;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 15px 30px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.25s, gap 0.25s;
    width: fit-content;
  }
  .hero-cta:hover { background: #2e7d5e; gap: 20px; }
  .hero-cta .arrow { font-size: 15px; }

  /* RIGHT — marquee area */
  .hero-right {
    /* height = show ~4.5 cards: comfortable but compact */
    height: calc(${CARD_H * 4.5 + GAP * 3.5}px);
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${GAP}px;
    padding: 16px 16px 16px 0;
    background: #f0ede6;
  }

  /* top + bottom fade */
  .hero-right::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom,
        #f0ede6 0%,
        transparent 14%,
        transparent 86%,
        #f0ede6 100%);
    z-index: 10;
    pointer-events: none;
  }

  /* left fade */
  .hero-right::before {
    content: '';
    position: absolute;
    left: 0; top: 0;
    width: 40px; height: 100%;
    background: linear-gradient(to right, #f0ede6 30%, transparent);
    z-index: 11;
    pointer-events: none;
  }

  /* ── MARQUEE TRACK ── */
  .marquee-col {
    display: flex;
    flex-direction: column;
    gap: ${GAP}px;
    will-change: transform;
  }

  /*
    scrollDown: move UP by exactly one set height → seamless loop
    translateY(0) → translateY(-SET_H px)
  */
  .marquee-col--down  { animation: mDown  26s linear infinite; }
  .marquee-col--up    { animation: mUp    20s linear infinite; }
  .marquee-col--down2 { animation: mDown  32s linear infinite; }

  @keyframes mDown {
    from { transform: translateY(0); }
    to   { transform: translateY(-${SET_H}px); }
  }
  @keyframes mUp {
    from { transform: translateY(-${SET_H}px); }
    to   { transform: translateY(0); }
  }

  .marquee-col:hover { animation-play-state: paused; }

  /* ── CARDS — all same fixed height ── */
  .img-card {
    height: ${CARD_H}px;
    border-radius: 14px;
    overflow: hidden;
    background: #d9d5cc;
    flex-shrink: 0;
  }
  .img-card img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.45s ease;
  }
  .img-card:hover img { transform: scale(1.06); }

  /* ── STATS ── */
  .stats-bar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 16px;
    padding: 32px 72px;
    border-top: 1px solid rgba(0,0,0,0.09);
    background: #fff;
  }
  .stat-item { text-align: center; }
  .stat-number {
    font-family: 'Fraunces', serif;
    font-size: 32px;
    font-weight: 700;
    color: #0f1f10;
    line-height: 1;
    margin-bottom: 4px;
  }
  .stat-number span { color: #2e7d5e; }
  .stat-label {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #888;
  }
  .stat-divider {
    width: 1px; height: 40px;
    background: rgba(0,0,0,0.1);
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 860px) {
    .hero { grid-template-columns: 1fr; }
    .hero-left  { padding: 48px 28px 32px; order: 2; }
    .hero-right {
      order: 1;
      height: calc(${CARD_H * 3.5 + GAP * 2.5}px);
      padding: 12px;
    }
    .stats-bar { padding: 28px 24px; }
  }

  @media (max-width: 480px) {
    .hero-left { padding: 36px 18px 28px; }
    .hero-right {
      height: calc(${Math.round(CARD_H * 0.75) * 3.5 + GAP * 2.5}px);
      gap: 8px; padding: 8px;
    }
    .img-card { height: ${Math.round(CARD_H * 0.75)}px; }
    .stats-bar { flex-direction: column; gap: 10px; }
    .stat-divider { width: 40px; height: 1px; }
  }
`;

/* Triples the array so the loop is long enough to never show a gap */
function MarqueeColumn({ items, cls, delay = "0s" }) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className={`marquee-col ${cls}`} style={{ animationDelay: delay }}>
      {tripled.map((img, i) => (
        <div className="img-card" key={i}>
          <img src={img.url} alt={img.alt} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <>
      <style>{css}</style>
      <section className="hero">
        {/* LEFT */}
        <div className="hero-left">
          <p className="eyebrow">Education</p>
          <h1 className="hero-title">
            Educational
            <em>Partnerships</em>
          </h1>
          <p className="hero-desc">
            Building the next generation of environmental leaders through
            world-class education programs that inspire, connect, and transform.
          </p>
          <a href="#" className="hero-cta">
            Explore Programs <span className="arrow">→</span>
          </a>
        </div>

        {/* RIGHT — 3 vertical marquee columns */}
        <div className="hero-right">
          <MarqueeColumn items={col1} cls="marquee-col--down"  delay="0s"    />
          <MarqueeColumn items={col2} cls="marquee-col--up"    delay="-5s"   />
          <MarqueeColumn items={col3} cls="marquee-col--down2" delay="-10s"  />
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-number">120<span>+</span></div>
          <div className="stat-label">Partner Schools</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-number">48<span>K</span></div>
          <div className="stat-label">Students Reached</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-number">32<span>+</span></div>
          <div className="stat-label">Countries</div>
        </div>
        <div className="stat-divider" />
        <div className="stat-item">
          <div className="stat-number">15<span>yr</span></div>
          <div className="stat-label">of Impact</div>
        </div>
      </div>


      {/* TEXTMARQUEE */}

      <TextMarquee />


    </>
  );
}