import winston from "winston";
import moment from "moment";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Ensure the logs directory exists
const logDir = path.join(process.cwd(), "storage/logs");
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

// Create a daily log file
const logFile = path.join(logDir, `error-${moment().format("YYYY-MM-DD")}.log`);

// Configure the logger
const logger = winston.createLogger({
    level: "error", // Log only errors
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message, stack }) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}\n${stack || ""}`;
        })
    ),
    transports: [
        new winston.transports.File({ filename: logFile }), // Log to a file
    ],
});

export default logger;
