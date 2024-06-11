import { IBookResponse, IRating } from './typeBook';

/* export interface IUserData {
    [key: string]: string | null;
} */

export interface IUser {
    id: number;
    name?: string;
    dob?: number;
    description?: string;
    email: string;
    password: string;
    books?: IBookResponse[];
    rating?: IRating[];
    token: string;
}