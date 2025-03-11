import { Response } from "express";
import jwt from "jsonwebtoken";
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES } from "../constants/responseCodes.js";
import { responseFormat } from "../utils/response.formatter.js";

export const authenticate = async (req, res: Response, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        const result = responseFormat(false, HTTP_STATUS_MESSAGES.UNAUTHORIZED, {}, HTTP_STATUS_CODES.UNAUTHORIZED);
        res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json(result);
    }

    const token = authHeader.replace("Bearer ", "");
    const isValidToken = await jwt.verify(token, process.env.APP_KEY);

    req.auth = isValidToken.user;

    next();
};
