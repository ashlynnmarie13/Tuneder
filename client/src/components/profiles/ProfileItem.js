import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import Chat from "../chat/Chat";
import { createMatch } from "../../actions/matchActions";
import Carousel from "../spotify/Carousel.js";

class ProfileItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      ...this.props.profile
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onMatch = () => {
    const {
      matches,
      handle,
      name,
      avatar,
      age,
      location,
      lookingFor,
      bio,
      artists,
      art
    } = this.state;
    this.setState(
      {
        matches: [
          ...this.state.matches,
          {
            handle,
            name,
            avatar,
            age,
            location,
            lookingFor,
            bio,
            artists,
            art
          }
        ]
      },
      () =>
        this.props.createMatch(
          { matches: this.state.matches },
          this.props.history
        )
    );
  };

  render() {
    console.log(this.state);
    const { profile } = this.props;

    return (
      <div className="container-card">
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
            <p>
              Click "View Profile" to view {profile.user.name}
              's full bio!
            </p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-scoot">
              View Profile
            </Link>
            <Link to={`/chat`} className="btn btn-1">
              Chat
            </Link>
            <button className="btn" onClick={this.onMatch}>
              Match
            </button>
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
                    {this.state.artists[4]}
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

const mapStateToProps = state => ({
  matches: state.matches
});

export default connect(
  mapStateToProps,
  { createMatch }
)(withRouter(ProfileItem));
