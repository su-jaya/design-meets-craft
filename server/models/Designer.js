const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
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
    public_id_bl: String,
    public_id_ti: String,
    gallery: Array,
    role: String,
    matches: Number
  },
  {
    timestamps: { createdAt: "created_at" }
  }
);

module.exports = mongoose.model("Designer", schema);
