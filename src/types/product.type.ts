import mongoose from "mongoose";

export interface ProductT {
    _id?: mongoose.Schema.Types.ObjectId;
    title: string;
    slug: string;
    description?: string;
    price?: number;
    category?: mongoose.Schema.Types.ObjectId;
    thumbnail: string;
    createdAt?: Date;
    updatedAt?: Date;
}
