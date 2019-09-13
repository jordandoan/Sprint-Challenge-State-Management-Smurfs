import { useState } from 'react';

export const useField = () => {
  let [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return [value, setValue, handleChange]
}