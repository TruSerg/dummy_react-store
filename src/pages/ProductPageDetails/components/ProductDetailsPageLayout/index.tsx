import { FC } from "react";

import { IProduct } from "../../../../services/products";

import Container from "../../../../components/Container";
import Slider from "../../../../components/Slider";
import Loader from "../../../../components/Loader";
import ProductPrice from "../../../../components/ProductPrice";
import ProductStock from "../../../../components/ProductStock";
import Title from "../../../../components/Title";
import BasicRating from "../../../../components/Rating";
import Discount from "../../../../components/Discount";
import BackButton from "../../../../components/Buttons/BackButton";
import NotFoundComponent from "../../../../components/NotFoundComponent";
import GoToCartButton from "../../../../components/Buttons/GoToCartButton";
import AddToCartButton from "../../../../components/Buttons/AddToCartButton";

import style from "./styles.module.scss";

interface ProductDetailsPageProps {
  product: IProduct;
  isLoading: boolean;
  handleAddProductToCart: (id: number) => void;
  handleGoToCart: () => void;
  isAddItemToCart: (id: number) => boolean;
}

const ProductDetailsPageLayout: FC<ProductDetailsPageProps> = ({
  product,
  isLoading,
  handleAddProductToCart,
  handleGoToCart,
  isAddItemToCart,
}) => {
  return (
    <div className={style.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {product.title === undefined ? (
            <NotFoundComponent title={"No details!"} />
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
                      <BasicRating value={product.rating} />
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
                        <ProductPrice title={"Price"} price={product.price} />
                      </div>
                      <div className={style.wrapperBtn}>
                        {isAddItemToCart(product.id) ? (
                          <GoToCartButton handleClick={handleGoToCart} />
                        ) : (
                          <AddToCartButton
                            handleClick={() =>
                              handleAddProductToCart(product.id)
                            }
                          />
                        )}
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
