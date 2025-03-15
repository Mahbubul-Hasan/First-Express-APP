import { NextFunction, Request, Response } from "express";
import logger from "../config/logger.js";
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES } from "src/constants/response.codes.js";
import { responseFormat } from "./response.formatter.js";

function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    logger.error({
        message: err.message,
        stack: err.stack,
    });

    res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json(
        responseFormat(false, HTTP_STATUS_MESSAGES.SERVER_ERROR, {}, HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
    );
}

export default errorHandler;
