import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import Chat from "../chat/Chat";
import { createMatch } from "../../actions/matchActions";
import Carousel from "../spotify/Carousel.js";

class MatchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.matches
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    console.log(this.state);
    const { match } = this.props;

    return (
      <div className="container-card">
        <div className="match-box-1">
          <img src={match.avatar} alt="" className="match-pic" />
          {/* <h3>{match.user.name}</h3> */}
          <div>
            <p>
              Age:
              {match.status}{" "}
              {isEmpty(match.age) ? null : <span> {match.age}</span>}
            </p>
            <p>
              Location:
              {isEmpty(match.location) ? null : <span> {match.location}</span>}
            </p>
            <p>
              {isEmpty(match.lookingFor) ? null : (
                <span> {match.lookingFor}</span>
              )}
            </p>
            {/* <p>
              Click "View match" to view {match.user.name}
              's full bio!
            </p> */}
            <Link to={`/match/${match.handle}`} className="btn">
              View match
            </Link>
            <Link to={`/chat`} className="btn btn-1">
              Chat
            </Link>
          </div>
        </div>
        <div className="match-box-2">
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
                    {match.artists[0]}
                    <img className="spotify-image" src={match.art[0]} alt="" />
                  </div>
                  <div className="spotify-item">
                    {match.artists[1]}
                    <img className="spotify-image" src={match.art[1]} alt="" />
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
                    <img className="spotify-image" src={match.art[4]} alt="" />
                  </div>
                  <div className="spotify-item">
                    {match.artists[5]}
                    <img className="spotify-image" src={match.art[5]} alt="" />
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
                    {match.artists[8]}
                    <img className="spotify-image" src={match.art[8]} alt="" />
                  </div>
                  <div className="spotify-item">
                    {match.artists[9]}
                    <img className="spotify-image" src={match.art[9]} alt="" />
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
                    {match.artists[12]}
                    <img className="spotify-image" src={match.art[12]} alt="" />
                  </div>
                  <div className="spotify-item">
                    {match.artists[13]}
                    <img className="spotify-image" src={match.art[13]} alt="" />
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
                    {match.artists[16]}
                    <img className="spotify-image" src={match.art[16]} alt="" />
                  </div>
                  <div className="spotify-item">
                    {match.artists[17]}
                    <img className="spotify-image" src={match.art[17]} alt="" />
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
                    {match.artists[2]}
                    <img className="spotify-image" src={match.art[2]} alt="" />
                  </div>
                  <div className="spotify-item">
                    {match.artists[3]}
                    <img className="spotify-image" src={match.art[3]} alt="" />
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
                    {match.artists[6]}
                    <img className="spotify-image" src={match.art[6]} alt="" />
                  </div>
                  <div className="spotify-item">
                    {match.artists[7]}
                    <img className="spotify-image" src={match.art[7]} alt="" />
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
                    {match.artists[10]}
                    <img className="spotify-image" src={match.art[10]} alt="" />
                  </div>
                  <div className="spotify-item">
                    {match.artists[11]}
                    <img className="spotify-image" src={match.art[11]} alt="" />
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
                    {match.artists[14]}
                    <img className="spotify-image" src={match.art[14]} alt="" />
                  </div>
                  <div className="spotify-item">
                    {match.artists[15]}
                    <img className="spotify-image" src={match.art[15]} alt="" />
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
                    {match.artists[18]}
                    <img className="spotify-image" src={match.art[19]} alt="" />
                  </div>
                  <div className="spotify-item">
                    {match.artists[19]}
                    <img className="spotify-image" src={match.art[19]} alt="" />
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
)(withRouter(MatchItem));
