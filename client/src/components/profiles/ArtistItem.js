import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";
import Chat from "../chat/Chat";
import { createMatch } from "../../actions/matchActions";
import Carousel from "../spotify/Carousel.js";

class ArtistItem extends Component {
  render() {
    const { artists } = this.props;
    const { art } = this.props;
    console.log(artists);
    let artistItems;
    let artItems;

    (artists.length>0) &&
      (artistItems = artists.map((val, i) => {
        const {
          city,
          id,
          image,
          loggedInUser,
          monthlyCost,
          moveInDate,
          rentLength,
          state,
          userID,
          address,
          rent
        } = val;

        return (
          <div>
          {artist}
          </div>
        )
    {/* if (art.length > 0) {
      artItems = art.map((val, i) => {
        const { art } = val;
      });
    } else {
      console.log("no");
    } */}

    return (
      <div style={{ color: "white" }}>
        Top artists:
        {artistItems}
        {art}
      </div>
    );
  }
}

export default connect()(withRouter(ArtistItem));
