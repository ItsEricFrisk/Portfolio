import { useState } from "react";
import { motion } from "motion/react";
import { TechStackIcons } from "../data";
import Title from "./Title";

const TechStack = () => {
  const [isHovering, setIsHovering] = useState<number | null>(null);

  return (
    <section className="w-full">
      <Title title="Tech stack" />
      <div className="grid grid-cols-5 gap-8 justify-items-start select-none">
        {TechStackIcons.map((icon, index) => (
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
              className={`absolute -top-8 px-3 py-2 text-sm bg-white shadow-md rounded border border-borderSecondary
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
        ))}
      </div>
    </section>
  );
};

export default TechStack;
