import { useAppSelector } from "../../../hooks/useStoreHooks";
import useCart from "../../../hooks/useCart";

import ProductDetailsPageLayout from "../components/ProductDetailsPageLayout";

const ProductDetailsPageContainer = () => {
  const { product, isLoading } = useAppSelector(
    (state) => state.productDetails
  );

  const { handleAddProductToCart, handleGoToCart, isAddItemToCart } = useCart();

  return (
    <ProductDetailsPageLayout
      product={product}
      isLoading={isLoading}
      handleAddProductToCart={handleAddProductToCart}
      handleGoToCart={handleGoToCart}
      isAddItemToCart={isAddItemToCart}
    />
  );
};

export default ProductDetailsPageContainer;
