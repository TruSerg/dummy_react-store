import React, { FC } from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../../../../services/products";

import { ROUTES } from "../../../../routes/routeNames";

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
import CustomButton from "../../../../components/Buttons/CustomButton";
import Modal from "../../../../components/Modal";
import BasicError from "../../../../components/Error";

import style from "./styles.module.scss";

interface ProductDetailsPageProps {
  isLoading: boolean;
  isModalOpen: boolean;
  isAddItemToCart: (id: number) => boolean;
  product: IProduct;
  error: string | null;
  handleModalClose: () => void;
  handleAddProductToCart: (id: number) => void;
  handleGoToCart: () => void;
}

const ProductDetailsPageLayout: FC<ProductDetailsPageProps> = ({
  isModalOpen,
  isLoading,
  isAddItemToCart,
  product,
  error,
  handleModalClose,
  handleAddProductToCart,
  handleGoToCart,
}) => {
  return (
    <div className={style.wrapper}>
      {isModalOpen ? (
        <Modal>
          <div>
            <p className={style.wrapperErrorText}>
              <BasicError error={error} />
            </p>
            <Link to={ROUTES.PRODUCTS_PAGE}>
              <CustomButton title="OK" handleClick={handleModalClose} />
            </Link>
          </div>
        </Modal>
      ) : (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {product.title === undefined ? (
                <NotFoundComponent title="No details!" />
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
                            <ProductPrice title="Price" price={product.price} />
                          </div>
                          <div className={style.wrapperBtn}>
                            {isAddItemToCart(product.id) ? (
                              <GoToCartButton handleClick={handleGoToCart} />
                            ) : (
                              <CustomButton
                                title="Add to cart"
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
        </>
      )}
    </div>
  );
};

export default ProductDetailsPageLayout;
