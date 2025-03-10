import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routerV1 from "./routes/v1/index.js";

const app = express();
dotenv.config();

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to mongodb"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1", routerV1);

const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
