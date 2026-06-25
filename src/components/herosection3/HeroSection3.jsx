// ─────────────────────────────────────────────
//  HeroSection.jsx  –  People · Planet · Purpose
//  React + Bootstrap 5 + CSS-in-JSX
//  Replace heroImage import with your local file
// ─────────────────────────────────────────────
import heroImage from "../../assets/images/hero/globalImg3.png";
// ↑ Change this path to your actual image file
// e.g.  import heroImage from "./images/globe.png";
//        import heroImage from "../public/earth.png";

const STATS = [
  { value: "120+", label: "Countries Reached" },
  { value: "4M+",  label: "Lives Impacted"    },
  { value: "98%",  label: "Sustainable Projects" },
];

const LeafSVG = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#4caf50"
    aria-hidden="true"
    style={{ width: 18, height: 18, opacity: 0.7, position: "absolute", pointerEvents: "none", ...style }}
  >
    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-11 6 1-2 4-4 7-4z" />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Inter:wght@400;500;600&display=swap');

        :root {
          --navy:       #0b2235;
          --navy-mid:   #163650;
          --green-mid:  #0D530E;
          --green-lite: #4caf50;
          --sky-light:  #eaf3fb;
          --sky:        #deeaf5;
          --text-body:  #3a4f5c;
        }

        /* ── SECTION ── */
        .ppp-hero {
          background: linear-gradient(130deg, var(--sky-light) 0%, var(--sky) 50%, #cfe4f0 100%);
          position: relative;
          overflow: hidden;
          padding: 72px 0 64px;
          font-family: 'Inter', sans-serif;
        }
        .ppp-hero::before {
          content: '';
          position: absolute;
          bottom: -80px; right: -100px;
          width: 560px; height: 560px;
          background: radial-gradient(circle, rgba(76,175,80,.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        /* ── FLOATING LEAVES ── */
        .ppp-leaf {
          animation: leafFloat 7s ease-in-out infinite;
        }
        @keyframes leafFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50%       { transform: translateY(-12px) rotate(10deg); }
        }

        /* ── EYEBROW ── */
        .ppp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(76,175,80,.12);
          border: 1px solid rgba(76,175,80,.3);
          color: #0D530E;
          font-size: .74rem;
          font-weight: 600;
          letter-spacing: .09em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 50px;
          margin-bottom: 1.1rem;
        }
        .ppp-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--green-lite);
          display: inline-block;
        }

        /* ── DIVIDER ── */
        .ppp-divider {
          width: 48px; height: 3px;
          background: linear-gradient(90deg, var(--green-mid), var(--green-lite));
          border-radius: 2px;
          margin-bottom: 1.2rem;
        }

        /* ── HEADLINE ── */
        .ppp-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.5rem, 4.2vw, 3.7rem);
          font-weight: 900;
          color: var(--navy);
          line-height: 1.1;
          letter-spacing: -.025em;
          margin-bottom: 1.2rem;
        }
        .ppp-headline em {
          font-style: normal;
          color: #0D530E;
        }

        /* ── BODY ── */
        .ppp-body {
          font-size: clamp(.92rem, 1.3vw, 1.04rem);
          color: var(--text-body);
          line-height: 1.72;
          max-width: 370px;
          margin-bottom: 1.9rem;
        }

        /* ── BUTTONS ── */
        .ppp-btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          margin-bottom: 2.2rem;
        }
        .ppp-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--navy); color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: .875rem; font-weight: 600;
          padding: 12px 24px;
          border-radius: 8px; border: 2px solid var(--navy);
          text-decoration: none;
          transition: background .22s, transform .18s;
          cursor: pointer;
        }
        .ppp-btn-primary:hover { background: var(--navy-mid); color: #fff; transform: translateY(-2px); }

        .ppp-btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--navy);
          font-family: 'Inter', sans-serif;
          font-size: .875rem; font-weight: 600;
          padding: 12px 24px;
          border-radius: 8px; border: 2px solid var(--navy);
          text-decoration: none;
          transition: background .22s, color .22s, transform .18s;
          cursor: pointer;
        }
        .ppp-btn-outline:hover { background: var(--navy); color: #fff; transform: translateY(-2px); }

        /* ── STAT PILLS ── */
        .ppp-stats { display: flex; flex-wrap: wrap; gap: 10px; }
        .ppp-stat {
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(255,255,255,.9);
          border-radius: 10px;
          padding: 10px 16px;
          text-align: center;
          flex: 1 1 88px;
        }
        .ppp-stat-val {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem; font-weight: 800;
          color: var(--navy);
          line-height: 1.1; display: block;
        }
        .ppp-stat-lbl {
          font-size: .7rem; font-weight: 500;
          color: var(--text-body);
          text-transform: uppercase; letter-spacing: .06em;
          display: block; margin-top: 2px;
        }

        /* ── RIGHT VISUAL COLUMN ── */
        .ppp-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 0;
        }

        /* ── IMAGE WRAPPER ── */
       

        /* The actual hero image — clean, no crop, no shadow */
        .ppp-hero-img {
          width: 100%;
          display: block;
          object-fit: contain;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 991px) {
          .ppp-hero  { padding: 52px 0 44px; }
          .ppp-body  { max-width: 100%; }
          .ppp-visual { padding: 12px 0 24px; }
        }
        @media (max-width: 767px) {
          .ppp-img-wrap { width: clamp(220px, 72vw, 360px); }
        }
        @media (max-width: 480px) {
          .ppp-headline, .ppp-body { text-align: center; }
          .ppp-eyebrow { margin: 0 auto 1.1rem; }
          .ppp-divider { margin: 0 auto 1.2rem; }
          .ppp-btn-row { justify-content: center; }
          .ppp-stats   { justify-content: center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ppp-leaf { animation: none; }
        }
      `}</style>

      <section className="ppp-hero">
        {/* Floating leaves */}
        <LeafSVG className="ppp-leaf" style={{ top: "13%", left: "36%", animationDelay: "0s" }} />
        <LeafSVG className="ppp-leaf" style={{ top: "8%",  left: "53%", animationDelay: "1.3s", width: 14, height: 14 }} />
        <LeafSVG className="ppp-leaf" style={{ bottom: "22%", left: "43%", animationDelay: "2.5s", transform: "rotate(45deg)" }} />
        <LeafSVG className="ppp-leaf" style={{ top: "30%", right: "3%", animationDelay: ".7s", width: 14, height: 14 }} />

        <div className="container">
          <div className="row align-items-center g-5">

            {/* ── LEFT: TEXT ── */}
            <div className="col-12 col-lg-5 d-flex flex-column justify-content-center">
              <div className="ppp-eyebrow">
                <span className="ppp-eyebrow-dot" aria-hidden="true" />
                Climate · Community · Impact
              </div>

              <div className="ppp-divider" />

              <h1 className="ppp-headline">
                People.
                <em>Planet.</em><br />
                Purpose.
              </h1>

              <p className="ppp-body">
                We drive climate action, empower communities,
                and create lasting impact for a sustainable future —
                one community at a time.
              </p>

              <div className="ppp-btn-row">
                <a href="#" className="ppp-btn-primary">
                  Explore Our Work <ArrowIcon />
                </a>
                <a href="#" className="ppp-btn-outline">
                  Partner With Us <ArrowIcon />
                </a>
              </div>

              <div className="ppp-stats">
                {STATS.map((s) => (
                  <div className="ppp-stat" key={s.label}>
                    <span className="ppp-stat-val">{s.value}</span>
                    <span className="ppp-stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: IMAGE ── */}
            <div className="col-12 col-lg-7 ppp-visual">
              <div className="ppp-img-wrap">
                {/*
                  Replace heroImage with your local image import at the top:
                    import heroImage from "./assets/your-image.png";
                */}
                <img
                  src={heroImage}
                  alt="Globe with green leaves representing environmental impact"
                  className="ppp-hero-img"
                  loading="eager"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
