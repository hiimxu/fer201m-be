import { UserModel } from "../models/UserModel.js";

export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            res.status(400).json({
                message: "Email does not exist.",
                userData: user,
            });
        } else {
            if (password !== user.password) {
                res.status(400).json({
                    message: "password is incorrect. Try again.",
                    userData: null,
                });
            } else {
                res.status(200).json({
                    message: "Login successful",
                    userData: user,
                });
            }
        }
    } catch (error) {
        res.status(500).json("error connect:", error);
    }
};

export const register = async (req, res) => {
    const { email, password, fullname, gender } = req.body;

    const response = {
        message: "Register customer failed.",
        userData: null,
        error: null,
    };

    try {
        if (!email && !password) {
            res.status(400).json({
                ...response,
                error: {
                    email: "Please enter your email.",
                    password: "Please enter your password.",
                },
            });
        } else if (!email) {
            res.status(400).json({
                ...response,
                error: {
                    email: "Please enter your email.",
                },
            });
        } else if (!password) {
            res.status(400).json({
                ...response,
                error: {
                    password: "Please enter your password.",
                },
            });
        } else {
            const user = await UserModel.findOne({ email, password });
            if (user) {
                res.status(400).json({
                    ...response,
                    message: "Email already exists. Try again.",
                });
            } else {
                const newUser = req.body;
                const user = new UserModel(newUser);
                await user.save();

                res.status(200).json({
                    ...response,
                    message: "Register customer successfully.",
                    userData: user,
                    error: null,
                });
            }
        }
    } catch (error) {
        res.status(500).json("error connect:", error);
    }
};
