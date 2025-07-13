import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already Exist" });
    }

    const idx = Math.floor(Math.random() * 100) + 1; //generate a random number between 1 to 100
    const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`;

    const newUser = new User.create({
      email,
      fullName,
      password,
      profilePic: randomAvatar,
    });

    const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "7d",
    });

    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true, //prevent xss attacks
      sameSite: "strict", // prevent CSRF attacks
      secure: process.env.NODE_ENV === "production", //it will be secure only if we are in production
    });

    res.status(201).json({ success: true, user: newUser });
  } catch (error) {}
};

export const login = async (req, res) => {
  res.send("login route");
};

export const logout = async (req, res) => {
  res.send("logout route");
};
