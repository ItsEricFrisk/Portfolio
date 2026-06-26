import { TitleText } from "../types";

const Title = ({ title }: TitleText) => {
  return <h2 className="text-2xl font-bold mb-4">{title}</h2>;
};

export default Title;
