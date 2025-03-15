import logger from "src/config/logger.js";
import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES } from "../constants/response.codes.js";
import { ResponseData, responseFormat } from "./response.formatter.js";
import { Response } from "express";

class ResponseHandler {
    // Handle general responses (for API or web)
    static handlerResponse(res: Response, callback: () => ResponseData) {
        try {
            const response = callback();

            return res
                .status(response.code || HTTP_STATUS_CODES.OK) // Set the status code, defaulting to 200 if not provided
                .json(responseFormat(response.success, response.message, response.data, response.code)); // Format the response
        } catch (error: unknown) {
            // Safely check if the error is an instance of Error
            if (error instanceof Error) {
                logger.error({
                    message: error.message,
                    stack: error.stack,
                });
                return res
                    .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
                    .json(responseFormat(false, error.message || HTTP_STATUS_MESSAGES.SERVER_ERROR));
            }
            return res
                .status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR)
                .json(responseFormat(false, HTTP_STATUS_MESSAGES.SERVER_ERROR));
        }
    }

    static handlerAsyncResponse(res: Response, callback: () => Promise<any>) {
        callback()
            .then((result) => {
                res.status(result.code).json(result);
            })
            .catch((error) => {
                logger.error({
                    message: error.message,
                    stack: error.stack,
                });
                try {
                    const { msg, code } = JSON.parse(error.message);

                    res.status(code).json(responseFormat(false, msg || HTTP_STATUS_MESSAGES.SERVER_ERROR, {}, code));
                } catch (error2) {
                    res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json(
                        responseFormat(
                            false,
                            error.message || HTTP_STATUS_MESSAGES.SERVER_ERROR,
                            {},
                            HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
                        )
                    );
                }
            });
    }
}

export default ResponseHandler;
