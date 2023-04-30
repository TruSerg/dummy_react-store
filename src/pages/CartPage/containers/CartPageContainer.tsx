import { useAppSelector } from "../../../hooks/useStoreHooks";
import { useCart, useProductsDetails, useMakeOrder } from "../../../hooks";

import CartPageLayout from "../components/CartPageLayout";

const CartPageContainer = () => {
  const { cartList, totalPrice } = useAppSelector((state) => state.cart);

  const { isModalOpen, handleModalClose, handleMakeUserOrder } = useMakeOrder();
  const {
    handleDeleteProductFromCart,
    handleProductQuantityIncrement,
    handleProductQuantityDecrement,
  } = useCart();

  const { handleGetProductDetails } = useProductsDetails();

  return (
    <CartPageLayout
      isModalOpen={isModalOpen}
      cartList={cartList}
      totalPrice={totalPrice}
      handleModalClose={handleModalClose}
      handleGoToDetails={handleGetProductDetails}
      handleDeleteProductFromCart={handleDeleteProductFromCart}
      handleProductQuantityIncrement={handleProductQuantityIncrement}
      handleProductQuantityDecrement={handleProductQuantityDecrement}
      handleMakeUserOrder={handleMakeUserOrder}
    />
  );
};

export default CartPageContainer;
