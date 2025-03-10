import bcrypt from "bcrypt";
import { Request } from "express";
import { HTTP_STATUS_CODES } from "../constants/responseCodes.js";
import { responseFormat } from "../utils/response.formatter.js";
import { IUser, IUserInput, User } from "../models/user.model.js";
import { CustomRequest } from "../types/custom.request.js";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";

class AuthService {
    async signup(req: Request) {
        const { name, email, phone, password } = req.body;
        const newUser: IUserInput = {
            name: name,
            email: email,
            phone: phone ?? null,
            password: await bcrypt.hash(password, 10),
        };
        const user = await User.create(newUser);

        const token = await jwt.sign({ user }, process.env.APP_KEY);

        const data = { user, token };

        return responseFormat(true, "Successfully signed up", data, HTTP_STATUS_CODES.OK);
    }

    async signin(req: Request) {
        const { email, password } = req.body;
        const user: IUser = await User.findOne({ email });
        if (!user) throw new Error("Invalid credentials");

        const isValidPass = await bcrypt.compare(password, user.password);
        if (!isValidPass) throw new Error("Invalid credentials");

        const token = await jwt.sign({ user }, process.env.APP_KEY);

        const data = { user, token };

        return responseFormat(true, "Successfully logged in", data, HTTP_STATUS_CODES.OK);
    }

    async updateProfilePicture(req: CustomRequest) {
        const file = req.file;
        const userId = "67cbd95b6307d14105ce7349";
        const user: IUserInput = await User.findById(userId);

        if (!user) throw new Error("User not found");

        const previousImagePath = user.image ? path.join(process.cwd(), `/public/uploads/${user.image}`) : null;

        // Delete the previous image (if it exists)
        if (previousImagePath && fs.existsSync(previousImagePath)) {
            fs.unlinkSync(previousImagePath); // Delete the file
        }
        await User.updateOne({ _id: userId }, { $set: { image: file.filename } });

        const imageUrl = process.env.APP_URL + "/v1/files/" + file.filename;
        return responseFormat(true, "Profile picture updated", { image: imageUrl }, HTTP_STATUS_CODES.OK);
    }
}
export default AuthService;
