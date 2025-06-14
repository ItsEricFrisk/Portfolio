import { useState } from "react";
import { projects } from "../data";
import Title from "./Title";

const ProjectCards = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section className="flex flex-col">
      <Title title="Projects" />
      <ul className="flex flex-col gap-y-8">
        {visibleProjects.map((project, index) => (
          <li key={index} className="flex flex-col gap-1 w-full">
            <p className="text-sm text-gray">{`0${index + 1}`}</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
              <h2 className="text-base font-semibold">{project.name}</h2>
              <div className="flex gap-3 mt-1 sm:mt-0">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-sm underline text-gray hover:text-dark"
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
                    className="text-sm underline text-gray hover:text-dark"
                    aria-label={`View ${project.name} live`}
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-gray">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, index) => (
                <div
                  className="px-1 py-1 border border-borderPrimary rounded-md text-xs text-gray"
                  key={index}
                >
                  {tech}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          onClick={showMore}
          className="mt-5 px-4 py-2 rounded shadow-sm hover:bg-hoverBg border border-borderPrimary"
        >
          Show more
        </button>
      )}
    </section>
  );
};

export default ProjectCards;
