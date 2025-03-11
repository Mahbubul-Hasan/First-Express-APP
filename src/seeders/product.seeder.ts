import { Product } from "../models/product.model.js";
import { Category } from "../models/category.model.js";
import { connectDB, disconnectDB } from "../utils/database.js";
import { CategoryT } from "../types/category.type.js";
import { ProductT } from "../types/product.type.js";
import { capitalize, toSlug } from "../helper/string.helper.js";

export const productSeeder = async () => {
    try {
        // Connect to MongoDB
        await connectDB();

        // Fetch products from the API
        const response = await fetch("https://dummyjson.com/products");
        const data: any = await response.json();

        // Get all categories from the database
        const categories = await Category.find();

        if (categories.length === 0) {
            throw new Error("No categories found. Please seed categories first.");
        }

        // Insert products into the database
        await Promise.all(
            data.products.map(async (item: any) => {
                const existingProduct = await Product.findOne({ title: item.title });

                if (!existingProduct) {
                    const category: CategoryT = await Category.findOne({ name: capitalize(item.category) });
                    const product: ProductT = {
                        title: item.title,
                        slug: toSlug(item.title),
                        description: item.description,
                        price: item.price,
                        category: category._id,
                        thumbnail: item.thumbnail,
                    };
                    await Product.create(product);
                }
            })
        );
        console.log("Products inserted successfully");
    } catch (error) {
        console.error("Error seeding products:", error);
    } finally {
        await disconnectDB();
    }
};
