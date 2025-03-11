import mongoose from "mongoose";
import { CategoryT } from "../types/category.type.js";

const categorySchema = new mongoose.Schema<CategoryT>(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [2, "Name must be at least 2 characters"],
            maxlength: [50, "Name cannot exceed 50 characters"],
        },
        slug: {
            type: String,
            required: [true, "Slug is required"],
            minlength: [2, "Slug must be at least 2 characters"],
            maxlength: [100, "Slug cannot exceed 100 characters"],
        },
        description: { type: String },
    },
    { timestamps: true }
);

export const Category = mongoose.model<CategoryT>("categories", categorySchema);
