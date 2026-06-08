import { useEffect, useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Nunito:wght@400;600;700&display=swap');

  :root {
    --green: #01AB1A;
    --green-light: rgba(1,171,26,0.10);
    --green-mid: rgba(1,171,26,0.20);
    --dark: #111;
    --muted: #4a5e50;
    --bg: #f3f0eb;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── SECTION WRAPPER ── */
  .chairman-section {
    background: var(--bg);
    font-family: 'Nunito', sans-serif;
    padding: 0 0 70px;
    overflow: hidden;
    position: relative;
  }

  /* ── TOP HEADING BAND ── */
  .section-heading-band {
    text-align: center;
    padding: 52px 16px 44px;
    position: relative;
    z-index: 2;
  }

  .section-label {
    display: inline-block;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--green);
    background: var(--green-light);
    border: 1px solid var(--green);
    border-radius: 50px;
    padding: 5px 18px;
    margin-bottom: 14px;
  }

  .section-main-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 900;
    color: var(--dark);
    line-height: 1.12;
    letter-spacing: -0.5px;
  }

  .section-main-title span {
    color: var(--green);
  }

  .title-underline {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }

  .title-underline svg path {
    stroke: var(--green);
    stroke-width: 2.8;
    fill: none;
    stroke-linecap: round;
  }

  /* ── CARD WRAPPER ── */
  .chairman-card {
    position: relative;
    background: #fff;
    border-radius: 28px;
    overflow: visible;
    box-shadow: 0 8px 48px rgba(1,171,26,0.10), 0 2px 12px rgba(0,0,0,0.06);
    display: flex;
    align-items: stretch;
    min-height: 460px;
  }

  /* ══════════════════════════════════════
     LEFT PHOTO PANEL — blob + real image
  ══════════════════════════════════════ */
  .photo-panel {
    position: relative;
    flex: 0 0 44%;
    background: #fff;
    border-radius: 28px 0 0 28px;
    overflow: visible;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 32px 16px 0;
  }

  /* ── SVG blobs rendered as absolute background layer ── */
  .blob-layer {
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: visible;
  }

  /* ── Person image sits above blobs ── */
  .chairman-img {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 300px;
    height: auto;
    object-fit: contain;
    object-position: bottom;
    display: block;
    filter: drop-shadow(0 6px 18px rgba(0,0,0,0.10));
    animation: floatUp 0.9s cubic-bezier(.22,1,.36,1) both;
  }

  /* Subtle right-edge fade so panel merges into content */
  .photo-panel::after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0;
    width: 40px;
    background: linear-gradient(to right, transparent, #fff);
    z-index: 3;
    pointer-events: none;
  }

  /* ── Floating name badge ── */
  .panel-badge {
    position: absolute;
    z-index: 5;
    bottom: 28px;
    left: 16px;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1.5px solid rgba(1,171,26,0.18);
    border-radius: 14px;
    padding: 9px 14px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.10);
  }

  .badge-name {
    font-family: 'Playfair Display', serif;
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--dark);
    line-height: 1.2;
  }

  .badge-role {
    font-size: 0.67rem;
    font-weight: 700;
    color: var(--green);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  /* ── Experience counter ── */
  .panel-exp {
    position: absolute;
    z-index: 5;
    top: 28px;
    right: 48px;
    background: var(--green);
    border-radius: 50%;
    width: 68px;
    height: 68px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 22px rgba(1,171,26,0.35);
  }

  .exp-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    font-weight: 900;
    color: #fff;
    line-height: 1;
  }

  .exp-label {
    font-size: 0.52rem;
    font-weight: 700;
    color: rgba(255,255,255,0.85);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.3;
  }

  @keyframes floatUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }

  /* ── RIGHT CONTENT PANEL ── */
  .content-panel {
    flex: 1;
    padding: 44px 44px 44px 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: slideIn 0.9s 0.2s cubic-bezier(.22,1,.36,1) both;
  }

  @keyframes slideIn {
    from { opacity:0; transform:translateX(24px); }
    to   { opacity:1; transform:translateX(0); }
  }

  .chairman-tag {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 14px;
  }

  .chairman-tag::before {
    content: '';
    display: block;
    width: 28px;
    height: 2px;
    background: var(--green);
    border-radius: 2px;
  }

  .chairman-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
    font-weight: 700;
    color: var(--dark);
    line-height: 1.22;
    margin-bottom: 20px;
  }

  .quote-mark {
    font-family: 'Playfair Display', serif;
    font-size: 5rem;
    line-height: 0.6;
    color: var(--green);
    opacity: 0.25;
    display: block;
    margin-bottom: 8px;
  }

  .chairman-body {
    font-size: 0.95rem;
    line-height: 1.8;
    color: var(--muted);
    margin-bottom: 28px;
  }

  /* Signature */
  .sig-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 28px;
  }

  .sig-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--green);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 700;
    flex-shrink: 0;
  }

  .sig-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--dark);
    line-height: 1.2;
  }

  .sig-role {
    font-size: 0.78rem;
    color: var(--green);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .read-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--green);
    color: #fff;
    border: none;
    border-radius: 50px;
    padding: 12px 28px;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
    cursor: pointer;
    transition: background 0.22s, transform 0.18s, box-shadow 0.22s;
    box-shadow: 0 4px 18px rgba(1,171,26,0.28);
    align-self: flex-start;
  }

  .read-btn:hover {
    background: #019916;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(1,171,26,0.36);
  }

  .read-btn svg { width: 15px; height: 15px; }

  /* ── RESPONSIVE ── */
  @media (max-width: 767px) {
    .chairman-card {
      flex-direction: column;
      border-radius: 20px;
      overflow: hidden;
    }
    .photo-panel {
      flex: none;
      min-height: 320px;
      padding: 24px 16px 0;
      border-radius: 20px 20px 0 0;
    }
    .photo-panel::after { display: none; }
    .panel-badge { bottom: 12px; left: 12px; }
    .panel-exp { right: 12px; top: 16px; }
    .content-panel { padding: 32px 24px 36px; }
    .read-btn { align-self: center; }
    .sig-row { justify-content: center; }
    .chairman-title, .chairman-body, .chairman-tag { text-align: center; }
    .chairman-tag { justify-content: center; }
  }

  @media (max-width: 480px) {
    .section-main-title { font-size: 1.7rem; }
    .chairman-img { max-width: 240px; }
  }
`;

// Organic blob shapes rendered in SVG — #01AB1A green, just like the reference
const BlobLayer = () => (
  <svg
    viewBox="0 0 400 440"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Main large blob — center-back */}
    <path
      d="M 210 60 C 310 40, 370 110, 355 200 C 340 290, 290 340, 200 350 C 110 360, 50 300, 55 210 C 60 120, 110 80, 210 60 Z"
      fill="#01AB1A"
      opacity="0.92"
    />
    {/* Top-right pill */}
    <rect x="285" y="38" width="105" height="52" rx="26" fill="#01AB1A" opacity="0.88" />
    {/* Bottom-left pill */}
    <rect x="18" y="340" width="130" height="50" rx="25" fill="#01AB1A" opacity="0.85" />
    {/* Bottom-right small pill */}
    <rect x="295" y="355" width="82" height="38" rx="19" fill="#01AB1A" opacity="0.78" />
    {/* Top-left tiny dot */}
    <circle cx="54" cy="80" r="22" fill="#01AB1A" opacity="0.55" />
  </svg>
);

export default function ChairmanMessage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{styles}</style>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />

      <section className="chairman-section">

        {/* ── Top Heading Band ── */}
        <div className="section-heading-band">
          <span className="section-label">Leadership</span>
          <h2 className="section-main-title">
            Hear from our <span>Chairman</span>
          </h2>
          <div className="title-underline">
            <svg width="80" height="13" viewBox="0 0 80 13">
              <path d="M0 6.5 Q10 0 20 6.5 Q30 13 40 6.5 Q50 0 60 6.5 Q70 13 80 6.5" />
            </svg>
          </div>
        </div>

        {/* ── Card ── */}
        <div className="container">
          <div className="chairman-card">

            {/* ── Left: blob background + real person photo ── */}
            <div className="photo-panel">
              {/* Green blob shapes behind the person */}
              <BlobLayer />

              {/* 
                Replace the src below with your actual chairman PNG.
                The image should be a cutout (transparent background) for best results.
                Example: src="/images/chairman.png"
              */}
              <img
                src="https://images.pexels.com/photos/3777557/pexels-photo-3777557.jpeg"
                alt="Chairman"
                className="chairman-img"
                onError={(e) => {
                  // Fallback: hide broken img, show initials
                  e.target.style.display = 'none';
                }}
              />

              {/* Floating glass name badge */}          
              <div className="panel-badge">
                <span className="badge
                
                
                
                
                
                -name">Chairman Name</span>
                <span className="badge-role">Chairman &amp; Founder</span>
              </div>

              {/* Experience circle badge */}
              <div className="panel-exp">
                <span className="exp-num">25+</span>
                <span className="exp-label">Years<br/>Exp.</span>
              </div>
            </div>

            {/* Right content */}
            <div className="content-panel">
              <span className="chairman-tag">Chairman's Message</span>
              <h3 className="chairman-title">
                Building a Future of Growth,<br />
                Integrity & Innovation
              </h3>
              <span className="quote-mark">"</span>
              <p className="chairman-body">
                Lorem ipsum dolor sit amet, usu utinam inermis voluptua eu.
                Usu esse solet scripsenit eu. Modo expetendis no usu, ex has tota
                conceptam efficiendi. No ius amet alterum. Our vision is to create
                lasting impact that drives meaningful growth for every stakeholder
                we serve, today and for generations to come.
              </p>

              <div className="sig-row">
                <div className="sig-avatar">JD</div>
                <div>
                  <div className="sig-name">James D. Morrison</div>
                  <div className="sig-role">Chairman &amp; Founder</div>
                </div>
              </div>

              <button className="read-btn">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
                Read Full Message
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}