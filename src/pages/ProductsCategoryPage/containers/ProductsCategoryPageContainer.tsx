import { useAppSelector } from "../../../hooks/useStoreHooks";

import ProductsCategoryPageLayout from "../components/ProductsCategoryPageLayout";
import { useProductsDetails } from "../../../hooks";

const ProductsCategoryPageContainer = () => {
  const { isLoading, productsCategory } = useAppSelector(
    (state) => state.productsCategory
  );

  const { category } = useAppSelector((state) => state.categories);

  const { handleGetProductDetails } = useProductsDetails();

  return (
    <ProductsCategoryPageLayout
      isLoading={isLoading}
      products={productsCategory.products}
      category={category}
      handleGetProductDetails={handleGetProductDetails}
    />
  );
};

export default ProductsCategoryPageContainer;
