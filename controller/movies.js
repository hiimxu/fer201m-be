import { MovieModel } from "../models/MovieModel.js";
import { TypeMovieModel } from "../models/TypeMovieModel.js";

export const getListMovie = async (req, res) => {
  const { search, typeMovieId } = req.query;
  try {
    const movies = await MovieModel.find();

    if (typeMovieId && search) {
      const dataByType = movies.filter((item) => item.type._id == typeMovieId);
      const resData = dataByType.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      res.status(200).json({
        message: "Get list movie successful.",
        data: resData,
      });
    } else if (typeMovieId && !search) {
      const resData = movies.filter((item) => item.type._id == typeMovieId);
      res.status(200).json({
        message: "Get list movie successful.",
        data: resData,
      });
    } else if (search && !typeMovieId) {
      const resData = movies.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      res.status(200).json({
        message: "Get list movie successful.",
        data: resData,
      });
    } else {
      res.status(200).json({
        message: "Get list movie successful.",
        data: movies,
      });
    }
  } catch (error) {
    res.status(500).json("error connect:", error);
  }
};

export const createMovie = async (req, res) => {
  const { imageurl, title, release, typeId, description } = req.body;

  try {
    const type = await TypeMovieModel.findById(typeId);

    if (!type) {
      res.status(400).json({
        message: "Movie's type does not exist.",
        data: null,
      });
    } else {
      const newMovie = {
        imageurl,
        title,
        release,
        type,
        description,
      };
      const movie = new MovieModel(newMovie);
      await movie.save();
      res.status(200).json({
        message: "Add new movie successful.",
        data: movie,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getMovieById = async (req, res) => {
  const { movieId } = req.params;
  try {
    if (movieId) {
      const movie = await MovieModel.findById(movieId);
      res.status(200).json({
        message: "Get movie successful.",
        data: movie,
      });
    } else {
      res.status(400).json({ message: "Movie not found." });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
