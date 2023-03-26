import { FC, memo } from "react";

import style from "./styles.module.scss";

interface ButtonProps {
  handleClick: () => void;
}

const GoToCartButton: FC<ButtonProps> = ({ handleClick }) => {
  return (
    <button className={style.button} onClick={handleClick}>
      Go to cart
    </button>
  );
};

export default memo(GoToCartButton);
