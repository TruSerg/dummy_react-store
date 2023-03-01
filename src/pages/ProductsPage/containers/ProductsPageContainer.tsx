import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/useStoreHooks";

import { useGetProductsQuery } from "../../../store/dummyStoreAPI/dummyStore.api";
import { getProductDetails } from "../../../store/productDetailsSlice";

import { usePagination } from "../../../hooks";

import { ROUTES } from "../../../routes/routeNames";

import ProductsPageLayout from "../components/ProductsPageLayout";

const ProductsPageContainer: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    data: products,
    isLoading: isProductsLoading,
    isError,
    error,
  } = useGetProductsQuery();

  const { list, isPageLoading, currentPage, pageCount, handlePageChange } =
    usePagination(products);

  const handleGetProductDetails = useCallback(
    (productId: number) => {
      dispatch(getProductDetails(productId));

      navigate(ROUTES.PRODUCT_PAGE_DETAILS);
    },
    [dispatch, navigate]
  );

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
