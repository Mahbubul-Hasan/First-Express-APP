import { Request, Response } from "express";
import ProductService from "../services/product.service.js";
import ResponseHandler from "../utils/response.handler.js";

class ProductController {
    async allProducts(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new ProductService().allProducts();
        });
    }
}

export default ProductController;
