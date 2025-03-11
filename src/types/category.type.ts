import mongoose from "mongoose";

export interface CategoryT {
    _id?: mongoose.Schema.Types.ObjectId;
    name: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
