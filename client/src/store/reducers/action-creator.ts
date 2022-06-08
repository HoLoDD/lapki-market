import axios from 'axios';
import { AppDispatch } from '../store';
import { itemSilce } from './item-slice';
import { authSilce } from './auth-slice';
import { IItem } from '../../models/IItem';
import { IUser } from '../../models/IUser';
import userService, { LoginUser, RegUser } from '../../api/user-service';

export const fetchItems = (typeId: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(itemSilce.actions.itemsFetching());
        const response = await axios.get<IItem[]>(
            `https://lapki-market.herokuapp.com/api/item/`,
            // 'http://localhost:4000/api/item/',
            typeId ? { params: { typeId } } : {}
        );
        dispatch(itemSilce.actions.itemsFetchingSuccess(response.data));
    } catch (error) {
        //@ts-ignore
        dispatch(itemSilce.actions.itemsFetchingFailed(error.message));
    }
};

export const regUser = (user: RegUser) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSilce.actions.setIsLoading(true));
        const response = await userService.reg(user);

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
        const response = await userService.login(user);

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
        const response = await userService.logout();
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
        const response = await userService.check();
        dispatch(authSilce.actions.setAuth(true));
        dispatch(authSilce.actions.setUser(response.data.user));
    } catch (error) {
        //@ts-ignore
        dispatch(authSilce.actions.setError(error.message));
    }
};

export const editUser = (user: RegUser) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSilce.actions.setIsLoading(true));
        const response = await userService.editProfile(user);
        dispatch(authSilce.actions.setUser(response.data));
    } catch (error) {
        //@ts-ignore
        dispatch(authSilce.actions.setError(error.message));
    }
};
