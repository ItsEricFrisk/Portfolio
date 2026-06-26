import { useState } from "react";
import { motion } from "motion/react";
import { TechStackIcons } from "../data";
import Title from "./Title";

const TechStack = () => {
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [activeTag, setActiveTag] = useState("frontend");

  const stack = ["frontend", "backend", "database", "tools"];

  return (
    <section className="w-full">
      <Title title="Tech stack" />
      <div className="w-full flex items-center justify-center">
        <ul className="w-full flex mb-10 p-1 bg-neutral-100 rounded-lg dark:bg-dark-mode-secondary-background">
          {stack.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTag(item)}
              className={`
        w-full text-center px-3 py-2 rounded-md cursor-pointer select-none
        transition-all duration-200
        ${
          activeTag === item
            ? "bg-white dark:bg-dark shadow-sm text-links dark:text-dark-mode-links"
            : "text-black/60 hover:text-black dark:text-dark-mode-text dark:hover:text-light"
        }
      `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-5 gap-5 select-none">
        {TechStackIcons.filter((icon) => icon.tag === activeTag).map(
          (icon, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full relative"
            >
              <motion.div
              className="will-change-transform"
                whileHover={{
                  scale: 1.2,
                  rotate: Math.floor(Math.random() * 20) - 10,
                }}
                onMouseOver={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <img
                  src={icon.icon}
                  alt={`${icon.name}-${index}`}
                  className="w-14 h-14 bg-neutral-100 dark:bg-dark-mode-secondary-background rounded-md p-2"
                />
              </motion.div>
              <div
                className={`absolute -top-8 px-3 py-2 text-nowrap text-sm bg-white shadow-md rounded border border-border-Secondary dark:bg-dark dark:border-dark-mode-secondary-background
                ${
                  isHovering === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }
                transition-all duration-200`}
              >
                {icon.name}
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default TechStack;
