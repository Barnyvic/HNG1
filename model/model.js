const mongoose = require("mongoose");

const User = new mongoose.Schema({
  slackUsername: {
    type: String,
    require: true,
  },
  backend: {
    type: Boolean,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  bio: {
    type: String,
    require: true,
  },
});

const Users = mongoose.model("Users", User);

module.exports = Users;
