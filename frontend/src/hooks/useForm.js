import { useState } from "react";

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const clearValues = () => {
    setValues(initialValues);
  };

  return [values, handleChange, clearValues];
};
