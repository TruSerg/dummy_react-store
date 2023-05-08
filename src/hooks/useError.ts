import { useEffect } from "react";

import { useModal } from "./index";

const useError = (isError: boolean) => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  useEffect(() => {
    if (isError) {
      handleModalOpen();
    }
  }, [isError, handleModalOpen]);

  return { isModalOpen, handleModalClose };
};

export default useError;
