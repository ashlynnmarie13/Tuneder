const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const querystring = require("querystring");
const request = require("request");

// Load User model
const User = require("../../models/User");

//spotify id and secret
var client_id = "1142d8ac39384674b9662b8081e2001a"; // Your client id
var client_secret = "8913f9e2215d4ce5b4c2d30ee7a68e74"; // Your secret
var redirect_uri = "http://localhost:3002/api/spotify/callback"; // Your redirect uri

const generateRandomString = function(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const stateKey = "spotify_auth_state";

router.get("/login", function(req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope =
    "user-read-private user-top-read user-library-read user-read-email";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      })
  );
});

router.get("/callback", function(req, res) {
  console.log("hello");
  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  // var scope = req.query.scope || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  console.log({ code, state, storedState });

  if (state === null || state !== storedState) {
    res.redirect(
      "http://localhost:3000/edit-profile#" +
        querystring.stringify({
          error: "state_mismatch"
        })
    );
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        // scope: scope,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code"
      },
      headers: {
        Authorization:
          "Basic " +
          new Buffer(client_id + ":" + client_secret).toString("base64")
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token,
          refresh_token = body.refresh_token;

        var options = {
          url: "https://api.spotify.com/v1/me",
          headers: { Authorization: "Bearer " + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log({ body });
        });

        // we can also pass the token to the browser to make requests from there
        // req.session.access_token = access_token;
        // req.session.refresh_token = refresh_token;
        res.redirect(
          "http://localhost:3000/edit-profile#" +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token
            })
        );
        // res.redirect("http://localhost:3000/edit-profile");
      } else {
        res.redirect(
          "http://localhost:3000/edit-profile#" +
            querystring.stringify({
              error: "invalid_token"
            })
        );
      }
    });
  }
});

router.get("/refresh_token", function(req, res) {
  console.log("hit");
  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  console.log(refresh_token);
  var authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64")
    },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        access_token: access_token
      });
    }
  });
});

router.get("/tokens", (req, res) => {
  const { access_token, refresh_token } = req.session;
  res.status(200).send({ access_token, refresh_token });
});

module.exports = router;
