import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';

const Retrieve = (props) => {
  return (
    <div>
      <button onClick={props.fetchData}>Retrieve Current Smurf Data</button>
      <div className="smurf-container">
        {props.isFetching && <p>Fetching data...</p>}
        {!props.isFetching && props.data &&
          props.data.map(smurf => 
            (<div className="smurf">
              <h2>{smurf.name}</h2>
              <p>{smurf.age} years old</p>
              <p>Height: {smurf.height}</p>
            </div>)
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    data: state.data,
    error: state.error,
  }
}
export default connect(mapStateToProps, {fetchData: fetchData})(Retrieve);