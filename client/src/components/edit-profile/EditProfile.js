import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createProfile, getCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";
import Spotify from "../spotify/Spotify";

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: "",
      name: "",
      avatar: "",
      age: "",
      location: "",
      lookingFor: "",
      bio: "",
      artists: "",
      art: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      // If profile field doesnt exist, make empty string
      profile.name = !isEmpty(profile.name) ? profile.name : "";
      profile.avatar = !isEmpty(profile.avatar) ? profile.avatar : {};
      profile.age = !isEmpty(profile.age) ? profile.age : "";
      profile.location = !isEmpty(profile.location) ? profile.location : "";
      profile.lookingFor = !isEmpty(profile.lookingFor)
        ? profile.lookingFor
        : "";
      profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
      profile.artists = !isEmpty(profile.artists) ? profile.artists : "";
      profile.art = !isEmpty(profile.art) ? profile.art : "";

      // Set component fields state
      this.setState({
        handle: profile.handle,
        name: profile.name,
        avatar: profile.avatar,
        age: profile.age,
        location: profile.location,
        lookingFor: profile.lookingFor,
        bio: profile.bio,
        artists: profile.artists,
        art: profile.art
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      name: this.state.name,
      avatar: this.state.avatar,
      age: this.state.age,
      location: this.state.location,
      lookingFor: this.state.lookingFor,
      bio: this.state.bio,
      artists: this.state.artists,
      art: this.state.art
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    console.log("this is edit profiles state for artists", this.state.artists);
    console.log("this is edit profiles state for art", this.state.art);
    // Select options for status
    const options = [
      { label: "* Select Option", value: 0 },
      { label: "Male seeking Female", value: "Male seeking Female" },
      { label: "Female seeking Male", value: "Female seeking Male" },
      { label: "Male seeking Male", value: "Male seeking Male" },
      { label: "Female seeking Female", value: "Female seeking Female" },
      { label: "Seeking new friends", value: "Seeking new friends" },
      { label: "Not sure", value: "Not sure" }
    ];

    return (
      <div className="register-background">
        <div className="edit-profile">
          <div className="container-edit">
            <div className="edit-form">
              <div className="box-1">
                <Link to="/dashboard" className="btn btn-light">
                  Go Back
                </Link>
                <h1 className="text-center">Edit Profile</h1>
                <small className="d-block pb-3">* = required fields</small>
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Username"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    error={errors.handle}
                  />
                  <TextFieldGroup
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextFieldGroup
                    placeholder="Profile Pic URL"
                    name="avatar"
                    value={this.state.avatar}
                    onChange={this.onChange}
                    error={errors.avatar}
                    info="Copy and paste an image of yourself here!"
                  />
                </form>
              </div>
              <form onSubmit={this.onSubmit}>
                <div className="box-2">
                  <TextFieldGroup
                    placeholder="Age"
                    name="age"
                    value={this.state.age}
                    onChange={this.onChange}
                    error={errors.age}
                  />
                  <TextFieldGroup
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                    error={errors.location}
                  />
                  <SelectListGroup
                    placeholder="Seeking..."
                    name="lookingFor"
                    value={this.state.lookingFor}
                    onChange={this.onChange}
                    options={options}
                    error={errors.lookingFor}
                  />

                  <TextAreaFieldGroup
                    placeholder="Bio"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    error={errors.bio}
                  />

                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-lg mt-4 ml-4"
                  />
                </div>
                <div />
              </form>
              <div className="box-3">
                <a
                  className="btn btn-1 btn-lg btn-spotify btn-secondary"
                  href="http://localhost:3002/api/spotify/login"
                >
                  To Spotify
                </a>
                <Spotify
                  toState={artists => this.setState({ artists })}
                  toArtState={art => this.setState({ art })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dark-overlay" />
      </div>
    );
  }
}

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfile }
)(withRouter(CreateProfile));
