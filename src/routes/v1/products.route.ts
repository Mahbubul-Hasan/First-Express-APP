import express from "express";
import ProductController from "../../controllers/product.controller.js";

const router = express.Router();

const productController = new ProductController();

router.get("/", productController.getAllProducts);

export default router;
