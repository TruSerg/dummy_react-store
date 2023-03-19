import { FC, memo, useCallback, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  productSearchValueChange,
  searchProduct,
} from "../../store/searchProductSlice";

import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHooks";
import { useDebounce } from "../../hooks";

import { ROUTES } from "../../routes/routeNames";

import Container from "../Container";
import Catalog from "../Catalog/Catalog";
import CartIconButton from "../Buttons/CartIconButton";
import SearchInput from "../SearchInput";

import style from "./styles.module.scss";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { productSearchValue } = useAppSelector((state) => state.searchProduct);

  const debounced = useDebounce(productSearchValue);

  const handleProductSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(productSearchValueChange(e.target.value));
    },
    [dispatch]
  );

  useEffect(() => {
    if (debounced !== "") {
      dispatch(searchProduct(productSearchValue.trim().toLowerCase()));

      navigate(ROUTES.PRODUCTS_SEARCH_PAGE);
    }
  }, [dispatch, navigate, productSearchValue, debounced]);

  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerWrapper}>
          <div className={style.headerItem}>
            <Catalog />
            <SearchInput
              inputValue={productSearchValue}
              handleChange={handleProductSearchChange}
            />
          </div>

          <CartIconButton />
        </div>
      </Container>
    </header>
  );
};

export default memo(Header);
