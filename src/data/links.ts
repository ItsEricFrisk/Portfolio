import receptit from '../assets/project-images/receptit.png';
import whispr from "../assets/project-images/whispr.png"
import adoreclo from '../assets/project-images/adoreclo.png';
import interval from '../assets/project-images/interval-app.png';
import wgg from '../assets/project-images/word-guessing-game.png';
import squareEscape from "../assets/project-images/square-escape.png"
import keyboard from '../assets/project-images/keyboard-layout.jpeg';
import htmlIcon from '../assets/icons/html-5-svgrepo-com.svg';
import cssIcon from '../assets/icons/css3-svgrepo-com.svg';
import jsIcon from '../assets/icons/js-svgrepo-com.svg';
import tsIcon from '../assets/icons/typescript-icon-svgrepo-com.svg';
import reactIcon from '../assets/icons/react-javascript-js-framework-facebook-svgrepo-com.svg';
import reduxIcon from '../assets/icons/redux-svgrepo-com.svg';
import nextIcon from '../assets/icons/nextjs-fill-svgrepo-com.svg';
import sassIcon from '../assets/icons/sass-svgrepo-com.svg';
import tailwindIcon from '../assets/icons/tailwind-svgrepo-com.svg';
import sanityIcon from '../assets/icons/sanity-svgrepo-com.svg';
import nodeIcon from '../assets/icons/node-js-svgrepo-com.svg';
import expressIcon from '../assets/icons/Express.svg';
import awsIcon from '../assets/icons/aws-svgrepo-com.svg';
import gitIcon from '../assets/icons/Git-Icon.svg';
import figmaIcon from '../assets/icons/figma-svgrepo-com.svg';

// Projects
export const projects = [
  {
    name: "Whispr",
    live: "https://whispr-itsericfrisk.vercel.app",
    description:
      "Whispr is a real-time chat application where users can log in and interact with random people from around the world. Built using Supabase for backend authentication and PartyKit for seamless real-time communication.",
    img: whispr,
    techStack: ["React", "Next.js", "Tailwind", "PartyKit"],
  },
  {
    name: "Receptit",
    github: "https://github.com/ItsEricFrisk/Receptit",
    live: "https://receptit.vercel.app",
    description:
      "This web application utilizes AI to extract, structure, and translate recipes from images. Users can upload a photo of a recipe, and the app automatically processes the text using OCR (Tesseract.js) and AI (OpenAI) to deliver a well structured recipe with clear ingredients and instructions.",
    img: receptit,
    techStack: ["React", "Next.js", "Tailwind", "OpenAI", "Tesseract.js", "Framer Motion"],
  },
  {
    name: "Adoréclo",
    github: "https://github.com/ItsEricFrisk/adoreclo",
    live: "https://adoreclo.vercel.app",
    description:
      "This project is a front-end development practice centered on enhancing my skills in web design and visual aesthetics. The primary goal is to create a visually appealing design, tailored to evoke the style and identity of a new clothing brand.",
    img: adoreclo,
    techStack: ["React", "Tailwind", "Framer Motion"],
  },
  {
    name: "Square Escape",
    live: "https://square-escape.vercel.app/",
    github: "https://github.com/ItsEricFrisk/Square-Escape",
    description:
      "Square Escape is a challenging puzzle game where you control a square and must avoid moving obstacles.",
    img: squareEscape,
    techStack: ["TypeScript", "Tailwind", "Canvas"],
  },
  {
    name: "Interval",
    github: "https://github.com/ItsEricFrisk/Interval-app",
    description:
      "A simple timer app where you can set a countdown with optional intervals and 5-minute breaks. Choose between three views: digital, analog, or a spelled-out countdown like 'Four minutes and twenty seconds.",
    img: interval,
    techStack: ["React", "Tailwind", "Framer Motion"],
  },
  {
    name: "WGG",
    github: "https://github.com/ItsEricFrisk/word-guess-game",
    description:
      "A word guessing game in Swedish where you enter each letter and guess what word it is based on the information you get.",
    img: wgg,
    techStack: ["JavaScript", "SCSS", "HTML"],
  },
  {
    name: "Keyboard Layout",
    github: "https://github.com/ItsEricFrisk/keyboard-layout",
    description:
      "Keyboard layout that is interactive and responsive to keystrokes.",
    img: keyboard,
    techStack: ["React", "SCSS", "HTML"],
  },
];

// Contact Links
export const contactLinks = [
  {
    name: "Github",
    link: "https://github.com/ItsEricFrisk",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/eric-frisk",
  },
  {
    name: "CV",
    link: "https://docs.google.com/document/d/e/2PACX-1vQG9Ta7BwFbXha_a3gv3xOyv-wg95qAiDuCnhZB05PtfTt3Gw_W7P2i8BAVAQX4D0rbosj1ip6m_pKE/pub",
  },
];

// Tech Stack Icons
export const TechStackIcons = [
  // Frontend Core Technologies
  { name: "HTML5", icon: htmlIcon },
  { name: "CSS3", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "React", icon: reactIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "Next.js", icon: nextIcon },
  { name: "Sass", icon: sassIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Sanity", icon: sanityIcon },
  // Backend Technologies
  { name: "Node.js", icon: nodeIcon },
  { name: "Express.js", icon: expressIcon },
  { name: "AWS", icon: awsIcon },
  // Development Tools
  { name: "Git", icon: gitIcon },
  { name: "Figma", icon: figmaIcon },
];
