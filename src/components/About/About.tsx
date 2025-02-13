import { motion } from "motion/react";

const About = () => {

    const textAnimation = {
        initial: {
            color: "#1F1F1F"
        },
        whileInView: {
            color: "#FFF"
        },
        transition: {
            delay: .2,
            duration: 2,
            ease: "easeOut",
            type: "tween"
        },
        viewport: {
            once: false,
            amount: 0.1 
        }
    };

    const textAnimationP = {
        initial: {
            color: "#1F1F1F"
        },
        whileInView: {
            color: "#FFF"
        },
        transition: {
            delay: .2,
            duration: 2,
            ease: "easeOut",
            type: "tween"
        },
        viewport: {
            once: false,
            amount: 0.3
        }
    };

    return (
        <section className="py-16 px-10 mb-10 md:mb-32">
            <motion.h1 
                initial={textAnimation.initial}
                whileInView={textAnimation.whileInView}
                transition={textAnimation.transition}
                viewport={textAnimation.viewport}
                className="text-7xl md:text-9xl font-semibold cursor-pointer" 
                onClick={() => { window.location.href = "/" }}
            >
                Eric Frisk
            </motion.h1>

            <motion.p       
                initial={textAnimationP.initial}
                whileInView={textAnimationP.whileInView}
                transition={textAnimationP.transition} 
                viewport={textAnimationP.viewport}
                className="text-xl md:text-5xl mt-10"
            >
               Hi, I’m a passionate frontend developer with a strong interest in creating user-friendly and visually appealing web applications. I’m currently completing my studies in frontend development at Folkuniversitetet, graduating in June.
            </motion.p>

            <motion.p       
                initial={textAnimationP.initial}
                whileInView={textAnimationP.whileInView}
                transition={textAnimationP.transition} 
                viewport={textAnimationP.viewport}
                className="text-xl md:text-5xl my-10 md:my-20"
            >
                I live in Östersund with my partner, who is also studying here. Originally, I’m from Köping, where I was born and raised. I moved to Östersund about three years ago and have enjoyed exploring the area and its rich nature.
            </motion.p>

            <motion.p       
                initial={textAnimationP.initial}
                whileInView={textAnimationP.whileInView}
                transition={textAnimationP.transition} 
                viewport={textAnimationP.viewport}
                className="text-xl md:text-5xl my-10 md:my-20"
            >
                In my free time, I usually work on coding projects or explore new technologies. When I’m not sitting at my computer, I’m probably exploring the city, trying new restaurants, or taking long walks with my partner. 
            </motion.p>
        </section>
    );
};

export default About;
