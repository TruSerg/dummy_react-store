import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { Add, Remove } from "@mui/icons-material";

import { IProduct } from "../../../../services/products";

import { ROUTES } from "../../../../routes/routeNames";

import Container from "../../../../components/Container";
import BasicRating from "../../../../components/Rating";
import BackButton from "../../../../components/Buttons/BackButton";
import ButtonDelete from "../../../../components/Buttons/ButtonDelete";
import CartIsEmptyImage from "../../../../components/CartIsEmptyImage";
import Title from "../../../../components/Title";
import ProductPrice from "../../../../components/ProductPrice";
import CustomButton from "../../../../components/Buttons/CustomButton";
import Modal from "../../../../components/Modal";

import style from "./styles.module.scss";

interface CartPageProps {
  isModalOpen: boolean;
  cartList: IProduct[];
  totalPrice: number;
  handleModalClose: () => void;
  handleGoToDetails: (id: number) => void;
  handleDeleteProductFromCart: (id: number) => void;
  handleProductQuantityIncrement: (product: IProduct) => void;
  handleProductQuantityDecrement: (product: IProduct) => void;
  handleMakeUserOrder: () => void;
}

const CartPageLayout: FC<CartPageProps> = ({
  isModalOpen,
  cartList,
  totalPrice,
  handleModalClose,
  handleGoToDetails,
  handleDeleteProductFromCart,
  handleProductQuantityIncrement,
  handleProductQuantityDecrement,
  handleMakeUserOrder,
}) => {
  return (
    <div className={style.cart}>
      {isModalOpen && (
        <Modal handleClose={handleModalClose}>
          <span className={style.cartModalText}>Your order is accepted!</span>
        </Modal>
      )}

      <Title title="Cart" />
      <Container>
        <>
          <BackButton />
          {cartList.length === 0 ? (
            <CartIsEmptyImage />
          ) : (
            <>
              <div className={style.cartTotalPriceWrapper}>
                <span className={style.cartTotalPriceTitle}>Total price:</span>
                <ProductPrice price={+totalPrice.toFixed(2)} />
              </div>
              {cartList.map((product) => (
                <div className={style.cartContent} key={product.id}>
                  <div className={style.cartTableImage}>
                    <img
                      className={style.cartImg}
                      src={product.thumbnail}
                      alt="product"
                    />
                  </div>
                  <div className={style.cartTableTitle}>
                    <Link
                      to={ROUTES.PRODUCT_DETAILS_PAGE}
                      onClick={() => handleGoToDetails(product.id)}
                    >
                      <p className={style.cartProductTitle}>{product.title}</p>
                    </Link>
                  </div>
                  <div className={style.cartTableRating}>
                    <BasicRating value={product.rating} />
                  </div>
                  <div className={style.cartTableButtons}>
                    <div className={style.cartIconGroup}>
                      <button
                        className={style.cartIconButton}
                        onClick={() => handleProductQuantityDecrement(product)}
                      >
                        <Remove color="inherit" fontSize="inherit" />
                      </button>
                      <span className={style.cartQuantityLabel}>
                        {product.quantity}
                      </span>
                      <button
                        className={style.cartIconButton}
                        onClick={() => handleProductQuantityIncrement(product)}
                      >
                        <Add color="inherit" fontSize="inherit" />
                      </button>
                    </div>
                    <ButtonDelete
                      handleDelete={() =>
                        handleDeleteProductFromCart(product.id)
                      }
                    />
                  </div>
                  <div className={style.cartTablePrice}>
                    <ProductPrice
                      title="Price:"
                      price={+(product.price * product.quantity).toFixed(2)}
                    />
                  </div>
                </div>
              ))}
              <div className={style.cartOrder}>
                <CustomButton
                  title="Create order"
                  handleClick={handleMakeUserOrder}
                />
              </div>
            </>
          )}
        </>
      </Container>
    </div>
  );
};

export default memo(CartPageLayout);
