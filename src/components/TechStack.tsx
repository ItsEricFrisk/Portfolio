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
        <ul className="w-full flex mb-10 p-1 bg-neutral-100 rounded-lg">
          {stack.map((item, index) => (
            <li
              key={index}
              onClick={() => setActiveTag(stack[index])}
              className={`
        w-full text-center py-2 rounded-md cursor-pointer select-none
        transition-all duration-200
        ${
          activeTag === stack[index]
            ? "bg-white shadow-sm text-socials"
            : "text-black/60 hover:text-black"
        }
      `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
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
                  className="w-10 h-10"
                />
              </motion.div>
              <motion.div
                className={`absolute -top-8 px-3 py-2 text-nowrap text-sm bg-white shadow-md rounded border border-borderSecondary
                ${
                  isHovering === index
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }
                transition-all duration-200`}
              >
                {icon.name}
              </motion.div>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default TechStack;
