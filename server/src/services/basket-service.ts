import { Basket } from '../models/basket.entity';
import { Item } from '../models/item.entity';
import { User } from '../models/user.entity';
import dataSource from '../utils/connect-db';

class BasketService {
    async createBasket(userId: number) {
        const basket = new Basket();
        basket.user = await dataSource.manager.findOneBy(User, { id: userId });

        const saveResult = await dataSource.manager.save(Basket, basket);
        return saveResult;
    }

    async addItem(userId: number, itemId: number) {
        const basket = await dataSource.manager.findOne(Basket, {
            where: {
                user: { id: userId },
            },
            relations: ['user'],
        });
        const item = await dataSource.manager.findOneBy(Item, {
            id: itemId,
        });
        basket.items.push(item);
        const saveResult = dataSource.manager.save(Basket, basket);
        return saveResult;
    }

    async removeItem(itemId: number) {}
}

export default new BasketService();
