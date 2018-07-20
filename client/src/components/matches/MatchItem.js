import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import Chat from "../chat/Chat";

class MatchItem extends Component {
  render() {
    const { matches } = this.props;

    return (
      <div className="card card-body bg-secondary mb-3 text-center">
        <div className="row">
          <img src={matches.item.avatar} alt="" className="card-img-top" />
          <h3 className="card-img-overlay">{match.item.user.name}</h3>
          <div className="col-lg-6 col-md-4 col-8 text-light">
            <p>
              Favorite Artists:
              {match.status}{" "}
              {isEmpty(match.item.artists) ? null : (
                <span>at {match.item.artists}</span>
              )}
            </p>
            <p>
              {isEmpty(match.item.location) ? null : (
                <span>{match.item.location}</span>
              )}
            </p>
            <Link
              to={`/profile/${match.item.handle}`}
              className="btn btn-warning"
            >
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

export default MatchItem;
