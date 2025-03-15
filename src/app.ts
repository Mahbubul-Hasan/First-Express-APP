import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import routerV1 from "./routes/v1/index.js";
import { connectDB } from "./utils/database.js";

const app = express();
dotenv.config();

await connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(morgan("dev"));

app.use("/v1", routerV1);

const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
