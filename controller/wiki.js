// wiki.js - wiki route module

const express = require("express");
const router = express.Router();

// Homeoage route
router.get("/", (req, res) => {
  res.send("Wiki home page");
});

// About page route
router.get("/about", (req, res) => {
  res.send("About this wiki");
});

module.exports = router;