import mongoose, { Document } from "mongoose";

export interface CategoryT extends Document {
    _id: mongoose.Schema.Types.ObjectId;
    name: string;
    slug: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
