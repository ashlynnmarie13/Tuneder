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
import "./Matches.css";

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
            <img src={avatar} alt="" className="profile-pic" />
            <div className="profile-box-1">
              <h3>{name}</h3>
              <div className="card-detail">
                <p>{isEmpty(age) ? null : <span> {age}</span>}</p>
                <p>
                  Location:
                  {isEmpty(location) ? null : <span> {location}</span>}
                </p>
              </div>
            </div>
            <div className="profile-box-2">
              {/* <ArtistItem artists={artists} art={art} /> */}
            </div>
            <div className="profile-box-3">
              <Link to={`/profile/${handle}`} className="btn">
                Profile
              </Link>
              <Link to={`/chat`} className="btn btn-1">
                Chat
              </Link>
            </div>
          </div>
        );
      }));

    return (
      <div>
        <div className="profiles-new">
          <div className="profiles-grid">{matches}</div>
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
