import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE, ADDING, POST_FAILURE, POST_SUCCESS } from '../actions';

export const reducer = (state = initialState, action) =>  {
  switch(action.type) {
    case FETCHING:
      return {... state, isFetching: true, lastSmurf: ""}
    case FETCH_SUCCESS:
      return {...state, isFetching: false, data: action.payload}
    case FETCH_FAILURE:
      return {...state, isFetching: false, error: action.payload}
    case ADDING:
      return {...state, adding: true}
    case POST_SUCCESS:
      return {...state, adding: false, lastSmurf: action.payload[action.payload.length - 1]}
    case POST_FAILURE:
      return {...state, adding: false, error: action.payload}
    default:
      return state
  }  
}

const initialState = {
  isFetching: false,
  data: "",
  error: "",
  adding: false,
  lastSmurf: "",
};