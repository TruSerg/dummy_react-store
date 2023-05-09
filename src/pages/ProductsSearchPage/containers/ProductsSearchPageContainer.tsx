import { useAppSelector } from "../../../hooks/useStoreHooks";
import {
  useCart,
  useError,
  usePagination,
  useProductsDetails,
} from "../../../hooks";

import ProductsSearchPageLayout from "../components/ProductsSearchPageLayout";

const ProductsSearchPageContainer = () => {
  const { searchedProducts, error, isLoading, isError } = useAppSelector(
    (state) => state.searchProduct
  );

  const { list, isPageLoading, currentPage, pageCount, handlePageChange } =
    usePagination(searchedProducts.products);

  const { handleGetProductDetails } = useProductsDetails();

  const { isModalOpen, handleModalClose } = useError(isError);

  const { handleAddProductToCart, handleGoToCart, isAddItemToCart } = useCart();

  return (
    <ProductsSearchPageLayout
      isLoading={isLoading}
      isModalOpen={isModalOpen}
      isPageLoading={isPageLoading}
      isAddItemToCart={isAddItemToCart}
      products={list}
      error={error}
      itemsQuantity={searchedProducts.limit}
      currentPage={currentPage}
      pageCount={pageCount}
      handleModalClose={handleModalClose}
      handlePageChange={handlePageChange}
      handleGetProductDetails={handleGetProductDetails}
      handleAddProductToCart={handleAddProductToCart}
      handleGoToCart={handleGoToCart}
    />
  );
};

export default ProductsSearchPageContainer;
