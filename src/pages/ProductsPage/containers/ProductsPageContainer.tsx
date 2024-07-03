import { FC, useEffect } from 'react';

import { getProducts } from '../../../store/productsSlice';

import { useAppDispatch, useAppSelector } from '../../../hooks/useStoreHooks';
import { useError, usePagination, useProductsDetails } from '../../../hooks';
import { useCart } from '../../../hooks';

import ProductsPageLayout from '../components/ProductsPageLayout';

const ProductsPageContainer: FC = () => {
	const dispatch = useAppDispatch();

	const { isLoading, isError, error, productsResponse } = useAppSelector(
		state => state.products
	);

	const { isModalOpen } = useError(isError);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	const {
		array,
		list,
		isPageLoading,
		firstProductsIndex,
		lastProductsIndex,
		currentPage,
		pageCount,
		handlePageChange,
	} = usePagination(productsResponse.products);

	const { handleAddProductToCart, handleGoToCart, isAddItemToCart } = useCart();

	const { handleGetProductDetails } = useProductsDetails();

	return (
		<ProductsPageLayout
			isModalOpen={isModalOpen}
			isProductsLoading={isLoading}
			isPageLoading={isPageLoading}
			error={error}
			currentPage={currentPage}
			products={list}
			productsLength={array?.length}
			firstProductsIndex={firstProductsIndex}
			lastProductsIndex={lastProductsIndex}
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
