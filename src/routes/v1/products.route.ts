import express from "express";
import ProductController from "../../controllers/product.controller.js";

const router = express.Router();

const productController = new ProductController();

router.get("/", productController.allProducts);
router.get("/:slug", productController.singleProduct);

export default router;
