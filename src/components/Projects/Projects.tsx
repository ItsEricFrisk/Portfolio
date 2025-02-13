import {motion} from 'motion/react'
const Projects = () => {

    const projects = [
        {name: "Receptit", github: "https://github.com/ItsEricFrisk/Receptit", live: "https://receptit.vercel.app", information: "This web application utilizes AI to extract, structure, and translate recipes from images. Users can upload a photo of a recipe, and the app automatically processes the text using OCR (Tesseract.js) and AI (OpenAI) to deliver a well-structured recipe with clear ingredients and instructions."},
        {name: "Adoréclo", github: "https://github.com/ItsEricFrisk/adoreclo", live: "https://adoreclo.vercel.app", information: "This project is a front-end development practice centered on enhancing my skills in web design and visual aesthetics. The primary goal is to create a visually appealing design, tailored to evoke the style and identity of a new clothing brand."},
        {name: "Word Guessing Game", github: "https://github.com/ItsEricFrisk/word-guess-game", information: "A word guessing game in Swedish where you enter each letter and guess what word it is based on the information you get."},
        {name: "Keyboard Layout", github: "https://github.com/ItsEricFrisk/keyboard-layout", information: "Keyboard layout that is interactive and responsive to keystrokes."},
    ]


    const projectAnimation = {
        initial: {
            color: "#1F1F1F"
        },
        whileInView: {
            color: "#FFF"
        },
        transition: {
            delay: .2,
            duration: .5,
            ease: "easeOut",
            type: "tween"
        },
        viewport: {
            once: false,
            amount: 0.1 
        }
    };

    return <section className="w-screen h-auto pt-48">
        {projects.map((project, index) => (
            <motion.div 
            key={index} 
            className="w-full px-10 py-10 border-y border-neutral-800 flex flex-col md:flex-row items-end justify-between"
            initial={projectAnimation.initial}
            whileInView={projectAnimation.whileInView}
            transition={projectAnimation.transition} 
            viewport={projectAnimation.viewport}
            >
                <div className="flex flex-col">
                    <p className="text-6xl font-semibold tracking-widest mb-10 lg:mb-0">{project.name}</p>
                    <p className="w-full lg:w-1/3 mt-8 text-xl">{project.information}</p>
                </div>
                <div className="flex justify-between items-center gap-5 mt-5">
                    <a href={project.github} className="px-5 py-2 border border-neutral-800 rounded-sm shadow-sm active:scale-[.95] hover:bg-neutral-800">Github</a>
                    {project.live && <a href={project.live} className="px-5 py-2 border border-neutral-800 rounded-sm shadow-sm active:scale-[.95] hover:bg-neutral-800">Live</a>}
                </div>
            </motion.div>
        ))}
    </section>
}

export default Projects