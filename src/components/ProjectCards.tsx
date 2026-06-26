import { useState } from "react";
import { projects, stackColors } from "../data";
import Title from "./Title";
import TextField from "./TextField";

const ProjectCards = () => {
  const INITIAL_COUNT = 3;
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = projects.slice(
    0,
    showAll ? projects.length : INITIAL_COUNT,
  );

  return (
    <section className="flex flex-col">
      <Title title="Projects" />
      <ul className="flex flex-col gap-y-8">
        {visibleProjects.map((project, index) => (
          <li key={index} className="flex flex-col gap-1 w-full">
            <p className="text-sm text-gray dark:text-dark-mode-text">{`0${index + 1}`}</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
              <h2 className="text-base font-semibold">{project.name}</h2>
              <div className="flex gap-3 mt-1 sm:mt-0">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-sm underline text-links dark:text-dark-mode-links"
                    aria-label={`View ${project.name} on GitHub`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm underline text-links dark:text-dark-mode-links"
                    aria-label={`View ${project.name} live`}
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
            <TextField text={project.description} styling="text-sm text-gray dark:text-dark-mode-text" />
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, index) => (
                <div
                  className={`text-xs ${stackColors[tech] ?? "text-gray"}`}
                  key={index}
                >
                  {tech}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      {projects.length > INITIAL_COUNT && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-5 px-4 py-2 rounded shadow-sm hover:bg-hover-background dark:hover:bg-hover-dark-mode-background border border-border-Primary cursor-pointer"
        >
          {showAll ? "Show less" : "Show more"}
        </button>
      )}
    </section>
  );
};

export default ProjectCards;
