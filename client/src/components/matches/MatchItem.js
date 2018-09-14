import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import Chat from "../chat/Chat";
import { createMatch } from "../../actions/matchActions";
import Carousel from "../spotify/Carousel.js";
import "./Matches.css";
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
        <img src={match.avatar} alt="" className="profile-pic" />
        <div className="profile-box-1">
          <h3>{match.name}</h3>
          <div className="card-detail">
            <p>
              Age:
              {match.status}{" "}
              {isEmpty(match.age) ? null : <span> {match.age}</span>}
            </p>
            <p>
              Location:
              {isEmpty(match.location) ? null : <span> {match.location}</span>}
            </p>
          </div>
        </div>
        <div className="profile-box-2">
          {/* <ArtistItem artists={artists} art={art} /> */}
        </div>
        <div className="profile-box-3">
          <Link to={`/profile/${match.handle}`} className="btn">
            Profile
          </Link>
          <Link to={`/chat`} className="btn btn-1">
            Chat
          </Link>
          <button className="btn" onClick={this.onMatch}>
            Match
          </button>
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
