const Post = require("../model/postModel");

const getPostBySender = async (req, res) => {
  const filter = req.query;
  console.log(filter);
  try {
    if (filter.senderID) {
      const posts = await Post.find(filter);
      res.json(posts);
    } else {
      const posts = await Post.find();
      res.json(posts);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPostById = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const post = await Post.findById(id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postPost = async (req, res) => {
  const obj = req.body;
  console.log(obj);
  try {
    const response = await Post.create(obj);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const response = await Post.findByIdAndDelete(id);
    res.send(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const putPost = async (req, res) => {
  const id = req.params.id;
  const obj = req.body;
  console.log(id, obj);
  try {
    const response = await Post.findByIdAndUpdate(id, obj, { new: true });
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getPostBySender,
  getPostById,
  postPost,
  deletePost,
  putPost,
};
