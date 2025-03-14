import { Request, Response } from "express";
import ResponseHandler from "../utils/response.handler.js";
import AuthService from "../services/auth.service.js";
import CartService from "../services/cart.service.js";

class CartController {
    getCart(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new CartService().getCart(req);
        });
    }

    addToCart(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new CartService().addToCart(req);
        });
    }

    updateCart(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new CartService().updateCart(req);
        });
    }

    removeFromCart(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new CartService().removeFromCart(req);
        });
    }
}

export default CartController;
