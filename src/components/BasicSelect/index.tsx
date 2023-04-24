import { FC } from "react";

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
}

const BasicSelect: FC<BasicSelectProps> = ({
  className,
  value,
  label,
  name,
  handleFieldChange,
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
        color="secondary"
      >
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </Select>
    </FormControl>
  );
};

export default BasicSelect;
