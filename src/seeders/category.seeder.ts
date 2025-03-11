import { connectDB, disconnectDB } from "../utils/database.js";
import { Category } from "../models/category.model.js";
import { capitalize, toSlug } from "../helper/string.helper.js";
import { CategoryT } from "../types/category.type.js";

const categorySeeder = async () => {
    try {
        await connectDB();

        const response = await fetch("https://dummyjson.com/products/category-list");
        const data: string[] = await response.json();

        // Insert categories into the database
        await Promise.all(
            data.map(async (item) => {
                const category: CategoryT = {
                    name: capitalize(item),
                    slug: toSlug(capitalize(item)),
                };
                const existingCategory = await Category.findOne({ name: capitalize(item) });
                if (!existingCategory) {
                    await Category.create(category);
                }
            })
        );
        console.log("Categories inserted successfully");
    } catch (error) {
        console.error("Error seeding categories:", error);
    } finally {
        await disconnectDB();
    }
};

export default categorySeeder;
