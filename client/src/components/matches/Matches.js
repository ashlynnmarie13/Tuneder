import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ProfileItem from "../profiles/ProfileItem";
import { getMatches } from "../../actions/matchActions";

export default class Matches extends Component {
  render() {
    return <div>Matches</div>;
  }
}

/*
class Matches extends Component {
  componentDidMount() {
    this.props.getMatches();
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
      <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Musers</h1>
              <p className="lead text-center">
                Find and connect with all musers
              </p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Matches.propTypes = {
  getMatches: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getMatches }
)(Matches); 
*/
