import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import posts from "./routers/posts.js";
import auth from "./routers/auth.js";
import typeMovie from "./routers/typeMovie.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const URI = process.env.DATABASE_URL;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: "30mb",
    })
);
app.use(cors());
// app.use("/posts", posts);
app.use("/auth", auth);
app.use("/typeMovie", typeMovie);

mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("Error connect:", err);
    });
