const express = require("express");
const router = express.Router();
const Designer = require("../models/Designer");

// GET RANDOM DESIGNER FOR HOME PAGE
router.get("/get/:role", (req, res) => {
  Designer.find(
    { role: req.params.role },
    "firstName lastName titleImage brandLogo youinasentence tagsCategory position"
  )
    .then(result => {
      let randomArr = [];
      for (let i = 0; randomArr.length < 4; i++) {
        let getRandom = result[Math.floor(Math.random() * result.length)];
        if (randomArr.includes(getRandom) === false) {
          randomArr.push(getRandom);
        }
      }
      res.status(200).json(randomArr);
    })
    .catch(err => res.status(500).json({ message: "finding user went wrong" }));
});

module.exports = router;
