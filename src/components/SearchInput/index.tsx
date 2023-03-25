import { ChangeEvent, FC, memo } from "react";

import sprite from "../../static/sprite.svg";

import style from "./styles.module.scss";

interface SearchInputProps {
  productSearchValue: string;
  handleProductSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checkInputSearchFocus: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  productSearchValue,
  handleProductSearchChange,
  checkInputSearchFocus,
}) => {
  return (
    <div className={style.form}>
      <svg className={style.formIcon}>
        <use href={sprite + "#i-search"} />
      </svg>
      <input
        className={style.formInput}
        placeholder="Search..."
        value={productSearchValue}
        type="text"
        onChange={handleProductSearchChange}
        onBlur={checkInputSearchFocus}
      />
    </div>
  );
};

export default memo(SearchInput);
