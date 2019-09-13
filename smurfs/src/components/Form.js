import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import { useField } from '../hooks/useField';
import { addSmurf } from './actions';

const Form = (props) => {
  let [smurf, setSmurf] = useState({});
  let [name, setName, handleName] = useField();
  let [height, setHeight, handleHeight] = useField();
  let [age, setAge, handleAge] = useField();
  useEffect(() => {
    setSmurf({
      name: name,
      height: height + "cm",
      age: age,
    });
  }, [name,height,age])
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addSmurf(smurf);
    setName("");
    setHeight("");
    setAge("");
  }
  
  return (
    <div>
      <form>
        <h2>CREATE YOUR SMURF!</h2>
        <p>Name</p>
        <input type="text" placeholder="name" value={name} onChange={(e) => handleName(e)}/>
        <p>Age</p>
        <input type="text" placeholder="age" value={age} onChange={(e) => handleAge(e)}/>
        <p>Height (cm)</p>
        <input type="text" placeholder="height" value={height} onChange={(e) => handleHeight(e)}/><br/>
        <button onClick={(e) => handleSubmit(e)}>Add Smurf</button>
      </form>
    </div>
  )
}

export default connect(null, {addSmurf: addSmurf})(Form);