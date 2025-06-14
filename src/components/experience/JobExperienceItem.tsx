import { JobItem } from "../../types";

const JobExperienceItem = ({ company, time, description }: JobItem) => {
  return (
    <li>
      <h3 className="text-md font-semibold">{company}</h3>
      <span className="text-sm text-gray">{time}</span>
      <p className="mt-2 tect-sm">{description}</p>
    </li>
  );
};

export default JobExperienceItem;
