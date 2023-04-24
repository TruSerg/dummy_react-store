import { FC, memo } from "react";

import style from "./styles.module.scss";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  form?: string | undefined;
  handleClick?: () => void;
}

const CustomButton: FC<ButtonProps> = ({
  title,
  disabled,
  handleClick,
  type,
  form,
}) => {
  return (
    <button
      className={style.button}
      onClick={handleClick}
      type={type}
      form={form}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default memo(CustomButton);
