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
        <p>Name</p>
        <input type="text" placeholder="name" value={name} onChange={(e) => handleName(e)}/>
        <p>Age</p>
        <input type="text" placeholder="age" value={age} onChange={(e) => handleAge(e)}/>
        <p>Height</p>
        <input type="text" placeholder="height" value={height} onChange={(e) => handleHeight(e)}/>
        <button>Add Smurf</button>
      </form>
    </div>
  )
}

export default Form;