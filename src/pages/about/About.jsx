import React from "react";

import "./about.css";
import Mission from "../../components/missionVission/Mission";
import OurStory from "../../components/about/ourstory/OurStory";
import OurHistory from "../../components/about/ourhistory/OurHistory";
import Programs from "../../components/about/program/Programs";

/**
 * Hero
 * Reusable "Change Today... Change Tomorrow" banner section.
 *
 * Props let you reuse this component for other campaigns without
 * touching the CSS.
 */
export default function Hero({
  eyebrow = "About Us",
  titleLine1 = "Change Today...",
  titleLine2 = "Change Tomorrow.",
  backgroundImage, // optional override, e.g. "/images/kids.jpg"
}) {
  const style = backgroundImage
    ? { "--hero-bg-image": `url(${backgroundImage})` }
    : undefined;

  return (
<>

    <section className="hero" style={style}>
      <div className="hero__overlay" />
      <div className="container hero__content">
        <div className="row">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <span className="hero__badge">{eyebrow}</span>
            <h1 className="hero__title">
              {titleLine1}
              <span className="hero__title--accent">{titleLine2}</span>
            </h1>
          </div>
        </div>
      </div>
    </section>

    {/* MISSION AND VISSION */}
    <Mission />

    {/* OUR STORY */}
    <OurStory />

    {/* OUR HISTORY */}
    <OurHistory />

    {/* OUR PROGRAMS */}

    <Programs />
</>
  );
}
