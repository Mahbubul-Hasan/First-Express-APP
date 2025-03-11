export const HTTP_STATUS_CODES = {
    // Success codes
    OK: 200, // OK - Request was successful
    CREATED: 201, // Created - Resource created successfully
    ACCEPTED: 202, // Accepted - Request accepted but not processed

    // Client error codes
    BAD_REQUEST: 400, // Bad Request - Invalid request data
    UNAUTHORIZED: 401, // Unauthorized - Missing or invalid authentication
    FORBIDDEN: 403, // Forbidden - Access denied
    NOT_FOUND: 404, // Not Found - Resource not found
    CONFLICT: 409, // Conflict - Duplicate resource exists

    // Server error codes
    INTERNAL_SERVER_ERROR: 500, // Internal Server Error - General server error
    SERVICE_UNAVAILABLE: 503, // Service Unavailable - Server is temporarily unavailable
};

export const HTTP_STATUS_MESSAGES = {
    SUCCESS: "Request was successful.",
    CREATED: "Resource created successfully.",
    BAD_REQUEST: "Bad request. Please check your input.",
    UNAUTHORIZED: "You must be authenticated to access this resource.",
    FORBIDDEN: "You do not have permission to access this resource.",
    NOT_FOUND: "The resource you are looking for does not exist.",
    CONFLICT: "A conflict occurred with the existing data.",
    SERVER_ERROR: "An unexpected error occurred. Please try again later.",
    SERVICE_UNAVAILABLE: "The service is temporarily unavailable. Please try again later.",
};
