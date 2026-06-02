import { useState, useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --green: #01AB1A;
    --green-light: #e6f9e9;
    --green-mid: #01AB1A22;
    --black: #0d0d0d;
    --text-muted: #5a5a5a;
    --white: #ffffff;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  // body {
  //   font-family: 'DM Sans', sans-serif;
  //   background: var(--white);
  //   color: var(--black);
  // }

  .wr-section {
    background: #DFF1F1;
    padding: 80px 0;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .wr-section { padding: 48px 0; }
  }

  /* Tag */
  .wr-tag {
    display: inline-block;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--green);
    margin-bottom: 18px;
  }

  /* Heading */
  .wr-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 5vw, 3.4rem);
    font-weight: 800;
    line-height: 1.1;
    color: var(--black);
    margin-bottom: 22px;
  }

  .wr-heading span {
    color: var(--green);
  }

  /* Body text */
  .wr-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 1.05rem;
    line-height: 1.75;
    color: var(--text-muted);
    font-weight: 300;
    max-width: 480px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    .wr-body { max-width: 100%; }
  }

  /* Feature items */
  .wr-features { display: flex; flex-direction: column; gap: 24px; }

  .wr-feature-item {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    padding: 20px 22px;
    border-radius: 14px;
    background: transparent;
    transition: background 0.25s ease, transform 0.25s ease;
    cursor: default;
  }

  .wr-feature-item:hover {
    background: var(--green-light);
    transform: translateX(6px);
  }

  .wr-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: var(--green-mid);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1.5px solid #01AB1A33;
  }

  .wr-icon-wrap svg {
    width: 22px;
    height: 22px;
    stroke: var(--green);
    fill: none;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .wr-feature-title {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: var(--black);
    margin-bottom: 4px;
  }

  .wr-feature-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    color: var(--text-muted);
    font-weight: 300;
    line-height: 1.55;
  }

  /* Image side */
  .wr-image-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wr-image-wrap {
    position: relative;
    width: 100%;
    max-width: 520px;
  }

  .wr-image-wrap::before {
    content: '';
    position: absolute;
    top: -18px;
    right: -18px;
    width: 100%;
    height: 100%;
    border-radius: 22px;
    border: 2px solid var(--green);
    opacity: 0.25;
    z-index: 0;
  }

  .wr-image-wrap::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: -12px;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background: radial-gradient(circle, #01AB1A18 0%, transparent 70%);
    z-index: 0;
  }

  .wr-img {
    width: 100%;
    border-radius: 20px;
    display: block;
    object-fit: cover;
    aspect-ratio: 4/3;
    position: relative;
    z-index: 1;
    box-shadow: 0 24px 64px rgba(0,0,0,0.10), 0 2px 8px rgba(1,171,26,0.08);
  }

  /* Badge on image */
  .wr-badge {
    position: absolute;
    bottom: 22px;
    left: 22px;
    z-index: 2;
    background: var(--white);
    border-radius: 12px;
    padding: 12px 18px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
    animation: floatUp 3s ease-in-out infinite;
  }

  @keyframes floatUp {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  .wr-badge-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--green);
    flex-shrink: 0;
    animation: pulse 2s ease infinite;
  }

  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 #01AB1A55; }
    50% { box-shadow: 0 0 0 6px #01AB1A00; }
  }

  .wr-badge-text {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--black);
    white-space: nowrap;
  }

  .wr-badge-sub {
    font-size: 0.7rem;
    color: var(--text-muted);
    font-weight: 300;
  }

  /* Fade-in animation */
  .wr-fade {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1);
  }
  .wr-fade.visible { opacity: 1; transform: none; }
  .wr-fade:nth-child(1) { transition-delay: 0s; }
  .wr-fade:nth-child(2) { transition-delay: 0.1s; }
  .wr-fade:nth-child(3) { transition-delay: 0.2s; }
  .wr-fade:nth-child(4) { transition-delay: 0.3s; }
  .wr-fade:nth-child(5) { transition-delay: 0.4s; }

  /* Divider line accent */
  .wr-accent-line {
    width: 48px;
    height: 3px;
    background: var(--green);
    border-radius: 2px;
    margin-bottom: 20px;
  }

  @media (max-width: 991px) {
    .wr-image-col { margin-top: 48px; }
    .wr-image-wrap { max-width: 100%; }
  }

  @media (max-width: 576px) {
    .wr-feature-item { padding: 16px; }
    .wr-badge { left: 12px; bottom: 12px; }
  }
`;

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
    ),
    title: "Leadership Academy",
    desc: "Training 500+ women leaders annually in sustainable business practices.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
    ),
    title: "Green Entrepreneurs",
    desc: "Funding and mentoring women-led environmental startups.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5a8 8 0 0116 0C20 13.5 12 21 12 21z"/><circle cx="12" cy="8.5" r="2.5"/></svg>
    ),
    title: "Community Builders",
    desc: "Grassroots programs empowering rural women through green livelihoods.",
  },
];



export default function WomenRiseSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{styles}</style>
      {/* Bootstrap CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />

      <section className="wr-section">
        <div className="container">
          <div className="row align-items-center g-4 g-lg-5">

            {/* LEFT: Content */}
            <div className="col-12 col-lg-6">
              <div className={`wr-fade ${visible ? "visible" : ""}`} style={{ transitionDelay: "0s" }}>
                <span className="wr-tag">Women Rise</span>
              </div>
              <div className={`wr-fade ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.1s" }}>
                <div className="wr-accent-line" />
                <h2 className="wr-heading">
                  Empowering Women<br />
                  to <span>Lead Change</span>
                </h2>
              </div>
              <div className={`wr-fade ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
                <p className="wr-body">
                  Our Women Rise initiative places women at the forefront of climate
                  action and community development, creating pathways to leadership
                  and economic independence.
                </p>
              </div>

              <div className="wr-features">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className={`wr-feature-item wr-fade ${visible ? "visible" : ""}`}
                    style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
                  >
                    <div className="wr-icon-wrap">{f.icon}</div>
                    <div>
                      <div className="wr-feature-title">{f.title}</div>
                      <div className="wr-feature-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Image */}
            <div className="col-12 col-lg-6 wr-image-col">
              <div
                className={`wr-image-wrap wr-fade ${visible ? "visible" : ""}`}
                style={{ transitionDelay: "0.25s" }}
              >
                <img
                  src="https://images.pexels.com/photos/8171179/pexels-photo-8171179.jpeg"
                  alt="Women Rise community leaders collaborating"
                  className="wr-img"
                />

                {/* Floating badge */}
                <div className="wr-badge">
                  <div className="wr-badge-dot" />
                  <div>
                    <div className="wr-badge-text">500+ Women Trained</div>
                    <div className="wr-badge-sub">Annually · Worldwide</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}