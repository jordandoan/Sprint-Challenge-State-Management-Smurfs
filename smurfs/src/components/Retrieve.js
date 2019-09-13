import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData, deleteSmurf } from './actions';

const Retrieve = (props) => {
  useEffect(() => {
    props.fetchData();
  }, [])
  return (
    <div>
      <div className="smurf-container">
        {props.isFetching && <p>Fetching data...</p>}
        {!props.isFetching && props.data &&
          props.data.map(smurf => 
            (<div className="smurf" key={smurf.id}>
              <h2>{smurf.name}</h2>
              <p>{smurf.age} years old</p>
              <p>Height: {smurf.height}</p>
              <button onClick ={()=>props.history.push(`/edit/${smurf.id}`)}>Edit</button>
              <button onClick={()=>props.deleteSmurf(smurf.id)}>Delete Smurf</button>
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
export default connect(mapStateToProps, {fetchData: fetchData, deleteSmurf:deleteSmurf})(Retrieve);