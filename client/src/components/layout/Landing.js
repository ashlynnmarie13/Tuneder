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
            src="https://staging.coverr.co/s3/mp4/Date.mp4"
            type="video/mp4"
          />
        </video>
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mt-5 mb-4">Muser</h1>
                <hr />
                <Link
                  to="/register"
                  className="btn btn-lg btn-warning btn-group-vertical mr-2"
                >
                  Create Account
                </Link>
                <div className="mb-4" />
                <Link
                  to="/login"
                  className="btn btn-lg btn-secondary btn-group-vertical mr-2"
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

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
