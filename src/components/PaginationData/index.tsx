import { FC, memo } from "react";

import style from "./styles.module.scss";

interface PaginationDataProps {
  currentQuantityProducts: number;
  indexOfFirstProduct: number;
  products: number | undefined;
}

const PaginationData: FC<PaginationDataProps> = ({
  currentQuantityProducts,
  indexOfFirstProduct,
  products,
}) => {
  return (
    <div className={style.paginationArea}>
      <span className={style.paginationData}>{`${
        indexOfFirstProduct + 1
      } - ${products} of ${currentQuantityProducts} items`}</span>
    </div>
  );
};

export default memo(PaginationData);
