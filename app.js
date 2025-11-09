const express = require("express");
const app = express();
const wiki = require("./controller/wiki");
  
const indexRouter = require("./route/route.js");
const port = process.env.PORT || 3000;

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = router;