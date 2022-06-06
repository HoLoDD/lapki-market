import { authHost } from '.';
import { IOrder } from '../models/IOrder';

export const createOrder = async (order: IOrder) => {
    const response = authHost.post('api/order', order);
};
