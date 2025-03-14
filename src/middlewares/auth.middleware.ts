import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES } from "../constants/response.codes.js";
import { responseFormat } from "../utils/response.formatter.js";
import { User } from "../models/user.model.js";
import { RequestX } from "../types/custom.request.js";

export const authenticate = async (req: RequestX, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new Error(HTTP_STATUS_MESSAGES.UNAUTHORIZED);
        }
        const token = authHeader.replace("Bearer ", "");
        const isValidToken = await jwt.verify(token, process.env.JWT_SECRET);
        const userId = isValidToken.userId;

        const auth = await User.findById(userId);
        req.auth = auth;

        next();
    } catch (error) {
        const result = responseFormat(false, HTTP_STATUS_MESSAGES.UNAUTHORIZED, {}, HTTP_STATUS_CODES.UNAUTHORIZED);
        res.status(HTTP_STATUS_CODES.UNAUTHORIZED).json(result);
    }
};
