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
  isEmailValid: boolean;
  isFirstNameValid: boolean;
  isLastNameValid: boolean;
  isUserNameValid: boolean;
  isGenderValid: boolean;
  isPhoneValid: boolean;
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
}

const RegistrationPageLayout: FC<RegistrationPageLayoutProps> = ({
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
                handleFieldChange={handleFormFieldChange}
                placeholder="First name..."
              />
              {!isFirstNameValid && <FormFieldErrorArea title="Required!" />}
            </div>
            <div className={style.registrationInput}>
              <FormInput
                type="text"
                value={formData.lastName}
                name="lastName"
                handleFieldChange={handleFormFieldChange}
                placeholder="Last name..."
              />
              {!isLastNameValid && <FormFieldErrorArea title="Required!" />}
            </div>
            <div className={style.registrationInput}>
              <FormInput
                type="text"
                value={formData.username}
                name="username"
                handleFieldChange={handleFormFieldChange}
                placeholder="Username..."
              />
              {!isUserNameValid && <FormFieldErrorArea title="Required!" />}
            </div>
            <div className={style.registrationInput}>
              <FormInput
                type="email"
                value={formData.email}
                name="email"
                handleFieldChange={handleFormFieldChange}
                placeholder="Email..."
              />
              {!isEmailValid && (
                <FormFieldErrorArea title="Email is incorrect!" />
              )}
            </div>
            <div className={style.registrationInput}>
              <FormInput
                type="phone"
                value={formData.phone}
                name="phone"
                handleFieldChange={handleFormFieldChange}
                placeholder="Phone..."
              />
              {!isPhoneValid && <FormFieldErrorArea title="Required!" />}
            </div>
            <div className={style.registrationInput}>
              <FormInput
                type="password"
                value={formData.password}
                name="password"
                handleFieldChange={handleFormFieldChange}
                placeholder="Password..."
              />
              {!isPasswordValid && <FormFieldErrorArea title="Required!" />}
            </div>
            <div className={style.registrationInput}>
              <FormInput
                type="password"
                value={formData.passwordConfirm}
                name="passwordConfirm"
                handleFieldChange={handleFormFieldChange}
                placeholder="Confirm password..."
              />
              {!isPasswordConfirmValid && (
                <FormFieldErrorArea title="Required!" />
              )}
            </div>
            <div className={style.registrationInput}>
              <BasicSelect
                className={style.registrationSelect}
                value={formData.gender}
                name="gender"
                label="Gender"
                handleFieldChange={handleFormFieldChange}
              />
              {!isGenderValid && <FormFieldErrorArea title="Required!" />}
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
