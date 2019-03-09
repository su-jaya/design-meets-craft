const express = require("express");
const router = express.Router();


router.post("/designer", (req, res) => {
  res.json("worked")
})

router.post("/aboutyou1", (req, res) => {
  res.json("worked")
})

module.exports = router;

