import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes";
import mongoose from "mongoose";
import {DB_URL, PORT} from "./config";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("db is connected...");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}`);
});
