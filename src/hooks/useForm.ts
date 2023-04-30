import { useState, useCallback, ChangeEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

const useForm = (initialFormData: any) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isFocus, setIsFocus] = useState(true);

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

  const checkInputFormBlur = () => {
    setIsFocus(false);
  };

  const checkInputFormFocus = () => {
    setIsFocus(true);
  };

  return {
    isFocus,
    formData,
    handleFormFieldChange,
    handleFormReset,
    checkInputFormBlur,
    checkInputFormFocus,
  };
};

export default useForm;
