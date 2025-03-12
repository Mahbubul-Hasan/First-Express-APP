import mongoose, { Document } from "mongoose";

export interface CartT extends Document {
    _id: mongoose.Schema.Types.ObjectId;
    user: mongoose.Schema.Types.ObjectId;
    items: CartItemT[];
    createdAt?: Date;
    updatedAt?: Date;
}

export interface CartItemT {
    product: mongoose.Schema.Types.ObjectId;
    quantity: number;
}
