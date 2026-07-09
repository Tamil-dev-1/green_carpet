// CommunitySection.jsx
// Dependencies: React, Bootstrap 5 CSS imported in your app
// Google Fonts in public/index.html <head>:
// <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet"/>

import { useState } from "react";
import "./getInvolved.css";

/* ── SVG Icons ── */
const DiscordIcon  = () => <svg viewBox="0 0 24 24" className="link-svg"><path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>;
const GithubIcon   = () => <svg viewBox="0 0 24 24" className="link-svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
const TwitterXIcon = () => <svg viewBox="0 0 24 24" className="link-svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.264 5.637 5.9-5.637Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const LinkedInIcon = () => <svg viewBox="0 0 24 24" className="link-svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
const DiscussIcon  = () => <svg viewBox="0 0 24 24" className="link-svg"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.162-1.172l-.298-.178-3.083.917.917-3.083-.178-.298A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/></svg>;
const EmailIcon    = () => <svg viewBox="0 0 24 24" className="link-svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>;

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" className="cta-chevron">
    <path d="M9 18l6-6-6-6" stroke="#01AB1A" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Data – swap href values with your real URLs ── */
const COMMUNITY_LINKS = [
  { icon: <DiscordIcon />,  title: "Discord",     desc: "Connect our community channel.",    cta: "Join",   href: "#" },
  { icon: <GithubIcon />,   title: "Github",      desc: "Join our discussion channel.",      cta: "Join",   href: "#" },
  { icon: <TwitterXIcon />, title: "X / Twitter", desc: "Get news, company information.",    cta: "Follow", href: "#" },
  { icon: <LinkedInIcon />, title: "LinkedIn",    desc: "Adopt best practices in projects.", cta: "Follow", href: "#" },
  { icon: <DiscussIcon />,  title: "Discuss",     desc: "Suggest your own ideas.",           cta: "Join",   href: "#" },
  { icon: <EmailIcon />,    title: "E-mail",      desc: "Ask your follow-up questions.",     cta: "Write",  href: "#" },
];

function LinkItem({ icon, title, desc, cta, href }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className={`cs-link-item${hov ? " hovered" : ""}`}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="cs-link-icon">{icon}</div>
      <span className="cs-link-title">{title}</span>
      <span className="cs-link-desc">{desc}</span>
      <a href={href} className="cs-link-cta">{cta} <ChevronRight /></a>
    </div>
  );
}

/* ────────────────────────────────────────────
   Main export
   bannerImage prop: pass your own image path,
   e.g. bannerImage="/images/hero-bg.jpg"
   or import heroBg from '../assets/hero-bg.jpg'
   and pass bannerImage={heroBg}
──────────────────────────────────────────── */
export default function GetInvolved({ bannerImage }) {
  const bg = bannerImage || "https://images.pexels.com/photos/32221016/pexels-photo-32221016.jpeg";

  return (
    <section
      className="cs-banner"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="cs-section-wrap">
        <div className="cs-card">
          <div className="cs-card-inner">

            {/* Left */}
            <div className="cs-left-panel">
              <p className="cs-eyebrow">Before you go…</p>
              <h2 className="cs-headline">
                Connect with<br />
                our <span className="cs-headline-accent">Community!</span>
              </h2>
            </div>

            {/* Divider */}
            <div className="cs-v-divider" />

            {/* Right */}
            <div className="cs-right-panel">
              <div className="cs-links-grid">
                {COMMUNITY_LINKS.map((link, i) => (
                  <LinkItem key={i} {...link} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
