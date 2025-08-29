import Title from "../Title";
import ExperienceItem from "./ExperienceItem";
import { experience } from "../../data";

const JobExperienceList = () => {
  return (
    <section className="flex flex-col items-start">
      <Title title="Experience" />
      <ul className="space-y-6">
        {experience.map((work, index) => (
          <ExperienceItem
            key={index}
            company={work.company}
            time={work.time}
            description={work.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default JobExperienceList;
