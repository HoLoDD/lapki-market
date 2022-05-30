import axios from 'axios';
import { IItem } from '../../models/IItem';
import { IUser, IUserResponse } from '../../models/IUser';
import { AppDispatch } from '../store';
import { itemSilce } from './item-slice';
import { authSilce } from './auth-slice';
import {
    login,
    LoginUser,
    logout,
    registration,
    RegUser,
} from '../../api/userAPI';

export const fetchItems = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(itemSilce.actions.usersFetching());
        const response = await axios.get<IItem[]>(
            'https://lapki-market.herokuapp.com/api/item'
        );
        dispatch(itemSilce.actions.usersFetchingSuccess(response.data));
    } catch (error) {
        //@ts-ignore
        dispatch(itemSilce.actions.usersFetchingFailed(error.message));
    }
};

export const regUser = (user: RegUser) => async (dispatch: AppDispatch) => {
    try {
        console.log('ALO');

        dispatch(authSilce.actions.setIsLoading(true));
        const response = await registration({ ...user });

        dispatch(authSilce.actions.setUser(response.data.user));
        dispatch(authSilce.actions.setAuth(true));
    } catch (error) {
        console.log(error);
        //@ts-ignore
        dispatch(authSilce.actions.setError(error.message));
    }
};

export const loginUser = (user: LoginUser) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSilce.actions.setIsLoading(true));
        const response = await login({ ...user });

        dispatch(authSilce.actions.setUser(response.data.user));
        dispatch(authSilce.actions.setAuth(true));
    } catch (error) {
        //@ts-ignore
        dispatch(authSilce.actions.setError(error.message));
    }
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSilce.actions.setIsLoading(true));
        const response = await logout();
        console.log(response);

        dispatch(authSilce.actions.setAuth(false));
    } catch (error) {
        //@ts-ignore
        dispatch(authSilce.actions.setError(error.message));
    }
};
