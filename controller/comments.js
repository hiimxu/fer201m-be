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
  const { movieId } = req.params;
  const { customerId } = req.query;
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

export const createComment = async (req, res) => {
  const { userId, movieId, comment, rate } = req.body;
  const userComment = {
    userid: userId,
    movieid: movieId,
    comment: comment,
    rate: rate,
  };
  try {
    const findComment = await CommentModel.findOne({
      userid: userId,
      movieid: movieId,
    });
    if (findComment) {
      const newComment = await CommentModel.findByIdAndUpdate(
        findComment._id,
        userComment,
        { new: true }
      );

      res.status(200).json({
        message: "Update comment successfully.",
        data: newComment,
      });
    } else {
      const newComment = new CommentModel(userComment);
      await newComment.save();
      res.status(200).json({
        message: "Add comment successful.",
        data: newComment,
      });
    }
  } catch (error) {}
};
