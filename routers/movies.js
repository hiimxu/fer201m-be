import express from "express";
import {
  getListMovie,
  createMovie,
  getMovieById,
} from "../controller/movies.js";

const router = express.Router();

router.get("/", getListMovie);
router.post("/", createMovie);
router.get("/:movieId", getMovieById);
export default router;
