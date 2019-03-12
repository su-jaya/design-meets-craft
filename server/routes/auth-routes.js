const express = require("express");
const authRoutes = express.Router();

const passport = require("passport");
const bcrypt = require("bcryptjs");

const Designer = require("../models/Designer");

authRoutes.post("/designer", (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const passwordConfirm = req.body.passwordConfirm;

  if (password != passwordConfirm) {
    res.send("Wrong password");
    res.status(400).json({
      message: "Please type in correct password"
    });
    return;
  }

  Designer.findOne({ email: email }).then(user => {
    if (user !== null) {
      res.send("Your e-mail is already assigned to an account. Please Log in");
      res.status(400).json({
        message: "Your e-mail is already assigned to an account. Please Log in"
      });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const aNewUser = new Designer({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashPass
    });

    aNewUser.save(err => {
      if (err) {
        res.send("something went wrong. Please try again");
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      } else {
        res.send("all fine");
      }
    });
  });
});
module.exports = authRoutes;
