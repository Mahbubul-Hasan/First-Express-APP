import { Request, Response } from "express";
import ResponseHandler from "../utils/response.handler.js";
import AuthService from "../services/auth.service.js";

class AuthController {
    signup(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new AuthService().signup(req);
        });
    }

    signin(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new AuthService().signin(req);
        });
    }

    async updateProfilePicture(req: Request, res: Response) {
        ResponseHandler.handlerAsyncResponse(res, async () => {
            return await new AuthService().updateProfilePicture(req);
        });
    }
}

export default AuthController;
