const express = require("express");
const router = express.Router();


router.post("/designer", (req, res) => {
  res.json("worked")
})

router.post("/aboutyou", (req, res) => {
  res.json("worked")
})

module.exports = router;

