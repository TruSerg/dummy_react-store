import React, { FC, memo } from "react";

import style from "./styles.module.scss";

interface DiscountProps {
  value: number;
  className: string;
}

const Discount: FC<DiscountProps> = ({ value, className }) => {
  return <p className={className}>{Math.round(value)}%</p>;
};

export default memo(Discount);
