import mongoose from "mongoose";
import { Document } from "mongoose";

export interface ProductT extends Document {
    _id: mongoose.Schema.Types.ObjectId;
    title: string;
    slug: string;
    description?: string;
    price?: number;
    category?: mongoose.Schema.Types.ObjectId;
    thumbnail: string;
    createdAt?: Date;
    updatedAt?: Date;
}
