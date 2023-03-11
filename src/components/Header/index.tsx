import { FC, memo } from "react";

import Container from "../Container";
import Catalog from "../Catalog/Catalog";
import CartIconButton from "../Buttons/CartIconButton";

import style from "./styles.module.scss";

const Header: FC = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerWrapper}>
          <Catalog />
          <CartIconButton />
        </div>
      </Container>
    </header>
  );
};

export default memo(Header);
