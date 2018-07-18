import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import Chat from "../chat/Chat";

class ProfileItem extends Component {
  render() {
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
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileItem;
