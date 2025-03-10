import express from "express";
import AuthController from "../../controllers/auth.controller.js";
import fileUpload from "../../utils/file.upload.js";

const router = express.Router();

router.post("/sign-up", AuthController.signup);
router.post("/sign-in", AuthController.signin);
router.post("/update-profile-picture", fileUpload.single("image"), AuthController.updateProfilePicture);

export default router;
