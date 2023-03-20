import express from "express";
import { getTypeMovie, createTypeMovie } from "../controller/typeMovie.js";

const router = express.Router();

router.get("/", getTypeMovie);
router.post("/", createTypeMovie);
export default router;
