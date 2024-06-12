import { IBookDataInBag } from '@/types/typeBook';
import { IUser } from '@/types/typeUser';

export interface IUserDataWithBag {
    userData: IUser;
    bag: IBookDataInBag[];
}

export const saveUserData = (userData: IUser, bag: IBookDataInBag[]) => {
    try {
        const userDataWithBag: IUserDataWithBag = {userData, bag};
        const serializedState = JSON.stringify(userDataWithBag);
        localStorage.setItem(`${userData.email}`, serializedState);
    } catch (error) {
        console.log(error);
    }
};