import { Request } from "express";
import { UserT } from "../models/user.model.js";

export interface CustomRequest extends Request {
    file?: Express.Multer.File;
    auth?: UserT;
}
