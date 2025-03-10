import express from "express";
import path from "path";
import fs from "fs";
import PublicController from "../../controllers/public.controller.js";

const router = express.Router();

router.get("/files/:image", PublicController.viewFiles);

export default router;
