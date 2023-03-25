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
  checkInputSearchFocus: () => void;
}

const HeaderLayout: FC<HeaderProps> = ({
  productSearchValue,
  handleProductSearchChange,
  checkInputSearchFocus,
}) => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerWrapper}>
          <div className={style.headerCatalog}>
            <Catalog />
          </div>
          <div className={style.headerInput}>
            <SearchInput
              productSearchValue={productSearchValue}
              handleProductSearchChange={handleProductSearchChange}
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
