import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import "./Landing.css";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <video id="background-video" loop autoPlay>
          <source
            src="//player.vimeo.com/external/209165711.sd.mp4?s=299b5dc333f6e6fbc77b094715e39c9977e36888&profile_id=164"
            type="video/mp4"
          />
        </video>
        <div className="dark-overlay-landing" />

        <div className="container-landing">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="font1 display-3 mt-5 mb-4">TUNE&#119082;der</h1>

              <Link
                to="/register"
                className="btn btn-lg btn-group-vertical mr-2"
              >
                Create Account
              </Link>
              <div className="mb-4" />
              <Link
                to="/login"
                className="btn-1 btn-lg btn-secondary btn-group-vertical mr-2"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
