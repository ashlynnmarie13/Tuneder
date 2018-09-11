import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import Chat from "../chat/Chat";
import { createMatch } from "../../actions/matchActions";
import "./Profiles.css";
import ArtistItem from "./ArtistItem.js";
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
    const artists = profile.artists;
    const art = profile.art;
    console.log(artists);

    return (
      <div className="container-card">
        <img src={profile.avatar} alt="" className="profile-pic" />
        <div className="profile-box-1">
          <h3>{profile.user.name}</h3>
          <div className="card-detail">
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
          </div>
        </div>
        <div className="profile-box-2">
          <ArtistItem artists={artists} art={art} />
        </div>
        <div className="profile-box-3">
          <Link to={`/profile/${profile.handle}`} className="btn">
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
)(withRouter(ProfileItem));
