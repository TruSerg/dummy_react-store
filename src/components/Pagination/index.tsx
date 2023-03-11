import { FC, memo } from "react";
import { Pagination } from "@mui/material";

import style from "./styles.module.scss";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  handlePageChange: (page: number) => void;
}

const BasicPagination: FC<PaginationProps> = ({
  currentPage,
  pageCount,
  handlePageChange,
}) => {
  return (
    <Pagination
      className={style.pagination}
      size="small"
      color="secondary"
      variant="outlined"
      shape="rounded"
      count={pageCount}
      page={currentPage}
      onChange={(event, page) => handlePageChange(page)}
    />
  );
};

export default memo(BasicPagination);
