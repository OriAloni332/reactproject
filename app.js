const express = require("express");
const router = express();
const port = process.env.PORT || 3000;
const wiki = require("./wiki.js");

router.use("/wiki", wiki);

router.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = router;