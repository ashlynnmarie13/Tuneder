import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
// import MatchItem from "../profiles/MatchItem";
import { getMatches } from "../../actions/matchActions";

// import Carousel from "./Carousel.js";

export default class Matches extends Component {
  render() {
    return (
      <div>Matches</div>
      // <Carousel autoPlayInterval={2000} indicator={true} switcher={true}>
      //   <div
      //     style={{
      //       height: "300px",
      //       textAlign: "center",
      //       backgroundColor: "#1a1a1d"
      //     }}
      //   >
      //     1
      //   </div>
      //   <div
      //     style={{
      //       height: "300px",
      //       textAlign: "center",
      //       backgroundColor: "#1a1a1d"
      //     }}
      //   >
      //     2
      //   </div>
      //   <div
      //     style={{
      //       height: "300px",
      //       textAlign: "center",
      //       backgroundColor: "#1a1a1d"
      //     }}
      //   >
      //     3
      //   </div>
      //   <div
      //     style={{
      //       height: "300px",
      //       textAlign: "center",
      //       backgroundColor: "#1a1a1d"
      //     }}
      //   >
      //     4
      //   </div>
      // </Carousel>
    );
  }
}

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
