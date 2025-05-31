import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const About = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Creative Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 5 * 1000);

    return () => clearInterval(interval);
  }, [words.length]);

  const currentWord = words[currentWordIndex];
  const letters = currentWord.split("");

  return (
    <section
     id="about"
      className="w-screen px-10 flex items-start justify-center"
    >
      <div
        className="w-full lg:w-2/3 h-screen flex flex-col items-center justify-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold absolute top-10 lg:top-32 left-5 lg:left-20">
          Eric Frisk
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="text-3xl md:text-7xl font-bold">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWordIndex}
                className="flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.15 }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="text-md md:text-lg mt-5 w-full md:w-4/5 text-start justify-self-center flex flex-col gap-y-5">
            <p>
              I'm a passionate developer with a strong interest in creating
              user-friendly and visually appealing web applications. I'm
              currently completing my studies in frontend development at
              Folkuniversitetet, graduating in June.
            </p>
            <p className="flex-wrap items-center gap-x-2 inline-block leading-8">
              Working on{" "}
              <span
                className="whitespace-nowrap px-2 py-1 bg-dark rounded-md text-light cursor-pointer hover:bg-neutral-800"
                onClick={() => {
                  const element = document.getElementById("projects");
                  if (element) {
                    const elementPosition =
                      element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: elementPosition - 50,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                projects
              </span>{" "}
              outside of my studies helps me keep learning new technologies and expand my{" "}
              <span
                className="whitespace-nowrap px-2 py-1 bg-dark rounded-md text-light cursor-pointer hover:bg-neutral-800"
                onClick={() => {
                  const element = document.getElementById("stack");
                  if (element) {
                    const elementPosition =
                      element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: elementPosition - 50,
                      behavior: "smooth",
                    });
                  }
                }}
              >
               tech stack
              </span>
            </p>
            <p>
              If you're working on an exciting project, need a frontend
              developer, or just want to discuss tech and creativity, feel free
              to{" "}
              <span
                className="whitespace-nowrap px-2 py-1 bg-dark rounded-md text-light cursor-pointer hover:bg-neutral-800"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    const elementPosition =
                      element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                      top: elementPosition - 50,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                contact me!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
