const express = require("express");
const authRoutes = express.Router();

const passport = require("passport");
const bcrypt = require("bcryptjs");

const Designer = require("../models/Designer");

// SIGN UP DESIGNER

authRoutes.post("/signup/designer", (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const passwordConfirm = req.body.passwordConfirm;

  if (password != passwordConfirm) {
    res.status(400).json({
      message: "Please type in correct password"
    });
    return;
  }

  Designer.findOne({ email: email }).then(user => {
    if (user !== null) {
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
        res
          .status(400)
          .json({ message: "Saving user to database went wrong." });
        return;
      } else {
        res.status(200).json({ message: "no Error" });
      }

      // req.login(aNewUser, err => {
      //   if (err) {
      //     res.status(500).json({ message: "Login after signup went bad." });
      //     return;
      //   }
      //   res.status(200).json({ message: "user's info:" + aNewUser });
      // });
    });
  });
});

// LOG IN DESIGNER
authRoutes.post("/login/designer", (req, res, next) => {
  console.log(req.body);
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "Something went wrong authenticating user" });
      return;
    }

    if (!theUser) {
      // "failureDetails" contains the error messages
      // from our logic in "LocalStrategy" { message: '...' }.
      res.status(401).json(failureDetails);
      return;
    }

    // save user in session
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "Session save went bad." });
        return;
      }

      // We are now logged in (that's why we can also send req.user)
      res.status(200).json(theUser);
    });
  })(req, res, next);
});

// LOG OUT DESIGNER
authRoutes.post("/logout", (req, res, next) => {
  req.logout();
  res.status(200).json({ message: "Log out success!" });
});

// LOGGED IN DESIGNER
authRoutes.get("/loggedin", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }
  res.status(403).json({ message: "Unauthorized" });
});

authRoutes.post("/signup/designer/aboutyou", (req, res) => {
  console.log(req.body);
});

module.exports = authRoutes;
