import express from "express";
import mongoose from "mongoose";
import { config } from "./config";
import urlRoutes from "./routes/url";
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors({
    origin:process.env.ORIGIN_URL
}))
mongoose
  .connect(config.mongoURI!)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/", urlRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
