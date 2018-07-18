import isEmpty from "../validation/is-empty";

import {
  SET_USER,
  SET_TOKEN,
  GET_SPOTIFY,
  GET_ARTISTS,
  GET_ERRORS
} from "../actions/types";

const initialState = {
  artists: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER + "_FULFILLED":
      return { ...state, user: action.payload.data[0] };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case GET_SPOTIFY:
      return {
        ...state,
        loading: true
      };
    case GET_ARTISTS:
      return {
        ...state,
        loading: true
      };
    case GET_ERRORS:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
