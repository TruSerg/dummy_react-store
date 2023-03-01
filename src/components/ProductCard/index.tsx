import { FC } from "react";

import Button from "../Buttons/Button";
import ProductPrice from "../ProductPrice";
import ProductStock from "../ProductStock";

import style from "./styles.module.scss";

interface ProductCardProps {
  id?: number;
  brand: string;
  title: string;
  price: number;
  stock: number;
  thumbnail: string;
  handleGetProductDetails: () => void;
}

const ProductCard: FC<ProductCardProps> = ({
  brand,
  title,
  price,
  stock,
  thumbnail,
  handleGetProductDetails,
}) => {
  return (
    <div className={style.productCard} onClick={handleGetProductDetails}>
      <img className={style.productCardImg} src={thumbnail} alt="product" />
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

export default ProductCard;
