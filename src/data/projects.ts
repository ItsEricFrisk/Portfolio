import receptit from "../assets/project-images/receptit.png";
import whispr from "../assets/project-images/whispr.png";
import adoreclo from "../assets/project-images/adoreclo.png";
import interval from "../assets/project-images/interval-app.png";
import wgg from "../assets/project-images/word-guessing-game.png";
import squareEscape from "../assets/project-images/square-escape.png";
import keyboard from "../assets/project-images/keyboard-layout.jpeg";

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
    techStack: [
      "React",
      "Next.js",
      "Tailwind",
      "OpenAI",
      "Tesseract.js",
      "Framer Motion",
    ],
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
      "A simple timer app where you can set a countdown with optional intervals and 5-minute breaks. Choose between three views: digital, analog, or a spelled-out countdown like Four minutes and twenty seconds.",
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
