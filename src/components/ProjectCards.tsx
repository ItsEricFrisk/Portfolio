import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/links";

const ProjectCards = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !cardRefs.current.some((ref) => ref?.contains(event.target as Node))
      ) {
        setTappedIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleTap = (index: number) => {
    if (isMobile) {
      setTappedIndex((prev) => (prev === index ? null : index));
    }
  };

  return (
    <section
      id="projects"
      className="w-full h-auto pb-24 flex flex-col xl:flex-row items-start justify-center gap-y-2 lg:gap-x-2"
    >
      {projects.map((project, index) => (
        <motion.li
          key={index}
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          onClick={() => handleTap(index)}
          initial={{ x: 0 }}
          animate={
            isMobile
              ? tappedIndex === index
                ? { height: 400 }
                : { height: 200 }
              : hoveredIndex === index
              ? { width: 300 }
              : { width: 150 }
          }
          whileHover={!isMobile ? { width: 450, height: 400 } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`relative bg-cover bg-center bg-no-repeat rounded-xl origin-bottom lg:origin-left p-4 flex items-center shadow-md text-light w-full xl:w-[150px] ${
            isMobile ? "min-h-[200px]" : "lg:h-[400px]"
          } `}
          style={{ backgroundImage: `url(${project.img})` }}
          onMouseEnter={!isMobile ? () => setHoveredIndex(index) : undefined}
          onMouseLeave={!isMobile ? () => setHoveredIndex(null) : undefined}
        >
        <div className="absolute rounded-xl inset-0 bg-black mask-[radial-gradient(200%_150%_at_140%_10%,_#0000,_#000)] pointer-events-none"/>
          <div className="relative z-10 flex flex-col justify-between gap-y-5 h-full w-full text-light">
            <div className="flex items-center gap-5">
              <p className="text-xl text-shadow-lg">{`0${index + 1}`}</p>
              <motion.h2
              initial={{ opacity: 0 }}
              animate={{
                opacity:
                  hoveredIndex === index || tappedIndex === index ? 1 : 0,
              }}
              transition={{ delay: 0.2, ease: "easeInOut" }}
                className={`${
                  hoveredIndex === index || tappedIndex === index
                    ? "flex"
                    : "hidden"
                } text-xl font-semibold whitespace-nowrap`}
              >
                {project.name}
              </motion.h2>
            </div>
            <div className="flex flex-col gap-5">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity:
                    hoveredIndex === index || tappedIndex === index ? 1 : 0,
                }}
                transition={{ delay: 0.2, ease: "easeInOut" }}
                className={`${
                  hoveredIndex === index || tappedIndex === index
                    ? "visible"
                    : "invisible"
                } w-[220px] lg:w-[300px] overflow-hidden text-shadow-md`}
              >
                {project.description}
              </motion.p>
              <div className={`${
                  hoveredIndex === index || tappedIndex === index
                    ? "visible"
                    : "invisible"
                } flex gap-5`}
              >
                {hoveredIndex === index || tappedIndex === index ? (
                  <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:
                      hoveredIndex === index || tappedIndex === index ? 1 : 0,
                  }}
                  transition={{ delay: isMobile ? 0.4 : 0.0, ease: "easeInOut" }}
                  className="flex gap-5">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="px-4 py-1 rounded-sm bg-light text-dark"
                      >
                        Github
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="px-4 py-1 rounded-sm bg-light text-dark"
                      >
                        Live
                      </a>
                    )}
                  </motion.div>
                ) : null}
              </div>
            </div>
          </div>
        </motion.li>
      ))}
    </section>
  );
};

export default ProjectCards;
