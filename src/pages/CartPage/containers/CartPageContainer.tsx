import { useAppSelector } from "../../../hooks/useStoreHooks";
import { useCart, useProductsDetails } from "../../../hooks";

import CartPageLayout from "../components/CartPageLayout";

const CartPageContainer = () => {
  const { cartList, totalPrice } = useAppSelector((state) => state.cart);

  const {
    handleDeleteProductFromCart,
    handleProductQuantityIncrement,
    handleProductQuantityDecrement,
  } = useCart();

  const { handleGetProductDetails } = useProductsDetails();

  return (
    <CartPageLayout
      cartList={cartList}
      totalPrice={totalPrice}
      handleGoToDetails={handleGetProductDetails}
      handleDeleteProductFromCart={handleDeleteProductFromCart}
      handleProductQuantityIncrement={handleProductQuantityIncrement}
      handleProductQuantityDecrement={handleProductQuantityDecrement}
    />
  );
};

export default CartPageContainer;
