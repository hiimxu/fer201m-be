import { CommentModel } from "../models/CommentModel.js";
import { UserModel } from "../models/UserModel.js";
import { MovieModel } from "../models/MovieModel.js";

export const getListCommentByMovie = async (req, res) => {
  const { movieId } = req.params;
  try {
    const listComment = await CommentModel.find({ movieid: movieId });
    res.status(200).json({
      message: "Get list comment of movie successful.",
      data: listComment,
    });
  } catch (error) {
    res.status(500).json("error connect:", error);
  }
};

export const getCommentByCustomer = async (req, res) => {
  const { customerId, movieId } = req.params;
  try {
    const comment = await CommentModel.findOne({
      userid: customerId,
      movieid: movieId,
    });
    res.status(200).json({
      message: "Get comment successful.",
      data: comment,
    });
  } catch (error) {
    res.status(500).json("error connect:", error);
  }
};

export const createComment = async (req, res) => {};
