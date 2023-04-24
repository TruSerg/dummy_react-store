import { CSSProperties, FC, memo } from "react";

import style from "./styles.module.scss";

interface TitleProps {
  customStyle?: CSSProperties;
  title: string;
}

const Title: FC<TitleProps> = ({ title, customStyle }) => {
  return (
    <h2 className={style.title} style={customStyle}>
      {title}
    </h2>
  );
};

export default memo(Title);
