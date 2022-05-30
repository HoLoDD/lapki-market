import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IItem } from '../../models/IItem';

interface UserState {
    items: IItem[];
    isLoading: boolean;
    error: string;
}

const initialState: UserState = {
    items: [],
    isLoading: true,
    error: '',
};

export const itemSilce = createSlice({
    name: 'item',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true;
        },
        usersFetchingSuccess(state, action: PayloadAction<IItem[]>) {
            state.isLoading = false;
            state.error = '';
            state.items = action.payload;
        },
        usersFetchingFailed(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default itemSilce.reducer;
