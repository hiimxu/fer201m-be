import express from "express";
import { getListMovie, createMovie } from "../controller/movies.js";

const router = express.Router();

router.get("/", getListMovie);
router.post("/", createMovie);
export default router;
