import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";

import SpotifyWebApi from "spotify-web-api-js";
const spotifyApi = new SpotifyWebApi();

class Spotify extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      artists: [],
      loggedIn: token ? true : false,
      nowPlaying: { name: "Not Checked", albumArt: "" },
      refreshToken: params.refresh_token
    };
  }
  //   componentDidMount() {
  //     let parsed = queryString.parse(window.location.search);
  //     let accessToken = parsed.access_token;
  //     if (!accessToken) return;
  //     fetch("https://api.spotify.com/v1/me/top/artists", {
  //       headers: { Authorization: "Bearer " + accessToken }
  //     })
  //       .then(response => response.json())
  //       .then(data =>
  //         this.setState({
  //           artists: data.items.map(item => {
  //             console.log(data.items);
  //             return {
  //               artists: item.name
  //             };
  //           })
  //         })
  //       );
  //   }

  //   componentDidMount() {
  //     // const params = this.getHashParams();
  //     // const token = params["/access_token"];
  //     // const name = params["name"];
  //     // const email = params["email"];

  //     // token && spotifyApi.setAccessToken(token);
  //     // !token && this.setState({ loggedIn: false });
  //     // this.props.setUser({ name, email });
  //     const params = this.getHashParams();
  //     const token = params.access_token;
  //     if (token) {
  //       spotifyApi.setAccessToken(token);
  //     }

  //     let parsed = queryString.parse(window.location.search);
  //     //     let accessToken = parsed.access_token;
  //     //     if (!accessToken) return;
  //     axios.get("/api/spotify/tokens").then(response => {
  //       console.log(response.data);
  //       axios
  //         .get("https://api.spotify.com/v1/me/top/artists", {
  //           headers: {
  //             // prettier-ignore
  //             "Authorization": "Bearer " + response.data.access_token
  //           }
  //         })
  //         // .then(response => {
  //         //   this.setState({
  //         //     artists: response.data
  //         //   });
  //         .then(tokens => {
  //           console.log(tokens.data.items);
  //         });
  //     });

  //   }

  getHashParams() {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    console.log(hashParams);
    return hashParams;
  }

  getTopArtists() {
    spotifyApi.getMyTopArtists().then(response => {
      var array = response.items;
      var result = array.map(function(obj) {
        return obj.name;
      });
      console.log(result);
      var resultAsString = result.join(", ");

      this.setState(
        { artists: resultAsString },
        this.props.toState(resultAsString)
      );
    });
  }

  refreshRefreshToken() {
    axios
      .get(
        `/api/spotify/refresh_token?refresh_token=${this.state.refreshToken}`
      )
      .then(response => {
        console.log(response.data);
        spotifyApi.setAccessToken(response.data.access_token);
      });
  }

  render() {
    const { artists } = this.props;
    return (
      <div className="App">
        My top Artists:
        <div>{this.state.artists}</div>
        <button onClick={() => this.refreshRefreshToken()}>
          Get new RefreshToken or something
        </button>
        {this.state.loggedIn && (
          <button onClick={() => this.getTopArtists()}>
            Check my Top Artists WOOO
          </button>
        )}
      </div>
    );
  }
}

export default Spotify;
