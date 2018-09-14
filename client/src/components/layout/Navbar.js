import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import "../../App.css";
import "./NavBar.css";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    return (
      <nav
        className="nav"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: "80%"
        }}
      >
        <div
          className="navbox"
          style={{
            width: "80vw",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className="collapse navbar-collapse" id="mobile-nav">
            <div
              className="collapse-items"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                width: "30vw",
                color: "white",
                alignSelf: "center",

                marginTop: "10%"
              }}
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/profiles">
                    {" "}
                    Search Profiles
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/matches">
                    {" "}
                    Matches
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-top">
            <Link className="navbar-brand font2" to="/">
              TUNE&#119082;der
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav, #mobile-nav-two"
            >
              <i class="fa fa-bars" />
            </button>
          </div>

          <div className="collapse navbar-collapse" id="mobile-nav-two">
            <div
              className="collapse-items"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                color: "white",

                width: "30vw"
              }}
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Home
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    href=""
                    onClick={this.onLogoutClick.bind(this)}
                    className="nav-link"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
