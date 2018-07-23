import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <div className="scoot-right">
              <p className="lead home-info">
                Welcome{" "}
                <Link to={`/profile/${profile.handle}`} className="link">
                  {user.name}
                </Link>
              </p>
              <ProfileActions />
              <div style={{ marginBottom: "60px" }} />
            </div>
          </div>
        );
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div>
            <p className="scoot-right">
              Set up a profile to let other users know what you're looking for!
            </p>
            <Link to="/create-profile" className="scoot-right btn btn-lg">
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="register-background">
        <div className="register">
          <div className="container-pic">
            <div className="row">
              <div className="col-md-12">
                <h1 className="red-text scoot-right scoot-down display-4">
                  Home
                </h1>
                {dashboardContent}
              </div>
            </div>
            <img
              className="good-image"
              src="https://media.gettyimages.com/photos/young-couple-is-listening-music-on-their-mobile-picture-id539206195?b=1&k=6&m=539206195&s=612x612&w=0&h=FqY3-_JdkuD-8rmU2JO6_wSaVYJGMc7LKCeA16tMuow="
            />
          </div>
        </div>
        <div className="dark-overlay" />
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
