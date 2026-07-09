// LatestNews.jsx
import React, { useState } from "react";
import "./latestNews.css";

const newsItems = [
  {
    id: 1,
    category: "Category",
    date: "June 2023",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    id: 2,
    category: "Category",
    date: "June 2023",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    id: 3,
    category: "Category",
    date: "June 2023",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
   {
    id: 4,
    category: "Category",
    date: "June 2023",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
];

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 13L13 1M13 1H4M13 1V10"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function LatestNews() {
  const [activeId, setActiveId] = useState(2);

  return (
    <section className="latest-news-section">
      <div className="latest-news-inner">
        <div className="row align-items-start g-0">

          {/* ── Left Panel ── */}
          <div className="col-12 col-lg-4 left-panel">
            <h2 className="section-title">
              Latest<br />News
            </h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
             <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              eiusmod tempor incididunt 
            </p>
            <a href="#" className="btn-view-all">
              View All News
            </a>
          </div>

          {/* ── Right Panel ── */}
          <div className="col-12 col-lg-8 right-panel">
            {newsItems.map((item) => (
              <div
                key={item.id}
                className={`news-card ${activeId === item.id ? "active" : ""}`}
                onClick={() => setActiveId(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setActiveId(item.id)}
              >
                {/* Card Content */}
                <div className="card-content">
                  <div className="card-meta">
                    <span className="card-category">{item.category}</span>
                    <span className="meta-divider" aria-hidden="true" />
                    <span className="card-date">{item.date}</span>
                  </div>
                  <p className="card-title">
                    <span className="underline-hover">{item.title}</span>
                  </p>
                </div>

                {/* Arrow */}
                <div className="card-arrow" aria-hidden="true">
                  <ArrowIcon />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>

  );
}
