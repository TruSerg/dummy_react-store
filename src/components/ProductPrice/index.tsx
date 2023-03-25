import { FC, memo } from "react";

import style from "./styles.module.scss";

interface ProductPriceProps {
  title?: string;
  price: number;
}

const ProductPrice: FC<ProductPriceProps> = ({ title, price }) => {
  return (
    <p className={style.price}>
      <span className={style.pricePoint}>{title}</span> {price}{" "}
      <span className={style.priceCurrency}>$</span>
    </p>
  );
};

export default memo(ProductPrice);
