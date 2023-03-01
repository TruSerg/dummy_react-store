import { FC } from "react";

import { IProduct } from "../../../../services/products";

import Container from "../../../../components/Container";
import Slider from "../../../../components/Slider";
import Button from "../../../../components/Buttons/Button";
import Loader from "../../../../components/Loader";
import ProductPrice from "../../../../components/ProductPrice";
import ProductStock from "../../../../components/ProductStock";

import style from "./styles.module.scss";

interface ProductDetailsPageProps {
  product: IProduct;
  isLoading: boolean;
}

const ProductDetailsPageLayout: FC<ProductDetailsPageProps> = ({
  product,
  isLoading,
}) => {
  return (
    <div className={style.wrapper}>
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h2 className={style.wrapperTitle}>{product.brand}</h2>
            <div className={style.wrapperSlider}>
              <Slider images={product.images} />
            </div>
            <div className={style.wrapperProduct}>
              <div className={style.wrapperImg}>
                <img src={product.thumbnail} alt="product" />
              </div>

              <div className={style.wrapperProductDetails}>
                <h3 className={style.wrapperProductTitle}>{product.title}</h3>
                <p className={style.wrapperProductDescription}>
                  {product.description}
                </p>

                <div className={style.wrapperFooter}>
                  <div className={style.wrapperProductStock}>
                    <ProductStock stock={product.stock} />
                  </div>
                  <div className={style.wrapperProductPrice}>
                    <ProductPrice price={product.price} />
                  </div>
                  <div className={style.wrapperBtn}>
                    <Button title={"Add to cart"} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default ProductDetailsPageLayout;
