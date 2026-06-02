import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function JoinMovement() {
  return (
    <>
      <style>{`
        .join-section {
          background: linear-gradient(135deg, #0b6b43 0%, #0f8a52 60%, #16a85f 100%);
          min-height: 7vh;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
        }

        /* Soft circle decorations */
        .join-section::before,
        .join-section::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50%;
        }

        .join-section::before {
          width: 420px;
          height: 420px;
          left: -180px;
          bottom: -180px;
        }

        .join-section::after {
          width: 280px;
          height: 280px;
          right: -120px;
          top: -120px;
        }

        .join-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 900px;
          width: 100%;
        }

        .join-title {
          color: white;
          font-weight: 800;
          font-size: clamp(2.5rem, 4.5vw, 4rem);
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 28px;
        }

        .join-desc {
          color: rgba(255,255,255,0.75);
          font-size: 1.15rem;
          line-height: 1.8;
          max-width: 760px;
          margin: 0 auto 42px;
          font-weight: 400;
        }

        .join-buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .btn-primary-custom {
          background: white;
          color: #0d7a49;
          border: none;
          padding: 18px 42px;
          border-radius: 60px;
          font-size: 1.1rem;
          font-weight: 700;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .btn-primary-custom:hover {
          transform: translateY(-3px);
          background: #f3f3f3;
        }

        .btn-outline-custom {
          background: transparent;
          color: white;
          border: 2px solid rgba(255,255,255,0.2);
          padding: 16px 38px;
          border-radius: 60px;
          font-size: 1.1rem;
          font-weight: 700;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .btn-outline-custom:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .join-section {
            min-height: auto;
            padding: 90px 20px;
          }

          .join-title {
            font-size: 2.8rem;
            line-height: 1.15;
            letter-spacing: -1px;
          }

          .join-desc {
            font-size: 1rem;
            line-height: 1.7;
            margin-bottom: 34px;
          }

          .join-buttons {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary-custom,
          .btn-outline-custom {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <section className="join-section">
        <div className="container">
          <div className="join-content mx-auto">
            <h1 className="join-title">
              Join the Movement for a
              <br />
              Greener Future
            </h1>

            <p className="join-desc">
              Whether you're an individual, organization, or government,
              there's a place for you in the Green Carpet movement.
            </p>

            <div className="join-buttons">
              <button className="btn-primary-custom">
                Partner With Us
                <span>→</span>
              </button>

              <button className="btn-outline-custom">
                ♡ Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}