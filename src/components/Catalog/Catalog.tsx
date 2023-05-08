import { useCallback, useEffect } from "react";
import { memo } from "react";

import { getCategories, getCategory } from "../../store/categoriesSlice";
import { getProductsCategory } from "../../store/productsCategorySlice";

import { useAppDispatch, useAppSelector } from "../../hooks/useStoreHooks";
import { useCatalog } from "../../hooks";

import CatalogLayout from "./CatalogLayout";

const Catalog = () => {
  const dispatch = useAppDispatch();

  const { anchorEl, isCatalogOpen, handleCatalogClick, handleCatalogClose } =
    useCatalog();

  const { categories, isLoading, isError, error } = useAppSelector(
    (state) => state.categories
  );

  const handleGetProductsCategory = useCallback(
    (category: string) => {
      dispatch(getProductsCategory(category));
      dispatch(getCategory(category));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <CatalogLayout
      isError={isError}
      isLoading={isLoading}
      isOpen={isCatalogOpen}
      error={error}
      categories={categories}
      anchorEl={anchorEl}
      handleClick={handleCatalogClick}
      handleClose={handleCatalogClose}
      handleGetProductsCategory={handleGetProductsCategory}
    />
  );
};

export default memo(Catalog);
