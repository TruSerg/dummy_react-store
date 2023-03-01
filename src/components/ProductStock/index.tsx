import { FC } from "react";

import style from "./styles.module.scss";

interface ProductStockProps {
  stock: number;
}

const ProductStock: FC<ProductStockProps> = ({ stock }) => {
  return (
    <p className={style.stock}>
      <span className={style.stockPoint}>Stock:</span> {stock}{" "}
      <span className={style.stockPoint}>items</span>
    </p>
  );
};

export default ProductStock;
