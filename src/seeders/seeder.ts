import categorySeeder from "./category.seeder.js";
import { productSeeder } from "./product.seeder.js";

const command = process.argv[2];

// Run the appropriate seeder based on the command
switch (command) {
    case "seed:categories":
        categorySeeder();
        break;
    case "seed:products":
        productSeeder();
        break;
    case "seed":
        categorySeeder().then(() => productSeeder());
        break;
    default:
        console.log(`
Usage:
  npm run seed:categories      Seed categories
  npm run seed:products       Seed products
  npm run seed:all            Seed both categories and products
        `);
        break;
}
