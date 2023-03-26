import { FC, memo } from "react";

import style from "./styles.module.scss";

interface ButtonProps {
  handleClick: () => void;
}

const AddToCartButton: FC<ButtonProps> = ({ handleClick }) => {
  return (
    <button className={style.button} onClick={handleClick}>
      Add to cart
    </button>
  );
};

export default memo(AddToCartButton);
