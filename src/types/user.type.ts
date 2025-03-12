import mongoose from "mongoose";
import { Document } from "mongoose";

export interface UserT extends Document {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
    email: string;
    phone?: string;
    age?: number;
    image?: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}
