import mongoose, { Document } from "mongoose";

export interface IUserInput {
    name: string;
    email: string;
    phone?: string;
    age?: number;
    image?: string;
    password: string;
}
export interface IUser extends IUserInput, Document {
    created_at: Date;
    updated_at?: Date;
}

const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: String },
    age: { type: Number },
    image: { type: String },
    password: { type: String, require: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date },
});

userSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.password;

    user.image = process.env.APP_URL + "/v1/files/" + user.image;
    return user;
};

export const User = mongoose.model<IUser>("users", userSchema);
