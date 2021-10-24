import * as React from "react";
import { useState } from "react";

export default function useForm<T>(initialValues: T) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return { values, handleChange };
}
