import { ChangeEvent, FC, memo } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../routes/routeNames";

import Container from "../Container";
import Catalog from "../Catalog/Catalog";
import SearchInput from "../SearchInput";
import CartIconButton from "../Buttons/CartIconButton";

import style from "./styles.module.scss";

interface HeaderProps {
  productSearchValue: string;
  handleProductSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checkInputSearchBlur: () => void;
  checkInputSearchFocus: () => void;
}

const HeaderLayout: FC<HeaderProps> = ({
  productSearchValue,
  handleProductSearchChange,
  checkInputSearchBlur,
  checkInputSearchFocus,
}) => {
  return (
    <header className={style.header}>
      <Container>
        <a
          href="https://dummyjson.com"
          target="_blank"
          rel="noreferrer"
          className={style.headerLogo}
        >
          DUMMYstore.
        </a>
        <div className={style.headerWrapper}>
          <div className={style.headerCatalog}>
            <Catalog />
          </div>
          <div className={style.headerInput}>
            <SearchInput
              productSearchValue={productSearchValue}
              handleProductSearchChange={handleProductSearchChange}
              checkInputSearchBlur={checkInputSearchBlur}
              checkInputSearchFocus={checkInputSearchFocus}
            />
          </div>

          <Link className={style.headerLink} to={ROUTES.PRODUCTS_PAGE}>
            Products
          </Link>
          <div className={style.headerCartButton}>
            <CartIconButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default memo(HeaderLayout);
