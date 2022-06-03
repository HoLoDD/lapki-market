import axios from 'axios';
import { IItem } from '../../models/IItem';
import { AppDispatch } from '../store';
import { itemSilce } from './item-slice';
import { authSilce } from './auth-slice';
import {
    check,
    login,
    LoginUser,
    logout,
    registration,
    RegUser,
} from '../../api/userAPI';
import { IUser, IUserResponse } from '../../models/IUser';

export const fetchItems = (typeId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(itemSilce.actions.usersFetching());
        const response = await axios.get<IItem[]>(
            `https://lapki-market.herokuapp.com/api/item/`,
            typeId ? { params: { typeId } } : {}
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
        dispatch(authSilce.actions.setError(error.response?.data?.message));
    }
};

export const logoutUser = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSilce.actions.setIsLoading(true));
        const response = await logout();
        dispatch(authSilce.actions.setAuth(false));
        dispatch(authSilce.actions.setUser({} as IUser));
    } catch (error) {
        //@ts-ignore
        dispatch(authSilce.actions.setError(error.message));
    }
};

export const checkAuth = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSilce.actions.setIsLoading(true));
        const response = await check();
        dispatch(authSilce.actions.setAuth(true));
        dispatch(authSilce.actions.setUser(response.data.user));
    } catch (error) {
        //@ts-ignore
        dispatch(authSilce.actions.setError(error.message));
    }
};
