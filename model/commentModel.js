const moongoose = require('mongoose');

const commentSchema = new moongoose.Schema({
    postId: {
        type: moongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Post'
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = moongoose.model("Comment", commentSchema);