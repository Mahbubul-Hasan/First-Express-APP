import { z } from "zod";

// Define the validation schema
const addToCartSchema = z.object({
    product_id: z.string(),
    quantity: z.number().min(1, "Minimum quantity is 1"),
    increment: z.boolean(),
});

export default addToCartSchema;
