import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { createOrder, createOrderTotalPrice } from "../store/userOrderSlice";
import { cartClear } from "../store/cartSlice";

import { useAppDispatch, useAppSelector } from "./useStoreHooks";
import { useModal } from "./index";

import { ROUTES } from "../routes/routeNames";

const useMakeOrder = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isMadeOrder, setIsMadeOrder] = useState(false);

  const { cartList, totalPrice } = useAppSelector((state) => state.cart);
  const { isAuth } = useAppSelector((state) => state.signupUser);
  const { userOrderTotalPrice } = useAppSelector((state) => state.userOrder);

  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();

  useEffect(() => {
    dispatch(createOrderTotalPrice(totalPrice));
  }, [dispatch, totalPrice]);

  const handleMakeUserOrder = useCallback(() => {
    if (isAuth) {
      const userOrder = {
        id: uuid(),
        userOrderTotalPrice,
        cartList,
      };

      dispatch(createOrder(userOrder));
      dispatch(cartClear());

      setIsMadeOrder(true);
    } else {
      navigate(ROUTES.REGISTRATION_PAGE);
    }
  }, [isAuth, navigate, userOrderTotalPrice, cartList, dispatch]);

  useEffect(() => {
    if (isMadeOrder) {
      handleModalOpen();

      setTimeout(() => {
        handleModalClose();
        navigate(ROUTES.USER_PAGE);
      }, 2000);
    }
  }, [handleModalOpen, handleModalClose, isMadeOrder]);

  return { isModalOpen, handleModalClose, handleMakeUserOrder };
};

export default useMakeOrder;
