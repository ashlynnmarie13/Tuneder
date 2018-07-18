import axios from "axios";

const setSpotifyToken = Spotify_Token => {
  if (Spotify_Token) {
    // Apply to every request
    axios.defaults.headers.common["Spotify Authorization"] = Spotify_Token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Spotify Authorization"];
  }
};
export default setSpotifyToken;
