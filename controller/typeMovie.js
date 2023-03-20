import { TypeMovieModel } from "../models/TypeMovieModel.js";

export const getTypeMovie = async (req, res) => {
    try {
        const typeMovie = await TypeMovieModel.find();
        res.status(200).json(typeMovie);
    } catch (error) {
        res.status(500).json("error connect:", error);
    }
};

export const createTypeMovie = async (req, res) => {
    try {
        const newTypeMovie = req.body;
        const checkType = await TypeMovieModel.findOne(newTypeMovie);
        if (checkType) {
            res.status(400).json({
                message: "Action movie already exist.",
            });
        } else {
            const typeMovie = new TypeMovieModel(newTypeMovie);
            await typeMovie.save();
            res.status(200).json(typeMovie);
        }
    } catch (error) {
        res.status(500).json("error connect:", error);
    }
};
