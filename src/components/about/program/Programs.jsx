import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Program.css";

// Replace these with your actual image paths (e.g. imported assets or public folder paths)


const programs = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/11662671/pexels-photo-11662671.png',
    label: "Heroes For Humanity",
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/27635916/pexels-photo-27635916.jpeg',
    label: "Asani Sanitary Napkin Program",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/6757958/pexels-photo-6757958.jpeg",
    label: "Kids Health Camps",
  },
];

const ProgramsSection = () => {
  return (
    <section className="programs-section">
      <div className="container">
        <p className="programs-eyebrow text-center">Our Programs</p>
        <h2 className="programs-heading text-center mb-5">
          Explore Our Programs
        </h2>

        <div className="row g-4 justify-content-center">
          {programs.map((program) => (
            <div className="col-12 col-md-6 col-lg-4" key={program.id}>
              <div className="program-card">
                <img
                  src={program.image}
                  alt=''
                  className="program-card-img"
                />
                <div className="program-card-overlay">
                  <button type="button" className="program-card-btn">
                    {program.label.toUpperCase()}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="programs-text text-center">
          <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
          </p>
          <p>
            The standard chunk of Lorem Ipsum used since 1966 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>

          <p>
            The standard chunk of Lorem Ipsum used since 1966 is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
        </div>

        <div className="text-center">
          <button type="button" className="btn-all-programs">
            All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
