const express = require("express");
const app = express();
const wiki = require("./controller/wiki");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));


const indexRouter = require("./route/route.js");
const port = process.env.PORT || 3000;

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = router;