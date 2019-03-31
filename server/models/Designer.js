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
  zip: String,
  country: String,
  telephone: Number,
  language: Array,
  tagsCategory: [],
  tagsMaterial: [],
  tagsDestination: [],
  capacity: String,
  lookingfor: String,
  brandLogo: String,
  titleImage: String,
  gallery: Array,
  role: String,
  matches: Number
});

module.exports = mongoose.model("Designer", schema);
