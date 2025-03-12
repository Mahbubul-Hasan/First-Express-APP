import { Request, Response } from "express";
import ResponseHandler from "../utils/response.handler.js";
import AuthService from "../services/auth.service.js";
import CartService from "../services/cart.service.js";

class CartController {
    addToCart(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new CartService().addToCart(req);
        });
    }
}

export default CartController;
