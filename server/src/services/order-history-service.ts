import { OrderHistory } from '../models/order-histoty.entity';
import { Order } from '../models/order.entity';
import { User } from '../models/user.entity';
import dataSource from '../utils/connect-db';

class OrderHistoryService {
    async createOrderHistory(userId: number) {
        const orderHistory = new OrderHistory();
        orderHistory.user = await dataSource.manager.findOneBy(User, {
            id: userId,
        });

        const saveResult = await dataSource.manager.save(
            OrderHistory,
            orderHistory
        );
        return saveResult;
    }

    async addOrder(userId: number, order: Order) {
        const orderHistory = await dataSource.manager.findOne(OrderHistory, {
            where: {
                user: { id: userId },
            },
            relations: ['orders'],
        });
        orderHistory.orders.push(order);
        const saveResult = dataSource.manager.save(OrderHistory, orderHistory);
        return saveResult;
    }

    async getOrderHistoryForUser(userId: number) {
        const orderHistory = await dataSource.manager.findOne(OrderHistory, {
            where: {
                user: { id: userId },
            },
            relations: ['orders', 'orders.soldItems'],
        });

        return orderHistory;
    }
}

export default new OrderHistoryService();
