import { FC, memo } from "react";

import Button from "../Buttons/Button";
import ProductPrice from "../ProductPrice";
import ProductStock from "../ProductStock";

import style from "./styles.module.scss";
import Discount from "../Discount";

interface ProductCardProps {
  id?: number;
  brand: string;
  title: string;
  price: number;
  stock: number;
  thumbnail: string;
  discountPercentage: number;
  handleGetProductDetails: () => void;
}

const ProductCard: FC<ProductCardProps> = ({
  brand,
  title,
  price,
  stock,
  thumbnail,
  discountPercentage,
  handleGetProductDetails,
}) => {
  return (
    <div className={style.productCard} onClick={handleGetProductDetails}>
      <img className={style.productCardImg} src={thumbnail} alt="product" />
      <Discount
        value={discountPercentage}
        className={style.productCardDiscount}
      />
      <p className={style.productCardBrand}>
        <span className={style.productCardPoint}>Brand:</span> {brand}
      </p>
      <p className={style.productCardTitle}>{title}</p>
      <div className={style.productCardStock}>
        <ProductStock stock={stock} />
      </div>
      <div className={style.productCardPrice}>
        <ProductPrice price={price} />
      </div>
      <Button title={"Add to cart"} />
    </div>
  );
};

export default memo(ProductCard);
