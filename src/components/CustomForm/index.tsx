import { FC, FormEvent, ReactNode } from "react";

import style from "./styles.module.scss";

interface CustomFormProps {
  children: ReactNode;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  id: string;
}

const CustomForm: FC<CustomFormProps> = ({ children, handleSubmit, id }) => {
  return (
    <form onSubmit={handleSubmit} id={id} className={style.form}>
      {children}
    </form>
  );
};

export default CustomForm;
