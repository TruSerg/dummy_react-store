import { FC, memo } from "react";

import ProductPrice from "../ProductPrice";
import ProductStock from "../ProductStock";
import Discount from "../Discount";

import style from "./styles.module.scss";
import CommonButton from "../Buttons/CommonButton";

interface ProductCardProps {
  id: number;
  brand: string;
  title: string;
  price: number;
  stock: number;
  thumbnail: string;
  discountPercentage: number;
  handleGetProductDetails: () => void;
  handleAddProductToCart: () => void;
  handleGoToCart: () => void;
  isAddItemToCart: (id: number) => boolean;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  brand,
  title,
  price,
  stock,
  thumbnail,
  discountPercentage,
  handleGetProductDetails,
  handleAddProductToCart,
  handleGoToCart,
  isAddItemToCart,
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
        <ProductPrice title={"Price:"} price={price} />
      </div>
      {isAddItemToCart(id) ? (
        <CommonButton handleClick={handleGoToCart} title={"Go to cart"} />
      ) : (
        <CommonButton
          handleClick={handleAddProductToCart}
          title={"Add to cart"}
        />
      )}
    </div>
  );
};

export default memo(ProductCard);
