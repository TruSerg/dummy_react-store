import { FC } from "react";

import { IProduct } from "../../../../services/products";

import Container from "../../../../components/Container";
import Slider from "../../../../components/Slider";
import Button from "../../../../components/Buttons/Button";
import Loader from "../../../../components/Loader";
import ProductPrice from "../../../../components/ProductPrice";
import ProductStock from "../../../../components/ProductStock";
import Title from "../../../../components/Title";
import Rating from "../../../../components/Rating";
import Discount from "../../../../components/Discount";
import BackButton from "../../../../components/Buttons/BackButton";

import style from "./styles.module.scss";
import NotFoundComponent from "../../../../components/NotFoundComponent";

interface ProductDetailsPageProps {
  product: IProduct;
  isLoading: boolean;
}

const ProductDetailsPageLayout: FC<ProductDetailsPageProps> = ({
  product,
  isLoading,
}) => {
  return (
    <div className={style.wrapper}>
      {product.title === undefined ? (
        <NotFoundComponent title={"No details !"} />
      ) : (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Title title={product.title} />
              <Container>
                <BackButton />
                <div className={style.wrapperSlider}>
                  <Slider images={product.images} />
                </div>
                <div className={style.wrapperProduct}>
                  <div className={style.wrapperImage}>
                    <img
                      className={style.wrapperImg}
                      src={product.thumbnail}
                      alt="product"
                    />
                  </div>
                  <div className={style.wrapperProductDetails}>
                    <h3 className={style.wrapperProductTitle}>
                      {product.title}
                    </h3>
                    <p className={style.wrapperProductDescription}>
                      {product.description}
                    </p>
                    <div className={style.wrapperProductRating}>
                      <Rating value={product.rating} />
                    </div>
                    <Discount
                      className={style.wrapperProductDiscount}
                      value={product.discountPercentage}
                    />
                    <div className={style.wrapperFooter}>
                      <div className={style.wrapperProductStock}>
                        <ProductStock stock={product.stock} />
                      </div>
                      <div className={style.wrapperProductPrice}>
                        <ProductPrice price={product.price} />
                      </div>
                      <div className={style.wrapperBtn}>
                        <Button title={"Add to cart"} />
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProductDetailsPageLayout;
