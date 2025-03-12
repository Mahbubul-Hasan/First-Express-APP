import { Request, Response } from "express";
import ProductService from "../services/product.service.js";
import ResponseHandler from "../utils/response.handler.js";
import CategoryService from "../services/category.service.js";

class CategoryController {
    async categoryList(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new CategoryService().categoryList();
        });
    }

    async singleProduct(req: Request, res: Response) {
        const { slug } = req.params;
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new ProductService().singleProduct(slug);
        });
    }
}

export default CategoryController;
