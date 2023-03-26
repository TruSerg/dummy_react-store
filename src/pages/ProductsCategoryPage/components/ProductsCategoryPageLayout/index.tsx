import { FC } from "react";

import { IProduct } from "../../../../services/products";

import Loader from "../../../../components/Loader";
import Title from "../../../../components/Title";
import Container from "../../../../components/Container";
import ProductCard from "../../../../components/ProductCard";
import NotFoundComponent from "../../../../components/NotFoundComponent";

import style from "./styles.module.scss";

interface ProductsCategoryProps {
  products: IProduct[];
  category: string;
  isLoading: boolean;
  handleGetProductDetails: (id: number) => void;
  handleAddProductToCart: (id: number) => void;
  handleGoToCart: () => void;
  isAddItemToCart: (id: number) => boolean;
}

const ProductsCategoryPageLayout: FC<ProductsCategoryProps> = ({
  products,
  category,
  isLoading,
  handleGetProductDetails,
  handleAddProductToCart,
  handleGoToCart,
  isAddItemToCart,
}) => {
  return (
    <div className={style.products}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {products === undefined ? (
            <NotFoundComponent title={"Category is not found!"} />
          ) : (
            <>
              <Title title={category} />
              <Container>
                <div className={style.productsArea}>
                  <div className={style.productsWrapper}>
                    {products?.map(
                      ({
                        id,
                        brand,
                        title,
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
                </div>
              </Container>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProductsCategoryPageLayout;
