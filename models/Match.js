const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MatchSchema = new Schema({
  profile: {
    type: Schema.Types.ObjectId,
    ref: "profile"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  name: {
    type: String
  },
  age: {
    type: String
  },
  location: {
    type: String
  },
  lookingFor: {
    type: String
  },
  bio: {
    type: String
  },
  artists: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Match = mongoose.model("match", MatchSchema);
