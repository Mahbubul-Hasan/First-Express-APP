import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// MongoDB connection string
const MONGO_URI = process.env.MONGODB_CONNECTION_STRING;

if (!MONGO_URI) {
    throw new Error("MONGODB_CONNECTION_STRING is not defined in .env");
}

// Connect to MongoDB
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1); // Exit the process if the connection fails
    }
};

// Disconnect from MongoDB
export const disconnectDB = async () => {
    try {
        await mongoose.connection.close();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.error("Failed to disconnect from MongoDB:", error);
    }
};
