const comment = require("../model/commentModel");

// create Comment to Post by using post id
const addCommentToPost = async (req, res) => {
    const postId = req.params.postId;
    const commentData = req.body;
    console.log(postId, commentData);
    
    try {
        // Here you would typically add logic to associate the comment with the post
        const newComment = await comment.create(commentData);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Read a single comment by its ID
const getCommentById = async (req, res) => {
    const commentId = req.params.commentId;
    try {
        const commentData = await comment.findById(commentId);
        if (!commentData) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json(commentData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//read comment of post by post id
const getCommentsByPostId = async (req, res) => {
    const postId = req.params.postId;
    try {
        const comments = await comment.find({ postId: postId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//update comment of post by comment id
const updateCommentById = async (req, res) => {
    const commentId = req.params.commentId;
    const updatedData = req.body;
    try {
        const updatedComment = await comment.findByIdAndUpdate(commentId, updatedData, { new: true });
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//delete comment of post by comment id
const deleteCommentById = async (req, res) => {
    const commentId = req.params.commentId;
    try {
        await comment.findByIdAndDelete(commentId);
        res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addCommentToPost,
    getCommentById,
    getCommentsByPostId,
    updateCommentById,
    deleteCommentById,
};
