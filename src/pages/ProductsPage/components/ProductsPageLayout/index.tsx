import React, { FC } from "react";

import { IProduct } from "../../../../services/products";

import Container from "../../../../components/Container";
import ProductCard from "../../../../components/ProductCard";
import BasicPagination from "../../../../components/Pagination";
import Loader from "../../../../components/Loader";

import style from "./styles.module.scss";

interface ProductsPageProps {
  products: IProduct[] | undefined;
  error: any;
  isProductsLoading: boolean;
  isPageLoading: boolean;
  isError: boolean;
  currentPage: number;
  pageCount: number;
  handlePageChange: (page: number) => void;
  handleGetProductDetails: (id: number) => void;
}

const ProductsPageLayout: FC<ProductsPageProps> = ({
  products,
  error,
  isProductsLoading,
  isPageLoading,
  isError,
  currentPage,
  pageCount,
  handlePageChange,
  handleGetProductDetails,
}) => {
  return (
    <div className={style.products}>
      <Container>
        {isError && <h2>{error.error}</h2>}
        {/*{isProductsLoading && <Loader />}*/}
        {isProductsLoading || isPageLoading ? (
          <Loader />
        ) : (
          <div className={style.productsArea}>
            <div className={style.productsWrapper}>
              {products?.map(
                ({ id, brand, title, price, stock, thumbnail }) => (
                  <ProductCard
                    key={id}
                    brand={brand}
                    title={title}
                    price={price}
                    stock={stock}
                    thumbnail={thumbnail}
                    handleGetProductDetails={() => handleGetProductDetails(id)}
                  />
                )
              )}
            </div>

            <BasicPagination
              pageCount={pageCount}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductsPageLayout;
