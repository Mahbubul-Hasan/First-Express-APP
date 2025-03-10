import { Request, Response } from "express";
import ResponseHandler from "../utils/response.handler.js";
import AuthService from "../services/auth.service.js";

class AuthController {
    static signup(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new AuthService().signup(req);
        });
    }

    static signin(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new AuthService().signin(req);
        });
    }

    static async updateProfilePicture(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new AuthService().updateProfilePicture(req);
        });
    }
}

export default AuthController;
