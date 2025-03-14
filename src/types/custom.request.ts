import { Request } from "express";
import { UserT } from "./user.type.js";
import mongoose from "mongoose";

export interface RequestX extends Request {
    file?: Express.Multer.File;
    auth?: UserT;
}

export interface commonDT extends Document {
    _id: mongoose.Schema.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}
