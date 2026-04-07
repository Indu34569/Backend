import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/database.js";

import postRoutes from "./routes/post.route.js"; // adjust path if needed

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use("/api/v1/posts", postRoutes);

// Sample route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// User routes
app.post("/api/v1/users/register", (req, res) => {
  res.json({
    message: "User registered successfully",
    data: req.body,
  });
});

app.post("/api/v1/users/login", (req, res) => {
  const { email, password } = req.body;
  res.json({
    message: "User login successful",
    email,
    password,
  });
});

app.post("/api/v1/users/logout", (req, res) => {
  res.json({
    message: "User logged out successfully",
  });
});

// Minimal change: Post creation route
app.post("/api/v1/posts/create", async (req, res) => {
  try {
    const { title, content, age } = req.body;

    const post = await Post.create({ title, content, age });

    res.status(201).json({
      message: "Post created successfully",
      post, // this now includes id, timestamps, and all fields
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create post",
      error: error.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
