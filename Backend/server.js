import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.config.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Database Connection
connectDB();

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
