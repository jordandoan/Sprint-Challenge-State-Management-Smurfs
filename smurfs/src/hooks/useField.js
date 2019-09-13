import { useState } from 'react';

export const useField = (val) => {
  let [value, setValue] = useState(val);
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return [value, setValue, handleChange]
}