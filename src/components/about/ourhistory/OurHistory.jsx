import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ourHistory.css";

// Timeline data — newest first, matches the year strip order.
// Each entry has a unique id (two 2023 entries, so year alone can't be the key).
const timelineData = [
  {
    id: "2026",
    year: "2026",
    title: "2026 - Turning a Landmark Ruling into Action",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=700&fit=crop&sat=-100",
    text: `In 2026, the Desai Foundation marked another milestone: 12 million lives impacted and growing. Following the landmark Article 21 Supreme Court ruling recognizing mental health as a dignity right, our team has been actively working to translate this ruling into real implementation in schools across the country. Our Desai Foundation Trust team continues to expand with new members, deepening our reach and impact across India. And for the third year in a row, we were proud to be recognized as a Great Place to Work, a testament to the team behind our mission.`,
  },
  {
    id: "2025",
    year: "2025",
    title: "2025 - Scaling Mental Health in Schools",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&h=700&fit=crop&sat=-100",
    text: `In 2025, the foundation expanded its mental health programming into over 200 additional schools, reaching thousands of new students. We also launched a dedicated training pipeline for community counselors, ensuring every program is led by people from the communities they serve.`,
  },
  {
    id: "2024",
    year: "2024",
    title: "2024 - A Decade of Girl Empowerment",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=700&fit=crop&sat=-100&flip=h",
    text: `2024 marked ten years since our girl empowerment program first launched. To celebrate, we hosted a national gathering of program alumnae, many of whom now lead their own community initiatives, a full-circle moment for the foundation.`,
  },
  {
    id: "2023-b",
    year: "2023",
    title: "2023 - Crossing 10 Million Lives",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&h=700&fit=crop&sat=-100",
    text: `Later in 2023, the Desai Foundation officially crossed the 10 million lives impacted mark. This milestone was driven by rapid growth in our menstrual health and livelihoods programs across all eight states of operation.`,
  },
  {
    id: "2023-a",
    year: "2023",
    title: "2023 - Expanding to Two New States",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=900&h=700&fit=crop&sat=-100",
    text: `Early in 2023, the foundation expanded programming into two new states, bringing our footprint to eight states across India. This expansion was made possible by new partnerships with grassroots organizations already trusted within these communities.`,
  },
  {
    id: "2022",
    year: "2022",
    title: "2022 - Recognized as a Great Place to Work",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=900&h=700&fit=crop&sat=-100&flip=v",
    text: `The Desai Foundation was recognized for the first time as a Great Place to Work, reflecting our investment in the people who power our programs. We also rolled out a new leadership training curriculum for field staff.`,
  },
  {
    id: "2021",
    year: "2021",
    title: "2021 - Responding to a Global Crisis",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=900&h=700&fit=crop&sat=-100",
    text: `Amid the pandemic, the foundation pivoted quickly to deliver emergency health supplies, PPE, and food security support to vulnerable communities, while keeping core programs running through remote and hybrid models.`,
  },
  {
    id: "2020",
    year: "2020",
    title: "2020 - Launching Digital Health Education",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&h=700&fit=crop&sat=-100",
    text: `To keep reaching communities during lockdowns, the foundation launched its first digital health education modules, allowing field workers to continue menstrual and reproductive health training remotely.`,
  },
  {
    id: "2019",
    year: "2019",
    title: "2019 - Reaching 5 Million Lives",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&h=700&fit=crop&sat=-100&flip=h",
    text: `The foundation reached the 5 million lives impacted milestone in 2019, a moment made possible by steady growth in our menstrual health, livelihoods, and mental health verticals over the prior five years.`,
  },


  

 
 

];

export default function OurHistory() {
  const [activeId, setActiveId] = useState(timelineData[0].id);

  const active = timelineData.find((item) => item.id === activeId) || timelineData[0];

  return (
    <section className="our-history-section">
      <Container>
        <h2 className="our-history-heading">Our History</h2>
        <p className="our-history-subheading">A TIMELINE: 2019 &ndash; PRESENT</p>

        {/* Content card */}
        <Row className="justify-content-center">
          <Col xs={12} lg={10} xl={9}>
            <div className="history-card">
              <Row className="align-items-center g-4">
                <Col xs={12} md={5}>
                  <div className="history-image-wrap">
                    <img
                      src={active.image}
                      alt={active.title}
                      className="history-image"
                    />
                  </div>
                </Col>

                <Col xs={12} md={7}>
                  <h3 className="history-year-title">{active.title}</h3>
                  <p className="history-text">{active.text}</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Year selector strip */}
        <Row className="justify-content-center">
          <Col xs={12} lg={10} xl={9}>
            <div className="year-strip">
              {timelineData.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`year-item ${item.id === activeId ? "active" : ""}`}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.year}
                </button>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
