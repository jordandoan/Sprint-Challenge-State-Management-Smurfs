import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useField } from '../hooks/useField';
import { editSmurf } from './actions';

const EditForm = (props) => {
  let id = Number(props.match.params.id);
  let foundSmurf = props.data.filter(smurf => smurf.id === id);
  foundSmurf = foundSmurf[0]
  let [newSmurf, setSmurf] = useState({id: id});
  let [name, setName, handleName] = useField(foundSmurf.name);
  let [height, setHeight, handleHeight] = useField(foundSmurf.height.substring(0, foundSmurf.height.length - 2));
  let [age, setAge, handleAge] = useField(foundSmurf.age);
  
  useEffect(() => {
    setSmurf({
      ...newSmurf,
      name: name,
      height: height + "cm",
      age: age,
    });
  }, [name,height,age])

  const handleSubmit = (event) => {
    event.preventDefault();
    props.editSmurf(newSmurf, id);
  }

  return (
    <div>
      <form>
        <h2>EDIT YOUR SMURF!</h2>
        <p>Name</p>
        <input type="text" placeholder="name" value={name} onChange={(e) => handleName(e)}/>
        <p>Age</p>
        <input type="text" placeholder="age" value={age} onChange={(e) => handleAge(e)}/>
        <p>Height (cm)</p>
        <input type="text" placeholder="height" value={height} onChange={(e) => handleHeight(e)}/><br/>
        <button onClick={(e) => handleSubmit(e)}>Edit Smurf</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}
export default connect(mapStateToProps, {editSmurf: editSmurf})(EditForm);
