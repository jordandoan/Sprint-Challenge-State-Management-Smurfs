import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';

export const reducer = (state = initialState, action) =>  {
  switch(action.type) {
    case FETCHING:
      return {... state, isFetching: true}
    case FETCH_SUCCESS:
      return {...state, isFetching: false, data: action.payload}
    case FETCH_FAILURE:
      return {...state, isFetching: false, error: action.payload}
    default:
      return state
  }  
}

const initialState = {
  isFetching: false,
  data: "",
  error: "",
};