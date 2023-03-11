import { useCallback, useEffect, useState } from "react";

import { IProduct } from "../services/products";

const UsePagination = (array: IProduct[] | undefined) => {
  const [list, setList] = useState<IProduct[]>();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [pageCount, setPageCount] = useState(0);
  const [perPage] = useState(10);

  const lastProductsIndex = currentPage * perPage;
  const firstProductsIndex = lastProductsIndex - perPage;

  const currentList = array?.slice(firstProductsIndex, lastProductsIndex);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoading(false);
      setList(currentList);

      if (array?.length !== undefined) {
        setPageCount(Math.ceil(array.length / perPage));
      }
    }, 500);
  }, [currentPage, array, perPage]);

  const handlePageChange = useCallback(
    (page: number) => {
      setIsPageLoading(true);
      if (page !== currentPage) {
        setCurrentPage(page);
      }
    },
    [currentPage]
  );

  return {
    list,
    isPageLoading,
    currentPage,
    pageCount,
    firstProductsIndex,
    handlePageChange,
  };
};

export default UsePagination;
