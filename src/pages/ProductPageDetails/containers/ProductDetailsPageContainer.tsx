import { useAppSelector } from "../../../hooks/useStoreHooks";

import ProductDetailsPageLayout from "../components/ProductDetailsPageLayout";

const ProductDetailsPageContainer = () => {
  const { product, isLoading } = useAppSelector(
    (state) => state.productDetails
  );

  return <ProductDetailsPageLayout product={product} isLoading={isLoading} />;
};

export default ProductDetailsPageContainer;
