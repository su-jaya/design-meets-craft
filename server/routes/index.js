const express = require("express");
const router = express.Router();
const Designer = require("../models/Designer");
const _ = require("lodash");

// GET RANDOM DESIGNER/ARTISAN FOR HOME PAGE
router.get("/get/:role", (req, res) => {
  Designer.find(
    { role: req.params.role },
    "firstName lastName titleImage brandLogo youinasentence tagsCategory position city country brand"
  )
    .then(result => {
      res.status(200).json(_.sampleSize(result, 4));
    })
    .catch(err => res.status(500).json({ message: "finding user went wrong" }));
});

// MATCH A DESIGNER WITH ARTISANS

router.get("/match/:role", (req, res) => {
  Designer.find(
    { role: req.params.role },
    "firstName lastName titleImage brandLogo youinasentence tagsCategory tagsMaterial position city country brand"
  ).then(result => {
    // current designer category + material
    let currentUser = [...req.user.tagsCategory, ...req.user.tagsMaterial];

    // how many matches?
    let countMatches = result.map(e => {
      // one artisan category + material

      oppositeRole = [...e.tagsCategory, ...e.tagsMaterial];
      let matches = 0;

      for (let i = 0; i < currentUser.length; i++) {
        if (currentUser.includes(oppositeRole[i])) {
          matches += 1;
        }
      }

      e.matches = matches;
      return e;
    });

    // sort by amount of matches
    countMatches.sort((a, b) => {
      a = a.matches;
      b = b.matches;
      return b - a;
    });

    res.status(200).json(countMatches.slice(0, 4));
  });
});

module.exports = router;
