const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Model
const User = require("../../models/User");

// Load Match Model
const Match = require("../../models/Match");

// @route   GET api/matches/all
// @desc    Get all matches
// @access  Public
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Match.find()
      .populate("user", ["name", "age"])
      .then(matches => {
        if (!matches) {
          errors.nomatches = "There are no matches";
          return res.status(404).json(errors);
        }

        res.json(matches);
      })
      .catch(err => res.status(404).json({ matches: "There are no matches" }));
  }
);

// add a match
// api/matches

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Get fields
    const matchFields = {};
    matchFields.user = req.user.id;
    if (req.body.matches) matchFields.matches = req.body.matches;
    // if (req.body.matches.data.handle)
    //   matchFields.name = req.body.matches.data.handle;
    // if (req.body.matches.data.name)
    //   matchFields.name = req.body.matches.data.name;
    // if (req.body.matches.data.avatar)
    //   matchFields.avatar = req.body.matches.data.avatar;
    // if (req.body.matches.data.age) matchFields.age = req.body.matches.data.age;
    // if (req.body.matches.data.location)
    //   matchFields.location = req.body.matches.data.location;
    // if (req.body.matches.data.lookingFor)
    //   matchFields.lookingFor = req.body.matches.data.lookingFor;
    // if (req.body.matches.data.bio) matchFields.bio = req.body.matches.data.bio;
    // if (req.body.matches.data.artists)
    //   matchFields.artists = req.body.matches.data.artists;

    Match.findOne({ user: req.user.id }).then(match => {
      if (match) {
        Match.findOneAndUpdate(
          { user: req.user.id },
          { $set: matchFields },
          { new: true }
        ).then(match => res.json(match));
      } else {
        Match.findOne({ handle: matchFields.handle }).then(match => {
          if (match) {
            // errors.handle = "That handle already exists";
            // res.status(400).json(errors);
          }

          // Save Profile
          new Match(matchFields).save().then(match => res.json(match));
        });
      }
    });
  }
);

module.exports = router;
