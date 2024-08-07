import { FC, memo } from "react";

interface DiscountProps {
  value: number;
  className: string;
}

const Discount: FC<DiscountProps> = ({ value, className }) => {
  return <p className={className}>{Math.ceil(value)}%</p>;
};

export default memo(Discount);
