import { Basket } from '../models/basket.entity';
import dataSource from '../utils/connect-db';

class BasketService {
    async createBasket(userId: number) {
        const basket = new Basket();
        basket.user = userId;
        dataSource;
    }

    async addItem(params: number) {}

    async removeItem(itemId: number) {}
}

export default new BasketService();
