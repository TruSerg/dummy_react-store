import { memo, useCallback, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  productSearchValueChange,
  searchProduct,
} from "../../store/searchProductSlice";

import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHooks";
import { useDebounce } from "../../hooks";

import { ROUTES } from "../../routes/routeNames";

import HeaderLayout from "./HeaderLayout";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { productSearchValue } = useAppSelector((state) => state.searchProduct);

  const debouncedSearchProductValue = useDebounce(productSearchValue);

  const handleProductSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(productSearchValueChange(e.target.value));
    },
    [dispatch]
  );

  const checkInputSearchFocus = useCallback(() => {
    dispatch(productSearchValueChange(""));
  }, [dispatch]);

  useEffect(() => {
    if (debouncedSearchProductValue !== "") {
      dispatch(searchProduct(debouncedSearchProductValue.trim().toLowerCase()));

      navigate(ROUTES.PRODUCTS_SEARCH_PAGE);
    }
  }, [dispatch, navigate, debouncedSearchProductValue]);

  return (
    <HeaderLayout
      productSearchValue={productSearchValue}
      handleProductSearchChange={handleProductSearchChange}
      checkInputSearchFocus={checkInputSearchFocus}
    />
  );
};

export default memo(Header);
