import React from 'react';

import { useField } from '../hooks/useField';

const Form = () => {
  let [name, handleName] = useField();
  let [height, handleHeight] = useField();
  let [age, handleAge] = useField();

  return (
    <div>
      <form>
        <h2>CREATE YOUR SMURF!</h2>
        <input type="text"></input>
      </form>
    </div>
  )
}

export default Form;