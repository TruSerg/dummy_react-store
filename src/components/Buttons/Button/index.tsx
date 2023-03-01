import { FC } from "react";

import style from "./styles.module.scss";

interface ButtonProps {
  title: string;
}

const Button: FC<ButtonProps> = ({ title }) => {
  return <button className={style.button}>{title}</button>;
};

export default Button;
