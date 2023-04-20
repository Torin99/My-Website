import "./Projects.css";
import { projects } from "../../data/data";
import React from "react";
import { useEffect } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function Projects() {
  const [index, setIndex] = React.useState(0);

  function nextProject() {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > projects.length - 1) {
        index = 0;
      }
      return index;
    });
  }
  function prevProject() {
    setIndex((prev) => {
      let index = prev - 1;
      if (index < 0) {
        index = projects.length - 1;
      }
      return index;
    });
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > projects.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="projects" id="projects">
      <div className="title">
        <h2>My Projects</h2>
      </div>
      <div className="projects-display">
        {projects.map((project, i) => {
          const { key, image, title, description, link } = project;
          let position = "next";
          if (i === index) {
            position = "current";
          }
          if (i === index - 1 || (index === 0 && i === projects.length - 1)) {
            position = "previous";
          }
          return (
            <article className={position} key={key}>
              <h2>{title}</h2>
              <div className="center">
                <a href={link}>
                  <img className="project-image" src={image} alt={title} />
                </a>
              </div>
              <div className="description">
                <p className="text">{description}</p>
              </div>
              <button className="prevButton" onClick={prevProject}>
                <BiLeftArrow />
              </button>
              <button className="nextButton" onClick={nextProject}>
                <BiRightArrow />
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Projects;
