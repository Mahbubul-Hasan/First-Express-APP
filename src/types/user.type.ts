export interface UserT {
    _id?: string;
    name: string;
    email: string;
    phone?: string;
    age?: number;
    image?: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}
