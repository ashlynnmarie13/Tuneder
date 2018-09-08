import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import ProfileActions from "./ProfileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  onDeleteClick(e) {
    this.props.deleteAccount();
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
            <button
              onClick={this.onDeleteClick.bind(this)}
              className="btn btn-1 scoot-right"
            >
              Delete My Account
            </button>
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
              src="https://images.unsplash.com/photo-1483032469466-b937c425697b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=66e2534cd26bf0bdf54e2ceb40dbd55a&auto=format&fit=crop&w=800&q=60"
            />
          </div>
        </div>
        <div className="dark-overlay" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
