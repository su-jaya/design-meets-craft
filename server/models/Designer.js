const mongoose = require("mongoose")

const schema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  confirmpassword: String
})

module.exports = mongoose.model("Designer", schema)