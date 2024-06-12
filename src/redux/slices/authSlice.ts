import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IBookData, IBookDataInBag } from '@/types/typeBook';
import { IUser } from '@/types/typeUser';
import { userDataDefault } from '@/data';
import { saveUserData } from '@/utils/saveUserData';
import { loadUserState } from '@/utils/loadUserState';

export interface fetchAuthParams {
    email: string;
    password: string;
}

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ email, password }: fetchAuthParams) => {
        const response = await fetch('api/auth?', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const error = await response.text();
            throw new Error(error);
        }

        const data = await response.json();
        return data;
    }
);

export interface fetchEditUserParams {
    id: number;
    name?: string;
    description?: string;
}

export const editUser = createAsyncThunk(
    'auth/editUser',
    async ({ id, name, description }: fetchEditUserParams) => {
        console.log('id, name, description: ', id, name, description);
        await fetch(`https://project-book-store-backend.vercel.app/api/v1/user/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description }),
        });
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userData: userDataDefault as IUser,
        token: null as string | null,
        error: null as string | null | undefined,
        bag: [] as IBookDataInBag[],
        status: '' as string,
    },
    reducers: {
        setDataUser(state, action: PayloadAction<{ [key: string]: string }>) {
            const { email, password, description, name } = action.payload;
            state.userData = {
                ...state.userData,
                ...(name && { name }),
                ...(email && { email }),
                ...(password && { password }),
                ...(description && { description }),
            };
        },
        addToBag(state, action: PayloadAction<IBookData>) {
            const book = { ...action.payload, quantity: 1 };
            state.bag.push(book);
        },
        setQuantity(state, action: PayloadAction<{id: string, quantity: number}>) {
            const { id, quantity } = action.payload;
            const bookIndex = state.bag.findIndex((book) => book.id === id);
            
            if (bookIndex !== -1) {
                if (quantity < 1) {
                    state.bag.splice(bookIndex, 1);
                } else {
                    state.bag[bookIndex].quantity = quantity;
                }
            }
        },
        signOut(state) {
            saveUserData(state.userData, state.bag);
            localStorage.setItem('users', JSON.stringify(state.userData));
            state.userData = userDataDefault;
            state.token = null;
            state.bag = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'in progress';
            })
            .addCase(loginUser.fulfilled, (state, action: PayloadAction<{data: IUser}>) => {
                state.status = 'successfully';
                state.error = null;
                state.userData.id = action.payload.data.id;
                state.userData.name = action.payload.data.name;
                state.userData.description = action.payload.data.description;
                state.userData.email = action.payload.data.email;
                state.token = action.payload.data.token;
                if (state.userData.email) {
                    const user = loadUserState(state.userData.email);
                    if (user) {
                        // state.userData = user.userData;
                        state.bag = user.bag;
                    }
                }
            })
            .addCase(loginUser.rejected, (state, action ) => {
                state.status = 'download failed';
                state.error = action.error.message;
            });
    }
});

export default authSlice.reducer;
export const { signOut, setDataUser, addToBag, setQuantity } = authSlice.actions;