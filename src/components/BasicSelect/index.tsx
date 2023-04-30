import { FC, FocusEvent } from "react";

import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface BasicSelectProps {
  className: string;
  value: string;
  label: string;
  name: string;
  handleFieldChange: (e: SelectChangeEvent) => void;
  checkInputFormBlur: (e: FocusEvent<HTMLInputElement>) => void;
  checkInputFormFocus: (e: FocusEvent<HTMLInputElement>) => void;
}

const BasicSelect: FC<BasicSelectProps> = ({
  className,
  value,
  label,
  name,
  handleFieldChange,
  checkInputFormFocus,
  checkInputFormBlur,
}) => {
  return (
    <FormControl fullWidth className={className}>
      <InputLabel color="secondary" id="demo-simple-select-label">
        Gender
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name={name}
        value={value}
        label={label}
        onChange={handleFieldChange}
        onFocus={checkInputFormFocus}
        onBlur={checkInputFormBlur}
        color="secondary"
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </Select>
    </FormControl>
  );
};

export default BasicSelect;
