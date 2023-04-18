import "./Experience.css";
import { experience } from "../../data/data";

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="contact-title">
        <h2>Experience</h2>
      </div>
      <div className="jobs">
        <div>
          {experience.map((job) => {
            const {
              key,
              position,
              employer,
              type,
              duration,
              description,
              image,
            } = job;

            return (
              <div className="job-container" key={key}>
                <img src={image} alt={employer} />
                <div className="job-info">
                  <h2>{position}</h2>
                  <p>{duration}</p>
                  <p>{type}</p>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Experience;
