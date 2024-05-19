import express from "express";
import { User } from "./db";
import { z } from "zod";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./config";
const router = express.Router();

const signupSchema = z.object({
  username: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string().min(6),
});

const signinSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

router.post("/signup", async (req, res) => {
  try {
    const result = signupSchema.safeParse(req.body);
    console.log(result);
    if (!result.success) {
      return res.status(402).json({ message: "wrong inputs!" });
    }
    const checkUser = await User.findOne({ username: req.body.username });
    if (checkUser) {
      return res.status(400).json({ message: "user already exist" });
    }
    const newUser = new User({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    const hashPassword = await newUser.createHash(req.body.password);
    newUser.password = hashPassword;
    await newUser.save();
    return res.status(200).json({ message: "user created successfully" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { success } = signinSchema.safeParse(req.body);
    if (!success) {
      return res.status(400).json({ message: "wrong inputs!" });
    }
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      return res.status(400).json({ message: "user not found" });
    }
    const isValid = await user?.validatePassword(req.body.password);
    if (!isValid) {
      return res.status(400).json({ message: "invalid password" });
    }
    const token = jwt.sign({ userId: user?._id }, JWT_SECRET);
    res.cookie("token", token, {
      maxAge: 30 * 60 * 1000,
      httpOnly: true,
    });
    return res.status(200).json({ message: "logged in" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "logged out" });
});

router.get("/profile", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
    const user = await User.findOne({ _id: decoded.userId });
    return res.status(200).json({
      username: user?.username,
      firstName: user?.firstName,
      lastName: user?.lastName,
    });
  } catch (err) {
    console.log(err);
  }
});

export default router;
