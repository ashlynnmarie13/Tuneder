import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileActions";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }

    return (
      <div>
        <div className="profiles-new">
          <div className="tuneders-box">
            <h1 className="text-center">TUNEder Profiles</h1>
            <p className="text-center white-text-2">
              If you are interested, click the "Match" button!
            </p>
          </div>
          {/* <div style={Object.assign({}, styles.slide, styles.slide1)}> */}
          {profileItems}
        </div>
        <div className="register-background" />
        <div className="dark-overlay" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
