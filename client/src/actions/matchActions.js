import axios from "axios";

import { GET_MATCHES } from "./types";

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
