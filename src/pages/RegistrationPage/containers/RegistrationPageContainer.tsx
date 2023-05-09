import { FormEvent, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/es/lib/isEmail";
import validator from "validator";

import { signupUser } from "../../../store/signupSlice";

import { useError, useForm } from "../../../hooks";
import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";
import { useModal } from "../../../hooks";

import { ROUTES } from "../../../routes/routeNames";

import RegistrationPageLayout from "../components/RegistrationPageLayout";

const RegistrationPageContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isAuth, isError, error } = useAppSelector(
    (state) => state.signupUser
  );

  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();

  const {
    isFocus,
    formData,
    handleFormFieldChange,
    handleFormReset,
    checkInputFormFocus,
    checkInputFormBlur,
  } = useForm({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: "",
    gender: "",
  });

  const isEmailValid = isEmail(formData.email);
  const isFirstNameValid = formData.firstName.toLowerCase().length > 0;
  const isLastNameValid = formData.lastName.toLowerCase().length > 0;
  const isUserNameValid = formData.username.toLowerCase().length > 0;
  const isGenderValid = formData.gender.toLowerCase().length > 0;
  const isPhoneValid =
    formData.phone.length > 0 && validator.isMobilePhone(formData.phone);
  const isPasswordValid = formData.password.length > 3;
  const isPasswordConfirmValid =
    formData.passwordConfirm.length > 3 &&
    formData.password === formData.passwordConfirm;

  const isFormValid =
    isEmailValid &&
    isFirstNameValid &&
    isLastNameValid &&
    isUserNameValid &&
    isGenderValid &&
    isPhoneValid &&
    isPasswordValid &&
    isPasswordConfirmValid;

  const handleFormSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      if (isFormValid) {
        e.preventDefault();

        if (formData.password === formData.passwordConfirm) {
          dispatch(signupUser(formData));
        }
      }
    },

    [isFormValid, formData, dispatch]
  );

  useEffect(() => {
    if (isAuth) {
      handleModalOpen();

      handleFormReset();

      setTimeout(() => {
        handleModalClose();

        navigate(ROUTES.PRODUCTS_PAGE);
      }, 2000);
    }
  }, [navigate, isAuth, handleModalOpen, handleModalClose, handleFormReset]);

  return (
    <RegistrationPageLayout
      isError={isError}
      isFocus={isFocus}
      isEmailValid={isEmailValid}
      isFirstNameValid={isFirstNameValid}
      isLastNameValid={isLastNameValid}
      isUserNameValid={isUserNameValid}
      isGenderValid={isGenderValid}
      isPhoneValid={isPhoneValid}
      isPasswordValid={isPasswordValid}
      isPasswordConfirmValid={isPasswordConfirmValid}
      isFormValid={isFormValid}
      isModalOpen={isModalOpen}
      error={error}
      formData={formData}
      handleModalClose={handleModalClose}
      handleFormFieldChange={handleFormFieldChange}
      handleFormSubmit={handleFormSubmit}
      checkInputFormFocus={checkInputFormFocus}
      checkInputFormBlur={checkInputFormBlur}
    />
  );
};

export default RegistrationPageContainer;
