import express from "express";
import { getMe, login, logout, signup } from "../controlers/authcontroler.js";
import { protectRoute } from "../middlewares/protactedroute.js";

const router = express.Router();

router.get("/me", protectRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
