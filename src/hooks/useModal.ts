import { useState, useCallback } from "react";

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = useCallback(() => {
    setModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  return { isModalOpen, handleModalOpen, handleModalClose };
};

export default useModal;
