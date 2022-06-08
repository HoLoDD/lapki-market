import { authHost } from '.';
import { IOrder } from '../models/IOrder';

class OrderService {
    async createOrder(order: IOrder) {
        const response = authHost.post('api/order', order);
    }
}

export default new OrderService();
