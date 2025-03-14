import { commonDT } from "./custom.request.js";
export interface UserT {
    name: string;
    email: string;
    phone?: string;
    age?: number;
    image?: string;
    password: string;
}

export interface UserDT extends UserT, commonDT {}
