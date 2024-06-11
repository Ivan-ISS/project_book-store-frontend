import { IDataResponse, IBookResponse, IBookData } from '../types/typeBook';

export default function prepareData(data: IDataResponse): IBookData[] {

    let booksData: IBookData[] = [];
    data.forEach((item: IBookResponse) => {
        booksData.push({
            id: item.id.toString(),
            imageCoverLinks: null,
            author: item.authors ? item.authors.map(jItem => jItem.author.firstName + ' ' + jItem.author.lastName) : null,
            title: item.name ? item.name : null,
            rating: item.averageRating ? item.averageRating : null,
            review: null,
            description: item.description ? item.description : null,
            retailPrice: {
                amount: item.price ? item.price : 0,
                currencyCode: item.currency ? item.currency.acronym : '',
            },
        });
    });

    return booksData;
}