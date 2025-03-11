import { Request } from "express";
import { UserT } from "./user.type.js";

export interface CustomRequest extends Request {
    file?: Express.Multer.File;
    auth?: UserT;
}
