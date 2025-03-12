import express from "express";
import ProductController from "../../controllers/product.controller.js";
import CategoryController from "../../controllers/category.controller.js";

const router = express.Router();

const productController = new ProductController();
const categoryController = new CategoryController();

router.get("/categories", categoryController.categoryList);
// router.get("/categories/:categoryId", categoryController.getProductsByCategory);

router.get("/", productController.allProducts);
router.get("/:slug", productController.singleProduct);

export default router;
