import { ChangeEvent, FC, memo } from "react";

import sprite from "../../static/sprite.svg";

import style from "./styles.module.scss";

interface FormSearchProps {
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormSearch: FC<FormSearchProps> = ({ inputValue, handleChange }) => {
  return (
    <div className={style.form}>
      <svg className={style.formIcon}>
        <use href={sprite + "#i-search"} />
      </svg>
      <input
        className={style.formInput}
        placeholder="Search..."
        value={inputValue}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default memo(FormSearch);
