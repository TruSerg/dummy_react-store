import { useState, useCallback, ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

const useForm = (initialFormData: any) => {
  const [formData, setFormData] = useState(initialFormData);

  const handleFormFieldChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> | SelectChangeEvent) => {
      setFormData((state: any) => {
        const { name, value } = e.target;

        return {
          ...state,
          [name]: value,
        };
      });
    },
    []
  );

  const handleFormReset = useCallback(() => {
    setFormData(initialFormData);
  }, [initialFormData]);

  return { formData, handleFormFieldChange, handleFormReset };
};

export default useForm;
