import { FC } from "react";
import { Link } from "react-router-dom";

import { IProduct } from "../../../../services/products";

import { ROUTES } from "../../../../routes/routeNames";

import Loader from "../../../../components/Loader";
import Title from "../../../../components/Title";
import Container from "../../../../components/Container";
import ProductCard from "../../../../components/ProductCard";
import BasicPagination from "../../../../components/Pagination";
import NotFoundComponent from "../../../../components/NotFoundComponent";
import Modal from "../../../../components/Modal";
import BasicError from "../../../../components/Error";
import CustomButton from "../../../../components/Buttons/CustomButton";

import style from "./styles.module.scss";

interface ProductsSearchPageProps {
  isLoading: boolean;
  isModalOpen: boolean;
  isPageLoading: boolean;
  isAddItemToCart: (id: number) => boolean;
  products: IProduct[] | undefined;
  error: string | null;
  itemsQuantity: number;
  currentPage: number;
  pageCount: number;
  handleModalClose: () => void;
  handlePageChange: (page: number) => void;
  handleGetProductDetails: (id: number) => void;
  handleAddProductToCart: (id: number) => void;
  handleGoToCart: () => void;
}

const ProductsSearchPageLayout: FC<ProductsSearchPageProps> = ({
  isLoading,
  isModalOpen,
  isPageLoading,
  isAddItemToCart,
  products,
  error,
  itemsQuantity,
  currentPage,
  pageCount,
  handleModalClose,
  handlePageChange,
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
          {isLoading || isPageLoading ? (
            <Loader />
          ) : (
            <>
              {itemsQuantity === 0 || itemsQuantity === undefined ? (
                <NotFoundComponent title="Nothing found!" />
              ) : (
                <>
                  <Title title={`Found ${itemsQuantity} items`} />
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

                      {itemsQuantity > 10 && (
                        <div className={style.productsPagination}>
                          <BasicPagination
                            pageCount={pageCount}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                          />
                        </div>
                      )}
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

export default ProductsSearchPageLayout;
