import { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from '../../assets/images/hero/gclogo.png'

const NAV_LINKS = [
  {
    label: "Home",
    hasDropdown: true,
    items: [
      { label: "Home 1", path: "/" },
      { label: "Home 2", path: "/home-2" },
      { label: "Home 3", path: "/home-3" },
    ],
  },
  { label: "About Us", hasDropdown: false, path: "/about" },
  {
    label: "Donations",
    hasDropdown: true,
    items: [
      { label: "Donate Now", path: "/donate" },
      { label: "Campaigns", path: "/campaigns" },
      { label: "Fundraisers", path: "/fundraisers" },
    ],
  },
  {
    label: "Pages",
    hasDropdown: true,
    items: [
      { label: "Gallery", path: "/gallery" },
      { label: "Team", path: "/team" },
      { label: "Testimonials", path: "/testimonials" },
      { label: "FAQ", path: "/faq" },
    ],
  },
  {
    label: "Blog",
    hasDropdown: true,
    items: [
      { label: "Blog Grid", path: "/blog-grid" },
      { label: "Blog List", path: "/blog-list" },
      { label: "Blog Details", path: "/blog-details" },
    ],
  },
  { label: "Contact Us", hasDropdown: false, path: "/contactus" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const COLORS = {
  topbar: "#25671E",
  primary: "#0D530E",
  dark: "#1a3a2a",
  white: "#ffffff",
  iconBg: "#1a3a2a",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body { font-family: 'Inter', sans-serif; }

        /* ── Top Bar ── */
        .dnx-topbar {
          background: ${COLORS.topbar};
          color: ${COLORS.white};
          font-size: 13px;
          padding: 8px 0;
        }
        .dnx-topbar__inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }
        .dnx-topbar__left {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .dnx-topbar__contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          opacity: 0.92;
        }
        .dnx-topbar__contact-item svg {
          flex-shrink: 0;
        }
        .dnx-topbar__right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .dnx-topbar__follow-label {
          opacity: 0.85;
          margin-right: 4px;
        }
        .dnx-topbar__divider {
          width: 1px;
          height: 14px;
          background: rgba(255,255,255,0.3);
        }
        .dnx-topbar__social-link {
          color: ${COLORS.white};
          opacity: 0.75;
          text-decoration: none;
          transition: opacity 0.2s;
          display: flex;
          align-items: center;
        }
        .dnx-topbar__social-link:hover { opacity: 1; color: ${COLORS.white}; }

        /* ── Main Navbar ── */
        .dnx-navbar {
          background: #fff;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .dnx-navbar__inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }

        /* ── Logo ── */
        .dnx-navbar__logo {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .dnx-navbar__logo-img {
          height: 60px;
          width: auto;
          display: block;
          object-fit: contain;
           filter: brightness(1.1)
            filter: saturate(1.5);
            filter: contrast(1.2);
        }

        /* ── Desktop Nav Links ── */
        .dnx-navbar__menu {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
          margin-bottom:0;
        }
        .dnx-navbar__menu-item {
          position: relative;
        }
        .dnx-navbar__menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: #222;
          padding: 8px 14px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
          text-decoration: none;
        }
        .dnx-navbar__menu-btn:hover {
          color: ${COLORS.primary};
          background: rgba(232, 93, 38, 0.06);
        }
        .dnx-navbar__chevron {
          font-size: 10px;
          opacity: 0.6;
          transition: transform 0.2s;
        }
        .dnx-navbar__menu-item:hover .dnx-navbar__chevron,
        .dnx-navbar__menu-item--open .dnx-navbar__chevron {
          transform: rotate(180deg);
        }

        /* ── Dropdown ── */
        .dnx-navbar__dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.13);
          min-width: 180px;
          padding: 8px 0;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-6px);
          transition: opacity 0.18s, transform 0.18s;
          z-index: 999;
          border: 1px solid rgba(0,0,0,0.07);
        }
        .dnx-navbar__menu-item:hover .dnx-navbar__dropdown,
        .dnx-navbar__menu-item--open .dnx-navbar__dropdown {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0);
        }
        .dnx-navbar__dropdown a {
          display: block;
          padding: 9px 18px;
          font-size: 14px;
          color: #333;
          text-decoration: none;
          transition: color 0.15s, background 0.15s;
        }
        .dnx-navbar__dropdown a:hover {
          color: ${COLORS.primary};
          background: rgba(232, 93, 38, 0.05);
        }

        /* ── Right Action Buttons ── */
        .dnx-navbar__actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dnx-navbar__icon-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .dnx-navbar__icon-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }
        .dnx-navbar__icon-btn--search {
          background: ${COLORS.primary};
          color: #fff;
        }
        .dnx-navbar__icon-btn--cart {
          background: ${COLORS.dark};
          color: #fff;
          position: relative;
        }
        .dnx-navbar__cart-badge {
          position: absolute;
          top: -2px;
          right: -2px;
          background: ${COLORS.primary};
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #fff;
        }
        .dnx-navbar__donate-btn {
          background: ${COLORS.primary};
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 10px 22px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 7px;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          white-space: nowrap;
          text-decoration: none;
        }
        .dnx-navbar__donate-btn:hover {
          background: #d44d1c;
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(232, 93, 38, 0.35);
        }

        /* ── Hamburger ── */
        .dnx-navbar__hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          flex-direction: column;
          gap: 5px;
          transition: background 0.2s;
        }
        .dnx-navbar__hamburger:hover { background: rgba(0,0,0,0.06); }
        .dnx-navbar__hamburger span {
          display: block;
          width: 24px;
          height: 2.5px;
          background: #222;
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
        }
        .dnx-navbar__hamburger--active span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
        .dnx-navbar__hamburger--active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .dnx-navbar__hamburger--active span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

        /* ── Mobile Menu ── */
        .dnx-mobile-menu {
          display: none;
          background: #fff;
          border-top: 1px solid #f0f0f0;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease, padding 0.35s ease;
        }
        .dnx-mobile-menu--open {
          max-height: 600px;
          padding: 12px 0 20px;
        }
        .dnx-mobile-menu__inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .dnx-mobile-menu__item {
          border-bottom: 1px solid #f5f5f5;
        }
        .dnx-mobile-menu__item:last-child { border-bottom: none; }
        .dnx-mobile-menu__btn {
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #222;
          padding: 13px 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: color 0.15s;
          text-decoration: none;
        }
        .dnx-mobile-menu__btn:hover { color: ${COLORS.primary}; }
        .dnx-mobile-menu__dropdown {
          padding: 0 0 8px 16px;
          display: none;
        }
        .dnx-mobile-menu__dropdown--open { display: block; }
        .dnx-mobile-menu__dropdown a {
          display: block;
          padding: 8px 4px;
          font-size: 14px;
          color: #555;
          text-decoration: none;
          transition: color 0.15s;
        }
        .dnx-mobile-menu__dropdown a:hover { color: ${COLORS.primary}; }
        .dnx-mobile-menu__actions {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 4px 4px;
          flex-wrap: wrap;
        }
        .dnx-mobile-menu__donate-btn {
          background: ${COLORS.primary};
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 10px 22px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 7px;
          text-decoration: none;
        }

        /* ── Responsive ── */
        @media (max-width: 991px) {
          .dnx-navbar__menu { display: none; }
          .dnx-navbar__actions .dnx-navbar__donate-btn { display: none; }
          .dnx-navbar__hamburger { display: flex; }
          .dnx-mobile-menu { display: block; }
          .dnx-topbar__left { flex-direction: column; align-items: flex-start; gap: 4px; }
        }
        @media (max-width: 575px) {
          .dnx-topbar__right .dnx-topbar__follow-label { display: none; }
          .dnx-navbar__inner { padding: 0 16px; }
          .dnx-navbar__logo-img { height: 36px; }
          .dnx-navbar__icon-btn { width: 38px; height: 38px; }
        }
      `}</style>

      {/* ── Top Bar ── */}
      <div className="dnx-topbar">
        <div className="dnx-topbar__inner">
          <div className="dnx-topbar__left">
            <span className="dnx-topbar__contact-item">
              {/* Email icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              info@exmple.com
            </span>
            <span className="dnx-topbar__contact-item">
              {/* Location icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              No.1, Iyer Hospital Road,Singanallur Post, Coimbatore, Tamil Nadu - 641005,India.
            </span>
          </div>
          <div className="dnx-topbar__right">
            <span className="dnx-topbar__follow-label">Follow Us</span>
            <span className="dnx-topbar__divider" />
            {/* Social links stay as plain external anchors (react-router Link is for in-app routes only) */}
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="dnx-topbar__social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav className="dnx-navbar">
        <div className="dnx-navbar__inner">
          {/* Logo */}
          <Link to="/" className="dnx-navbar__logo">
            <img
              src={LogoImg}
              alt="Green Carpet Logo"
              className="dnx-navbar__logo-img"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="dnx-navbar__menu">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className={`dnx-navbar__menu-item${openDropdown === link.label ? " dnx-navbar__menu-item--open" : ""}`}
                onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.hasDropdown ? (
                  <button
                    className="dnx-navbar__menu-btn"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <span className="dnx-navbar__chevron">▾</span>
                  </button>
                ) : (
                  <Link to={link.path} className="dnx-navbar__menu-btn">
                    {link.label}
                  </Link>
                )}
                {link.hasDropdown && (
                  <div className="dnx-navbar__dropdown">
                    {link.items.map((item) => (
                      <Link to={item.path} key={item.label}>{item.label}</Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="dnx-navbar__actions">
            <button className="dnx-navbar__icon-btn dnx-navbar__icon-btn--search" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <Link to="/donate" className="dnx-navbar__donate-btn">
              ♥ Donate Now
            </Link>
            {/* Hamburger */}
            <button
              className={`dnx-navbar__hamburger${menuOpen ? " dnx-navbar__hamburger--active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div className={`dnx-mobile-menu${menuOpen ? " dnx-mobile-menu--open" : ""}`}>
          <div className="dnx-mobile-menu__inner">
            {NAV_LINKS.map((link) => (
              <div className="dnx-mobile-menu__item" key={link.label}>
                {link.hasDropdown ? (
                  <button
                    className="dnx-mobile-menu__btn"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <span style={{ fontSize: 12, opacity: 0.5 }}>
                      {openDropdown === link.label ? "▴" : "▾"}
                    </span>
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className="dnx-mobile-menu__btn"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
                {link.hasDropdown && (
                  <div className={`dnx-mobile-menu__dropdown${openDropdown === link.label ? " dnx-mobile-menu__dropdown--open" : ""}`}>
                    {link.items.map((item) => (
                      <Link to={item.path} key={item.label} onClick={() => setMenuOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="dnx-mobile-menu__actions">
              <button className="dnx-navbar__icon-btn dnx-navbar__icon-btn--search" aria-label="Search">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                </svg>
              </button>
              <Link to="/donate" className="dnx-mobile-menu__donate-btn" onClick={() => setMenuOpen(false)}>
                ♥ Donate Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
