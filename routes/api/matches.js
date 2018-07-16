const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Model
const User = require("../../models/User");

// @route   GET api/matches/all
// @desc    Get all matches
// @access  Public
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Match.find()
      .populate("user", ["name", "age"])
      .then(matches => {
        if (!matches) {
          errors.nomatches = "There are no matches";
          return res.status(404).json(errors);
        }

        res.json(profiles);
      })
      .catch(err => res.status(404).json({ profile: "There are no matches" }));
  }
);
