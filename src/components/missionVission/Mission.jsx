import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mission.css";

/**
 * MissionVision
 * Two alternating image/text rows, matching the reference layout:
 *   Row 1 → text (left) + single image (right)
 *   Row 2 → 4-panel image collage (left) + text (right)
 *
 * On mobile (< 768px) every row stacks with the image on top and the
 * text below, using Bootstrap's `order-*` utilities.
 */
export default function Mission({
  mission = {
    badge: "Our Mission",
    title: "Together for Lasting Hope and Humanity",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since Lorem Ipsum has been the industry's.",
    image: "https://images.pexels.com/photos/1895113/pexels-photo-1895113.jpeg",
  },
  vision = {
    badge: "Our Vision",
    title: "Opportunity and Equality for All",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    images: [
      "https://images.pexels.com/photos/8613112/pexels-photo-8613112.jpeg",
      "https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg",
      "https://images.pexels.com/photos/35290755/pexels-photo-35290755.jpeg",
      "https://images.pexels.com/photos/6186124/pexels-photo-6186124.jpeg",
    ],
  },
}) {
  return (
    <section className="mv-section">
      <div className="container">
        {/* ---------- Row 1: text left, single image right ---------- */}
        <div className="row mv-row">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <span className="mv-badge">{mission.badge}</span>
            <h2 className="mv-title">{mission.title}</h2>
            <p className="mv-text">{mission.text}</p>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0">
            <div className="mv-image-single">
              <img src={mission.image} alt={mission.title} />
            </div>
          </div>
        </div>

        {/* ---------- Row 2: image collage left, text right ---------- */}
        <div className="row mv-row">
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="mv-collage">
              {vision.images.map((src, i) => (
                <img key={i} src={src} alt={`${vision.title} ${i + 1}`} />
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6">
            <span className="mv-badge">{vision.badge}</span>
            <h2 className="mv-title">{vision.title}</h2>
            <p className="mv-text">{vision.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
