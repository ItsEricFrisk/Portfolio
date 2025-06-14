import { links } from "../data";
import TextField from "../components/TextField";

const Info = () => {
  const aboutText =
    "A frontend developer with a passion for creating user-friendly and visually engaging web applications. I recently completed my studies in frontend development at Folkuniversitetet.";

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold">Eric Frisk</h1>
      <div className="flex gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="text-socials hover:underline"
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
