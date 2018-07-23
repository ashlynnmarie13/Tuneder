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
          <h3>{profile.user.name}</h3>
          <div>
            <p>
              Age:
              {profile.status}{" "}
              {isEmpty(profile.age) ? null : <span> {profile.age}</span>}
            </p>
            <p>
              Location:
              {isEmpty(profile.location) ? null : (
                <span> {profile.location}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.lookingFor) ? null : (
                <span> {profile.lookingFor}</span>
              )}
            </p>
            <p>Click "View Profile" to view {profile.user.name}'s full bio!</p>
            <Link to={`/chat`} className="btn btn-1">
              Chat
            </Link>
          </div>
        </div>
        <div className="profile-box-3">
          <Link to="/profiles" className="btn btn-light mb-3 scoot-over">
            Back To Profiles
          </Link>
          <p>
            <h3 className="profile-name">{profile.user.name}'s Profile</h3>
            <h3> Bio:</h3>
            {profile.status}{" "}
            {isEmpty(profile.bio) ? null : <span> {profile.bio}</span>}
          </p>
        </div>

        <div className="profile-box-2">
          <p className="white-text-2"> My top Artists: </p>
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
