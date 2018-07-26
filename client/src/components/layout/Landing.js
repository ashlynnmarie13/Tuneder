import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

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
            src="https://player.vimeo.com/external/253757253.hd.mp4?s=af2fbd7c1024577504993c4a84138d54e9016fdb&amp;profile_id=175&amp;oauth2_token_id=57447761&amp;download=1"
            type="video/mp4"
          />
        </video>
        <div className="landing-modal text-light">
          <div className="container-landing">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="font1 display-3 mt-5 mb-4">TUNE&#119082;der</h1>
                <hr />
                <Link
                  to="/register"
                  className="btn btn-lg btn-group-vertical mr-2"
                >
                  Create Account
                </Link>
                <div className="mb-4" />
                <Link
                  to="/login"
                  className="btn btn-1 btn-lg btn-secondary btn-group-vertical mr-2"
                >
                  Login
                </Link>
              </div>
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
