import * as React from 'react';
import { useState } from "react"

interface LoginData {
  username: string;
  password: string;
}

export default function useLoginForm(initialValues: LoginData) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }
  return { values, handleChange }
}