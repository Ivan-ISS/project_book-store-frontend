// Данные навигации
export const itemsNavigation = [ 'books', 'audiobooks', 'stationery & gifts', 'blog' ];

// Инструменты пользователя
export interface IItem {
    icon: string;
    name: string;
    action: 'dropdown' | 'none' | 'redirect';
    route?: string;
}

export const itemsTools: IItem[] = [
    { icon: '/images/svg/iconProfile.svg', name: 'profile', action: 'dropdown' },
    { icon: '/images/svg/iconSearch.svg', name: 'search', action: 'none' },
    { icon: '/images/svg/iconShopBag.svg', name: 'bag', action: 'redirect', route: '/bag' },
];

// Массив фото для слайдера
export const slides = {
    images: [ '/images/png/bannera.png', '/images/png/bannerb.png', '/images/png/bannerc.png' ],
    width: 1120,
    height: 702,
};

// Массив категорий книг
export const categories = [
    { nameCategory: 'Architecture', nameInRequest: 'Architecture' },
    { nameCategory: 'Art & Fashion', nameInRequest: 'Art' },
    { nameCategory: 'Biography', nameInRequest: 'Biography' },
    { nameCategory: 'Business', nameInRequest: 'Business' },
    { nameCategory: 'Crafts & Hobbies', nameInRequest: 'Crafts' },
    { nameCategory: 'Drama', nameInRequest: 'Drama' },
    { nameCategory: 'Fiction', nameInRequest: 'Fiction' },
    { nameCategory: 'Food & Drink', nameInRequest: 'Cooking' },
    { nameCategory: 'Health & Wellbeing', nameInRequest: 'Health' },
    { nameCategory: 'History & Politics', nameInRequest: 'History' },
    { nameCategory: 'Humor', nameInRequest: 'Humor' },
    { nameCategory: 'Poetry', nameInRequest: 'Poetry' },
    { nameCategory: 'Psychology', nameInRequest: 'Psychology' },
    { nameCategory: 'Science', nameInRequest: 'Science' },
    { nameCategory: 'Technology', nameInRequest: 'Technology' },
    { nameCategory: 'Travel & Maps', nameInRequest: 'Travel' },
];

// Параметры запроса по умолчанию
export const defaultCategory = categories[0];
export const defStartIndex = 1;
export const defMaxResults = 6;

// Поля формы авторизации
export const formFileds = [ 'Email', 'Password' ];

// Данные меню профиля
export const itemsProfileMenu = [ 'profile', 'sign out' ];

export type Fileds = 'name' | 'email'
// Поля представления пользователя
export const itemsUserView = [ 'name', 'email' ] as Fileds[];

// Колонки корзины
export const columnsBag = [ 'item', 'quantity', 'price', 'delivery' ];

// Данные профиля по умолчанию
export const userDataDefault = {
    id: NaN,
    name: 'Empty',
    email: '',
    password: '',
    description: 'Write about yourself',
    token: '',
};

// Данные редактирования профиля
export const formProfile = [ 'Name', 'Description' ];