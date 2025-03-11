import mongoose from "mongoose";
import { ProductT } from "../types/product.type.js";

const productSchema = new mongoose.Schema<ProductT>(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            minlength: [2, "Title must be at least 2 characters"],
            maxlength: [100, "Title cannot exceed 100 characters"],
        },
        slug: {
            type: String,
            required: [true, "Slug is required"],
            minlength: [2, "Slug must be at least 2 characters"],
            maxlength: [150, "Slug cannot exceed 150 characters"],
        },
        description: { type: String },
        price: {
            type: Number,
            required: [true, "Price is required"],
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "categories",
            required: [true, "Category is required"],
        },
        thumbnail: { type: String, required: [true, "Thumbnail is required"] },
    },
    { timestamps: true }
);

export const Product = mongoose.model<ProductT>("products", productSchema);
