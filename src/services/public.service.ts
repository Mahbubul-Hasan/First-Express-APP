import { Request, Response } from "express";
import { HTTP_STATUS_CODES } from "../constants/responseCodes.js";
import path from "path";
import fs from "fs";
import { responseFormat } from "../utils/response.formatter.js";

class PublicService {
    async viewFiles(req: Request, res: Response) {
        const fileName = req.params.image;

        const filePath = path.join(process.cwd(), `/public/uploads/${fileName}`);

        // Check if the file exists
        if (fs.existsSync(filePath)) {
            // Send the image file as a response
            res.sendFile(filePath);
        } else {
            const result = responseFormat(false, "Image not found", {}, HTTP_STATUS_CODES.NOT_FOUND);
            res.status(HTTP_STATUS_CODES.NOT_FOUND).send(result);
        }
    }
}
export default PublicService;
