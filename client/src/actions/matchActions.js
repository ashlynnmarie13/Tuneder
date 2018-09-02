import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, GET_MATCHES } from "./types";

// Creating a match
export const createMatch = (matches, history) => dispatch => {
  console.log(matches, history);
  axios
    .post("/api/matches", matches)
    //   .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: console.log("you have an error", err)
      })
    );
};

// Get current user's match list
export const getMatches = () => dispatch => {
  axios
    .get("/api/matches")
    .then(res =>
      dispatch({
        type: GET_MATCHES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MATCHES,
        payload: {}
      })
    );
};
