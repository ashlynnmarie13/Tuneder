import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS } from "./types";

// Register User
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
