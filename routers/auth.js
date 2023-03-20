import express from "express";
import { userLogin, register } from "../controller/user.js";

const router = express.Router();

router.post("/", userLogin);
router.post("/register", register);

export default router;
