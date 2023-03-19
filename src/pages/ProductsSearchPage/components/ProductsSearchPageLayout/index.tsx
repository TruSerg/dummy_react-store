import { FC } from "react";

import { IProduct } from "../../../../services/products";

import Loader from "../../../../components/Loader";
import Title from "../../../../components/Title";
import Container from "../../../../components/Container";
import ProductCard from "../../../../components/ProductCard";
import BasicPagination from "../../../../components/Pagination";
import NotFoundComponent from "../../../../components/NotFoundComponent";

import style from "./styles.module.scss";

interface ProductsSearchPageProps {
  products: IProduct[] | undefined;
  itemsQuantity: number;
  isLoading: boolean;
  isPageLoading: boolean;
  currentPage: number;
  pageCount: number;
  handlePageChange: (page: number) => void;
  handleGetProductDetails: (id: number) => void;
}

const ProductsSearchPageLayout: FC<ProductsSearchPageProps> = ({
  products,
  itemsQuantity,
  isLoading,
  isPageLoading,
  currentPage,
  pageCount,
  handlePageChange,
  handleGetProductDetails,
}) => {
  return (
    <div className={style.products}>
      {itemsQuantity === 0 || itemsQuantity === undefined ? (
        <NotFoundComponent title={"Nothing found !"} />
      ) : (
        <>
          {isLoading || isPageLoading ? (
            <Loader />
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

                  {itemsQuantity >= 10 && (
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
    </div>
  );
};

export default ProductsSearchPageLayout;
