import Title from "../Title";
import JobExperienceItem from "./JobExperienceItem";
import { experience } from "../../data";

const JobExperienceList = () => {
  return (
    <section className="flex flex-col items-start">
      <Title title="Experience" />
      <ul className="space-y-6">
        {experience.map((work, index) => (
          <JobExperienceItem
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
