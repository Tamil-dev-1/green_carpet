import { useState } from "react";

const services = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L4 20H8V40H20V28H28V40H40V20H44L24 4Z" stroke="#111" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <circle cx="24" cy="22" r="4" stroke="#01AA1A" strokeWidth="2" fill="none"/>
        <path d="M24 18V14M24 30V34M18 22H14M34 22H30" stroke="#01AA1A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Purpose",
    desc: "We exist to accelerate the global transition to clean, affordable, and accessible energy for every community.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6C14.06 6 6 14.06 6 24C6 33.94 14.06 42 24 42C33.94 42 42 33.94 42 24" stroke="#111" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 6L42 6L42 16" stroke="#01AA1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M42 6L28 20" stroke="#01AA1A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 16L24 24L30 30" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Vision & Mission",
    desc: "To be the most trusted renewable energy partner — empowering homes, businesses, and governments to thrive sustainably.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="28" width="10" height="14" rx="1" stroke="#111" strokeWidth="2" fill="none"/>
        <rect x="19" y="20" width="10" height="22" rx="1" stroke="#01AA1A" strokeWidth="2" fill="none"/>
        <rect x="32" y="12" width="10" height="30" rx="1" stroke="#111" strokeWidth="2" fill="none"/>
        <path d="M8 22L19 14L29 18L40 8" stroke="#01AA1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Approach to Impact",
    desc: "Data-driven strategies combined with community-first deployment — we measure success by lives improved, not just watts installed.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="14" r="6" stroke="#111" strokeWidth="2" fill="none"/>
        <circle cx="10" cy="34" r="5" stroke="#111" strokeWidth="2" fill="none"/>
        <circle cx="38" cy="34" r="5" stroke="#111" strokeWidth="2" fill="none"/>
        <path d="M24 20V28M24 28L10 34M24 28L38 34" stroke="#01AA1A" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Leadership & Advisors",
    desc: "Guided by seasoned executives and global energy policy advisors with decades of combined expertise across 40+ countries.",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="6" stroke="#01AA1A" strokeWidth="2" fill="none"/>
        <circle cx="8" cy="12" r="4" stroke="#111" strokeWidth="2" fill="none"/>
        <circle cx="40" cy="12" r="4" stroke="#111" strokeWidth="2" fill="none"/>
        <circle cx="8" cy="36" r="4" stroke="#111" strokeWidth="2" fill="none"/>
        <circle cx="40" cy="36" r="4" stroke="#111" strokeWidth="2" fill="none"/>
        <path d="M12 14L18 20M30 20L36 14M12 34L18 28M30 28L36 34" stroke="#01AA1A" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Ecosystem Network",
    desc: "A thriving network of manufacturers, installers, financiers, and policymakers — unified around a shared vision for a cleaner planet.",
  },
];

export default function WhoWe() {
  const [active, setActive] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --green: #01AA1A;
          --black: #111111;
          --white: #ffffff;
          --cream: #f5f5f0;
          --gray: #e8e8e2;
          --text-muted: #666;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: "Montserrat", sans-serif;
          background: var(--white);
          color: var(--black);
        }

        .who-section {
          
          display: flex;
          align-items: center;
          background: var(--white);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .who-section::before {
          content: '';
          position: absolute;
          top: -120px;
          left: -80px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: rgba(1,170,26,0.06);
          pointer-events: none;
        }

        .who-section::after {
          content: '';
          position: absolute;
          bottom: -60px;
          right: 60px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: rgba(1,170,26,0.04);
          pointer-events: none;
        }

        /* LEFT PANEL */
        .left-panel {
          position: sticky;
          top: 80px;
          padding-right: 40px;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .label-line {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .label-line span:first-child {
          display: block;
          width: 36px;
          height: 2px;
          background: var(--green);
        }

        .label-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
        }

        .label-text {
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--green);
        }

        .heading-main {
         font-family: "Montserrat", sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          color: var(--black);
          margin-bottom: 10px;
        }

        .heading-sub {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          color: var(--green);
          margin-bottom: 24px;
        }

        .heading-ghost {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          line-height: 1.1;
          color: rgba(17,17,17,0.12);
          margin-bottom: 32px;
        }

        .left-desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-muted);
          max-width: 380px;
          margin-bottom: 40px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          background: var(--green);
          color: var(--white);
          border: none;
          border-radius: 50px;
          padding: 14px 24px 14px 30px;
          font-family: "Montserrat", sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s, transform 0.2s;
        }

        .cta-btn:hover {
          background: #018f16;
          transform: translateY(-2px);
          color: var(--white);
          text-decoration: none;
        }

        .cta-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--black);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* RIGHT PANEL - Service Cards */
        .right-panel {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .service-card {
          background: var(--white);
          border: 1.5px solid var(--gray);
          border-radius: 16px;
          padding: 28px 32px;
          margin-bottom: 16px;
          display: flex;
          align-items: flex-start;
          gap: 24px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background: var(--green);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.3s ease;
          border-radius: 4px 0 0 4px;
        }

        .service-card:hover,
        .service-card.active {
          border-color: rgba(1,170,26,0.4);
          box-shadow: 0 8px 32px rgba(1,170,26,0.12);
          transform: translateX(6px);
        }

        .service-card:hover::before,
        .service-card.active::before {
          transform: scaleY(1);
        }

        .card-icon {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--cream);
          border-radius: 12px;
          transition: background 0.3s;
        }

        .service-card:hover .card-icon,
        .service-card.active .card-icon {
          background: rgba(1,170,26,0.08);
        }

        .card-body {
          flex: 1;
        }

        .card-title {
          font-family: "Montserrat", sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: var(--black);
          margin-bottom: 6px;
        }

        .card-desc {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 440px;
        }

        .card-arrow {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid var(--gray);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          margin-top: 4px;
        }

        .service-card:hover .card-arrow,
        .service-card.active .card-arrow {
          background: var(--green);
          border-color: var(--green);
        }

        .service-card:hover .card-arrow svg path,
        .service-card.active .card-arrow svg path {
          stroke: var(--white);
        }

        /* Decorative dots */
        .deco-dot-sm {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--green);
        }

        .deco-dot-lg {
          position: absolute;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(17,17,17,0.12);
        }

        /* Responsive */
        @media (max-width: 991px) {
          .left-panel {
            position: static;
            padding-right: 0;
            margin-bottom: 48px;
          }

          .who-section {
            padding: 60px 0;
          }
        }

        @media (max-width: 576px) {
          .service-card {
            padding: 20px 18px;
            gap: 16px;
          }

          .card-desc {
            display: none;
          }

          .service-card.active .card-desc {
            display: block;
          }

          .cta-btn {
            font-size: 14px;
            padding: 12px 20px 12px 24px;
          }
        }
      `}</style>

      <section className="who-section">
        {/* Decorative dots */}
        <span className="deco-dot-sm" style={{ top: 72, left: 72 }} />
        <span className="deco-dot-lg" style={{ top: 100, left: 130 }} />

        <div className="container-xl">
          <div className="row align-items-center g-5">

            {/* LEFT */}
            <div className="col-lg-5">
              <div className="left-panel">
                <div className="section-label">
                  <div className="label-line">
                    <span />
                    <span className="label-dot" />
                  </div>
                  <span className="label-text">Who We Are</span>
                </div>

                <div className="heading-main">Complete solar</div>
                <div className="heading-sub">solution with</div>
                <div className="heading-ghost">clean energy</div>

                <p className="left-desc">
                  We are a purpose-led organization committed to making renewable energy accessible, impactful, and lasting. From bold vision to grassroots action — this is who we are.
                </p>

                <a href="#services" className="cta-btn">
                  Discover Our Story
                  <span className="cta-icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-7">
              <div className="right-panel">
                {services.map((s, i) => (
                  <div
                    key={i}
                    className={`service-card ${active === i ? "active" : ""}`}
                    onClick={() => setActive(active === i ? null : i)}
                  >
                    <div className="card-icon">{s.icon}</div>
                    <div className="card-body">
                      <div className="card-title">{s.title}</div>
                      <div className="card-desc">{s.desc}</div>
                    </div>
                    <div className="card-arrow">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 12L12 2M12 2H5M12 2V9" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}