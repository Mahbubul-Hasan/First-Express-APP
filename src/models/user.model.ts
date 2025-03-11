import mongoose from "mongoose";
import { UserT } from "../types/user.type.js";

const userSchema = new mongoose.Schema<UserT>(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            minlength: [2, "Name must be at least 2 characters"],
            maxlength: [50, "Name cannot exceed 50 characters"],
            match: [/^[A-Za-z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: [true, "Email is already registered"],
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"],
        },
        phone: {
            type: String,
            match: [/^[+]?[(]?[0-9]{3}[)]?[-\\s.]?[0-9]{3}[-\\s.]?[0-9]{4,6}$/, "Invalid phone number format"],
        },
        age: {
            type: Number,
            min: [13, "Age must be at least 13"],
            max: [120, "Age cannot exceed 120"],
        },
        image: {
            type: String,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters long"],
            match: [
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*])/,
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            ],
        },
    },
    { timestamps: true }
);

userSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;

    user.image = process.env.APP_URL + "/v1/files/" + user.image;
    return user;
};

export const User = mongoose.model<UserT>("users", userSchema);
