import express from "express";
import AuthController from "../../controllers/auth.controller.js";
import fileUpload from "../../utils/file.upload.js";
import validate from "../../validations/validation.js";
import signupSchema from "../../validations/signup.validation.js";

const router = express.Router();

const authController = new AuthController();

router.post("/sign-up", validate(signupSchema), authController.signup);
router.post("/sign-in", authController.signin);
router.post("/update-profile-picture", fileUpload.single("image"), authController.updateProfilePicture);

export default router;
