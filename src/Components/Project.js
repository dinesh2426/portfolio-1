import React from "react";
import { projectWork } from "../skillsSection";

const Project = () => {
  return (
    <main className="bg-green-100 w-full h-full p-2 md:p-12">
      <section className="container mx-auto">
        <h1 className="text-3xl md:text-5xl flex justify-center cursive">
          Projects
        </h1>
        <h2 className="text-md md:text-lg text-gray-600 flex justify-center mb-12">
          Welcome to projects page!
        </h2>
        <section className="relative grid md:grid-flow-cols lg:grid-cols-2 gap-8">
          {projectWork.projects.map((project) => (
            <article
              className="relative rounded-md shadow-md bg-white px-3 py-8 md:p-16"
              key={project.title}
            >
              <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                <a
                  href={project.link}
                  alt={project.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>
              <div className="text-gray-500">
                <div className="technology-stack">
                  <p>Technology Stack - </p>
                  {project.skills.map((item, i) => (
                    <div className="icons">
                      <ul className="dev-icons-project">
                        <li
                          key={i}
                          className="software-skill-inline 2xl md:3xl"
                          name={item.skillName}
                        >
                          <i className={item.fontAwesomeClassname}></i>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="text-md md:text-lg text-gray-700 leading-relaxed">
                  {project.description}
                </p>
                <div className="view-link">
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-red-500 font-bold hover:underline hover:text-red-400"
                  >
                    View the Project{" "}
                    <span role="img" aria-label="right-pointer"></span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
