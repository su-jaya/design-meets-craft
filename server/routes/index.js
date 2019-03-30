const express = require("express");
const router = express.Router();
const Designer = require("../models/Designer");
const _ = require("lodash");

// GET RANDOM DESIGNER FOR HOME PAGE
router.get("/get/:role", (req, res) => {
  Designer.find(
    { role: req.params.role },
    "firstName lastName titleImage brandLogo youinasentence tagsCategory position"
  )
    .then(result => {
      res.status(200).json(_.sampleSize(result, 4));
    })
    .catch(err => res.status(500).json({ message: "finding user went wrong" }));
});

module.exports = router;
