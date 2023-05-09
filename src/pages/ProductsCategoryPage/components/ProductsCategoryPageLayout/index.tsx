import { FC } from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../../../../services/products";

import { ROUTES } from "../../../../routes/routeNames";

import Loader from "../../../../components/Loader";
import Title from "../../../../components/Title";
import Container from "../../../../components/Container";
import ProductCard from "../../../../components/ProductCard";
import NotFoundComponent from "../../../../components/NotFoundComponent";
import CustomButton from "../../../../components/Buttons/CustomButton";
import Modal from "../../../../components/Modal";
import BasicError from "../../../../components/Error";

import style from "./styles.module.scss";

interface ProductsCategoryProps {
  isLoading: boolean;
  isModalOpen: boolean;
  isAddItemToCart: (id: number) => boolean;
  products: IProduct[];
  category: string;
  error: string | null;
  handleModalClose: () => void;
  handleGetProductDetails: (id: number) => void;
  handleAddProductToCart: (id: number) => void;
  handleGoToCart: () => void;
}

const ProductsCategoryPageLayout: FC<ProductsCategoryProps> = ({
  isLoading,
  isModalOpen,
  isAddItemToCart,
  products,
  category,
  handleModalClose,
  error,
  handleGetProductDetails,
  handleAddProductToCart,
  handleGoToCart,
}) => {
  return (
    <div className={style.products}>
      {isModalOpen ? (
        <Modal>
          <div>
            <p className={style.productsErrorText}>
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
              {products === undefined ? (
                <NotFoundComponent title="Category is not found!" />
              ) : (
                <>
                  <Title title={category} />
                  <Container>
                    <div className={style.productsArea}>
                      <div className={style.productsWrapper}>
                        {products?.map(
                          ({
                            id,
                            brand,
                            title,
                            price,
                            stock,
                            thumbnail,
                            discountPercentage,
                          }) => (
                            <ProductCard
                              key={id}
                              id={id}
                              brand={brand}
                              title={title}
                              price={price}
                              stock={stock}
                              thumbnail={thumbnail}
                              discountPercentage={discountPercentage}
                              handleGetProductDetails={() =>
                                handleGetProductDetails(id)
                              }
                              handleAddProductToCart={() =>
                                handleAddProductToCart(id)
                              }
                              handleGoToCart={handleGoToCart}
                              isAddItemToCart={isAddItemToCart}
                            />
                          )
                        )}
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

export default ProductsCategoryPageLayout;
