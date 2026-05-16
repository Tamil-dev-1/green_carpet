import { useState, useEffect, useRef } from "react";
import "./hero.css";
import Img1 from "../../assets/images/hero/img1.jpg";
import Img4 from "../../assets/images/hero/img4.jpg";

const destinations = [
  {
    id: 0,
    title: "ICELAND",
    subtitle: "ESCAPE",
    desc: "Discover dramatic landscapes and serene beauty.",
    img: Img1,
  },
  {
    id: 1,
    title: "AMAZON",
    subtitle: "JUNGLE",
    desc: "Immerse yourself in the world's most diverse ecosystem.",
    img: "https://images.pexels.com/photos/20954871/pexels-photo-20954871.jpeg",
  },
  {
    id: 2,
    title: "SWISS",
    subtitle: "ALPS",
    desc: "Experience the majestic peaks and crystal clear lakes.",
    img: "https://images.pexels.com/photos/35196/water-plant-green-fine-layers.jpg",
  },
  {
    id: 3,
    title: "BALI",
    subtitle: "RETREAT",
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
  Explore: [
    "Destinations",
    "Adventure Tours",
    "Eco Travel",
    "Hidden Gems",
  ],
  Trips: [
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

  // DROPDOWN STATE
  const [openDropdown, setOpenDropdown] = useState(null);

  // DROPDOWN REF
  const dropdownRef = useRef(null);

  // CLOSE DROPDOWN WHEN CLICK OUTSIDE
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
      className="hero-section"
      style={{
        backgroundImage: `url(${dest.img})`,
      }}
    >
      <div className="hero-frame">

        {/* Glass Overlay */}
        <div className="glass-overlay"></div>

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg hero-navbar">
          <div className="container-fluid px-lg-4">

            {/* Logo */}
            <a className="navbar-brand logo" href="#">
              <span>Green</span>Carpet
            </a>

            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#heroNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Menu */}
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
                  "Explore",
                  "Trips",
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
                          className="nav-link"
                          href="#"
                        >
                          {item}
                        </a>
                      ) : (
                        <>
                          <button
                            className="nav-link dropdown-toggle custom-dropdown-btn"
                            onClick={() =>
                              toggleDropdown(item)
                            }
                            type="button"
                          >
                            {item}
                          </button>

                          <ul
                            className={`dropdown-menu glass-dropdown ${
                              openDropdown === item
                                ? "show"
                                : ""
                            }`}
                          >
                            {dropdowns[item].map(
                              (sub) => (
                                <li key={sub}>
                                  <a
                                    className="dropdown-item glass-dropdown-item"
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

            {/* Button */}
            <button className="book-btn">
              Book Now
            </button>

          </div>
        </nav>

        {/* Main Content */}
        <div className="container-fluid hero-content">
          <div className="row h-100">

            {/* LEFT SIDE */}
            <div className="col-lg-6 hero-left">

              {/* Heading */}
              <div className="hero-title-wrap">

                <h1 className="hero-title-fill">
                  {dest.title}
                </h1>

                <h1 className="hero-title-outline">
                  {dest.subtitle}
                </h1>

              </div>

              {/* Description */}
              <p className="hero-desc">
                {dest.desc}
              </p>

              {/* Buttons */}
              <div className="hero-actions">

                <button className="explore-btn">
                  Explore
                </button>

                <div className="watch-video">

                  <div className="play-btn">
                    <PlayIcon />
                  </div>

                  <span>Watch Video</span>

                </div>

              </div>

              {/* Social Icons */}
              <div className="social-icons">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-tiktok"></i>
                <i className="bi bi-linkedin"></i>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-6 hero-right">

              {/* Indicators */}
              <div className="diamond-indicators">
                {destinations.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`diamond ${
                      i === index ? "active" : ""
                    }`}
                  ></div>
                ))}
              </div>

              {/* Cards */}
              <div className="cards-wrap">

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
                      className={`destination-card ${
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

              {/* Arrows */}
              <div className="arrow-buttons">

                <button
                  onClick={prev}
                  className="arrow-btn"
                >
                  ‹
                </button>

                <button
                  onClick={next}
                  className="arrow-btn active"
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


