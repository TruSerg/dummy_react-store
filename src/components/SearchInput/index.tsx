import { ChangeEvent, FC, memo } from "react";

import sprite from "../../static/sprite.svg";

import style from "./styles.module.scss";

interface SearchInputProps {
  inputValue: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({ inputValue, handleChange }) => {
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

export default memo(SearchInput);
