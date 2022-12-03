import { useState, useCallback } from "react";
import isEmail from "validator/lib/isEmail";
import { REGEX_NAME } from "../utils/constants";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;
    const validationMessage = target.validationMessage;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setDescriptionErrors(name, value, validationMessage)
    setIsValid(target.closest("form").checkValidity());
  };

  function setValuesErrors(name, validationMessage) {
    setErrors((prevState) => ({
      ...prevState,
      [name]: validationMessage,
    }));
  }

  function setDescriptionErrors(name, value, validationMessage) {
    switch (name) {
      case "name":
        if (value.length === 0) {
          setErrors((prevState) => ({
            ...prevState,
            name: 'Поле "имя" должно быть заполнено',
          }));
        } else if (value.length < 2 || value.length > 30) {
          setErrors((prevState) => ({
            ...prevState,
            name: 'Поле "имя" должно содержать от 2 до 30 символов',
          }));
        } else if (!REGEX_NAME.test(value)) {
          setErrors((prevState) => ({
            ...prevState,
            name:
              "Поле должно содержать только латиницу, кириллицу, пробел или дефис",
          }));
        } else {
          setValuesErrors(name, validationMessage);
        }
        break;

      case "email":
        if (value.length === 0) {
          setErrors((prevState) => ({
            ...prevState,
            email: 'Поле "email" должно быть заполнено',
          }));
        } else if (!isEmail(value)) {
          setErrors((prevState) => ({
            ...prevState,
            email: "Пожалуйста, введите корректный адрес электронной почты",
          }));
        } else {
          setValuesErrors(name, validationMessage);
        }
        break;

      case "password":
        if (value.length === 0) {
          setErrors((prevState) => ({
            ...prevState,
            password: 'Поле "пароль" должно быть заполнено',
          }));
        } else {
          setValuesErrors(name, validationMessage);
        }
        break;

      default:
        setValuesErrors(name, validationMessage);
        break;
    }
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, isValid, errors, resetForm };
}
