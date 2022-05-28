import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

interface UserState {
    user: IUser | null;
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    user: null,
    isLoading: true,
    error: '',
};

export const userSilce = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export default userSilce.reducer;
