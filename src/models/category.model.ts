import mongoose from "mongoose";
import { CategoryT } from "../types/category.type.js";

const categorySchema = new mongoose.Schema<CategoryT>(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [2, "Title must be at least 2 characters"],
            maxlength: [50, "Title cannot exceed 50 characters"],
        },
        description: { type: String },
    },
    { timestamps: true }
);

export const Category = mongoose.model<CategoryT>("categories", categorySchema);
