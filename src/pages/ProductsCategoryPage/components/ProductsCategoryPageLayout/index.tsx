import { FC } from "react";

import { IProduct } from "../../../../services/products";

import Loader from "../../../../components/Loader";
import Title from "../../../../components/Title";
import Container from "../../../../components/Container";
import ProductCard from "../../../../components/ProductCard";

import style from "./styles.module.scss";

interface ProductsCategoryProps {
  products: IProduct[];
  category: string;
  isLoading: boolean;
  handleGetProductDetails: (id: number) => void;
}

const ProductsCategoryPageLayout: FC<ProductsCategoryProps> = ({
  products,
  category,
  isLoading,
  handleGetProductDetails,
}) => {
  return (
    <div className={style.products}>
      {isLoading ? (
        <Loader />
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
                      brand={brand}
                      title={title}
                      price={price}
                      stock={stock}
                      thumbnail={thumbnail}
                      discountPercentage={discountPercentage}
                      handleGetProductDetails={() =>
                        handleGetProductDetails(id)
                      }
                    />
                  )
                )}
              </div>
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default ProductsCategoryPageLayout;
