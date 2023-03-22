import express from "express";
import {
  getListCommentByMovie,
  createComment,
  getCommentByCustomer,
} from "../controller/comments.js";

const router = express.Router();

router.get("/commentsByMovie/:movieId", getListCommentByMovie);
router.get("/getCommentOfUser/:movieId", getCommentByCustomer);
router.post("/addComment", createComment);

export default router;
