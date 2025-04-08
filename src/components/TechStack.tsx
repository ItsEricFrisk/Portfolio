import { useState } from "react";
import { motion } from "motion/react";
import { TechStackIcons } from "../data/links";
const Stack = () => {
  const [isHovering, setIsHovering] = useState<number | null>(null);

  return (
    <section id="stack" className="h-auto w-screen mb-20">
      <div className="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-10 justify-items-center select-none">
        {TechStackIcons.map((icon, index) => (
          <div key={index} className="flex flex-col items-center">
            <motion.div
              onMouseOver={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <img
                src={icon.icon}
                alt={`${icon.name}-${index}`}
                className="w-10 md:w-16"
              />
            </motion.div>
            <p
              className={`${
                isHovering === index ? "opacity-100" : "opacity-0"
              } transition-all duration-500 px-3 py-2 shadow-sm rounded-sm mt-2 border border-gray-150`}
            >
              {icon.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
