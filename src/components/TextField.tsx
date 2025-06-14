import { Text } from "../types";

const TextField = ({ text, styling }: Text) => {
  return <p className={styling}>{text}</p>;
};

export default TextField;
