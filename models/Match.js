const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const MatchSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  matches: [
    {
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
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Match = mongoose.model("match", MatchSchema);
