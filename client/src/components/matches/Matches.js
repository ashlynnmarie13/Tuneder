import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import axios from "axios";
import { getMatches } from "../../actions/matchActions";
import MatchItem from "../matches/MatchItem";
import Carousel from "../spotify/Carousel.js";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

// import Carousel from "./Carousel.js";

class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/matches")
      .then(res => this.setState({ matches: res.data.matches }));
  }

  render() {
    console.log(this.state.matches);
    let matches;
    this.state.matches &&
      (matches = this.state.matches.map((val, i) => {
        const {
          handle,
          name,
          avatar,
          age,
          location,
          lookingFor,
          bio,
          artists,
          art
        } = val;

        return (
          <div className="container-card">
            <div className="profile-box-1">
              <img src={avatar} alt="" className="profile-pic" />
              <h3>{name}</h3>
              <div>
                <p>
                  Age:
                  {isEmpty(age) ? null : <span> {age}</span>}
                </p>
                <p>
                  Location:
                  {isEmpty(location) ? null : <span> {location}</span>}
                </p>
                <p>{isEmpty(lookingFor) ? null : <span> {lookingFor}</span>}</p>
                <p>
                  Click "View Profile" to view {name}
                  's full bio!
                </p>
                <Link to={`/profile/${handle}`} className="btn btn-scoot">
                  View Profile
                </Link>
                <Link to={`/chat`} className="btn btn-1">
                  Chat
                </Link>
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
                        {artists[0]}
                        <img className="spotify-image" src={art[0]} alt="" />
                      </div>
                      <div className="spotify-item">
                        {artists[1]}
                        <img className="spotify-image" src={art[1]} alt="" />
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
                        {artists[4]}
                        <img className="spotify-image" src={art[4]} alt="" />
                      </div>
                      <div className="spotify-item">
                        {artists[5]}
                        <img className="spotify-image" src={art[5]} alt="" />
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
                        {artists[8]}
                        <img className="spotify-image" src={art[8]} alt="" />
                      </div>
                      <div className="spotify-item">
                        {artists[9]}
                        <img className="spotify-image" src={art[9]} alt="" />
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
                        {artists[12]}
                        <img className="spotify-image" src={art[12]} alt="" />
                      </div>
                      <div className="spotify-item">
                        {artists[13]}
                        <img className="spotify-image" src={art[13]} alt="" />
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
                        {artists[16]}
                        <img className="spotify-image" src={art[16]} alt="" />
                      </div>
                      <div className="spotify-item">
                        {artists[17]}
                        <img className="spotify-image" src={art[17]} alt="" />
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
                        {artists[2]}
                        <img className="spotify-image" src={art[2]} alt="" />
                      </div>
                      <div className="spotify-item">
                        {artists[3]}
                        <img className="spotify-image" src={art[3]} alt="" />
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
                        {artists[6]}
                        <img className="spotify-image" src={art[6]} alt="" />
                      </div>
                      <div className="spotify-item">
                        {artists[7]}
                        <img className="spotify-image" src={art[7]} alt="" />
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
                        {artists[10]}
                        <img className="spotify-image" src={art[10]} alt="" />
                      </div>
                      <div className="spotify-item">
                        {artists[11]}
                        <img className="spotify-image" src={art[11]} alt="" />
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
                        {artists[14]}
                        <img className="spotify-image" src={art[14]} alt="" />
                      </div>
                      <div className="spotify-item">
                        {artists[15]}
                        <img className="spotify-image" src={art[15]} alt="" />
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
                        {artists[18]}
                        <img className="spotify-image" src={art[19]} alt="" />
                      </div>
                      <div className="spotify-item">
                        {artists[19]}
                        <img className="spotify-image" src={art[19]} alt="" />
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        );
      }));

    return (
      <div>
        <div className="profiles-new">
          <div className="tuneders-box">
            <h1 className="text-center">Matches</h1>
          </div>

          {matches}
        </div>
        <div className="register-background" />
        <div className="dark-overlay" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  matches: state.matches
});

export default connect(
  mapStateToProps,
  { getMatches }
)(Matches);
