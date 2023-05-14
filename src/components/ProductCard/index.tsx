import { FC, memo } from "react";

import ProductPrice from "../ProductPrice";
import ProductStock from "../ProductStock";
import Discount from "../Discount";
import GoToCartButton from "../Buttons/GoToCartButton";
import CustomButton from "../Buttons/CustomButton";
import BasicRating from "../Rating";

import style from "./styles.module.scss";

interface ProductCardProps {
  id: number;
  brand: string;
  title: string;
  rating: number;
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
  rating,
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
    <div className={style.productCard}>
      <div
        className={style.productCardContent}
        onClick={handleGetProductDetails}
      >
        <img className={style.productCardImg} src={thumbnail} alt="product" />
        <Discount
          value={discountPercentage}
          className={style.productCardDiscount}
        />
        <p className={style.productCardBrand}>
          <span className={style.productCardPoint}>Brand:</span> {brand}
        </p>
        <p className={style.productCardTitle}>{title}</p>
        <div className={style.productCardRating}>
          <BasicRating value={rating} />
        </div>
        <div className={style.productCardStock}>
          <ProductStock stock={stock} />
        </div>
        <div className={style.productCardPrice}>
          <ProductPrice title={"Price:"} price={price} />
        </div>
      </div>
      {isAddItemToCart(id) ? (
        <GoToCartButton handleClick={handleGoToCart} />
      ) : (
        <CustomButton
          title={"Add to cart"}
          handleClick={handleAddProductToCart}
        />
      )}
    </div>
  );
};

export default memo(ProductCard);
