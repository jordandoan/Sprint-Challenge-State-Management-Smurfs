import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

const URL = "http://localhost:3333/smurfs";

export const fetchData = () => dispatch => {
  dispatch({type: FETCHING})
  axios.get(URL)
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_FAILURE, payload: err.response}));
}

export const addSmurf = (smurf) => dispatch => {
  axios.post()
}