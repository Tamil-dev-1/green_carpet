import { useState, useEffect, useRef } from "react";
import "./hero.css";
import Img1 from "../../assets/images/hero/img1.jpg";
import Img4 from "../../assets/images/hero/img4.jpg";

const destinations = [
  {
    id: 0,
    title: "LOREM ",
    subtitle: "IPSUM",
    desc: "Discover dramatic landscapes and serene beauty.",
    img: Img1,
  },
  {
    id: 1,
    title: "LOREM ",
    subtitle: "IPSUM",
    desc: "Immerse yourself in the world's most diverse ecosystem.",
    img: "https://images.pexels.com/photos/20954871/pexels-photo-20954871.jpeg",
  },
  {
    id: 2,
    title: "LOREM ",
    subtitle: "IPSUM",
    desc: "Experience the majestic peaks and crystal clear lakes.",
    img: "https://images.pexels.com/photos/35196/water-plant-green-fine-layers.jpg",
  },
  {
    id: 3,
    title: "LOREM ",
    subtitle: "IPSUM",
    desc: "Find peace in the lush terraces and tropical beaches.",
    img: Img4,
  },
];

const PlayIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="white">
    <polygon points="3,1 12,6.5 3,12" />
  </svg>
);

const dropdowns = {
  Program: [
    "Destinations",
    "Adventure Tours",
    "Eco Travel",
    "Hidden Gems",
  ],
  Blogs: [
    "My Trips",
    "Plan a Trip",
    "Group Travel",
    "Custom Packages",
  ],

  About: [
    "My Trips",
    "Plan a Trip",
    "Group Travel",
    "Custom Packages",
  ],

  Contact: [
    "My Trips",
    "Plan a Trip",
    "Group Travel",
    "Custom Packages",
  ],
};

export default function Hero() {
  const [index, setIndex] = useState(0);

  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const dest = destinations[index];

  const prev = () =>
    setIndex((i) =>
      i === 0 ? destinations.length - 1 : i - 1
    );

  const next = () =>
    setIndex((i) => (i + 1) % destinations.length);

  const toggleDropdown = (item) => {
    setOpenDropdown(
      openDropdown === item ? null : item
    );
  };

  return (
    <section
      className="gc-hero-section"
      style={{
        backgroundImage: `url(${dest.img})`,
      }}
    >
      <div className="gc-hero-frame">

        <div className="gc-glass-overlay"></div>

        <nav className="navbar navbar-expand-lg gc-hero-navbar">
          <div className="container-fluid px-lg-4">

            <a className="navbar-brand gc-logo" href="#">
              <span>Green</span>Carpet
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#heroNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="heroNav"
            >
              <ul
                className="navbar-nav gap-lg-4"
                ref={dropdownRef}
              >

                {[
                  "Home",
                  "Program",
                  "Blogs",
                  "About",
                  "Contact",
                ].map((item) => {
                  const hasDropdown =
                    dropdowns[item];

                  return (
                    <li
                      key={item}
                      className={`nav-item ${
                        hasDropdown
                          ? "dropdown position-relative"
                          : ""
                      }`}
                    >
                      {!hasDropdown ? (
                        <a
                          className="gc-nav-link"
                          href="#"
                        >
                          {item}
                        </a>
                      ) : (
                        <>
                          <button
                            className="gc-nav-link dropdown-toggle gc-custom-dropdown-btn"
                            onClick={() =>
                              toggleDropdown(item)
                            }
                            type="button"
                          >
                            {item}
                          </button>

                          <ul
                            className={`dropdown-menu gc-glass-dropdown ${
                              openDropdown === item
                                ? "show"
                                : ""
                            }`}
                          >
                            {dropdowns[item].map(
                              (sub) => (
                                <li key={sub}>
                                  <a
                                    className="dropdown-item gc-glass-dropdown-item"
                                    href="#"
                                  >
                                    {sub}
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <button className="gc-book-btn">
              Book Now
            </button>

          </div>
        </nav>

        <div className="container-fluid gc-hero-content">
          <div className="row h-100">

            <div className="col-lg-6 gc-hero-left">

              <div className="gc-hero-title-wrap">

                <h1 className="gc-hero-title-fill">
                  {dest.title}
                </h1>

                <h1 className="gc-hero-title-outline">
                  {dest.subtitle}
                </h1>

              </div>

              <p className="gc-hero-desc">
                {dest.desc}
              </p>

              <div className="gc-hero-actions">

                <button className="gc-explore-btn">
                  Explore
                </button>

                <div className="gc-watch-video">

                  <div className="gc-play-btn">
                    <PlayIcon />
                  </div>

                  <span>Watch Video</span>

                </div>

              </div>

              <div className="gc-social-icons">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-tiktok"></i>
                <i className="bi bi-linkedin"></i>
              </div>

            </div>

            <div className="col-lg-6 gc-hero-right">

              <div className="gc-diamond-indicators">
                {destinations.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`gc-diamond ${
                      i === index ? "active" : ""
                    }`}
                  ></div>
                ))}
              </div>

              <div className="gc-cards-wrap">

                {destinations.map((d, i) => {
                  const isActive = i === index;
                  const offset = i - index;

                  const rotateY = isActive
                    ? 0
                    : -28 + offset * 6;

                  const translateZ = isActive
                    ? 30
                    : -50 -
                      Math.abs(offset) * 15;

                  const scale = isActive
                    ? 1
                    : 0.88;

                  return (
                    <div
                      key={d.id}
                      onClick={() => setIndex(i)}
                      className={`gc-destination-card ${
                        isActive ? "active" : ""
                      }`}
                      style={{
                        backgroundImage: `url(${d.img})`,
                        transform: `
                          rotateY(${rotateY}deg)
                          translateZ(${translateZ}px)
                          scale(${scale})
                        `,
                      }}
                    ></div>
                  );
                })}

              </div>

              <div className="gc-arrow-buttons">

                <button
                  onClick={prev}
                  className="gc-arrow-btn"
                >
                  ‹
                </button>

                <button
                  onClick={next}
                  className="gc-arrow-btn active"
                >
                  ›
                </button>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}