import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
// import MatchItem from "../profiles/MatchItem";
import { getMatches } from "../../actions/matchActions";

export default class Matches extends Component {
  render() {
    return <div>Matches</div>;
  }
}

// class Profiles extends Component {
//   componentDidMount() {
//     this.props.getMatches();
//   }

//   render() {
//     const { matches, loading } = this.props.matches;
//     let matchItems;

//     if (profiles === null || loading) {
//       matchItems = <Spinner />;
//     } else {
//       if (profiles.length > 0) {
//         matchItems = profiles.map(profile => (
//           <ProfileItem key={profile._id} profile={profile} />
//         ));
//       } else {
//         matchItems = <h4>No profiles found...</h4>;
//       }
//     }

//     return (
//       <div className="profiles">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <h1 className="display-4 text-center">Matches</h1>
//               <p className="lead text-center">
//                 Swipe right to match and left to pass
//               </p>
//               {/* <div style={Object.assign({}, styles.slide, styles.slide1)}> */}
//               {matchItems}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// Profiles.propTypes = {
//   getProfiles: PropTypes.func.isRequired,
//   profile: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   profile: state.profile
// });

// export default connect(
//   mapStateToProps,
//   { getProfiles }
// )(Profiles);
