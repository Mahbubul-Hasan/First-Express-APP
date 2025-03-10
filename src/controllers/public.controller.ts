import { Request, Response } from "express";
import PublicService from "../services/public.service.js";

class PublicController {
    static async viewFiles(req: Request, res: Response) {
        return await new PublicService().viewFiles(req, res);
    }
}

export default PublicController;
