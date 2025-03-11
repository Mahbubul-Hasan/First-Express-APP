import { Request } from "express";
import { IUser } from "../models/user.model.js";

export interface CustomRequest extends Request {
    file?: Express.Multer.File;
    auth?: IUser;
}
