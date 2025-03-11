import { HTTP_STATUS_CODES } from "../constants/response.codes.js";
import { responseFormat } from "../utils/response.formatter.js";
import { Product } from "../models/product.model.js";

class ProductService {
    async allProducts() {
        const products = await Product.find();
        return responseFormat(true, "Products", products, HTTP_STATUS_CODES.OK);
    }
}
export default ProductService;
