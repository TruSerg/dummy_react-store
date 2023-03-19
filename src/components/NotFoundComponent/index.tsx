import { FC, memo } from "react";

import style from "./styles.module.scss";

interface NotFoundComponentProps {
  title: string;
}

const NotFoundComponent: FC<NotFoundComponentProps> = ({ title }) => {
  return <p className={style.title}>{title}</p>;
};

export default memo(NotFoundComponent);
