import { Post } from "../models/posts.model.js";

// Create a post
const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;
    if (!name || !description || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const post = await Post.create({ name, description, age });
    res.status(201).json({
      message: "Post created successfully",
      post: post.toObject(),
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Read all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// **Add updatePost here**
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, age } = req.body;

    const post = await Post.findByIdAndUpdate(
      id,
      { name, description, age },
      { new: true }, // return updated document
    );

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// Export all functions
export { createPost, getPosts, updatePost, deletePost };
