import express from "express";
import { createPost, deletePost, getPost, getposts, updatePost } from '../controllers/postController.js'
const router = express.Router();

//Get all posts
router.get("/", getposts);

//Get single post
router.get("/:id", getPost);

//create new post
router.post("/", createPost);

// update post
router.put('/:id', updatePost);

//Delete post
router.delete('/:id', deletePost);

export default router;
