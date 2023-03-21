import { MovieModel } from "../models/MovieModel.js";
import { TypeMovieModel } from "../models/TypeMovieModel.js";

export const getListMovie = async (req, res) => {
  try {
    const movies = await MovieModel.find();
    res.status(200).json({
      message: "Get list movie successful.",
      data: movies,
    });
  } catch (error) {
    res.status(500).json("error connect:", error);
  }
};

export const createMovie = async (req, res) => {
  const { title, release, typeId } = req.body;

  try {
    const type = await TypeMovieModel.findById(typeId);

    if (!type) {
      res.status(400).json({
        message: "Movie's type does not exist.",
        data: null,
      });
    } else {
      const newMovie = {
        title,
        release,
        type,
      };
      const movie = new MovieModel(newMovie);
      await movie.save();
      res.status(200).json({
        message: "Add new movie successful.",
        data: movie,
      });
      res.status(200).json(type);
    }
  } catch (error) {
    res.status(500).json("error connect:", error);
  }
};
