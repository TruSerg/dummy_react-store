import { FC, memo } from "react";

import style from "./styles.module.scss";

interface ButtonDeleteProps {
  handleDelete: () => void;
}

const ButtonDelete: FC<ButtonDeleteProps> = ({ handleDelete }) => {
  return (
    <button className={style.btnDelete} onClick={handleDelete}>
      Delete
    </button>
  );
};

export default memo(ButtonDelete);
