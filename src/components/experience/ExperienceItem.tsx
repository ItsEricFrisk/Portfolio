import { JobItem } from "../../types";

const JobExperienceItem = ({ company, time }: JobItem) => {
  return (
    <li>
      <h3 className="text-md font-semibold">{company}</h3>
      <span className="text-sm text-gray dark:text-dark-mode-text">{time}</span>
      {/* Might reuse the TextField later */}
      {/* <TextField text={description} styling="mt-2 text-sm"/> */}
    </li>
  );
};

export default JobExperienceItem;
