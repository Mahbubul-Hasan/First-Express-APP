import { User } from "../models/user.model.js";
import { z } from "zod";

// Define the validation schema
const signupSchema = z
    .object({
        name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name cannot exceed 50 characters"),
        email: z
            .string()
            .email("Invalid email address")
            .refine(
                async (email) => {
                    const user = await User.findOne({ email });
                    return !user; // Return true if the email is unique
                },
                {
                    message: "Email is already registered",
                }
            ),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters long")
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*])/,
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            ),
        confirmPassword: z.string(),
        phone: z
            .string()
            .regex(/^[+]?[(]?[0-9]{3}[)]?[-\\s.]?[0-9]{3}[-\\s.]?[0-9]{4,6}$/, "Invalid phone number format")
            .optional(),
        age: z.number().min(13, "Age must be at least 13").max(120, "Age cannot exceed 120").optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export default signupSchema;
