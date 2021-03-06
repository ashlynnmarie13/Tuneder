import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import MyProfile from "./MyProfile";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileActions";

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push("/not-found");
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div className="annoying">
          <Link to="/profiles" className="btn btn-light mb-3 scoot-over ">
            Back To Profiles
          </Link>

          <MyProfile profile={profile} />
        </div>
      );
    }

    return (
      <div className="register-background">
        <div className="myprofile-box">{profileContent}</div>
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
  { getProfileByHandle }
)(Profile);
