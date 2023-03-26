import { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { searchProduct } from "../../store/searchProductSlice";

import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHooks";
import { useDebounce, useSearch } from "../../hooks";

import { ROUTES } from "../../routes/routeNames";

import HeaderLayout from "./HeaderLayout";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { productSearchValue } = useAppSelector((state) => state.searchProduct);

  const debouncedSearchProductValue = useDebounce(productSearchValue);
  const {
    isFocus,
    handleProductSearchChange,
    checkInputSearchBlur,
    checkInputSearchFocus,
  } = useSearch();

  useEffect(() => {
    if (isFocus && debouncedSearchProductValue !== "") {
      dispatch(searchProduct(debouncedSearchProductValue.trim().toLowerCase()));

      navigate(ROUTES.PRODUCTS_SEARCH_PAGE);
    }
  }, [dispatch, navigate, debouncedSearchProductValue, isFocus]);

  return (
    <HeaderLayout
      productSearchValue={productSearchValue}
      handleProductSearchChange={handleProductSearchChange}
      checkInputSearchBlur={checkInputSearchBlur}
      checkInputSearchFocus={checkInputSearchFocus}
    />
  );
};

export default memo(Header);
