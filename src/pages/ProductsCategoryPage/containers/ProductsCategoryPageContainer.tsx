import { useAppSelector } from '../../../hooks/useStoreHooks';
import { useProductsDetails, useCart, useError } from '../../../hooks';

import ProductsCategoryPageLayout from '../components/ProductsCategoryPageLayout';

const ProductsCategoryPageContainer = () => {
	const { isLoading, isError, error, productsCategory } = useAppSelector(
		state => state.productsCategory
	);

	const { category } = useAppSelector(state => state.categories);

	const { handleGetProductDetails } = useProductsDetails();

	const { isModalOpen, handleModalClose } = useError(isError);

	const { handleAddProductToCart, handleGoToCart, isAddItemToCart } = useCart();

	return (
		<ProductsCategoryPageLayout
			isLoading={isLoading}
			isModalOpen={isModalOpen}
			isAddItemToCart={isAddItemToCart}
			products={productsCategory.products}
			category={category}
			error={error}
			handleModalClose={handleModalClose}
			handleGetProductDetails={handleGetProductDetails}
			handleAddProductToCart={handleAddProductToCart}
			handleGoToCart={handleGoToCart}
		/>
	);
};

export default ProductsCategoryPageContainer;
