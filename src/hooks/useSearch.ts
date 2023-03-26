import { ChangeEvent, useCallback, useState } from "react";

import { productSearchValueChange } from "../store/searchProductSlice";

import { useAppDispatch } from "./useStoreHooks";

const useSearch = () => {
  const dispatch = useAppDispatch();

  const [isFocus, setIsFocus] = useState(true);

  const handleProductSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(productSearchValueChange(e.target.value));
    },
    [dispatch]
  );

  const checkInputSearchBlur = useCallback(() => {
    setIsFocus(false);
    dispatch(productSearchValueChange(""));
  }, [dispatch]);

  const checkInputSearchFocus = () => {
    setIsFocus(true);
  };

  return {
    isFocus,
    handleProductSearchChange,
    checkInputSearchBlur,
    checkInputSearchFocus,
  };
};
export default useSearch;
