import { useState, useEffect } from "react";
import TextMarquee from "../textmarquee/TextMarquee";

const slides = [
  {
    id: 1,
    bg: "#D4C5B0",
    imgMain: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&q=80",
  },
  {
    id: 2,
    bg: "#C2CFC0",
    imgMain: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=700&q=80",
  },
  {
    id: 3,
    bg: "#BEC6D2",
    imgMain: "https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
    {
    id: 4,
    bg: "#E8EDF2",
    imgMain: "https://images.pexels.com/photos/13998719/pexels-photo-13998719.jpeg",
  },
];

export default function FashionHero() {
  const [current, setCurrent] = useState(0);

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent(c => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,700;1,400&family=Jost:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        // body { background: #f5f3f0;}

        .fw {
          display: flex;
          align-items: stretch;
       
          font-family: 'Jost', sans-serif;
          padding: 2.5rem 3rem;
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
          background: #fff;
        }

        /* ── LEFT (static) ── */
        .lp {
          width: 42%;
          min-width: 220px;
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 2.8rem 2.8rem;
          border-radius: 4px;
        }

        .tag-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.75rem;
        }
        .tag-bar { width: 28px; height: 2px; background: #01AB1A; flex-shrink: 0; }
        .tag-txt {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          color: #01AB1A;
        }

        .h-bold {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 4.5vw, 4.4rem);
          font-weight: 700;
          color: #111;
          line-height: 1.0;
          display: block;
        }
        .h-italic {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.8rem, 4.5vw, 4.4rem);
          font-weight: 400;
          font-style: italic;
          color: #01AB1A;
          line-height: 1.0;
          display: block;
          margin-bottom: 1.2rem;
        }

        .desc {
          font-size: 0.86rem;
          color: #666;
          line-height: 1.7;
          font-weight: 400;
          max-width: 320px;
          margin-bottom: 2rem;
        }

        .cta {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 0.78rem 1.8rem;
          font-family: 'Jost', sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          cursor: pointer;
          transition: background 0.25s, transform 0.2s;
          align-self: flex-start;
        }
        .cta:hover { background: #01AB1A; transform: translateY(-1px); }

        /* ── RIGHT (dynamic) ── */
        .rp {
          flex: 1;
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          transition: background-color 0.8s cubic-bezier(0.4,0,0.2,1);
          min-height: 500px;
        }

        @keyframes imgIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }

        .img-inner {
          position: absolute;
          top: 5%;
          left: 8%;
          right: 8%;
          bottom: 14%;
          border-radius: 3px;
          overflow: hidden;
          animation: imgIn 0.65s cubic-bezier(0.4,0,0.2,1) both;
        }
        .img-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .nav-row {
          position: absolute;
          bottom: 0;
          left: 0; right: 0;
          height: 13%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 0 1.4rem;
          gap: 0.9rem;
        }

        .nav-arr {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          color: rgba(0,0,0,0.5);
          padding: 4px;
          transition: color 0.2s;
          line-height: 1;
        }
        .nav-arr:hover { color: #222; }

        .nav-num {
          font-size: 0.7rem;
          font-weight: 500;
          color: rgba(0,0,0,0.45);
          letter-spacing: 0.08em;
          min-width: 12px;
          text-align: center;
        }

        .prog {
          width: 50px;
          height: 1px;
          background: rgba(0,0,0,0.2);
          position: relative;
          overflow: hidden;
        }
        .prog-fill {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          background: rgba(0,0,0,0.55);
          transition: width 0.5s ease;
        }

        .dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          border: none;
          background: rgba(0,0,0,0.2);
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
          padding: 0;
        }
        .dot.on { background: rgba(0,0,0,0.6); transform: scale(1.4); }

        /* ── RESPONSIVE ── */
        @media (max-width: 760px) {
          .fw {
            flex-direction: column;
            padding: 1.4rem 1.2rem;
            gap: 1.4rem;
           
          }
          .lp {
            width: 100%;
            padding: 2rem 1.8rem;
            min-height: 260px;
          }
          .rp { flex: none; height: 70vw; min-height: 280px; }
          .h-bold, .h-italic { font-size: 2.6rem; }
        }

        @media (max-width: 480px) {
          .h-bold, .h-italic { font-size: 2rem; }
          .desc { font-size: 0.8rem; }
        }
      `}</style>

      <div className="fw">
        {/* LEFT — always static */}
        <div className="lp">
          <div className="tag-row">
            <div className="tag-bar" />
            <span className="tag-txt">Education</span>
          </div>
          <span className="h-bold">Educational </span>
          <span className="h-italic">Partnerships</span>
          <p className="desc">
            Building the next generation of environmental leaders through world-class education programs.
          </p>
          <button className="cta">Button →</button>
        </div>

        {/* RIGHT — only bg + image change */}
        <div className="rp" style={{ backgroundColor: slide.bg }}>
          <div key={current} className="img-inner">
            <img src={slide.imgMain} alt="fashion" />
          </div>

          <div className="nav-row">
            <button className="nav-arr" onClick={prev}>←</button>
            <span className="nav-num">{current + 1}</span>
            <div className="prog">
              <div className="prog-fill" style={{ width: `${((current + 1) / slides.length) * 100}%` }} />
            </div>
            <span className="nav-num">{slides.length}</span>
            {slides.map((_, i) => (
              <button key={i} className={`dot${i === current ? " on" : ""}`} onClick={() => goTo(i)} />
            ))}
          </div>
        </div>
      </div>

      {/* TEXTMARQUEE */}
      <TextMarquee />


    </>
  );
}