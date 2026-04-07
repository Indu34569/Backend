import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/database.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware (example)
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});
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

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
