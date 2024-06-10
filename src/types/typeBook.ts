export interface IBookResponse {
    id: number;
    name: string;
    price: number;
    language: string;
    description: string;
    yearPublished: number;
    categories?: ICategory[];
    authors?: IAuthor[];
    rating?: IRating[];
    users?: IUser[];
    currency?: ICurrency;
    currencyId?: number;
    averageRating: number;
};

export interface IUser {        //
    id: number;
    name?: string;
    dob?: number;
    description?: string;
    email: string;
    password: string;
    books?: IBookResponse[];
    rating?: IRating[];
}

export interface ICategory {    //
    id: number;
    name: string;
    books: IBookResponse[];
}

export interface ICurrency {
    id: number;
    name: string;
    acronym: string;
    books?: IBookResponse[];
}

export interface IAuthor {
    id: number;
    firstName: string;
    lastName: string;
    yearsActive: string;
    books: IBookResponse[];
}

export interface IRating {
    id: number;
    value: number;
    userId: number;
    bookId: number;
    book: IBookResponse;
    user: IUser;
}

export type IDataResponse = IBookResponse[];

export interface IBookData {
    id: string,
    imageCoverLinks: string | null,
    author: string[] | null,
    title: string | null,
    rating: number | null,
    review: number | null,
    description: string | null,
    retailPrice: {
        amount: number;
        currencyCode: string;
    } | null,
}

export interface IBookDataInBag extends IBookData {
    quantity: number;
}