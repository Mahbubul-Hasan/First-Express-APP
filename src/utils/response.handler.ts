import { HTTP_STATUS_CODES, HTTP_STATUS_MESSAGES } from "../constants/responseCodes.js";
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
                res.status(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).json(
                    responseFormat(
                        false,
                        error.message || HTTP_STATUS_MESSAGES.SERVER_ERROR,
                        {},
                        HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR
                    )
                );
            });
    }
}

export default ResponseHandler;
