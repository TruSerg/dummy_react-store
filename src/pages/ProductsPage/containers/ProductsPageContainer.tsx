import { FC, useEffect } from "react";

import { getProducts } from "../../../store/productsSlice";

import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";
import { usePagination, useProductsDetails } from "../../../hooks";

import ProductsPageLayout from "../components/ProductsPageLayout";
import useCart from "../../../hooks/useCart";

const ProductsPageContainer: FC = () => {
  const dispatch = useAppDispatch();

  const { isLoading, productsResponse } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { list, isPageLoading, currentPage, pageCount, handlePageChange } =
    usePagination(productsResponse.products);

  const { handleAddProductToCart, handleGoToCart, isAddItemToCart } = useCart();

  const { handleGetProductDetails } = useProductsDetails();

  return (
    <ProductsPageLayout
      currentPage={currentPage}
      products={list}
      isProductsLoading={isLoading}
      isPageLoading={isPageLoading}
      pageCount={pageCount}
      handlePageChange={handlePageChange}
      handleGetProductDetails={handleGetProductDetails}
      handleAddProductToCart={handleAddProductToCart}
      handleGoToCart={handleGoToCart}
      isAddItemToCart={isAddItemToCart}
    />
  );
};

export default ProductsPageContainer;
