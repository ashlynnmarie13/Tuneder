import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import { createMatch } from "../../actions/matchActions";

import React, { Component } from "react";

class CreateMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
      handle: "",
      name: "",
      avatar: "",
      age: "",
      location: "",
      lookingFor: "",
      bio: "",
      artists: "",
      art: art,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const matchData = {
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

    this.props.createMatch(matchData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Username - put something catchy!"
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
                <TextFieldGroup
                  placeholder="Artists I like...."
                  name="artists"
                  value={this.state.artists}
                  onChange={this.onChange}
                  error={errors.artists}
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-warning btn-lg ml-4 mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  matches: state.matches,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createMatch }
)(withRouter(CreateMatches));
