import mongoose from "mongoose";
import { CartT } from "../types/cart.type.js";

const cartSchema = new mongoose.Schema<CartT>(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: [true, "User is required"],
        },
        items: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "products",
                    required: [true, "Product is required"],
                },
                quantity: {
                    type: Number,
                    require: [true, "Price is required"],
                    default: 1,
                    min: 1,
                },
            },
        ],
    },
    { timestamps: true }
);

export const Cart = mongoose.model<CartT>("carts", cartSchema);
