import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";
import Carousel from "./Carousel.js";

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
      art: [],
      tracks: [],
      albums: [],
      loggedIn: token ? true : false,
      nowPlaying: { name: "Not Checked", albumArt: "" },
      refreshToken: params.refresh_token
    };
    this.getTopArtists = this.getTopArtists.bind(this);
    this.getAlbumArt = this.getAlbumArt.bind(this);
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
      console.log(response.items);
      var result = array.map(function(obj) {
        return obj.name;
      });
      // console.log(result);
      // var resultAsString = result.join(", ");

      this.setState({ artists: result }, this.props.toState(result));
    });
  }

  getAlbumArt() {
    spotifyApi.getMyTopArtists().then(response => {
      var array = response.items;
      console.log(response.items);
      var result = array.map(function(obj) {
        return obj.images;
      });
      console.log(result);
      var pictures = result.map(function(obj) {
        return obj[0].url;
      });
      console.log(pictures);
      this.setState({ art: pictures }, this.props.toArtState(pictures));
    });
  }

  getTopTracks() {
    spotifyApi.getMyTopTracks().then(response => {
      var array = response.items;
      console.log(response.items);
      var final = array.map(function(obj) {
        return obj.name + ", " + obj.artists[0].name;
      });
      // console.log(result);
      // var resultAsString = result.join(", ");

      this.setState({ tracks: final }, this.props.toTrackState(final));
    });
  }

  getSavedAlbums() {
    spotifyApi.getMySavedAlbums().then(response => {
      var array = response.items;
      console.log(response.items);
      var result = array.map(function(obj) {
        return obj.album;
      });
      console.log(result);
      var albumr = result.map(function(obj) {
        return obj.name + ", " + obj.artists[0].name;
      });

      this.setState({ albums: albumr }, this.props.toAlbumState(albumr));
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
    const { artists, art } = this.props;
    return (
      <div className="App">
        <p className="white-text"> My top Artists: </p>
        <div className="carousel-spotify">
          <div>
            <Carousel autoPlayInterval={2000} indicator={true} switcher={true}>
              <div
                className="spotify-box"
                style={{
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: "#1a1a1d",
                  color: "white"
                }}
              >
                <div className="spotify-item">
                  {this.state.artists[0]}
                  <img
                    className="spotify-image"
                    src={this.state.art[0]}
                    alt=""
                  />
                </div>
                <div className="spotify-item">
                  {this.state.artists[1]}
                  <img
                    className="spotify-image"
                    src={this.state.art[1]}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="spotify-box"
                style={{
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: "#1a1a1d",
                  color: "white"
                }}
              >
                <div className="spotify-item">
                  {this.state.artists[4]}
                  <img
                    className="spotify-image"
                    src={this.state.art[4]}
                    alt=""
                  />
                </div>
                <div className="spotify-item">
                  {this.state.artists[5]}
                  <img
                    className="spotify-image"
                    src={this.state.art[5]}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="spotify-box"
                style={{
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: "#1a1a1d",
                  color: "white"
                }}
              >
                <div className="spotify-item">
                  {this.state.artists[8]}
                  <img
                    className="spotify-image"
                    src={this.state.art[8]}
                    alt=""
                  />
                </div>
                <div className="spotify-item">
                  {this.state.artists[9]}
                  <img
                    className="spotify-image"
                    src={this.state.art[9]}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="spotify-box"
                style={{
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: "#1a1a1d",
                  color: "white"
                }}
              >
                <div className="spotify-item">
                  {this.state.artists[12]}
                  <img
                    className="spotify-image"
                    src={this.state.art[12]}
                    alt=""
                  />
                </div>
                <div className="spotify-item">
                  {this.state.artists[13]}
                  <img
                    className="spotify-image"
                    src={this.state.art[13]}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="spotify-box"
                style={{
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: "#1a1a1d",
                  color: "white"
                }}
              >
                <div className="spotify-item">
                  {this.state.artists[16]}
                  <img
                    className="spotify-image"
                    src={this.state.art[16]}
                    alt=""
                  />
                </div>
                <div className="spotify-item">
                  {this.state.artists[17]}
                  <img
                    className="spotify-image"
                    src={this.state.art[17]}
                    alt=""
                  />
                </div>
              </div>
            </Carousel>
          </div>
          <div>
            <Carousel autoPlayInterval={2000} indicator={true} switcher={true}>
              <div
                className="spotify-box"
                style={{
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: "#1a1a1d",
                  color: "white"
                }}
              >
                <div className="spotify-item">
                  {this.state.artists[2]}
                  <img
                    className="spotify-image"
                    src={this.state.art[2]}
                    alt=""
                  />
                </div>
                <div className="spotify-item">
                  {this.state.artists[3]}
                  <img
                    className="spotify-image"
                    src={this.state.art[3]}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="spotify-box"
                style={{
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: "#1a1a1d",
                  color: "white"
                }}
              >
                <div className="spotify-item">
                  {this.state.artists[6]}
                  <img
                    className="spotify-image"
                    src={this.state.art[6]}
                    alt=""
                  />
                </div>
                <div className="spotify-item">
                  {this.state.artists[7]}
                  <img
                    className="spotify-image"
                    src={this.state.art[7]}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="spotify-box"
                style={{
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: "#1a1a1d",
                  color: "white"
                }}
              >
                <div className="spotify-item">
                  {this.state.artists[10]}
                  <img
                    className="spotify-image"
                    src={this.state.art[10]}
                    alt=""
                  />
                </div>
                <div className="spotify-item">
                  {this.state.artists[11]}
                  <img
                    className="spotify-image"
                    src={this.state.art[11]}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="spotify-box"
                style={{
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: "#1a1a1d",
                  color: "white"
                }}
              >
                <div className="spotify-item">
                  {this.state.artists[14]}
                  <img
                    className="spotify-image"
                    src={this.state.art[14]}
                    alt=""
                  />
                </div>
                <div className="spotify-item">
                  {this.state.artists[15]}
                  <img
                    className="spotify-image"
                    src={this.state.art[15]}
                    alt=""
                  />
                </div>
              </div>
              <div
                className="spotify-box"
                style={{
                  height: "200px",
                  textAlign: "center",
                  backgroundColor: "#1a1a1d",
                  color: "white"
                }}
              >
                <div className="spotify-item">
                  {this.state.artists[18]}
                  <img
                    className="spotify-image"
                    src={this.state.art[19]}
                    alt=""
                  />
                </div>
                <div className="spotify-item">
                  {this.state.artists[19]}
                  <img
                    className="spotify-image"
                    src={this.state.art[19]}
                    alt=""
                  />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        {this.state.loggedIn && (
          <button
            className="btn btn-edit"
            onClick={() => {
              this.getTopArtists();
              this.getAlbumArt();
              this.getTopTracks();
              this.getSavedAlbums();
            }}
          >
            Check my Top Artists
          </button>
        )}
      </div>
    );
  }
}

export default Spotify;
