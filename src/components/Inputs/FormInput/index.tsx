import { ChangeEvent, FC } from "react";

import style from "./styles.module.scss";
import { SelectChangeEvent } from "@mui/material";

interface FormInputProps {
  type: string;
  value: string;
  name: string;
  handleFieldChange: (
    e: ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => void;
  placeholder: string;
}

const FormInput: FC<FormInputProps> = ({
  type,
  value,
  name,
  handleFieldChange,
  placeholder,
}) => {
  return (
    <input
      className={style.input}
      type={type}
      value={value}
      name={name}
      onChange={handleFieldChange}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
