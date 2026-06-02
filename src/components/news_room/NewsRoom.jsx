import { useState, useEffect, useRef } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

//   :root {
//     --green: #01AB1A;
//     --green-light: #e6f9e9;
//     --black: #0d0d0d;
//     --text-muted: #5a5a5a;
//     --white: #ffffff;
//   }

  * { box-sizing: border-box; margin: 0; padding: 0; }
//   body { font-family: 'DM Sans', sans-serif; background: var(--white); color: var(--black); }

  /* ── Section ── */
  .nr-section {
    background: #ECEAE5;
    padding: 72px 0 80px;
    overflow: hidden;
  }
  @media (max-width: 768px) { .nr-section { padding: 48px 0 64px; } }

  /* ── Header ── */
  .nr-tag {
    font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--green);
    display: block; margin-bottom: 8px;
  }
  .nr-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.9rem, 4vw, 2.8rem);
    font-weight: 800; color: var(--black); line-height: 1.1;
  }
  .nr-view-all {
    font-size: 0.88rem; font-weight: 600; color: var(--green);
    text-decoration: none; display: inline-flex; align-items: center; gap: 5px;
    transition: gap 0.2s;
  }
  .nr-view-all:hover { gap: 10px; color: var(--green); }
  .nr-view-all svg { width: 15px; height: 15px; }

  /* ── Coverflow Stage ── */
  .nr-stage-wrap {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 48px 0 56px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nr-track {
    position: relative;
    width: 100%;
    height: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 576px) {
    .nr-track { height: 420px; }
  }

  /* ── Card ── */
  .nr-card {
    position: absolute;
    width: 280px;
    border-radius: 20px;
    overflow: hidden;
    background: var(--white);
    cursor: pointer;
    transition: transform 0.65s cubic-bezier(0.35, 0.1, 0.15, 1),
                opacity 0.65s ease,
                filter 0.65s ease,
                box-shadow 0.65s ease;
    will-change: transform, opacity;
    user-select: none;
  }

  @media (max-width: 576px) {
    .nr-card { width: 230px; }
  }
  @media (max-width: 380px) {
    .nr-card { width: 200px; }
  }

  /* Card image area */
  .nr-card-img-wrap {
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
  }
  @media (max-width: 576px) {
    .nr-card-img-wrap { height: 180px; }
  }

  .nr-card-img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform 0.5s ease;
  }
  .nr-card:hover .nr-card-img { transform: scale(1.04); }

  /* Card body (white panel at bottom — like reference) */
  .nr-card-body {
    background: var(--white);
    padding: 18px 20px 20px;
    border-top: none;
  }

  .nr-card-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--black);
    letter-spacing: 0.02em;
    margin-bottom: 14px;
    text-transform: uppercase;
  }

  .nr-stats {
    display: flex;
    gap: 28px;
  }

  .nr-stat-val {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--black);
    line-height: 1;
    display: block;
    margin-bottom: 3px;
  }
  .nr-stat-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  /* Active card (center) */
  .nr-card.is-active {
    box-shadow: 0 28px 80px rgba(0,0,0,0.22), 0 4px 20px rgba(1,171,26,0.10);
    z-index: 10;
  }

  /* Side cards */
  .nr-card.is-prev,
  .nr-card.is-next {
    z-index: 5;
  }

  /* Far side cards */
  .nr-card.is-far-prev,
  .nr-card.is-far-next {
    z-index: 1;
  }

  /* Green accent line on active */
  .nr-card-accent {
    height: 3px;
    background: var(--green);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  .nr-card.is-active .nr-card-accent { transform: scaleX(1); }

  /* ── Controls ── */
  .nr-controls {
    display: flex; align-items: center;
    justify-content: center; gap: 16px;
    margin-top: 4px;
  }

  .nr-btn {
    width: 44px; height: 44px; border-radius: 50%;
    border: 2px solid var(--green);
    background: var(--white); color: var(--green);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, transform 0.2s;
  }
  .nr-btn:hover { background: var(--green); color: var(--white); transform: scale(1.08); }
  .nr-btn svg { width: 18px; height: 18px; }

  .nr-dots { display: flex; gap: 8px; align-items: center; }
  .nr-dot {
    width: 8px; height: 8px; border-radius: 50%;
    background: #d0d0d0; border: none; cursor: pointer; padding: 0;
    transition: background 0.25s, transform 0.25s;
  }
  .nr-dot.active { background: var(--green); transform: scale(1.4); }

  .nr-pause-btn {
    font-size: 11px; font-weight: 600; letter-spacing: 0.05em;
    color: var(--text-muted); background: none;
    border: 1.5px solid #e0e0e0; border-radius: 20px;
    padding: 5px 14px; cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
  .nr-pause-btn:hover { border-color: var(--green); color: var(--green); }

  /* fade-in */
  .nr-fade { opacity: 0; transform: translateY(22px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .nr-fade.visible { opacity: 1; transform: none; }
`;

const cards = [
  {
    name: "Reforestation Initiative",
    stat1: { val: "7", label: "January" },
    stat2: { val: "2026", label: "" },
    img: "https://images.pexels.com/photos/33218782/pexels-photo-33218782.png",
  },
  {
    name: "Climate Summit 2026",
    stat1: { val: "06", label: "March" },
    stat2: { val: "2026", label: "Attendees" },
    img: "https://images.pexels.com/photos/9893729/pexels-photo-9893729.jpeg",
  },
  {
    name: "Green Carpet Partners",
    stat1: { val: "15", label: "February" },
    stat2: { val: "2026", label: "Activations" },
    img: "https://images.pexels.com/photos/36712857/pexels-photo-36712857.jpeg",
  },
  {
    name: "Women Rise Global",
    stat1: { val: "23", label: "May" },
    stat2: { val: "2026", label: "Leaders" },
    img: "https://images.pexels.com/photos/7952093/pexels-photo-7952093.jpeg",
  },
  {
    name: "Youth Climate Forum",
    stat1: { val: "17", label: "April" },
    stat2: { val: "2026", label: "Reach" },
    img: "https://images.pexels.com/photos/8107294/pexels-photo-8107294.jpeg",
  },
];

// Returns CSS transform + style for each position relative to active
function getCardStyle(pos, cardWidth, isMobile) {
  const gap = isMobile ? cardWidth * 0.62 : cardWidth * 0.68;
  const rotateY = 0;

  switch (pos) {
    case 0: // active center
      return {
        transform: `translateX(0px) scale(1) rotateY(0deg)`,
        opacity: 1,
        filter: "brightness(1)",
        zIndex: 10,
      };
    case -1: // immediate left
      return {
        transform: `translateX(${-gap}px) scale(0.82) rotateY(18deg)`,
        opacity: 0.75,
        filter: "brightness(0.72)",
        zIndex: 5,
      };
    case 1: // immediate right
      return {
        transform: `translateX(${gap}px) scale(0.82) rotateY(-18deg)`,
        opacity: 0.75,
        filter: "brightness(0.72)",
        zIndex: 5,
      };
    case -2:
      return {
        transform: `translateX(${-gap * 1.72}px) scale(0.65) rotateY(28deg)`,
        opacity: 0.35,
        filter: "brightness(0.5)",
        zIndex: 1,
      };
    case 2:
      return {
        transform: `translateX(${gap * 1.72}px) scale(0.65) rotateY(-28deg)`,
        opacity: 0.35,
        filter: "brightness(0.5)",
        zIndex: 1,
      };
    default:
      return {
        transform: `translateX(${pos > 0 ? 800 : -800}px) scale(0.4)`,
        opacity: 0,
        filter: "brightness(0.3)",
        zIndex: 0,
      };
  }
}

function getPos(i, active, total) {
  let pos = i - active;
  if (pos > total / 2) pos -= total;
  if (pos < -total / 2) pos += total;
  return pos;
}

export default function NewsroomCarousel() {
  const total = cards.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 120);
    const check = () => setIsMobile(window.innerWidth < 576);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % total);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused, total]);

  const go = (dir) => {
    clearInterval(intervalRef.current);
    setActive((a) => (a + dir + total) % total);
  };

  const cardWidth = isMobile ? 230 : 280;

  return (
    <>
      <style>{styles}</style>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />

      <section className="nr-section">
        <div className="container">

          {/* Header */}
          <div className={`row align-items-end mb-2 nr-fade ${visible ? "visible" : ""}`}>
            <div className="col">
              <span className="nr-tag">Newsroom</span>
              <h2 className="nr-heading">Latest <span style={{color:"#01AB1A"}}>Updates</span>
              </h2>
            </div>
            <div className="col-auto d-flex align-items-center pb-1">
              <a href="#" className="nr-view-all">
                View All
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Coverflow */}
          <div className={`nr-stage-wrap nr-fade ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.12s" }}>
            <div className="nr-track" style={{ perspective: "1000px" }}>
              {cards.map((card, i) => {
                const pos = getPos(i, active, total);
                const style = getCardStyle(pos, cardWidth, isMobile);
                const isActive = pos === 0;
                const cls = isActive ? "is-active"
                  : pos === -1 ? "is-prev"
                  : pos === 1 ? "is-next"
                  : pos === -2 ? "is-far-prev"
                  : pos === 2 ? "is-far-next" : "";

                return (
                  <div
                    key={i}
                    className={`nr-card ${cls}`}
                    style={style}
                    onClick={() => { clearInterval(intervalRef.current); setActive(i); }}
                  >
                    <div className="nr-card-img-wrap">
                      <img src={card.img} alt={card.name} className="nr-card-img" />
                    </div>
                    <div className="nr-card-body">
                      <div className="nr-card-name">{card.name}</div>
                      <div className="nr-stats">
                        <div>
                          <span className="nr-stat-val">{card.stat1.val}</span>
                          <span className="nr-stat-label">{card.stat1.label}</span>
                        </div>
                        <div>
                          <span className="nr-stat-val">{card.stat2.val}</span>
                          <span className="nr-stat-label">{card.stat2.label}</span>
                        </div>
                      </div>
                    </div>
                    <div className="nr-card-accent" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className={`nr-controls nr-fade ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.22s" }}>
            <button className="nr-btn" onClick={() => go(-1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <div className="nr-dots">
              {cards.map((_, i) => (
                <button
                  key={i}
                  className={`nr-dot ${i === active ? "active" : ""}`}
                  onClick={() => { clearInterval(intervalRef.current); setActive(i); }}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button className="nr-btn" onClick={() => go(1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>

            <button className="nr-pause-btn" onClick={() => setPaused((p) => !p)}>
              {paused ? "▶ Play" : "⏸ Pause"}
            </button>
          </div>

        </div>
      </section>
    </>
  );
}