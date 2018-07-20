import axios from "axios";

import { GET_MATCHES, GET_ERRORS } from "./types";

// Get all matches
export const getMatches = () => dispatch => {
  dispatch(
    {
      /*setProfileLoading*/
    }()
  );
  axios
    .get("/api/matches/all")
    .then(res =>
      dispatch({
        type: GET_MATCHES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_MATCHES,
        payload: null
      })
    );
};

export const createMatch = (obj, history) => dispatch => {
  axios
    .post("/api/matches", obj)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
