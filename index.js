const express = require("express");
const router = express();
const port = process.env.PORT || 3000;

router.get("/", (req, res) => {
  res.send("Wiki home page");
});

router.get("/about", (req, res) => {
  res.send("About this wiki");
});

router.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = router;