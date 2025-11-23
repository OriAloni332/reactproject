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

module.exports = {
    addCommentToPost,
};
