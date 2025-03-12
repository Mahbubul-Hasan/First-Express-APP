import { HTTP_STATUS_CODES } from "../constants/response.codes.js";
import { responseFormat } from "../utils/response.formatter.js";
import { Product } from "../models/product.model.js";
import { Category } from "src/models/category.model.js";

class CategoryService {
    async categoryList() {
        const categories = await Category.find();
        return responseFormat(true, "Category List", categories, HTTP_STATUS_CODES.OK);
    }

    async singleProduct(slug) {
        const product = await Product.findOne({ slug });
        if (!product) throw new Error(JSON.stringify({ msg: "Product not found", code: HTTP_STATUS_CODES.NOT_FOUND }));

        return responseFormat(true, "Product", product, HTTP_STATUS_CODES.OK);
    }
}
export default CategoryService;
