const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Route to add a comment to a post by post ID
router.post("/post/:postId", commentController.addCommentToPost);

module.exports = router;