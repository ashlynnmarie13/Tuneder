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
    console.log(artists);

    return <div>hey</div>;
  }
}

export default connect()(withRouter(ArtistItem));
