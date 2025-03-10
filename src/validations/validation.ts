import { HTTP_STATUS_CODES } from "../constants/responseCodes.js";
import { responseFormat } from "../utils/response.formatter.js";

const validate = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync(req.body);
        next();
    } catch (error) {
        const errors = {};
        error.errors.forEach((err) => {
            errors[err.path[0]] = err.message;
        });
        const result = responseFormat(false, "Request Validation Error", errors, HTTP_STATUS_CODES.BAD_REQUEST);
        res.status(HTTP_STATUS_CODES.BAD_REQUEST).json(result);
    }
};

export default validate;
