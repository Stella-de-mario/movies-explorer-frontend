import { useState, useCallback } from "react";

export function useForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: evt.target.validationMessage });
    setIsValid(evt.target.closest(".form").checkValidity());
  };

  const resetForm = useCallback(
    (
      newValues = {}, newErrors = {}, newIsValid = false, 
      newInputValidity = {}
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const resetErrors = useCallback(
    (newErrors = {}) => {
      setErrors(newErrors);
    },
    [setErrors]
  );

  return {
    values, handleChange, errors, isValid, resetForm, setValues,
    setIsValid, resetErrors
  };
}