import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { getProductDetails } from "../store/productDetailsSlice";

import { useAppDispatch } from "./useStoreHooks";

import { ROUTES } from "../routes/routeNames";

const UseProductsDetails = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleGetProductDetails = useCallback(
    (productId: number) => {
      dispatch(getProductDetails(productId));

      navigate(ROUTES.PRODUCT_PAGE_DETAILS);
    },
    [dispatch, navigate]
  );

  return { handleGetProductDetails };
};

export default UseProductsDetails;
