const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Profile = require("../../models/Profile");

const User = require("../../models/User");

const Match = require("../../models/Match");

// Get current user's matches
// api/matches

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Match.findOne({ user: req.user.id })
      // .populate("user", ["name", "avatar"])
      .then(matches => res.status(200).send(matches))
      .catch(err => res.status(404).json(err));
  }
);

// Add a match
// api/matches

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Get fields

    const matchFields = {};
    matchFields.user = req.user.id;

    if (req.body.matches) matchFields.matches = req.body.matches;

    // Finding if the Match object for one user exists
    Match.findOne({ user: req.user.id }).then(match => {
      // If the Match object exists, then update the matches array within the object
      if (match) {
        Match.update(
          { user: req.user.id },
          { $push: { matches: matchFields.matches } },
          { new: true }
        ).then(match => res.json(match));
        // If it does not exist, then create a new Match object for that user
      } else {
        Match.findOne({ handle: matchFields.handle }).then(match => {
          if (match) {
            errors.handle = "That handle already exists";
            res.status(400).json(errors);
          }

          // Save Match
          new Match(matchFields).save().then(match => res.json(match));
        });
      }
    });
  }
);

module.exports = router;
