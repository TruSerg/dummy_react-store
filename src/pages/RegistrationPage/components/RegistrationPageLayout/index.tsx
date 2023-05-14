import { ChangeEvent, FC, FormEvent } from "react";
import { SelectChangeEvent } from "@mui/material";
import { Link } from "react-router-dom";

import { ISignupFormData } from "../../../../services/formData";

import { ROUTES } from "../../../../routes/routeNames";

import Container from "../../../../components/Container";
import BasicSelect from "../../../../components/BasicSelect";
import Title from "../../../../components/Title";
import CustomButton from "../../../../components/Buttons/CustomButton";
import FormInput from "../../../../components/Inputs/FormInput";
import CustomForm from "../../../../components/CustomForm";
import Modal from "../../../../components/Modal";
import FormFieldErrorArea from "../../../../components/CustomForm/FormFieldErrorArea";
import BasicError from "../../../../components/Error";
import Loader from "../../../../components/Loader";

import style from "./styles.module.scss";

interface RegistrationPageLayoutProps {
  isLoading: boolean;
  isError: boolean;
  isFocus: boolean;
  isEmailValid: boolean;
  isFirstNameValid: boolean;
  isLastNameValid: boolean;
  isUserNameValid: boolean;
  isGenderValid: boolean;
  isPhoneValid: boolean | RegExp;
  isPasswordValid: boolean;
  isPasswordConfirmValid: boolean;
  isFormValid: boolean;
  isModalOpen: boolean;
  error: string | null;
  formData: ISignupFormData;
  handleModalClose: () => void;
  handleFormFieldChange: (
    e: ChangeEvent<HTMLInputElement> | SelectChangeEvent
  ) => void;
  handleFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  checkInputFormBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  checkInputFormFocus: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RegistrationPageLayout: FC<RegistrationPageLayoutProps> = ({
  isLoading,
  isError,
  isFocus,
  isEmailValid,
  isFirstNameValid,
  isLastNameValid,
  isUserNameValid,
  isGenderValid,
  isPhoneValid,
  isPasswordValid,
  isPasswordConfirmValid,
  isFormValid,
  isModalOpen,
  error,
  formData,
  handleModalClose,
  handleFormFieldChange,
  handleFormSubmit,
  checkInputFormFocus,
  checkInputFormBlur,
}) => {
  return (
    <div className={style.registration}>
      {isLoading && <Loader />}

      {isModalOpen && (
        <Modal handleClose={handleModalClose}>
          <span className={style.modalText}>
            Your registration is successful!
          </span>
        </Modal>
      )}

      {isError && (
        <Modal>
          <div>
            <p className={style.registrationErrorText}>
              <BasicError error={error} />
            </p>
            <Link to={ROUTES.PRODUCTS_PAGE}>
              <CustomButton title="OK" handleClick={handleModalClose} />
            </Link>
          </div>
        </Modal>
      )}

      <Title title="Signup" />
      <Container>
        <div className={style.registrationWrapper}>
          <CustomForm handleSubmit={handleFormSubmit} id="myForm">
            <div className={style.registrationInput}>
              <FormInput
                type="text"
                value={formData.firstName}
                name="firstName"
                placeholder="First name..."
                handleFieldChange={handleFormFieldChange}
                checkInputFormFocus={checkInputFormFocus}
                checkInputFormBlur={checkInputFormBlur}
              />
              {!isFirstNameValid && isFocus && (
                <FormFieldErrorArea title="Required!" />
              )}
            </div>
            <div className={style.registrationInput}>
              <FormInput
                type="text"
                value={formData.lastName}
                name="lastName"
                placeholder="Last name..."
                handleFieldChange={handleFormFieldChange}
                checkInputFormFocus={checkInputFormFocus}
                checkInputFormBlur={checkInputFormBlur}
              />
              {!isLastNameValid && isFocus && (
                <FormFieldErrorArea title="Required!" />
              )}
            </div>
            <div className={style.registrationInput}>
              <FormInput
                type="text"
                value={formData.username}
                name="username"
                placeholder="Username..."
                handleFieldChange={handleFormFieldChange}
                checkInputFormFocus={checkInputFormFocus}
                checkInputFormBlur={checkInputFormBlur}
              />
              {!isUserNameValid && isFocus && (
                <FormFieldErrorArea title="Required!" />
              )}
            </div>
            <div className={style.registrationInput}>
              <FormInput
                type="email"
                value={formData.email}
                name="email"
                placeholder="Email..."
                handleFieldChange={handleFormFieldChange}
                checkInputFormFocus={checkInputFormFocus}
                checkInputFormBlur={checkInputFormBlur}
              />
              {!isEmailValid && isFocus && (
                <FormFieldErrorArea title="Email is incorrect!" />
              )}
            </div>
            <div className={style.registrationInput}>
              <FormInput
                type="phone"
                value={formData.phone}
                name="phone"
                placeholder="Phone..."
                handleFieldChange={handleFormFieldChange}
                checkInputFormFocus={checkInputFormFocus}
                checkInputFormBlur={checkInputFormBlur}
              />
              {!isPhoneValid && isFocus && (
                <FormFieldErrorArea title="Phone is incorrect!" />
              )}
            </div>
            <div className={style.registrationInput}>
              <FormInput
                type="password"
                value={formData.password}
                name="password"
                placeholder="Password..."
                handleFieldChange={handleFormFieldChange}
                checkInputFormFocus={checkInputFormFocus}
                checkInputFormBlur={checkInputFormBlur}
              />
              {!isPasswordValid && isFocus && (
                <FormFieldErrorArea title="Password is incorrect!" />
              )}
            </div>
            <div className={style.registrationInput}>
              <FormInput
                type="password"
                value={formData.passwordConfirm}
                name="passwordConfirm"
                placeholder="Confirm password..."
                handleFieldChange={handleFormFieldChange}
                checkInputFormFocus={checkInputFormFocus}
                checkInputFormBlur={checkInputFormBlur}
              />
              {!isPasswordConfirmValid && isFocus && (
                <FormFieldErrorArea title="Confirm password is incorrect!" />
              )}
            </div>
            <div className={style.registrationInput}>
              <BasicSelect
                className={style.registrationSelect}
                value={formData.gender}
                name="gender"
                label="Gender"
                handleFieldChange={handleFormFieldChange}
                checkInputFormFocus={checkInputFormFocus}
                checkInputFormBlur={checkInputFormBlur}
              />
              {!isGenderValid && isFocus && (
                <FormFieldErrorArea title="Required!" />
              )}
            </div>
            <CustomButton
              title={"SIGNUP"}
              type="submit"
              form="myForm"
              disabled={!isFormValid}
            />
          </CustomForm>
        </div>
      </Container>
    </div>
  );
};

export default RegistrationPageLayout;
