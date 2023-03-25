import { useAppSelector } from "../../../hooks/useStoreHooks";
import { useProductsDetails, useCart } from "../../../hooks";

import ProductsCategoryPageLayout from "../components/ProductsCategoryPageLayout";

const ProductsCategoryPageContainer = () => {
  const { isLoading, productsCategory } = useAppSelector(
    (state) => state.productsCategory
  );

  const { category } = useAppSelector((state) => state.categories);

  const { handleGetProductDetails } = useProductsDetails();

  const { handleAddProductToCart, handleGoToCart, isAddItemToCart } = useCart();

  return (
    <ProductsCategoryPageLayout
      isLoading={isLoading}
      products={productsCategory.products}
      category={category}
      handleGetProductDetails={handleGetProductDetails}
      handleAddProductToCart={handleAddProductToCart}
      handleGoToCart={handleGoToCart}
      isAddItemToCart={isAddItemToCart}
    />
  );
};

export default ProductsCategoryPageContainer;
