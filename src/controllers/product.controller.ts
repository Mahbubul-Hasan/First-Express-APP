import { Request, Response } from "express";
import ProductService from "../services/product.service.js";
import ResponseHandler from "../utils/response.handler.js";

class ProductController {
    async allProducts(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new ProductService().allProducts();
        });
    }

    async singleProduct(req: Request, res: Response) {
        const { slug } = req.params;
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new ProductService().singleProduct(slug);
        });
    }
}

export default ProductController;
