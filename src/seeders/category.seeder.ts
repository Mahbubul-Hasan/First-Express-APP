import { connectDB, disconnectDB } from "../utils/database.js";
import { Category } from "../models/category.model.js";
import { capitalize } from "../helper/string.helper.js";

const categorySeeder = async () => {
    try {
        await connectDB();

        const response = await fetch("https://dummyjson.com/products/category-list");
        const data: string[] = await response.json();

        // Insert categories into the database
        await Promise.all(
            data.map(async (item) => {
                const category = {
                    name: capitalize(item),
                };
                const existingCategory = await Category.findOne(category);
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
