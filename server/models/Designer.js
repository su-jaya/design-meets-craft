const mongoose = require("mongoose");

const schema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  passwordConfirm: String
});

module.exports = mongoose.model("Designer", schema);
