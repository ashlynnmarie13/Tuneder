import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";

import { getMatches } from "../../actions/matchActions";
import MatchItem from "../matches/MatchItem";

// import Carousel from "./Carousel.js";

class Matches extends Component {
  componentDidMount() {
    this.props.getMatches();
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    // if (nextProps.errors) {
    //   this.setState({ errors: nextProps.errors });
    // }

    // if (nextProps.profile.profile) {
    //   const profile = nextProps.profile.profile;

    //   // If profile field doesnt exist, make empty string
    //   profile.name = !isEmpty(profile.name) ? profile.name : "";
    //   profile.avatar = !isEmpty(profile.avatar) ? profile.avatar : {};
    //   profile.age = !isEmpty(profile.age) ? profile.age : "";
    //   profile.location = !isEmpty(profile.location) ? profile.location : "";
    //   profile.lookingFor = !isEmpty(profile.lookingFor)
    //     ? profile.lookingFor
    //     : "";
    //   profile.bio = !isEmpty(profile.bio) ? profile.bio : "";
    //   profile.artists = !isEmpty(profile.artists) ? profile.artists : "";
    //   profile.art = !isEmpty(profile.art) ? profile.art : "";
    //   profile.tracks = !isEmpty(profile.tracks) ? profile.tracks : "";
    //   profile.albums = !isEmpty(profile.albums) ? profile.albums : "";

    //   // Set component fields state
    //   this.setState({
    //     handle: profile.handle,
    //     name: profile.name,
    //     avatar: profile.avatar,
    //     age: profile.age,
    //     location: profile.location,
    //     lookingFor: profile.lookingFor,
    //     bio: profile.bio,
    //     artists: profile.artists,
    //     art: profile.art,
    //     tracks: profile.tracks,
    //     albums: profile.albums
    //   });
    // }
  }

  render() {
    console.log(this.props);
    // const { profiles, loading } = this.props.profile;
    // let profileItems;

    // if (profiles === null || loading) {
    //   profileItems = <Spinner />;
    // } else {
    //   if (profiles.length > 0) {
    //     profileItems = profiles.map(profile => (
    //       <ProfileItem key={profile._id} profile={profile} />
    //     ));
    //   } else {
    //     profileItems = <h4>No profiles found...</h4>;
    //   }
    // }

    return (
      <div>
        <div className="profiles-new">
          <div className="tuneders-box">
            <h1 className="text-center">Matches</h1>
          </div>
          {/* <div style={Object.assign({}, styles.slide, styles.slide1)}> */}
          {/* {profileItems} */}
        </div>
        <div className="register-background" />
        <div className="dark-overlay" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  matches: state.matches
});

export default connect(
  mapStateToProps,
  { getMatches }
)(Matches);
