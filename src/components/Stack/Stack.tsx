import { motion } from 'framer-motion';
import { useState } from 'react';

const Stack = () => {
    const [isHovering, setIsHovering] = useState<number | null>(null);

    const icons = [
        { name: "HTML5", icon: "/icons/html-5-svgrepo-com.svg" },
        { name: "CSS3", icon: "/icons/css3-svgrepo-com.svg" },
        { name: "JavaScript", icon: "/icons/js-svgrepo-com.svg" },
        { name: "React", icon: "/icons/react-javascript-js-framework-facebook-svgrepo-com.svg" },
        { name: "Redux", icon: "/icons/redux-svgrepo-com.svg" },
        { name: "Node.js", icon: "/icons/node-js-svgrepo-com.svg" },
        { name: "Sanity", icon: "/icons/sanity-svgrepo-com.svg" },
        { name: "Figma", icon: "/icons/figma-svgrepo-com.svg" },
        { name: "Tailwind", icon: "/icons/tailwind-svgrepo-com.svg" },
        { name: "TypeScript", icon: "/icons/typescript-icon-svgrepo-com.svg" },
        { name: "Next.js", icon: "/icons/nextjs-fill-svgrepo-com.svg" },
        { name: "AWS", icon: "/icons/aws-svgrepo-com.svg" },
    ];

    const textAnimation = {
        initial: { color: "#1F1F1F" },
        whileInView: { color: "#FFF" },
        transition: { delay: .2, duration: 2, ease: "easeOut", type: "tween" },
        viewport: { once: false, amount: 0.1 }
    };

    const iconAnimation = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { delay: .3, duration: 1, ease: "easeOut", type: "tween" },
        viewport: { once: false, amount: 0.1 }
    };

    return (
        <section className="h-auto w-full px-10">
            <motion.h2
                className='text-5xl font-semibold'       
                initial={textAnimation.initial}
                whileInView={textAnimation.whileInView}
                transition={textAnimation.transition}
                viewport={textAnimation.viewport}
            >
                Tech stack
            </motion.h2>
            <div className='w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-10 mx-auto justify-items-center'>
                {icons.map((icon, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <motion.div 
                            initial={iconAnimation.initial}
                            whileInView={iconAnimation.whileInView}
                            transition={iconAnimation.transition}
                            viewport={iconAnimation.viewport}
                            className='w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-sm bg-neutral-800 flex items-center justify-center shadow-md'
                            onMouseOver={() => setIsHovering(index)}
                            onMouseLeave={() => setIsHovering(null)}
                        >
                            <img src={icon.icon} alt={`icon-${index}`} className="w-8 md:w-16 select-none" />
                        </motion.div>
                        <p className={`${isHovering === index ? 'opacity-100' : 'opacity-0'} transition-all duration-500 px-3 py-2 border-2 border-neutral-800 rounded-sm mt-2`}>
                            {icon.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stack;
