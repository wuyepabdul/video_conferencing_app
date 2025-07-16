import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getStreamToken } from "../controllers/chat.controller.js";

const router = express.Router();

// generate stream token to make our app more secured
router.get("/stream/token", protectRoute, getStreamToken);

export default router;
