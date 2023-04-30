import { ChangeEvent, FC, FormEvent } from "react";
import { SelectChangeEvent } from "@mui/material";

import { ISignupFormData } from "../../../../services/formData";

import Container from "../../../../components/Container";
import BasicSelect from "../../../../components/BasicSelect";
import Title from "../../../../components/Title";
import CustomButton from "../../../../components/Buttons/CustomButton";
import FormInput from "../../../../components/Inputs/FormInput";
import CustomForm from "../../../../components/CustomForm";
import Modal from "../../../../components/Modal";
import FormFieldErrorArea from "../../../../components/CustomForm/FormFieldErrorArea";

import style from "./styles.module.scss";

interface RegistrationPageLayoutProps {
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
  formData,
  handleModalClose,
  handleFormFieldChange,
  handleFormSubmit,
  checkInputFormFocus,
  checkInputFormBlur,
}) => {
  return (
    <div className={style.registration}>
      {isModalOpen && (
        <Modal handleClose={handleModalClose}>
          <span className={style.modalText}>
            Your registration is successful!
          </span>
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
              {isFocus && !isFirstNameValid && (
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
              {isFocus && !isLastNameValid && (
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
              {isFocus && !isUserNameValid && (
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
              {isFocus && !isEmailValid && (
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
              {isFocus && !isPhoneValid && (
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
              {isFocus && !isPasswordValid && (
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
              {isFocus && !isPasswordConfirmValid && (
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
              {isFocus && !isGenderValid && (
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
