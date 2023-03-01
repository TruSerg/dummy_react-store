import React, { memo, FC } from "react";

import style from "./styles.module.scss";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default memo(Container);
