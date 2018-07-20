import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import Chat from "../chat/Chat";
import { createMatch } from "../../actions/matchActions";

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
      artists
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
            artists
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
      <div className="card card-body bg-secondary mb-3 text-center">
        <div className="row">
          <img src={profile.avatar} alt="" className="card-img-top" />
          <h3 className="card-img-overlay">{profile.user.name}</h3>
          <div className="col-lg-6 col-md-4 col-8 text-light">
            <p>
              Favorite Artists:
              {profile.status}{" "}
              {isEmpty(profile.artists) ? null : (
                <span>at {profile.artists}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-warning">
              View Profile
            </Link>
            <Link to={`/chat`} className="btn btn-warning">
              Chat
            </Link>
            <button onClick={this.onMatch}>Match</button>
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
