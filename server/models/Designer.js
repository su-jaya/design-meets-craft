const mongoose = require("mongoose");

const schema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  passwordConfirm: String,
  youinasentence: String,
  position: String,
  brand: String,
  website: String,
  adress: String,
  city: String,
  zip: Number,
  country: String,
  telephone: Number,
  language: Array
});

module.exports = mongoose.model("Designer", schema);
