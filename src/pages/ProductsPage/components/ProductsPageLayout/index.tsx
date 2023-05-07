import React, { FC } from "react";

import { IProduct } from "../../../../services/products";

import Container from "../../../../components/Container";
import ProductCard from "../../../../components/ProductCard";
import BasicPagination from "../../../../components/Pagination";
import Loader from "../../../../components/Loader";
import Title from "../../../../components/Title";

import style from "./styles.module.scss";
import PaginationData from "../../../../components/PaginationData";

interface ProductsPageProps {
  products: IProduct[] | undefined;
  isProductsLoading: boolean;
  isPageLoading: boolean;
  productsLength: number | undefined;
  firstProductsIndex: number;
  lastProductsIndex: number;
  currentPage: number;
  pageCount: number;
  handlePageChange: (page: number) => void;
  handleGetProductDetails: (id: number) => void;
  handleAddProductToCart: (id: number) => void;
  handleGoToCart: () => void;
  isAddItemToCart: (id: number) => boolean;
}

const ProductsPageLayout: FC<ProductsPageProps> = ({
  products,
  isProductsLoading,
  isPageLoading,
  productsLength,
  firstProductsIndex,
  lastProductsIndex,
  currentPage,
  pageCount,
  handlePageChange,
  handleGetProductDetails,
  handleAddProductToCart,
  handleGoToCart,
  isAddItemToCart,
}) => {
  return (
    <div className={style.products}>
      {isProductsLoading || isPageLoading ? (
        <Loader />
      ) : (
        <>
          <Title title={"Products"} />
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
                      handleAddProductToCart={() => handleAddProductToCart(id)}
                      handleGoToCart={handleGoToCart}
                      isAddItemToCart={isAddItemToCart}
                    />
                  )
                )}
              </div>
              <div className={style.productsPagination}>
                <PaginationData
                  firstItemIndex={firstProductsIndex}
                  lastItemIndex={lastProductsIndex}
                  arrayItemsLength={productsLength}
                />

                <BasicPagination
                  pageCount={pageCount}
                  currentPage={currentPage}
                  handlePageChange={handlePageChange}
                />
              </div>
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default ProductsPageLayout;
