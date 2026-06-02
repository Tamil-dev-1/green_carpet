import { useState, useEffect } from "react";
import FooterBgImg from '../../assets/images/footer/footerImg2.png'

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Pinterest",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
  },
];

const footerLinks = {
  Explore: ["Home", "My Adventures", "Cancellation policy"],
  Learn: ["How it Works", "Safety Tips", "FAQ", "Blog"],
  Community: ["Testimonials", "Partner Stories", "Events & Meetups"],
  Support: ["Contact Us", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --green-deep: #0d2b1f;
          --green-mid: #1a4a30;
          --green-light: #a8e4a0;
          --accent-lime: #b5d96b;
          --white-soft: rgba(255,255,255,0.88);
          --white-muted: rgba(255,255,255,0.55);
          --overlay-dark: rgba(8, 28, 18, 0.62);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .gc-hero {
          position: relative;
        //   min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          background: var(--green-deep);
        }

        /* Background image */
        .gc-bg {
          position: absolute;
          inset: 0;
        //   background-image: url('https://images.pexels.com/photos/18877271/pexels-photo-18877271.jpeg');
          background-size: cover;
          background-position: center;
          filter: saturate(0.85) brightness(0.72);
          z-index: 0;
          transform: scale(1.04);
          transition: transform 8s ease-out;
        }

        
        .gc-bg.loaded { transform: scale(1); }

        /* Gradient overlay */
        .gc-overlay {
          position: absolute;
          inset: 0;
        //   background: linear-gradient(
        //     180deg,
        //     rgba(8,28,18,0.25) 0%,
        //     rgba(8,28,18,0.18) 40%,
        //     rgba(8,28,18,0.72) 80%,
        //     rgba(8,28,18,0.92) 100%
        //   );
          z-index: 1;
        }

        /* Content wrapper */
        .gc-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
        //   min-height: 100vh;
          padding: 0;
        }

        /* Hero title */
        .gc-title-wrap {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 2rem 2.5rem 0;
        }

        .gc-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 900;
          font-size: clamp(3rem, 9vw, 7rem);
          line-height: 0.92;
          color: transparent;
          -webkit-text-stroke: 2px rgba(168, 228, 160, 0.45);
          text-shadow: none;
          letter-spacing: -0.01em;
          user-select: none;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .gc-title.show {
          opacity: 1;
          transform: translateY(0);
        }
        .gc-title span {
          display: block;
          -webkit-text-stroke: 2px rgba(168, 228, 160, 0.55);
        }
        .gc-title em {
          font-style: italic;
          color: rgba(168, 228, 160, 0.18);
          -webkit-text-stroke: 2px rgba(168, 228, 160, 0.7);
        }

        /* Bottom section */
        .gc-bottom {
          padding: 2rem 2.5rem 2.5rem;
        }

        /* Tagline + socials row */
        .gc-tagline-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 2.8rem;
          flex-wrap: wrap;
        }

        .gc-tagline {
          max-width: 480px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease 0.35s, transform 0.8s ease 0.35s;
        }
        .gc-tagline.show { opacity: 1; transform: translateY(0); }

        .gc-tagline h2 {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(0.85rem, 1.6vw, 1.05rem);
          font-weight: 400;
          color: var(--white-soft);
          line-height: 1.65;
          letter-spacing: 0.01em;
        }
        .gc-tagline h2 strong {
          font-style: italic;
          font-weight: 500;
          color: var(--accent-lime);
        }

        /* Social icons */
        .gc-socials {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-shrink: 0;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s;
        }
        .gc-socials.show { opacity: 1; transform: translateY(0); }

        .gc-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(168, 228, 160, 0.28);
          color: var(--white-soft);
          text-decoration: none;
          transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.2s;
          backdrop-filter: blur(6px);
        }
        .gc-social-btn:hover {
          background: rgba(181, 217, 107, 0.2);
          border-color: var(--accent-lime);
          color: var(--accent-lime);
          transform: translateY(-3px) scale(1.08);
        }

        /* Divider */
        .gc-divider {
          height: 1px;
          background: linear-gradient(90deg, rgba(168,228,160,0.15) 0%, rgba(168,228,160,0.05) 100%);
          margin-bottom: 2.2rem;
        }

        /* Footer links */
        .gc-footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s;
        }
        .gc-footer-links.show { opacity: 1; transform: translateY(0); }

        .gc-footer-col h3 {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent-lime);
          margin-bottom: 1rem;
        }

        .gc-footer-col ul {
          list-style: none;
        }
        .gc-footer-col ul li {
          margin-bottom: 0.55rem;
        }
        .gc-footer-col ul li a {
          font-size: 0.88rem;
          color: var(--white-muted);
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 300;
        }
        .gc-footer-col ul li a:hover {
          color: var(--white-soft);
        }

        /* Responsive */
        @media (max-width: 991px) {
          .gc-footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .gc-title-wrap { padding: 1.5rem 1.5rem 0; }
          .gc-bottom { padding: 1.5rem 1.5rem 2rem; }

          .gc-tagline-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          .gc-socials {
            gap: 0.6rem;
          }
          .gc-social-btn {
            width: 42px;
            height: 42px;
          }

          .gc-footer-links {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .gc-footer-links {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      <section className="gc-hero">
        <div 
        style={{backgroundImage: `url(${FooterBgImg})`,}}
        className={`gc-bg 
             ${visible ? "loaded" : ""}`} />
        <div className="gc-overlay" />

        <div className="gc-content">
          {/* Big Title */}
          <div className="gc-title-wrap">
            <h3 className={`gc-title ${visible ? "show" : ""}`}>
              <span>Green</span>
              <em>Carpet</em>
            </h3>
          </div>

          {/* Bottom block */}
          <div className="gc-bottom">
            {/* Tagline + Social Icons */}
            <div className="gc-tagline-row">
              <div className={`gc-tagline ${visible ? "show" : ""}`}>
                <h2>
                  Contrary to popular belief, Lorem —{" "}
                  <strong> is not simply</strong>
                  <br />
                  It has roots in a piece of classical
                </h2>
              </div>

              <div className={`gc-socials ${visible ? "show" : ""}`}>
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="gc-social-btn"
                    aria-label={s.name}
                    title={s.name}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="gc-divider" />

            {/* Footer links */}
            <div className={`gc-footer-links ${visible ? "show" : ""}`}>
              {Object.entries(footerLinks).map(([section, links]) => (
                <div className="gc-footer-col" key={section}>
                  <h3>{section}</h3>
                  <ul>
                    {links.map((link) => (
                      <li key={link}>
                        <a href="#">{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}