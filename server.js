require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const querystring = require("querystring");
const request = require("request");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const socket = require("socket.io");
// const MongoStore = require("connect-mongo")(session);
const session = require("express-session");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const spotify = require("./routes/api/spotify");
const matches = require("./routes/api/matches");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// spotify middleware
app
  .use(express.static(path.join(__dirname, "/./client/build")))
  .use(cors())
  .use(cookieParser());

// DB Config
const db = require("./config/keys").mongoURI;

//spotify id and secret
var sp_client_id = "1142d8ac39384674b9662b8081e2001aD"; // Your client id
var sp_client_secret = "8913f9e2215d4ce5b4c2d30ee7a68e74"; // Your secret
var sp_redirect_uri = process.env.REACT_APP_CALLBACK; // Your redirect uri

//spotify random string
const generateRandomString = function(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

//something for spotify
const stateKey = "spotify_auth_state";

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("We found it, the rainbow connection!"))
  .catch(err => console.log(err));

// set up session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
    // store: new MongoStore({
    //   url: process.env.MLAB_URI
    //   // 'mongodb://localhost/muser'
    // })
  })
);

//I HAD TO PUT THIS HERE IDK WHY
const port = process.env.PORT || 3002;

server = app.listen(port, () => console.log(`Server running on port ${port}`));

//Connect to socket.io
io = socket(server);

io.on("connection", socket => {
  console.log(socket.id);

  socket.on("SEND_MESSAGE", function(data) {
    console.log(io);
    io.emit("RECEIVE_MESSAGE", data);
  });
});

// Passport middleware (mongo)
app.use(passport.initialize());
app.use(passport.session());

// Passport Config (mongo)
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/spotify", spotify);
app.use("/api/matches", matches);

// Server static assets if in production
// if (process.env.NODE_ENV === "production") {
// Set static folder
// app.use(express.static(__dirname + "./client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/./client/public/index.html"));
});
// }
