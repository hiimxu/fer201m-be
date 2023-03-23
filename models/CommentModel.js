import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    userid: {
      type: String,
      require: true,
    },
    user: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
    movieid: {
      type: String,
      require: true,
    },
    rate: {
      type: Number,
      require: true,
      default: 10,
    },
  },
  { timestamps: true }
);

export const CommentModel = mongoose.model("Comments", schema);
