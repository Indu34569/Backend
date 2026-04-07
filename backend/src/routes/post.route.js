import { Router } from "express";
import {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";

const router = Router();

router.post("/create", createPost);
router.get("/getPosts", getPosts);
router.put("/updatePost/:id", updatePost); // updatePost is defined
router.delete("/deletePost/:id", deletePost); // deletePost is defined

export default router;
