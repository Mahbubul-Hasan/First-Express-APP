import express from "express";
import ProductController from "../../controllers/product.controller.js";

const router = express.Router();

const productController = new ProductController();

router.get("/categories/list", productController.categoryList);
router.get("/categories", productController.categoryWiseProductList);
router.get("/categories/:slug", productController.productListByCategory);

router.get("/", productController.allProducts);
router.get("/:slug", productController.singleProduct);

export default router;
