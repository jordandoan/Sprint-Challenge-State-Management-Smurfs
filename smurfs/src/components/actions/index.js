import axios from 'axios';

export const FETCHING = "FETCHING";
export const ADDING = "ADDING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";

const URL = "http://localhost:3333/smurfs";

export const fetchData = () => dispatch => {
  dispatch({type: FETCHING})
  axios.get(URL)
    .then(res => dispatch({type: FETCH_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_FAILURE, payload: err.response}));
}

export const addSmurf = (smurf) => dispatch => {
  console.log(smurf);
  dispatch({type: ADDING})
  axios.post(URL, smurf)
    .then(res => dispatch({type: POST_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: POST_FAILURE, payload: err.response}));
}