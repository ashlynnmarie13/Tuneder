const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  name: {
    type: String
  },
  avatar: {
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
    type: Object
  },
  art: {
    type: Object
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
