import { FC, memo } from "react";

import style from "./styles.module.scss";

interface ProductPriceProps {
  price: number;
}

const ProductPrice: FC<ProductPriceProps> = ({ price }) => {
  return (
    <p className={style.price}>
      <span className={style.pricePoint}>Price:</span> {price}{" "}
      <span className={style.priceCurrency}>$</span>
    </p>
  );
};

export default memo(ProductPrice);
