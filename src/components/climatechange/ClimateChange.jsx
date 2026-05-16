import { useState } from "react";

const cards = [
  {
    id: 1,
    tag: "STAY INFORMED",
    title: "Institutional Carbon Awareness",
    bg: "#f0f0ed",
    textColor: "#0a0a0a",
    tagColor: "rgba(10,10,10,0.35)",
    arrowBg: "rgba(1,171,26,0.1)",
    arrowColor: "#01AB1A",
    dotColor: "#01AB1A",
    sub: "Empowering org. carbon literacy",
    emoji: "🏛️",
    rotate: "-18deg",
    tx: "-104px",
    ty: "30px",
    z: 1,
    sc: 0.86,
  },
  {
    id: 2,
    tag: "ESG ALIGNMENT",
    title: "ESG Alignment",
    bg: "#0a0a0a",
    textColor: "#ffffff",
    tagColor: "rgba(255,255,255,0.38)",
    arrowBg: "rgba(1,171,26,0.2)",
    arrowColor: "#01AB1A",
    dotColor: "#01AB1A",
    sub: "TCFD & GRI net-zero pathways",
    emoji: "⚖️",
    rotate: "-9deg",
    tx: "-54px",
    ty: "14px",
    z: 2,
    sc: 0.93,
  },
  {
    id: 3,
    tag: "VERIFIED OFFSETS",
    title: "Carbon Credit Programs",
    bg: "#ffffff",
    textColor: "#0a0a0a",
    tagColor: "rgba(10,10,10,0.38)",
    arrowBg: "#01AB1A",
    arrowColor: "#fff",
    dotColor: "#01AB1A",
    sub: "Verified offsets, real impact",
    emoji: "🌿",
    rotate: "0deg",
    tx: "0px",
    ty: "0px",
    z: 5,
    sc: 1,
    center: true,
  },
  {
    id: 4,
    tag: "ACT LOCAL",
    title: "Community Climate Initiatives",
    bg: "#01AB1A",
    textColor: "#ffffff",
    tagColor: "rgba(255,255,255,0.55)",
    arrowBg: "rgba(255,255,255,0.22)",
    arrowColor: "#fff",
    dotColor: "#fff",
    sub: "Grassroots climate projects",
    emoji: "🌱",
    rotate: "9deg",
    tx: "54px",
    ty: "14px",
    z: 2,
    sc: 0.93,
  },
  {
    id: 5,
    tag: "TRACK IMPACT",
    title: "Monitoring & Impact Measurement",
    bg: "#1c1c1c",
    textColor: "#ffffff",
    tagColor: "rgba(255,255,255,0.35)",
    arrowBg: "rgba(1,171,26,0.25)",
    arrowColor: "#01AB1A",
    dotColor: "#01AB1A",
    sub: "Satellite & IoT monitoring",
    emoji: "📡",
    rotate: "18deg",
    tx: "104px",
    ty: "30px",
    z: 1,
    sc: 0.86,
  },
];

export default function ClimateChange() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,600;1,300&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .cc-root {
          min-height: 100vh;
          background: #eceae5;
          font-family: 'DM Sans', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px 80px;
          position: relative;
          overflow: hidden;
        }

        /* Subtle dot grid bg */
        .cc-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(1,171,26,0.12) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .cc-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #01AB1A;
          margin-bottom: 16px;
          position: relative;
        }
        .cc-eyebrow::before, .cc-eyebrow::after {
          content: '';
          width: 30px; height: 1.5px;
          background: #01AB1A;
          border-radius: 2px;
        }

        .cc-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.2rem, 9vw, 6.5rem);
          color: #0a0a0a;
          letter-spacing: 0.04em;
          line-height: 0.93;
          text-align: center;
          position: relative;
        }
        .cc-title .green { color: #01AB1A; }

        .cc-desc {
          font-size: 13px;
          font-weight: 300;
          color: rgba(10,10,10,0.45);
          text-align: center;
          max-width: 380px;
          line-height: 1.65;
          margin-top: 12px;
          position: relative;
        }

        /* ── FAN STAGE ── */
        .fan-stage {
          position: relative;
          width: 280px;
          height: 420px;
          margin: 64px auto 0;
        }

        .eco-card {
          position: absolute;
          left: 50%;
          top: 0;
          width: 230px;
          height: 360px;
          border-radius: 24px;
          padding: 0;
          cursor: pointer;
          overflow: hidden;
          transition:
            transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          display: flex;
          flex-direction: column;
        }

        .eco-card:hover {
          z-index: 30 !important;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 18px 18px 22px;
        }

        /* Top area */
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .card-tag {
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          line-height: 1;
        }
        .card-emoji {
          font-size: 54px;
          line-height: 1;
          filter: drop-shadow(0 8px 20px rgba(0,0,0,0.22));
          transition: transform 0.4s ease;
        }
        .eco-card:hover .card-emoji {
          transform: translateY(-6px) rotate(-5deg) scale(1.1);
        }

        /* Bottom area */
        .card-bottom {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.05rem;
          line-height: 0.95;
          letter-spacing: 0.02em;
        }
        .card-dot {
          display: inline-block;
          width: 9px; height: 9px;
          border-radius: 50%;
          margin-left: 3px;
          vertical-align: 2px;
        }
        .card-sub {
          font-size: 10.5px;
          font-weight: 300;
          line-height: 1.4;
          opacity: 0.55;
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 4px;
        }
        .card-divider {
          height: 1px;
          background: currentColor;
          opacity: 0.1;
          margin: 4px 0;
        }
        .card-arrow-btn {
          width: 34px; height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }
        .eco-card:hover .card-arrow-btn {
          transform: translateX(2px) translateY(-2px);
        }

        /* Pills row */
        .cc-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 56px;
          position: relative;
        }
        .cc-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 16px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 500;
          border: 1.5px solid rgba(1,171,26,0.28);
          color: #0a0a0a;
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(4px);
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }
        .cc-pill:hover {
          background: #01AB1A;
          color: #fff;
          border-color: #01AB1A;
        }
        .cc-pill:hover .pill-dot { background: #fff; }
        .pill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #01AB1A;
          transition: background 0.2s;
        }

        @media (max-width: 480px) {
          .fan-stage { width: 220px; height: 360px; }
          .eco-card { width: 185px; height: 300px; }
          .card-emoji { font-size: 42px; }
          .card-title { font-size: 1.65rem; }
        }
      `}</style>

      <section className="cc-root">
        <div className="cc-eyebrow">Climate &amp; Carbon Action</div>

        <h1 className="cc-title">
          NET<span className="green">—</span>ZERO<br />
          <span className="green">PROGRAMS</span>
        </h1>

        <p className="cc-desc">
          Five initiatives connecting carbon markets, communities,
          and institutions toward measurable climate outcomes.
        </p>

        {/* Fan Stack */}
        <div className="fan-stage">
          {cards.map((card) => {
            const isH = hovered === card.id;

            const baseTransform = `
              translateX(calc(-50% + ${card.tx}))
              translateY(${card.ty})
              rotate(${card.rotate})
              scale(${card.sc})
            `;
            const hoverTransform = `
              translateX(-50%)
              translateY(-22px)
              rotate(0deg)
              scale(1.06)
            `;

            const shadow = card.center
              ? "0 32px 70px rgba(0,0,0,0.24)"
              : "0 10px 30px rgba(0,0,0,0.15)";
            const hoverShadow = "0 44px 90px rgba(0,0,0,0.30)";

            return (
              <div
                key={card.id}
                className="eco-card"
                style={{
                  background: card.bg,
                  color: card.textColor,
                  zIndex: isH ? 30 : card.z,
                  transform: isH ? hoverTransform : baseTransform,
                  boxShadow: isH ? hoverShadow : shadow,
                }}
                onMouseEnter={() => setHovered(card.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="card-inner">
                  {/* Top */}
                  <div className="card-top">
                    <span className="card-tag" style={{ color: card.tagColor }}>
                      {card.tag}
                    </span>
                    <span className="card-emoji">{card.emoji}</span>
                  </div>

                  {/* Bottom */}
                  <div className="card-bottom">
                    <div className="card-divider" style={{ color: card.textColor }} />
                    <div className="card-title" style={{ color: card.textColor }}>
                      {card.title}
                      <span
                        className="card-dot"
                        style={{ background: card.dotColor }}
                      />
                    </div>
                    <p className="card-sub" style={{ color: card.textColor }}>
                      {card.sub}
                    </p>
                    <div className="card-footer">
                      <span style={{ fontSize: "9px", letterSpacing: "0.15em", textTransform: "uppercase", opacity: 0.35, color: card.textColor }}>
                        Explore →
                      </span>
                      <div
                        className="card-arrow-btn"
                        style={{ background: card.arrowBg, color: card.arrowColor }}
                      >
                        ↗
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pills */}
        <div className="cc-pills">
          {[
            "Carbon Credit Programs",
            "Carbon Awareness",
            "Climate Initiatives",
            "ESG Alignment",
            "Impact Measurement",
          ].map((p) => (
            <div className="cc-pill" key={p}>
              <span className="pill-dot" />
              {p}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}