import { FC, memo } from "react";

import style from "./styles.module.scss";

interface PaginationDataProps {
  firstItemIndex: number;
  lastItemIndex: number;
  arrayItemsLength: number | undefined;
}

const PaginationData: FC<PaginationDataProps> = ({
  firstItemIndex,
  lastItemIndex,
  arrayItemsLength,
}) => {
  return (
    <span className={style.paginationData}>{`${
      firstItemIndex + 1
    } - ${lastItemIndex} of ${arrayItemsLength} items`}</span>
  );
};

export default memo(PaginationData);
