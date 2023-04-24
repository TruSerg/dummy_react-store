import { FC, ReactNode } from "react";

import style from "./styles.module.scss";

interface ModalProps {
  children: ReactNode;
  handleClose: () => void;
}

const Modal: FC<ModalProps> = ({ children, handleClose }) => {
  return (
    <>
      <div className={style.overlay} onClick={handleClose} />
      <div className={style.modal}>{children}</div>
    </>
  );
};

export default Modal;
