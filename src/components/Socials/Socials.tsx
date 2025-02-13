import { useState } from "react";
import { motion } from "motion/react";

const Socials = () => {
    const [isHovering, setIsHovering] = useState<null | number>(null);

    const socials = [
        {
            icon: './socials/github-142-svgrepo-com.svg',
            name: 'Github',
            link: 'https://github.com/ItsEricFrisk'
        },
        {
            icon: './socials/linkedin-svgrepo-com.svg',
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/eric-frisk'
        },
        {
            icon: './socials/square-cv-svgrepo-com.svg',
            name: 'CV',
            link: 'https://docs.google.com/document/d/e/2PACX-1vQG9Ta7BwFbXha_a3gv3xOyv-wg95qAiDuCnhZB05PtfTt3Gw_W7P2i8BAVAQX4D0rbosj1ip6m_pKE/pub'
        },
        {
            icon: './socials/mail-open-svgrepo-com.svg',
            name: 'Mail',
            link: 'mailto:eric.frisk@hotmail.com'
        }
    ];

    const socialsAnimation = {
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        transition: {
            delay: .1,
            duration: 1,
            ease: "easeOut",
            type: "tween"
        },
        viewport: {
            once: false,
            amount: 0.1 
        }
    };

    const handleClickToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="h-auto w-full flex flex-col items-center justify-between pt-24 py-4 px-4 md:px-16">
            <div className="h-auto w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {socials.map((social, index) => (
                    <motion.div 
                        key={index}
                        initial={socialsAnimation.initial}
                        whileInView={socialsAnimation.whileInView}
                        transition={socialsAnimation.transition}
                        viewport={socialsAnimation.viewport}
                        className="flex flex-col items-center justify-center"
                        onMouseOver={() => setIsHovering(index)}
                        onMouseLeave={() => setIsHovering(null)}
                    >
                        <a 
                            href={social.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="w-24 h-24 md:w-24 md:h-24 rounded-sm bg-neutral-800 flex items-center justify-center cursor-pointer active:scale-[.95] shadow-md hover:bg-neutral-700 mb-2"
                        >
                            <img src={social.icon} alt={social.name} className="w-16 opacity-75"/>
                        </a>
                        <p className={`${isHovering === index ? 'opacity-100' : 'opacity-0'} transition-all duration-500 px-5 py-2 border-2 border-neutral-800 rounded-sm`}>
                            {social.name}
                        </p>
                    </motion.div>
                ))}
            </div>
            <p className="text-neutral-500 hover:text-white cursor-pointer mt-6" onClick={handleClickToTop}>Back to top</p>
        </section>
    );
};

export default Socials;
