import { useEffect } from "react";

import { useAppSelector } from "../../../hooks/useStoreHooks";
import { useCart, useError } from "../../../hooks";

import ProductDetailsPageLayout from "../components/ProductDetailsPageLayout";

const ProductDetailsPageContainer = () => {
  const { product, error, isError, isLoading } = useAppSelector(
    (state) => state.productDetails
  );

  const { isModalOpen, handleModalClose } = useError(isError);

  const { handleAddProductToCart, handleGoToCart, isAddItemToCart } = useCart();

  return (
    <ProductDetailsPageLayout
      isLoading={isLoading}
      isModalOpen={isModalOpen}
      isAddItemToCart={isAddItemToCart}
      product={product}
      error={error}
      handleModalClose={handleModalClose}
      handleAddProductToCart={handleAddProductToCart}
      handleGoToCart={handleGoToCart}
    />
  );
};

export default ProductDetailsPageContainer;
