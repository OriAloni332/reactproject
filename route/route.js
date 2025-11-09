const express = require("express");
const Post = require("../controller/post");
const { route } = require("../controller/wiki");

router = express.Router();

router.get("/", Post.getPosts);

module.exports = router;