import { HTTP_STATUS_CODES } from "../constants/responseCodes.js";

export interface ResponseData<T = any> {
    success: boolean;
    code: number;
    message: string;
    data: T;
}

export const responseFormat = <T = any>(
    success: boolean,
    message: string = "",
    data: T = {} as T,
    code: number = success ? HTTP_STATUS_CODES.OK : HTTP_STATUS_CODES.BAD_REQUEST
): ResponseData<T> => {
    return {
        success,
        code,
        message:
            !success && (!message || message.trim() === "") ? "Something went wrong! Please try again later" : message,
        data,
    };
};
