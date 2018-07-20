import { GET_MATCHES } from "../actions/types";

const initialState = {
  matches: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MATCHES:
      return {
        ...state,
        profiles: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
