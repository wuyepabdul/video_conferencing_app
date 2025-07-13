import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./lib/db.js";

const PORT = process.env.PORT;
const app = express();
 
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
  connectDB();
});
