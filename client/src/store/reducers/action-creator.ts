import axios from 'axios';
import { IItem } from '../../models/IItem';
import { AppDispatch } from '../store';
import { itemSilce } from './item-slice';

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
