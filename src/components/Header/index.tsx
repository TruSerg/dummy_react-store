import { FC } from "react";

import Container from "../Container";

import style from "./styles.module.scss";

const Header: FC = () => {
  return (
    <header className={style.header}>
      <Container>
        <h2>Header</h2>
      </Container>
    </header>
  );
};

export default Header;
