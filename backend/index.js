import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import authroutes from "./routes/auth.js";
import dotenv from "dotenv";
import cookieparser from "cookie-parser";

const app = express();
dotenv.config();
app.use(cookieparser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authroutes);

app.get("/welcome", (req, res) => {
  res.json({
    message: "Welcome to the backend",
  });
});

connectDB();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
