import { Request, Response } from "express";
import PublicService from "../services/public.service.js";
import ProductService from "../services/product.service.js";
import ResponseHandler from "../utils/response.handler.js";
import { HTTP_STATUS_CODES } from "../constants/response.codes.js";
import { responseFormat } from "../utils/response.formatter.js";
import { Product } from "../models/product.model.js";

class ProductController {
    async getAllProducts(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new ProductService().getAllProducts();
        });
    }
}

export default ProductController;
