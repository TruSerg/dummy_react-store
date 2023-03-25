import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IProduct } from "../services/products";

import { useAppDispatch, useAppSelector } from "./useStoreHooks";

import { ROUTES } from "../routes/routeNames";

import {
  addProductToCart,
  cartItemChange,
  cartTotalSum,
  deleteProductFromCart,
} from "../store/cartSlice";

const useCart = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { cartList } = useAppSelector((state) => state.cart);
  const { productsResponse } = useAppSelector((state) => state.products);

  const handleAddProductToCart = useCallback(
    (id: number) => {
      productsResponse.products?.filter((product) => {
        if (product.id === id) {
          const addProduct = { ...product, quantity: 1 };

          dispatch(addProductToCart(addProduct));
        }
      });
    },
    [dispatch, productsResponse.products]
  );

  const handleDeleteProductFromCart = useCallback(
    (id: number) => {
      dispatch(deleteProductFromCart(id));
    },
    [dispatch]
  );

  const handleProductQuantityIncrement = useCallback(
    (product: IProduct) => {
      const updatedProduct = {
        ...product,
        id: product.id,
        quantity: product.quantity + 1,
      };
      dispatch(cartItemChange(updatedProduct));
    },
    [dispatch]
  );

  const handleProductQuantityDecrement = useCallback(
    (product: IProduct) => {
      if (product.quantity > 1) {
        const updatedProduct = {
          ...product,
          id: product.id,
          quantity: product.quantity - 1,
        };
        dispatch(cartItemChange(updatedProduct));
      }
    },
    [dispatch]
  );

  const handleGoToCart = () => {
    navigate(ROUTES.CART_PAGE);
  };

  const isAddItemToCart = useCallback(
    (id: number) => {
      return cartList.findIndex((item) => item.id === id) !== -1;
    },
    [cartList]
  );

  useEffect(() => {
    dispatch(cartTotalSum());
  }, [dispatch, cartList]);

  return {
    handleAddProductToCart,
    handleDeleteProductFromCart,
    handleProductQuantityIncrement,
    handleProductQuantityDecrement,
    handleGoToCart,
    isAddItemToCart,
  };
};

export default useCart;
