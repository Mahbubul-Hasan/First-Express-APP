import { HTTP_STATUS_CODES } from "../constants/response.codes.js";
import { responseFormat } from "../utils/response.formatter.js";
import { Product } from "../models/product.model.js";
import { Category } from "../models/category.model.js";
import { CategoryT } from "../types/category.type.js";

class ProductService {
    async categoryList() {
        const categories = await Category.find();
        return responseFormat(true, "Category List", categories, HTTP_STATUS_CODES.OK);
    }

    async categoryWiseProductList() {
        const categories = await Category.find();
        if (!categories)
            throw new Error(JSON.stringify({ msg: "Category not found", code: HTTP_STATUS_CODES.NOT_FOUND }));

        const categoryProducts = await Promise.all(
            categories.map(async (category) => {
                const products = await Product.find({ category: category._id });
                return { category, products };
            })
        );

        return responseFormat(true, "Category wise product list", categoryProducts, HTTP_STATUS_CODES.OK);
    }

    async productListByCategory(slug) {
        const category: CategoryT = await Category.findOne({ slug });
        if (!category)
            throw new Error(JSON.stringify({ msg: "Category not found", code: HTTP_STATUS_CODES.NOT_FOUND }));

        const products = await Product.find({ category: category._id });

        return responseFormat(true, "Products list by category", products, HTTP_STATUS_CODES.OK);
    }

    async allProducts() {
        const products = await Product.find();
        return responseFormat(true, "Product List", products, HTTP_STATUS_CODES.OK);
    }

    async singleProduct(slug) {
        const product = await Product.findOne({ slug });
        if (!product) throw new Error(JSON.stringify({ msg: "Product not found", code: HTTP_STATUS_CODES.NOT_FOUND }));

        return responseFormat(true, "Product Details", product, HTTP_STATUS_CODES.OK);
    }
}
export default ProductService;
