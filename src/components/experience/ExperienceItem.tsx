import { JobItem } from "../../types";
import TextField from "../TextField";

const JobExperienceItem = ({ company, time, description }: JobItem) => {
  return (
    <li>
      <h3 className="text-md font-semibold">{company}</h3>
      <span className="text-sm text-gray">{time}</span>
      <TextField text={description} styling="mt-2 tect-sm"/>
    </li>
  );
};

export default JobExperienceItem;
