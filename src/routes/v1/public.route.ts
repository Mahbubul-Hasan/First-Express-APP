import express from "express";
import path from "path";
import fs from "fs";
import PublicController from "../../controllers/public.controller.js";

const router = express.Router();

const publicController = new PublicController();

router.get("/files/:image", publicController.viewFiles);

export default router;
