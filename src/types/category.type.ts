import { commonDT } from "./custom.request.js";

export interface CategoryT {
    name: string;
    slug: string;
    description?: string;
}

export interface CategoryDT extends CategoryT, commonDT {}
