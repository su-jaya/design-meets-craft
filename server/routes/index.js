const express = require("express");
const router = express.Router();
const Designer = require("../models/Designer");

router.get("/getDesigners", (req, res) => {
  Designer.find({ role: "designer" })
    .then(result => console.log(result))
    .catch(err => console.log(err));

  res.status(200).json({ message: "all good" });
});

module.exports = router;
