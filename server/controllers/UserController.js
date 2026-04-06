const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


class UserController {

    static async createUser(req, res) {
        const {user_name, phone_number, password} = req.body;

        try {
            if (!user_name || !phone_number || !password) {
                return res.status(400).json({
                    message: "user_name, phone_number and password are required",
                });
            }

            const existingUser = await User.findOne({ where: { phone_number } });
            if (existingUser) {
                return res.status(409).json({
                    message: "Phone number already registered",
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                user_name,
                phone_number,
                password: hashedPassword,
            });

            res.status(201).json({message: "user created successfully",
                data: user
            });
        } catch (error) {
            if (error.name === "SequelizeUniqueConstraintError") {
                return res.status(409).json({
                    message: "Phone number already registered",
                });
            }

            if (error.name === "SequelizeValidationError") {
                return res.status(400).json({
                    message: "Invalid user data",
                    error: error.errors?.[0]?.message || error.message,
                });
            }

            res.status(500).json({
                message: "Failed to create user",
                error: error.message
            });
        }
    }

    static async login(req, res) {
        try {
            const { phone_number, password } = req.body;
            const jwtSecret = process.env.JWT_SECRET;

            if (!phone_number || !password) {
                return res.status(400).json({
                    message: "Phone number & password are required"
                });
            }

            if (!jwtSecret) {
                return res.status(500).json({
                    message: "Server configuration error",
                    error: "JWT_SECRET is not configured"
                });
            }

            let user = await User.findOne({ where: { phone_number } });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Password match check
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            // JWT Token generate
            const token = jwt.sign(
                { id: user.id, phone_number: user.phone_number },
                jwtSecret,
                { expiresIn: "365d" }
            );

            return res.json({
                message: "Login successful",
                token,
                user
            });

        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }
    }
}

module.exports = UserController;
