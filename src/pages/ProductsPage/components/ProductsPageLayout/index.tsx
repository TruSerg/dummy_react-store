import { FC } from 'react';

import { IProduct } from '../../../../services/products';

import Container from '../../../../components/Container';
import ProductCard from '../../../../components/ProductCard';
import BasicPagination from '../../../../components/Pagination';
import Loader from '../../../../components/Loader';
import Title from '../../../../components/Title';
import PaginationData from '../../../../components/PaginationData';
import Modal from '../../../../components/Modal';
import BasicError from '../../../../components/Error';

import style from './styles.module.scss';

interface ProductsPageProps {
	isModalOpen: boolean;
	isProductsLoading: boolean;
	isPageLoading: boolean;
	error: string | null;
	products: IProduct[] | undefined;
	productsLength: number | undefined;
	firstProductsIndex: number;
	lastProductsIndex: number;
	currentPage: number;
	pageCount: number;
	handlePageChange: (page: number) => void;
	handleGetProductDetails: (id: number) => void;
	handleAddProductToCart: (id: number) => void;
	handleGoToCart: () => void;
	isAddItemToCart: (id: number) => boolean;
}

const ProductsPageLayout: FC<ProductsPageProps> = ({
	isModalOpen,
	error,
	isProductsLoading,
	isPageLoading,
	products,
	productsLength,
	firstProductsIndex,
	lastProductsIndex,
	currentPage,
	pageCount,
	handlePageChange,
	handleGetProductDetails,
	handleAddProductToCart,
	handleGoToCart,
	isAddItemToCart,
}) => {
	return (
		<div className={style.products}>
			{isModalOpen ? (
				<Modal>
					<BasicError error={error} />
				</Modal>
			) : (
				<>
					{isProductsLoading || isPageLoading ? (
						<Loader />
					) : (
						<>
							<Title title='Products' />
							<Container>
								<div className={style.productsArea}>
									<div className={style.productsWrapper}>
										{products?.map(
											({
												id,
												brand,
												title,
												rating,
												price,
												stock,
												thumbnail,
												discountPercentage,
											}) => (
												<ProductCard
													key={id}
													id={id}
													brand={brand}
													title={title}
													rating={rating}
													price={price}
													stock={stock}
													thumbnail={thumbnail}
													discountPercentage={discountPercentage}
													handleGetProductDetails={() =>
														handleGetProductDetails(id)
													}
													handleAddProductToCart={() =>
														handleAddProductToCart(id)
													}
													handleGoToCart={handleGoToCart}
													isAddItemToCart={isAddItemToCart}
												/>
											)
										)}
									</div>
									<div className={style.productsPagination}>
										<PaginationData
											firstItemIndex={firstProductsIndex}
											lastItemIndex={lastProductsIndex}
											arrayItemsLength={productsLength}
										/>

										<BasicPagination
											pageCount={pageCount}
											currentPage={currentPage}
											handlePageChange={handlePageChange}
										/>
									</div>
								</div>
							</Container>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default ProductsPageLayout;
