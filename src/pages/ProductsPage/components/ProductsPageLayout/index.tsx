import React, { FC } from "react";

import { IProduct } from "../../../../services/products";

import Container from "../../../../components/Container";
import ProductCard from "../../../../components/ProductCard";
import BasicPagination from "../../../../components/Pagination";
import Loader from "../../../../components/Loader";
import Title from "../../../../components/Title";

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
      {isError && <h2>{error.error}</h2>}
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
                      brand={brand}
                      title={title}
                      price={price}
                      stock={stock}
                      thumbnail={thumbnail}
                      discountPercentage={discountPercentage}
                      handleGetProductDetails={() =>
                        handleGetProductDetails(id)
                      }
                    />
                  )
                )}
              </div>
              <div className={style.productsPagination}>
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
