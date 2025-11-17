const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.getPostBySender);

router.get("/:id", postController.getPostById);

router.post("/", postController.postPost);

router.delete("/:id", postController.deletePost);

router.put("/:id", postController.putPost);

module.exports = router;
