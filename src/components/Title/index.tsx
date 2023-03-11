import { FC, memo } from "react";

import style from "./styles.module.scss";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return <h2 className={style.title}>{title}</h2>;
};

export default memo(Title);
