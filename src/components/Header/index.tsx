import { FC, memo, useCallback, ChangeEvent, useEffect } from "react";

import {
  productSearchValueChange,
  searchProduct,
} from "../../store/searchProductSlice";

import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHooks";

import Container from "../Container";
import Catalog from "../Catalog/Catalog";
import CartIconButton from "../Buttons/CartIconButton";
import FormSearch from "../FormSearch";

import style from "./styles.module.scss";
import { useDebounce } from "../../hooks";

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const { productSearchValue } = useAppSelector((state) => state.searchProduct);

  const debounced = useDebounce(productSearchValue);

  const handleProductSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(productSearchValueChange(e.target.value));
    },
    [productSearchValue]
  );

  useEffect(() => {
    if (debounced.trim().toLowerCase() !== "") {
      dispatch(searchProduct(productSearchValue));
    }
  }, [productSearchValue, debounced]);

  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerWrapper}>
          <div className={style.headerItem}>
            <Catalog />
            <FormSearch
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
