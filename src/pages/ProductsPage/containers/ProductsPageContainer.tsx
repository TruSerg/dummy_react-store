import { FC } from "react";

import { useGetProductsQuery } from "../../../store/dummyStoreAPI/dummyStore.api";

import { usePagination, useProductsDetails } from "../../../hooks";

import ProductsPageLayout from "../components/ProductsPageLayout";

const ProductsPageContainer: FC = () => {
  const {
    data: products,
    isLoading: isProductsLoading,
    isError,
    error,
  } = useGetProductsQuery();

  const { list, isPageLoading, currentPage, pageCount, handlePageChange } =
    usePagination(products);

  const { handleGetProductDetails } = useProductsDetails();

  return (
    <ProductsPageLayout
      currentPage={currentPage}
      products={list}
      error={error}
      isProductsLoading={isProductsLoading}
      isPageLoading={isPageLoading}
      isError={isError}
      pageCount={pageCount}
      handlePageChange={handlePageChange}
      handleGetProductDetails={handleGetProductDetails}
    />
  );
};

export default ProductsPageContainer;
