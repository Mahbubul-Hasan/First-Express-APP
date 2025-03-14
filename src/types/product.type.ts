import mongoose from "mongoose";
import { Document } from "mongoose";
import { commonDT } from "./custom.request.js";

export interface ProductT {
    title: string;
    slug: string;
    description?: string;
    price?: number;
    category?: mongoose.Schema.Types.ObjectId;
    thumbnail: string;
}

export interface ProductDT extends ProductT, commonDT {}
