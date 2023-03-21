import mongoose from "mongoose";
import { TypeMovieModel } from "./TypeMovieModel.js";

const schema = new mongoose.Schema(
  {
    imageurl: {
      type: String,
      require: true,
      default: "",
    },
    title: {
      type: String,
      require: true,
    },
    release: {
      type: Number,
      require: true,
    },
    rate: {
      type: Number,
      require: true,
      default: 0,
    },
    type: {
      type: Object,
      require: true,
    },
  },
  { timestamps: true }
);

export const MovieModel = mongoose.model("Movie", schema);
