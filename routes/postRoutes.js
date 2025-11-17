const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.getAllPosts);

router.get("/", postController.getPost);

router.get("/:id", postController.getPostById);

router.post("/", postController.postPost);

router.delete("/:id", postController.deletePost);

router.put("/:id", postController.putPost);

module.exports = router;
