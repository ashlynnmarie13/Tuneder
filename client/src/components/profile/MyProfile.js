import React, { Component } from "react";
import isEmpty from "../../validation/is-empty";
import Carousel from "../spotify/Carousel.js";
import { Link } from "react-router-dom";

class MyProfile extends Component {
  render() {
    const { profile } = this.props;

    const firstName = profile.user.name.trim().split(" ")[0];
    return (
      <div className="container-myprofile">
        <div className="profile-box-1">
          <img src={profile.avatar} alt="" className="profile-pic" />
          <p>
            Age:
            {profile.status}{" "}
            {isEmpty(profile.age) ? null : (
              <span>
                {" "}
                {profile.age}, Location:
                <span> {profile.location}, </span>
                Seeking: <span> {profile.lookingFor} </span>
              </span>
            )}
          </p>
          <h3>Bio:</h3>
          <p>{isEmpty(profile.bio) ? null : <span> {profile.bio}</span>}</p>
          <Link to={`/chat`} className="btn btn-1">
            Chat
          </Link>
        </div>
        <div className="profile-box-3">
          <p>
            <h3 className="font4">{profile.user.name}</h3>
          </p>
          <div>
            Top Tracks:
            <ol>
              <li> {profile.tracks[0]}</li>
              <li> {profile.tracks[1]}</li>
              <li> {profile.tracks[2]}</li>
              <li> {profile.tracks[3]}</li>
              <li> {profile.tracks[4]}</li>
              <li> {profile.tracks[5]}</li>
              <li> {profile.tracks[6]}</li>
              <li> {profile.tracks[7]}</li>
              <li> {profile.tracks[8]}</li>
              <li> {profile.tracks[9]}</li>
            </ol>
          </div>
          <div>
            Saved Albums:
            <ol>
              <li> {profile.albums[0]}</li>
              <li> {profile.albums[1]}</li>
              <li> {profile.albums[2]}</li>
              <li> {profile.albums[3]}</li>
            </ol>
          </div>
        </div>

        <div className="profile-box-2">
          <p className="white-text-3"> My top Artists: </p>
          <div className="carousel-spotify-profileitem">
            <div>
              <Carousel
                autoPlayInterval={2000}
                indicator={true}
                switcher={true}
              >
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
                    {profile.artists[0]}
                    <img
                      className="spotify-image"
                      src={profile.art[0]}
                      alt=""
                    />
                  </div>
                  <div className="spotify-item">
                    {profile.artists[1]}
                    <img
                      className="spotify-image"
                      src={profile.art[1]}
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
                    {profile.artists[4]}
                    <img
                      className="spotify-image"
                      src={profile.art[4]}
                      alt=""
                    />
                  </div>
                  <div className="spotify-item">
                    {profile.artists[5]}
                    <img
                      className="spotify-image"
                      src={profile.art[5]}
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
                    {profile.artists[8]}
                    <img
                      className="spotify-image"
                      src={profile.art[8]}
                      alt=""
                    />
                  </div>
                  <div className="spotify-item">
                    {profile.artists[9]}
                    <img
                      className="spotify-image"
                      src={profile.art[9]}
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
                    {profile.artists[12]}
                    <img
                      className="spotify-image"
                      src={profile.art[12]}
                      alt=""
                    />
                  </div>
                  <div className="spotify-item">
                    {profile.artists[13]}
                    <img
                      className="spotify-image"
                      src={profile.art[13]}
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
                    {profile.artists[16]}
                    <img
                      className="spotify-image"
                      src={profile.art[16]}
                      alt=""
                    />
                  </div>
                  <div className="spotify-item">
                    {profile.artists[17]}
                    <img
                      className="spotify-image"
                      src={profile.art[17]}
                      alt=""
                    />
                  </div>
                </div>
              </Carousel>
            </div>
            <div>
              <Carousel
                autoPlayInterval={2000}
                indicator={true}
                switcher={true}
              >
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
                    {profile.artists[2]}
                    <img
                      className="spotify-image"
                      src={profile.art[2]}
                      alt=""
                    />
                  </div>
                  <div className="spotify-item">
                    {profile.artists[3]}
                    <img
                      className="spotify-image"
                      src={profile.art[3]}
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
                    {profile.artists[6]}
                    <img
                      className="spotify-image"
                      src={profile.art[6]}
                      alt=""
                    />
                  </div>
                  <div className="spotify-item">
                    {profile.artists[7]}
                    <img
                      className="spotify-image"
                      src={profile.art[7]}
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
                    {profile.artists[10]}
                    <img
                      className="spotify-image"
                      src={profile.art[10]}
                      alt=""
                    />
                  </div>
                  <div className="spotify-item">
                    {profile.artists[11]}
                    <img
                      className="spotify-image"
                      src={profile.art[11]}
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
                    {profile.artists[14]}
                    <img
                      className="spotify-image"
                      src={profile.art[14]}
                      alt=""
                    />
                  </div>
                  <div className="spotify-item">
                    {profile.artists[15]}
                    <img
                      className="spotify-image"
                      src={profile.art[15]}
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
                    {profile.artists[18]}
                    <img
                      className="spotify-image"
                      src={profile.art[19]}
                      alt=""
                    />
                  </div>
                  <div className="spotify-item">
                    {profile.artists[19]}
                    <img
                      className="spotify-image"
                      src={profile.art[19]}
                      alt=""
                    />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyProfile;
