import { FC, memo } from "react";

import CartIsEmpty from "../../static/img/empty-cart.jpg";

import style from "./styles.module.scss";

const CartIsEmptyImage: FC = () => {
  return (
    <div className={style.image}>
      <img src={CartIsEmpty.toString()} alt="cart is empty" />
    </div>
  );
};

export default memo(CartIsEmptyImage);
