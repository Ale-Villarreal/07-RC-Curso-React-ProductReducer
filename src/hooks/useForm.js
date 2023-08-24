import React, { useState } from 'react'


export const useForm = (initValues = {}) => {

    const [form, setForm] = useState(initValues);

    const onChangeForm = (value, field) => {
        setForm({
          ...form,
          [field]: value,
        });
    }

  return {
    form,
    onChangeForm
  }
}
