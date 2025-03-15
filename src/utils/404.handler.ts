import { Request, Response, NextFunction } from "express";
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES } from "src/constants/response.codes.js";
import { responseFormat } from "./response.formatter.js";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(HTTP_STATUS_CODES.NOT_FOUND).json(
        responseFormat(false, HTTP_STATUS_MESSAGES.NOT_FOUND, {}, HTTP_STATUS_CODES.NOT_FOUND)
    );
};

export default notFoundHandler;
