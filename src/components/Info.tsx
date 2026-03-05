import { links } from "../data";
import TextField from "../components/TextField";

const Info = () => {
  const aboutText =
    "Software developer based in Sweden. I have a degree in frontend development and I'm currently working towards my backend degree, driven by a curiosity for how it all fits together.";

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold">Eric Frisk</h1>
      <div className="flex gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-links hover:underline"
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
