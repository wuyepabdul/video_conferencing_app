import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use('/api/chat',chatRoutes)

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
  connectDB();
});
