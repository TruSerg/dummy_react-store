import { FC, memo } from "react";

import style from "./styles.module.scss";

interface ButtonProps {
  title: string;
  handleClick: () => void;
}

const CommonButton: FC<ButtonProps> = ({ title, handleClick }) => {
  return (
    <button className={style.commonButton} onClick={handleClick}>
      {title}
    </button>
  );
};

export default memo(CommonButton);
