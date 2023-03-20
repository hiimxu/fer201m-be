import mongoose from "mongoose";

const schema = new mongoose.Schema({}, { timestamps: true });

export const UserModel = mongoose.model("Movie", schema);
