import { FC } from "react";
import { memo } from "react";
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
    <div className={style.pagination}>
      <Pagination
        color="secondary"
        variant="outlined"
        shape="rounded"
        count={pageCount}
        page={currentPage}
        onChange={(event, page) => handlePageChange(page)}
      />
    </div>
  );
};

export default memo(BasicPagination);
