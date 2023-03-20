import express from "express";
import {
    getPosts,
    createPost,
    updatePost,
    deletePost,
} from "../controller/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);

export default router;
