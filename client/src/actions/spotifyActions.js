import axios from "axios";
import setSpotifyToken from "../utils/setSpotifyToken";
import jwt_decode from "jwt-decode";

import {
  SET_USER,
  SET_TOKEN,
  GET_SPOTIFY,
  GET_ARTISTS,
  GET_ERRORS
} from "./types";

// get spotify token
export const getSpotify = data => dispatch => {
  axios
    .get("/", data)
    .then(res => {
      const { Spotify_Token } = res.data;
      setSpotifyToken(token);
      dispatch({
        type: GET_SPOTIFY,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//get user's artists

export const getArtists = () => dispatch => {
  dispatch();
  axios
    .get("/api/spotify/artists")
    .then(res =>
      dispatch({
        type: GET_ARTISTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ARTISTS,
        payload: {}
      })
    );
};
