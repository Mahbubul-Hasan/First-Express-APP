import express from "express";
import AuthController from "../../controllers/auth.controller.js";
import fileUpload from "../../utils/file.upload.js";
import validate from "../../validations/validation.js";
import signupSchema from "../../validations/signup.validation.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import addToCartSchema from "../../validations/addToCart.validation.js";
import CartController from "../../controllers/cart.controller.js";

const router = express.Router();

const cartController = new CartController();

router.post("/add", authenticate, validate(addToCartSchema), cartController.addToCart);

export default router;
