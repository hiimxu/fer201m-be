import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        fullname: {
            type: String,
            require: true,
        },
        roll: {
            type: String,
            require: true,
            default: "CUSTOMER",
        },
        gender: {
            type: String,
            require: true,
            default: "Male",
        },
    },
    { timestamps: true }
);

export const UserModel = mongoose.model("User", schema);
