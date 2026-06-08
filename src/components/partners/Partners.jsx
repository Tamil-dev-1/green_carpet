import { useState } from "react";

const logos = [
  { name: "AminoChain",    src: "https://logo.clearbit.com/aminochain.io" },
  { name: "Simon",         src: "https://logo.clearbit.com/simon.io" },
  { name: "Antler",        src: "https://logo.clearbit.com/antler.co" },
  { name: "Front",         src: "https://logo.clearbit.com/front.app" },
  { name: "Automox",       src: "https://logo.clearbit.com/automox.com" },
  { name: "Catalyst",      src: "https://logo.clearbit.com/catalyst.io" },
  { name: "Epochal",       src: "https://logo.clearbit.com/epochaltechnologies.com" },
  { name: "Whistic",       src: "https://logo.clearbit.com/whistic.com" },
  // CTA injected here (index 8)
  { name: "deepfactor",    src: "https://img.magnific.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80" },
  { name: "BOXD",          src: "https://logo.clearbit.com/boxd.com" },
  { name: "frate",         src: "https://logo.clearbit.com/frate.co" },
  { name: "Measured",      src: "https://logo.clearbit.com/measured.com" },
  // CTA continues (row 3 span)
  { name: "Passthrough",   src: "https://logo.clearbit.com/passthrough.com" },
  { name: "Escala",        src: "https://logo.clearbit.com/escala.co" },
  { name: "GoCanvas",      src: "https://logo.clearbit.com/gocanvas.com" },
  { name: "Gather Voices", src: "https://logo.clearbit.com/gathervoices.co" },
  { name: "Uplimit",       src: "https://logo.clearbit.com/uplimit.com" },
  { name: "Demostack",     src: "https://logo.clearbit.com/demostack.com" },
  { name: "Fidato Health", src: "https://logo.clearbit.com/fidatohealth.com" },
  { name: "CollabWORK",    src: "https://logo.clearbit.com/collabwork.com" },
];

const css = `
  .trusted-grid-wrap {
    background: #fff;
    width: 100%;
    min-height: 700px;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    padding: 40px 20px;
   
    margin: 0 auto;
  }
  .trusted-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    border-top: 1.5px solid #e2ddd6;
    border-left: 1.5px solid #e2ddd6;
  }
  .logo-cell {
    border-right: 1.5px solid #e2ddd6;
    border-bottom: 1.5px solid #e2ddd6;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 28px 20px;
    min-height: 145px;
    min-width:100px;
    background: transparent;
    transition: background .2s, transform .18s, box-shadow .18s;
    cursor: pointer;
  }
  .logo-cell:hover {
    background: #f9f9f9;
    transform: scale(1.04);
    z-index: 2;
    box-shadow: 0 4px 18px rgba(0,0,0,.08);
  }
    


  .logo-cell img {
    max-width: 100%;
    max-height: 80px;
    object-fit: contain;
  }
  .cta-cell {
    grid-column: span 2;
    grid-row: span 2;
    border-right: 1.5px solid #e2ddd6;
    border-bottom: 1.5px solid #e2ddd6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 28px 20px;
    text-align: center;
    gap: 14px;
  }
  .cta-cell h2 {
    font-size: clamp(15px, 1.7vw, 20px);
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1.35;
  }
  .cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #1a1a1a;
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 26px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
    transition: opacity .18s, transform .15s;
  }
  .cta-btn:hover { opacity: .82; transform: scale(1.04); }

  @media (max-width: 860px) {
    .trusted-grid { grid-template-columns: repeat(4, 1fr); }
    .cta-cell { grid-column: span 2; }
  }
  @media (max-width: 560px) {
    .trusted-grid { grid-template-columns: repeat(2, 1fr); }
    .cta-cell { grid-column: span 2; grid-row: span 1; }
    .logo-cell { min-height: 68px; padding: 14px 10px; }
  }

    .partner-main-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    color: #111;
    line-height: 1.12;
    letter-spacing: -0.5px;
  }

  .partner-main-title span {
    color: #01AB1A;
  }
`;

function LogoCell({ logo }) {
  const [errored, setErrored] = useState(false);
  return (
    <div className="logo-cell" title={logo.name}>
      {errored ? (
        <span style={{ fontSize: 12, color: "#888", textAlign: "center" }}>{logo.name}</span>
      ) : (
        <img
          src={logo.src}
          alt={logo.name}
          onError={() => setErrored(true)}
        />
      )}
    </div>
  );
}

export default function TrustedBySection() {
  // Split: before CTA (0-7), after CTA row2 (8-9), row3 (10-11), after CTA (12-13), row4 (14-19)
  const row1 = logos.slice(0, 6);
  const row2Left = logos.slice(6, 8);
  const row2Right = logos.slice(8, 10);
  const row3Left = logos.slice(10, 12);
  const row3Right = logos.slice(12, 14);
  const row4 = logos.slice(14, 20);

  return (
    <>
      <style>{css}</style>
      <section className="trusted-grid-wrap">

        <div>
              <h2 className='partner-main-title mb-5'>Trusted Partners & <span>Collaborations</span></h2>
        </div>
        <div className="trusted-grid">
          
          {/* Row 1 */}
          {row1.map(l => <LogoCell key={l.name} logo={l} />)}

          {/* Row 2 left */}
          {row2Left.map(l => <LogoCell key={l.name} logo={l} />)}

          {/* CTA — 2 cols × 2 rows */}
          <div className="cta-cell">
            <h2>Trusted By 100+ Forward Thinking Sales Teams</h2>
            <button className="cta-btn">Book a call &nbsp;»</button>
          </div>

          {/* Row 2 right */}
          {row2Right.map(l => <LogoCell key={l.name} logo={l} />)}

          {/* Row 3 left */}
          {row3Left.map(l => <LogoCell key={l.name} logo={l} />)}

          {/* Row 3 right (CTA auto-continues) */}
          {row3Right.map(l => <LogoCell key={l.name} logo={l} />)}

          {/* Row 4 */}
          {row4.map(l => <LogoCell key={l.name} logo={l} />)}
        </div>
      </section>
    </>
  );
}