import React, { FC, memo } from "react";

import style from "./styles.module.scss";
import Header from "../Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <Header />
      {children}
    </div>
  );
};

export default memo(MainLayout);
