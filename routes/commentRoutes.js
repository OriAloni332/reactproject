const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// Route to add a comment to a post by post ID
router.post("/post/:postId", commentController.addCommentToPost);
// Route to get comments of a post by post ID
router.get("/post/:postId", commentController.getCommentsByPostId);
// Route to update a comment by comment ID
router.put("/:commentId", commentController.updateCommentById);
// Route to delete a comment by comment ID
router.delete("/:commentId", commentController.deleteCommentById);

module.exports = router;