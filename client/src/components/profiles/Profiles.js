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
            <p className="text-center">Swipe right to match and left to pass</p>
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

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);

// mport React, { Component } from 'react';
// import { Card, Button } from 'react-native-elements';
// import {
//   Animated,
//   Dimensions,
//   LayoutAnimation,
//   PanResponder,
//   Text,
//   View,
//   UIManager,
// } from 'react-native';

// const { width } = Dimensions.get('window');

// const SCREEN_WIDTH = width;
// const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
// const SWIPE_OUT_DURATION = 250;

// const styles = {
//   cardStyle: {
//     position: 'absolute',
//     width: SCREEN_WIDTH,
//   },
//   container: {
//     backgroundColor: '#fff',
//     flex: 1,
//     marginTop: 20,
//   },
// };

// const DATA = [
//   { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
//   { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
//   { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
//   { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
//   { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
//   { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
//   { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
//   { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
// ];

// class Deck extends Component {
//   static defaultProps = {
//     onSwipeRight: () => 0,
//     onSwipeLeft: () => 0,
//   };

//   position = new Animated.ValueXY();

//   panResponder = PanResponder.create({
//     onStartShouldSetPanResponder: () => true,

//     onPanResponderMove: (event, { dx }) => {
//       this.position.setValue({ x: dx });
//     },

//     onPanResponderRelease: (event, { dx }) => {
//       if (dx > SWIPE_THRESHOLD) {
//         this.forceSwipe('right');
//       } else if (dx < -SWIPE_THRESHOLD) {
//         this.forceSwipe('left');
//       } else {
//         this.resetPosition();
//       }
//     },
//   });

//   state = {
//     index: 0,
//   };

//   componentWillReceiveProps({ data }) {
//     if (data !== this.props.data) {
//       this.setState({ index: 0 });
//     }
//   }

//   componentWillUpdate() {
//     if (UIManager.setLayoutAnimationEnabledExperimental) {
//       UIManager.setLayoutAnimationEnabledExperimental(true);
//     }

//     LayoutAnimation.spring();
//   }

//   forceSwipe(direction) {
//     const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

//     Animated.timing(this.position, {
//       toValue: { x, y: 0 },
//       duration: SWIPE_OUT_DURATION,
//     }).start(() => this.onSwipeComplete(direction));
//   }

//   onSwipeComplete(direction) {
//     const { onSwipeLeft, onSwipeRight, data } = this.props;
//     const item = data[this.state.index];
//     const fnSwipe = direction === 'right' ? onSwipeRight : onSwipeLeft;

//     if (fnSwipe) {
//       fnSwipe(item);
//     }

//     this.position.setValue({ x: 0, y: 0 });
//     this.setState({ index: this.state.index + 1 });
//   }

//   resetPosition() {
//     Animated.spring(this.position, {
//       toValue: { x: 0, y: 0 },
//     }).start();
//   }

//   getCardStyle() {
//     const rotate = this.position.x.interpolate({
//       inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
//       outputRange: ['-30deg', '0deg', '30deg'],
//     });

//     return { ...this.position.getLayout(), transform: [{ rotate }] };
//   }

//   renderCards() {
//     const { index } = this.state;
//     const { data, renderCard, renderNoMoreCards } = this.props;

//     if (index >= data.length) {
//       return renderNoMoreCards();
//     }

//     return data.map((item, i) => {
//       let props = {};
//       let style = [styles.cardStyle, { zIndex: 5 }];

//       if (i < index) {
//         return null;
//       }

//       if (i === index) {
//         props = this.panResponder.panHandlers;
//         style = [this.getCardStyle(), styles.cardStyle, { zIndex: 99 }];
//       }

//       return (
//         <Animated.View {...props} key={item.id} style={style}>
//           {renderCard(item)}
//         </Animated.View>
//       );
//     }).reverse();
//   }

//   render() {
//     return (
//       <View>
//         {this.renderCards()}
//       </View>
//     );
//   }
// }

// class App extends React.Component {
//   state = {
//     data: DATA,
//   };

//   renderCard = (item) => {
//     return (
//       <Card title={item.text} image={{ uri: item.uri }}>
//         <Text style={{ marginBottom: 10 }}>
//           I can customize the Card further.!!!!!!!!!
//         </Text>
//         <Button icon={{ name: 'code' }} backgroundColor="#03A9F4" title="Ver Agora!" />
//       </Card>
//     );
//   };

//   renderNoMoreCards = () => {
//     return (
//       <Card title="All Done!">
//         <Text style={{ marginBottom: 10 }}>
//           There's no more content here!
//         </Text>
//         <Button
//           backgroundColor="#03A9F4"
//           title="Get more!"
//           onPress={() => this.setState({ data: [].concat(this.state.data) })}
//         />
//       </Card>
//     );
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Deck
//           data={this.state.data}
//           ref={ref => (this.deck = ref)}
//           renderCard={this.renderCard}
//           renderNoMoreCards={this.renderNoMoreCards}
//         />
//       </View>
//     );
//   }
// }

// export default App;
