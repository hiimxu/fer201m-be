import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

export const TypeMovieModel = mongoose.model("TypeMovie", schema);
