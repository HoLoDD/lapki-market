import { authHost } from '.';
import { IItem } from '../models/IItem';

interface Basket {
    id: number;
    items: IItem[];
}

export const getItems = async (userId: number) => {
    const response = await authHost.get<Basket>(`api/basket/${userId}`);

    return response;
};

export const addItem = async (userId: number, itemId: number) => {
    const response = await authHost.post('api/basket/', { userId, itemId });

    return response;
};

export const removeItem = async (userId: number, itemId: number) => {
    const response = await authHost.delete('api/basket/', {
        data: { userId, itemId },
    });

    return response;
};
