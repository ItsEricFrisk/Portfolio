import { links } from "../data";
import TextField from "../components/TextField";
import DarkModeButton from "./DarkModeButton";

const Info = () => {
  const aboutText =
    "Software developer based in Sweden. I have a degree in frontend development and I'm currently working towards my backend degree, driven by a curiosity for how it all fits together.";

  return (
    <section className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h1 className="text-6xl font-serif">Eric Frisk</h1>
        <DarkModeButton />
      </div>
      <div className="flex gap-4 mb-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-links hover:underline dark:text-dark-mode-links"
          >
            {link.name}
          </a>
        ))}
      </div>
      <TextField text={aboutText} />
    </section>
  );
};

export default Info;
