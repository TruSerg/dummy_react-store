import { ChangeEvent, FC, memo } from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../routes/routeNames";

import Container from "../Container";
import Catalog from "../Catalog/Catalog";
import SearchInput from "../Inputs/SearchInput";
import CartIconButton from "../Buttons/CartIconButton";
import SignupIconButton from "../Buttons/SignupIconButton";

import style from "./styles.module.scss";
import AccountIconButton from "../Buttons/AccountIconButton";

interface HeaderProps {
  isAuth: boolean;
  productSearchValue: string;
  handleProductSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checkInputSearchBlur: () => void;
  checkInputSearchFocus: () => void;
}

const HeaderLayout: FC<HeaderProps> = ({
  isAuth,
  productSearchValue,
  handleProductSearchChange,
  checkInputSearchBlur,
  checkInputSearchFocus,
}) => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerTop}>
          <a
            href="https://dummyjson.com"
            target="_blank"
            rel="noreferrer"
            className={style.headerLogo}
          >
            DUMMYstore.
          </a>
          {isAuth ? <AccountIconButton /> : <SignupIconButton />}
        </div>

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
