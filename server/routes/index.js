const express = require("express");
const router = express.Router();
const Designer = require("../models/Designer");
const _ = require("lodash");

// GET RANDOM DESIGNER/ARTISAN FOR HOME PAGE
router.get("/get/:role", (req, res) => {
  Designer.find(
    { role: req.params.role },
    "firstName lastName titleImage brandLogo youinasentence public_id_ti public_id_bl tagsCategory tagsMaterial position city country brand"
  )
    .then(result => {
      res.status(200).json(_.sampleSize(result, 4));
    })
    .catch(err => res.status(500).json({ message: "finding user went wrong" }));
});

// MATCH DESIGNER <-> ARTISANS and ARTISAN <-> DESIGNERS
router.get("/match/:role/:slice", (req, res) => {
  let theRole, dest_req, dest_res;

  req.params.role === "designer"
    ? ((theRole = "artisan"), (dest_req = req.user.tagsDestination))
    : ((theRole = "designer"), (dest_req = [req.user.country]));

  // current designer category + material
  let currentUser = [
    ...req.user.tagsCategory,
    ...req.user.tagsMaterial,
    ...dest_req
  ];

  Designer.find(
    { role: theRole },
    "firstName lastName titleImage brandLogo youinasentence public_id_ti public_id_bl tagsCategory tagsMaterial tagsDestination position city country brand"
  ).then(result => {
    // how many matches?
    let countMatches = result.map(e => {
      req.params.role === "designer"
        ? (dest_res = [e.country])
        : (dest_res = e.tagsDestination);

      // one artisan category + material
      oppositeRole = [...e.tagsCategory, ...e.tagsMaterial, ...dest_res];
      let matches = 0;

      for (let i = 0; i < currentUser.length; i++) {
        if (currentUser.includes(oppositeRole[i])) {
          matches += 1;
        }
      }
      // each document gets a field with the amount of matches
      e.matches = matches;
      return e;
    });

    // sort by amount of matches
    countMatches.sort((a, b) => {
      a = a.matches;
      b = b.matches;
      return b - a;
    });

    req.params.slice === "4"
      ? res.status(200).json(countMatches.slice(0, 4))
      : res.status(200).json(countMatches);
  });
});

router.get("/getNewest/:userType", (req, res) => {
  Designer.find({ role: req.params.userType })
    .sort("-date")
    .then(users => {
      return res.status(200).json(users);
    })
    .catch(err => console.log(err));
});

router.get("/getuserprofile/:id", (req, res) => {
  Designer.findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => console.log(err));
});

module.exports = router;
