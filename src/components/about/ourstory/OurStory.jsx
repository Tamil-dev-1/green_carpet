import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ourStory.css";

// Sample carousel data — swap in real stories/images as needed
const slides = [
  {
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop",
    title: "From Silence to Strength: Richa's Path to Empowerment Through Menstrual Health",
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.",
  },
  {
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
    title: "Building Confidence: Meena's Journey Into Leadership",
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.",
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    title: "A New Beginning: Kavita's Small Business Story",
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted",
  },
  {
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop",
    title: "Breaking Barriers: Sunita's Path to Higher Education",
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted",
  },
  {
    image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=200&h=200&fit=crop",
    title: "Healthy Beginnings: Priya's Fight for Clean Water",
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.",
  },
  {
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    title: "Voices Heard: Anjali's Role in Community Governance",
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted.",
  },
];

export default function OurStory() {
  const [active, setActive] = useState(2); // start on slide index 2 to mirror reference (3rd dot filled)

  const goPrev = () => {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const current = slides[active];

  return (
    <section className="our-story-section">
      <Container>
        <Row className="align-items-center gy-5">
          {/* Left column — story text */}
          <Col xs={12} lg={6} className="our-story-text">
            <h2 className="our-story-heading">Our Story</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt{" "}
              <span className="highlight">uis nostrud exercitation ullamco laboris nisi </span>. cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
             "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            </p>

            <p>
              dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem
            </p>

            <p>
             Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            </p>

            <p>
              But I must explain to you how {" "}
              <span className="highlight">"On the other hand, we</span>, asperiores 
              over <span className="highlight"> ut aut reiciendis voluptatibus maiores alias.</span>.
            </p>

            {/* <p>
              We believe that the best solutions for impact come from within the
              community itself. It's why our work focuses on cultivating the dignity of
              the people we serve by strengthening its leadership and building
              sustainable programming so that everyone can dream beyond their
              circumstances.
            </p> */}
          </Col>

          {/* Right column — testimonial carousel */}
          <Col xs={12} lg={6} className="our-story-carousel-col">
            <div className="carousel-wrapper">
              {/* Prev / Next arrows */}
              <button
                type="button"
                className="carousel-arrow carousel-arrow-prev"
                onClick={goPrev}
                aria-label="Previous story"
              >
                <span aria-hidden="true">&#10094;</span>
              </button>

              <button
                type="button"
                className="carousel-arrow carousel-arrow-next"
                onClick={goNext}
                aria-label="Next story"
              >
                <span aria-hidden="true">&#10095;</span>
              </button>

              {/* Card */}
              <div className="carousel-card">
                <span className="quote-mark" aria-hidden="true">
                  &#8220;&#8221;
                </span>

                <div className="carousel-avatar-wrap">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="carousel-avatar"
                  />
                </div>

                <h3 className="carousel-title">{current.title}</h3>

                <div className="carousel-text-scroll">
                  <p className="carousel-text">{current.text}</p>
                </div>
              </div>

              {/* Dots */}
              <div className="carousel-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`carousel-dot ${i === active ? "active" : ""}`}
                    onClick={() => setActive(i)}
                    aria-label={`Go to story ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
