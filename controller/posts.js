import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json("error connect:", error);
    }
};

export const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        const post = new PostModel(newPost);
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json("error connect:", error);
    }
};

export const updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        const updatePost = req.body;

        const post = await PostModel.findByIdAndUpdate(
            id.toString().trim(),
            updatePost,
            { new: true }
        );

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deletePost = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await PostModel.findByIdAndDelete(id.toString().trim());

        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
