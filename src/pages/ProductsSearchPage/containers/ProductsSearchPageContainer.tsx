import { useAppSelector } from "../../../hooks/useStoreHooks";
import { usePagination, useProductsDetails } from "../../../hooks";

import ProductsSearchPageLayout from "../components/ProductsSearchPageLayout";

const ProductsSearchPageContainer = () => {
  const { searchedProducts, isLoading } = useAppSelector(
    (state) => state.searchProduct
  );

  const { list, isPageLoading, currentPage, pageCount, handlePageChange } =
    usePagination(searchedProducts.products);

  const { handleGetProductDetails } = useProductsDetails();

  return (
    <ProductsSearchPageLayout
      products={list}
      itemsQuantity={searchedProducts.limit}
      isLoading={isLoading}
      isPageLoading={isPageLoading}
      currentPage={currentPage}
      pageCount={pageCount}
      handlePageChange={handlePageChange}
      handleGetProductDetails={handleGetProductDetails}
    />
  );
};

export default ProductsSearchPageContainer;
